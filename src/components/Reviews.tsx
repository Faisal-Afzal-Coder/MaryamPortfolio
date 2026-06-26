"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, User, BookOpen, ThumbsUp } from "lucide-react";

interface Review {
  id: string;
  name: string;
  subjectClass: string;
  rating: number;
  comment: string;
  date: string;
  isCustom?: boolean;
}

const initialReviews: Review[] = [];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(() => {
    if (typeof window === "undefined") return initialReviews;

    const savedReviews = window.localStorage.getItem("maryam_tutor_reviews");
    if (!savedReviews) return initialReviews;

    try {
      const parsed = JSON.parse(savedReviews);
      return Array.isArray(parsed) ? parsed : initialReviews;
    } catch {
      return initialReviews;
    }
  });
  const [name, setName] = useState("");
  const [subjectClass, setSubjectClass] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!subjectClass.trim()) {
      setErrorMsg("Please enter your Subject and Class (e.g. O-Level Biology).");
      return;
    }
    if (!comment.trim()) {
      setErrorMsg("Please write a review comment.");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      subjectClass: subjectClass.trim(),
      rating,
      comment: comment.trim(),
      date: new Date().toISOString().split("T")[0],
      isCustom: true,
    };

    const updatedCustomReviews = [
      newReview,
      ...reviews.filter((r) => r.isCustom),
    ];
    
    // Save to localStorage (only custom ones)
    localStorage.setItem("maryam_tutor_reviews", JSON.stringify(updatedCustomReviews));
    
    // Update local state
    setReviews([newReview, ...reviews]);

    // Reset Form
    setName("");
    setSubjectClass("");
    setRating(5);
    setComment("");
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-card-bg/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-emerald uppercase">
            Reviews
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Student & Parent Reviews
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Submit your feedback and rate your learning experience.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reviews List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ThumbsUp className="text-brand-emerald" size={20} />
              Recent Student Testimonials ({reviews.length})
            </h3>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              <AnimatePresence initial={false}>
                {reviews.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-8 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400"
                  >
                    No custom reviews submitted yet. Be the first to share your learning experience using the form!
                  </motion.div>
                ) : (
                  reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-card-bg/60 backdrop-blur-sm shadow-sm"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-slate-950 dark:text-slate-50 text-sm sm:text-base">
                            {review.name}
                          </h4>
                          <p className="text-xs font-semibold text-brand-blue flex items-center gap-1.5 mt-0.5">
                            <BookOpen size={12} />
                            {review.subjectClass}
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={
                                i < review.rating
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-slate-300 dark:text-slate-700"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                        &quot;{review.comment}&quot;
                      </p>
                      
                      <div className="text-[10px] text-slate-400 text-right mt-3 font-semibold">
                        Submitted on {review.date}
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Write a Review Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-card-bg/90 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Leave a Review
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Your feedback helps me improve teaching methods and inspires other students.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Sara Khan"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject & Class Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Subject & Class
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={subjectClass}
                    onChange={(e) => setSubjectClass(e.target.value)}
                    placeholder="e.g., O-Level Biology (CIE)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Star Rating Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                  Your Rating
                </label>
                <div className="flex items-center gap-2 py-1">
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setRating(ratingValue)}
                        onMouseEnter={() => setHoverRating(ratingValue)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="cursor-pointer transition-transform hover:scale-110 outline-none"
                      >
                        <Star
                          size={24}
                          className={
                            ratingValue <= (hoverRating || rating)
                              ? "text-amber-500 fill-amber-500"
                              : "text-slate-300 dark:text-slate-700"
                          }
                        />
                      </button>
                    );
                  })}
                  <span className="text-xs font-semibold text-slate-400 ml-2">
                    ({rating} / 5 Stars)
                  </span>
                </div>
              </div>

              {/* Comment Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Your Review
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  placeholder="Share details of your experience with Miss Maryam..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors resize-none"
                />
              </div>

              {/* Status messages */}
              {errorMsg && (
                <div className="text-xs font-bold text-rose-500 bg-rose-500/5 p-3 rounded-xl border border-rose-500/10">
                  ⚠️ {errorMsg}
                </div>
              )}

              {formSubmitted && (
                <div className="text-xs font-bold text-emerald-500 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                  🎉 Review submitted successfully! Thank you.
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-brand text-white text-sm font-bold shadow-md hover:shadow-brand-emerald/10 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Review</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
