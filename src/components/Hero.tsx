"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, Globe2, BookOpen, GraduationCap } from "lucide-react";

const countries = [
  { name: "United States", code: "USA" },
  { name: "United Kingdom", code: "UK" },
  { name: "Canada", code: "CAN" },
  { name: "Australia", code: "AUS" },
  { name: "Saudi Arabia", code: "KSA" },
  { name: "Dubai, UAE", code: "UAE" },
  { name: "Ireland", code: "IRL" },
  { name: "New Zealand", code: "NZL" },
  { name: "Malaysia", code: "MYS" },
];

const stats = [
  { value: "100+", label: "Students Guided", icon: GraduationCap, color: "text-brand-emerald bg-emerald-500/10" },
  { value: "95%", label: "A/A* Success Rate", icon: Star, color: "text-amber-500 bg-amber-500/10" },
  { value: "3+", label: "Years Experience", icon: BookOpen, color: "text-brand-blue bg-blue-500/10" },
  { value: "9+", label: "Countries Reached", icon: Globe2, color: "text-purple-500 bg-purple-500/10" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50/50 via-slate-100/30 to-background dark:from-slate-950/20 dark:via-slate-900/10"
    >
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-emerald/10 dark:bg-brand-emerald/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-blue/15 dark:bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 text-brand-emerald text-sm font-semibold">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Online Tutoring Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Master <span className="text-brand-emerald">Biology</span> &{" "}
              <span className="text-brand-blue">Chemistry</span> Concurrently
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-medium">
              Hi, I am <span className="font-bold text-slate-900 dark:text-white">Maryam Afzal</span>, 
              a BS Biotechnology graduate. I provide specialized online coaching for **O-Level, A-Level, IGCSE, and GCSE** students globally, prioritizing conceptual clarity over memorization.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 rounded-2xl bg-gradient-brand text-white font-bold shadow-lg hover:shadow-brand-emerald/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/923177390123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full sm:w-auto justify-center px-8 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-all duration-200"
              >
                <MessageCircle className="text-emerald-500" size={20} />
                Contact on WhatsApp
              </a>
            </div>

            {/* Stats Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-card-bg/50 backdrop-blur-sm shadow-sm"
                  >
                    <div className={`p-2.5 rounded-xl w-fit mb-3 mx-auto lg:mx-0 ${stat.color}`}>
                      <Icon size={20} />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual Column (Interactive Map / Floating Cards) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-center items-center relative"
          >
            {/* Visual Center Globe/Atom */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-slate-200 dark:border-slate-800/80 flex items-center justify-center bg-card-bg/30 backdrop-blur-md shadow-inner">
              
              {/* Inner animated element (Atom or Biotech Orbits) */}
              <div className="absolute w-56 h-56 rounded-full border border-dashed border-brand-emerald/40 animate-[spin_30s_linear_infinite]" />
              <div className="absolute w-44 h-44 rounded-full border border-dashed border-brand-blue/40 animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Profile Image Space */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-brand p-1 shadow-2xl relative z-10 overflow-hidden group">
                <Image
                  src="/hero-portrait.svg"
                  alt="Maryam Afzal teaching biology and chemistry online"
                  width={160}
                  height={160}
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>

              {/* Orbiting Country Badges */}
              {countries.map((country, idx) => {
                const angle = (idx * (360 / countries.length) * Math.PI) / 180;
                const radius = 130; // Radius of orbit
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={country.code}
                    className="absolute z-20 px-2.5 py-1 rounded-xl bg-card-bg/90 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-md text-[10px] font-bold cursor-pointer hover:border-brand-emerald dark:hover:border-brand-blue transition-colors duration-200"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    🌍 {country.code}
                  </motion.div>
                );
              })}
            </div>

            {/* Float Info Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 left-6 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 glass-card flex items-center gap-3 shadow-lg"
            >
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-400">Current Status</div>
                <div className="text-sm font-extrabold text-slate-800 dark:text-slate-100">
                  Accepting New Students
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
