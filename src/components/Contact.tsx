"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    type: "idle" | "success" | "error" | "loading";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: "idle", message: "" });

    // Client-side validations
    if (!formData.name.trim()) {
      setFormStatus({ type: "error", message: "Please enter your name." });
      return;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: "error", message: "Please enter your email." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: "error", message: "Please enter a subject (e.g. A-Level Biology tutoring)." });
      return;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Please type your message." });
      return;
    }

    setFormStatus({ type: "loading", message: "Sending your request..." });

    try {
      const response = await fetch("https://formsubmit.co/ajax/mmaryamafzal490@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Free Trial Booking Request: ${formData.subject}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. Miss Maryam will get back to you shortly.",
        });
        // Reset Form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again or message via WhatsApp.",
        });
      }
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong while sending. Please try again or check your internet connection.",
      });
    }
  };

  const contactDetails = [
    {
      title: "Direct Email",
      value: "mmaryamafzal490@gmail.com",
      href: "mailto:mmaryamafzal490@gmail.com",
      icon: Mail,
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      title: "WhatsApp Chat",
      value: "+92 317 7390123",
      href: "https://wa.me/923177390123",
      icon: MessageCircle,
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      title: "Tutoring Location",
      value: "Gujranwala, Pakistan (UTC+5)",
      href: "#",
      icon: MapPin,
      color: "text-purple-500 bg-purple-500/10",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/_mariamafzal?igsh=cDA0Mmw5NXBwaXIy",
      icon: InstagramIcon,
      hoverClass: "hover:text-pink-500 hover:bg-pink-500/10",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1CbeT2etDz/",
      icon: FacebookIcon,
      hoverClass: "hover:text-blue-600 hover:bg-blue-600/10",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/maryam-afzal-maryam-afzal-6b9193341?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: LinkedinIcon,
      hoverClass: "hover:text-blue-500 hover:bg-blue-500/10",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl -z-10" />
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-emerald uppercase">
            Contact
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Start Learning Together
          </p>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Reach out directly via WhatsApp, email, or by filling out the trial booking form.
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Have questions about the syllabus, batch timings, or trial bookings? Feel free to contact me. I am responsive to WhatsApp and emails.
              </p>

              {/* Direct Contacts */}
              <div className="space-y-4">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <a
                      key={detail.title}
                      href={detail.href}
                      target={detail.href !== "#" ? "_blank" : undefined}
                      rel={detail.href !== "#" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-card-bg/60 hover:shadow-md transition-all duration-200"
                    >
                      <div className={`p-3 rounded-xl ${detail.color}`}>
                        <Icon size={20} />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {detail.title}
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          {detail.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links Footer */}
            <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800 mt-8 lg:mt-0">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Follow My Tutoring Profiles
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 transition-all duration-300 ${social.hoverClass}`}
                      aria-label={`Visit Maryam's ${social.name}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-card-bg/65 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Book a Free Trial Lesson
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ayesha"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ayesha@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Subject / Topic of Interest
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. O-Level Biology Genetics Trial Session"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  Detailed Message / Board Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your curriculum (CIE/AQA/Edexcel), target grades, or areas you struggle with..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-sm focus:border-brand-emerald outline-none transition-colors resize-none"
                />
              </div>

              {formStatus.type === "loading" && (
                <div
                  className="text-xs font-bold text-blue-500 bg-blue-500/5 p-3.5 rounded-xl border border-blue-500/10"
                  role="status"
                  aria-live="polite"
                >
                  ⏳ Sending your request... Please wait.
                </div>
              )}

              {formStatus.type === "error" && (
                <div
                  className="text-xs font-bold text-rose-500 bg-rose-500/5 p-3.5 rounded-xl border border-rose-500/10"
                  role="alert"
                  aria-live="assertive"
                >
                  ⚠️ {formStatus.message}
                </div>
              )}

              {formStatus.type === "success" && (
                <div
                  className="text-xs font-bold text-emerald-500 bg-emerald-500/5 p-3.5 rounded-xl border border-emerald-500/10"
                  role="status"
                  aria-live="polite"
                >
                  🎉 {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.type === "loading"}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-brand text-white text-sm font-bold shadow-lg hover:shadow-brand-emerald/10 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer ${
                  formStatus.type === "loading" ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <Send size={16} />
                <span>{formStatus.type === "loading" ? "Sending Request..." : "Send Booking Request"}</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
