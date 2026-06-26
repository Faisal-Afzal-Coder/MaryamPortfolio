"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const reviewImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/reviews/review-${i + 1}.jpeg`,
  alt: `Student Review Screenshot ${i + 1}`,
}));

export default function SuccessGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedId === null) return;
    setSelectedId(selectedId === reviewImages.length ? 1 : selectedId + 1);
  }, [selectedId]);

  const handlePrev = useCallback(() => {
    if (selectedId === null) return;
    setSelectedId(selectedId === 1 ? reviewImages.length : selectedId - 1);
  }, [selectedId]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedId === null) return;
      if (e.key === "Escape") setSelectedId(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, selectedId]);

  const selectedImage = selectedId !== null ? reviewImages.find((img) => img.id === selectedId) : null;

  return (
    <section id="results" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-blue uppercase">
            Success Gallery
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Student Achievements & Reviews
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Real feedback, board exam results, and messages shared by my students on WhatsApp. Click any image to view it full screen.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {reviewImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (img.id % 4) * 0.05 }}
              onClick={() => setSelectedId(img.id)}
              className="break-inside-avoid mb-6 relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-card-bg/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1200}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-90 group-hover:scale-100 transition-all duration-300 shadow-md">
                  <ZoomIn size={22} className="stroke-[2.5]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedId(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer z-50"
              aria-label="Close dialog"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer z-50"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer z-50"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="max-w-[90vw] max-h-[80vh]"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={1600}
                  className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </motion.div>
              
              {/* Counter / Label */}
              <div className="mt-4 text-sm font-semibold text-slate-400 select-none">
                Image {selectedId} of {reviewImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
