"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Award, Laptop, Brain } from "lucide-react";

const skillCategories = [
  {
    id: "curriculum",
    title: "Exam Boards & Curriculums",
    icon: Award,
    skills: [
      { name: "CIE O-Level / A-Level", level: 98 },
      { name: "Edexcel IGCSE / GCSE", level: 96 },
      { name: "AQA GCSE / A-Level", level: 95 },
      { name: "International Baccalaureate (IB)", level: 90 },
      { name: "Advanced Placement (AP)", level: 92 },
      { name: "National Curriculum (Pakistani Boards)", level: 98 },
    ],
  },
  {
    id: "subjects",
    title: "Subject Expertise",
    icon: Brain,
    skills: [
      { name: "Cell Biology & Genetics", level: 99 },
      { name: "Human Anatomy & Physiology", level: 97 },
      { name: "Organic Chemistry", level: 95 },
      { name: "Physical & Inorganic Chemistry", level: 96 },
      { name: "Biotechnology & Biochemistry", level: 98 },
      { name: "Chemical Kinetics & Thermodynamics", level: 94 },
    ],
  },
  {
    id: "tools",
    title: "Tutoring Tools & Methods",
    icon: Laptop,
    skills: [
      { name: "Interactive Whiteboards (Miro/Conceptboard)", level: 98 },
      { name: "Digital Pen Tablets (Wacom/OneNote)", level: 96 },
      { name: "Zoom & Microsoft Teams Education", level: 95 },
      { name: "Animated Science Models & Simulations", level: 92 },
      { name: "Interactive Quizzes (Kahoot/Quizziz)", level: 90 },
      { name: "Bespoke Lecture Note Generation", level: 97 },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("curriculum");

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-brand-emerald/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-brand-blue uppercase">
            Expertise
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Knowledge & Core Competencies
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-brand mx-auto rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-lg shadow-emerald-500/10 scale-105"
                    : "border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                }`}
              >
                <Icon size={18} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {skillCategories.map((category) => {
              if (category.id !== activeTab) return null;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-card-bg/70 backdrop-blur-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-brand-emerald shrink-0" />
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                          className="h-full bg-gradient-brand rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Global Board Badges */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 bg-card-bg/25">
          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-4">
            Specialized in International Curriculum Standards
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["CIE", "Edexcel", "AQA", "O-Level", "A-Level", "IGCSE", "GCSE"].map((board) => (
              <span
                key={board}
                className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
              >
                {board}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
