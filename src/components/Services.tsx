"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, FileText, Zap, Compass, Check } from "lucide-react";

const services = [
  {
    title: "1-on-1 Personalized Tutoring",
    icon: UserCheck,
    description: "Fully customized lessons designed around the student's learning speed and style. Focuses on clearing specific doubts, strengthening concepts, and building self-confidence.",
    bullets: [
      "Flexible pacing for better understanding",
      "Interactive Q&A sessions during lessons",
      "Personalized feedback and homework checks",
    ],
    color: "emerald",
  },
  {
    title: "Intensive Exam Preparation",
    icon: Compass,
    description: "Targeted coaching for O-Level, A-Level, IGCSE, and GCSE boards (CIE, Edexcel, AQA). Deep-dives into past paper methodologies and examiners' marking schemes.",
    bullets: [
      "Rigorous past papers practice (last 10 years)",
      "Time management techniques during exams",
      "Understanding marking schemes criteria",
    ],
    color: "blue",
  },
  {
    title: "Conceptual Bootcamps",
    icon: Zap,
    description: "Short, highly focused crash courses on complex and challenging chapters like Organic Chemistry mechanisms, Cellular Respiration, Genetics, and Physical Chemistry.",
    bullets: [
      "Mastery of difficult concepts in weeks",
      "Tailored visual materials and slides",
      "Intensive practice on high-weightage topics",
    ],
    color: "purple",
  },
  {
    title: "Homework & Assignment Support",
    icon: FileText,
    description: "Weekly guidance to assist students with their regular school homework, lab report preparation, exam review booklets, and curriculum projects.",
    bullets: [
      "Step-by-step guidance on scientific theory",
      "Support with complex biological diagrams",
      "Guidance in chemistry calculations & formulas",
    ],
    color: "rose",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card-bg/30 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-emerald uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tailored Tutoring Services Offered
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Set dynamic color variations
            let borderStyle = "hover:border-emerald-500/30";
            let iconStyle = "text-emerald-500 bg-emerald-500/10";
            let checkStyle = "text-emerald-500";
            
            if (service.color === "blue") {
              borderStyle = "hover:border-blue-500/30";
              iconStyle = "text-blue-500 bg-blue-500/10";
              checkStyle = "text-blue-500";
            } else if (service.color === "purple") {
              borderStyle = "hover:border-purple-500/30";
              iconStyle = "text-purple-500 bg-purple-500/10";
              checkStyle = "text-purple-500";
            } else if (service.color === "rose") {
              borderStyle = "hover:border-rose-500/30";
              iconStyle = "text-rose-500 bg-rose-500/10";
              checkStyle = "text-rose-500";
            }

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-card-bg/60 backdrop-blur-sm flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 ${borderStyle}`}
              >
                <div>
                  <div className={`p-3 rounded-2xl w-fit mb-6 ${iconStyle}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5">
                      <span className={`p-0.5 rounded-full ${checkStyle} bg-slate-100 dark:bg-slate-800`}>
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Teaching Note Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            💡 Taught lessons across the USA, UK, Canada, Australia, Middle East, and Asia. 
            <a href="#contact" className="ml-1 text-brand-emerald dark:text-brand-blue font-bold hover:underline">
              Book your trial lesson today.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
