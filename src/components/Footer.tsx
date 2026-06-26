import React from "react";
import { GraduationCap, Heart, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo & Bio Column */}
          <div className="md:col-span-5 text-center md:text-left space-y-3">
            <a href="#home" className="flex items-center justify-center md:justify-start gap-2 group">
              <div className="p-2 bg-gradient-brand rounded-xl text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg text-gradient-brand">
                Maryam Afzal
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Dedicated and passionate Biology & Chemistry teacher focusing on building strong conceptual understanding for O/A-Levels, IGCSE & GCSE.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 dark:text-slate-400 hover:text-brand-emerald dark:hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top Column */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/_mariamafzal?igsh=cDA0Mmw5NXBwaXIy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/share/1CbeT2etDz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/maryam-afzal-maryam-afzal-6b9193341?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
            
            <a
              href="#home"
              className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors uppercase tracking-wider"
            >
              Back to top
              <ArrowUp size={10} />
            </a>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Maryam Afzal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-rose-500 fill-rose-500" /> for Academic Excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
