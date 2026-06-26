"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Award, Compass, ShieldCheck } from "lucide-react";

const strengths = [
  {
    title: "Clear Communication",
    description: "Simplifying complex biotechnology and organic chemistry concepts into bite-sized, digestible lessons.",
    icon: Compass,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    title: "Patience & Empathy",
    description: "Creating a safe space where students can ask questions repeatedly and learn comfortably at their own pace.",
    icon: Heart,
    color: "text-red-500 bg-red-500/10",
  },
  {
    title: "Bespoke Lesson Planning",
    description: "Structuring lectures specifically tailored to the CIE, Edexcel, and AQA exam syllabus requirements.",
    icon: ShieldCheck,
    color: "text-blue-500 bg-blue-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-card-bg/30 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-emerald uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Empowering the Next Generation of Scientists
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography & Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              My Teaching Philosophy & Goals
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              I believe that science shouldn&apos;t just be about memorizing chemical equations or anatomical terms—it&apos;s about understanding how life works. My tutoring approach revolves around building **strong core concepts** and helping students connect classroom curriculum to real-life applications.
            </p>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              Whether studying the intricate molecular pathways of Biotechnology, cellular Biology, or chemical kinetics, I encourage students to ask &quot;why&quot; and think critically. My goal is to foster independent problem-solving skills so that students enter their exams with absolute confidence.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 border border-slate-100 dark:border-slate-800">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-gradient-brand text-white h-fit">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Academic Mission
                  </h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    To deliver premium academic guidance, helping O/A-Level and IGCSE students worldwide move from memorization to genuine understanding, resulting in excellent board grades.
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="space-y-4 pt-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                Key Teaching Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {strengths.map((strength) => {
                  const Icon = strength.icon;
                  return (
                    <div
                      key={strength.title}
                      className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-card-bg/60"
                    >
                      <div className={`p-2 rounded-lg w-fit mb-3 ${strength.color}`}>
                        <Icon size={18} />
                      </div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                        {strength.title}
                      </h5>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {strength.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Educational Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Education Timeline
            </h3>

            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 ml-3 space-y-8">
              
              {/* Timeline Item 1 */}
              <div className="relative">
                {/* Marker */}
                <div className="absolute -left-[31px] top-1 bg-gradient-brand p-1.5 rounded-full text-white border-4 border-background shadow-md">
                  <GraduationCap size={14} />
                </div>
                <div>
                  <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-bold bg-brand-emerald/10 text-brand-emerald mb-2">
                    2022 - 2026
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    BS in Biotechnology
                  </h4>
                  <p className="text-sm font-semibold text-brand-blue">
                    University of Veterinary and Animal Sciences (UVAS)
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Focused on genetic engineering, biochemistry, cellular biology, and microbiology. Acquired strong laboratory knowledge and research methodologies that I integrate into my chemistry and biology coaching.
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                {/* Marker */}
                <div className="absolute -left-[31px] top-1 bg-slate-200 dark:bg-slate-800 p-1.5 rounded-full text-slate-600 dark:text-slate-400 border-4 border-background shadow-sm">
                  <GraduationCap size={14} />
                </div>
                <div>
                  <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-2">
                    Pre-University
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Intermediate in Pre-Medical
                  </h4>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Science College
                  </p>
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    Rigorous education in advanced biology, chemistry, and physics, laying the solid conceptual foundation for my higher academic pursuits.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
