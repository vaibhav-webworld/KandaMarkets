"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ProblemsWeSolve() {
  const { theme } = useTheme();

  const teamMembers = [
    {
      id: 1,
      title: "Lead Creatives",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M12 2L15 8.5L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L9 8.5L12 2Z" 
                fill="currentColor" className="text-blue-400"/>
          <circle cx="12" cy="12" r="3" fill="white"/>
          <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400"/>
        </svg>
      ),
      position: "top-8 left-12",
      rotation: "-rotate-6",
    },
    {
      id: 2,
      title: "World-class Editors",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <rect x="3" y="6" width="8" height="6" rx="1" fill="currentColor" className="text-blue-400"/>
          <rect x="13" y="6" width="8" height="6" rx="1" fill="currentColor" className="text-blue-400"/>
          <rect x="3" y="14" width="8" height="6" rx="1" fill="currentColor" className="text-blue-300"/>
          <rect x="13" y="14" width="8" height="6" rx="1" fill="currentColor" className="text-blue-300"/>
        </svg>
      ),
      position: "top-8 right-12",
      rotation: "rotate-6",
    },
    {
      id: 3,
      title: "Content Writers",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <rect x="6" y="4" width="12" height="16" rx="2" fill="currentColor" className="text-blue-400"/>
          <rect x="8" y="6" width="8" height="2" rx="0.5" fill="white"/>
          <rect x="8" y="10" width="8" height="1" rx="0.5" fill="white" opacity="0.7"/>
          <rect x="8" y="12" width="6" height="1" rx="0.5" fill="white" opacity="0.7"/>
          <rect x="8" y="14" width="8" height="1" rx="0.5" fill="white" opacity="0.7"/>
          <circle cx="12" cy="17" r="1" fill="white"/>
        </svg>
      ),
      position: "top-1/2 left-8 -translate-y-1/2",
      rotation: "-rotate-3",
    },
    {
      id: 4,
      title: "Project Managers",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <circle cx="12" cy="8" r="4" fill="currentColor" className="text-blue-400"/>
          <path d="M12 14C8 14 4 16 4 20H20C20 16 16 14 12 14Z" fill="currentColor" className="text-blue-300"/>
          <circle cx="12" cy="8" r="2" fill="white"/>
        </svg>
      ),
      position: "top-1/2 right-8 -translate-y-1/2",
      rotation: "rotate-3",
    },
    {
      id: 5,
      title: "Designers",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="currentColor" className="text-blue-400"/>
          <circle cx="12" cy="12" r="4" fill="white"/>
          <path d="M12 10V14M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-blue-400"/>
        </svg>
      ),
      position: "bottom-8 left-16",
      rotation: "-rotate-6",
    },
    {
      id: 6,
      title: "Virtual Assistants",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="w-12 h-12">
          <rect x="5" y="3" width="14" height="16" rx="2" fill="currentColor" className="text-blue-400"/>
          <circle cx="12" cy="9" r="2.5" fill="white"/>
          <path d="M8 19C8 17 9.5 15 12 15C14.5 15 16 17 16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="8" y="19" width="8" height="2" rx="1" fill="currentColor" className="text-blue-300"/>
        </svg>
      ),
      position: "bottom-8 right-16",
      rotation: "rotate-6",
    },
  ];

  return (
    <section className={`relative min-h-screen w-full flex items-center justify-center py-20 px-6 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-gray-900'
    }`}>
      <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
        
        {/* Floating Cards Container */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          
          {/* Floating Team Member Cards */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`absolute ${member.position} ${member.rotation} transition-all duration-300 hover:scale-110 hover:rotate-0 cursor-pointer group`}
            >
              <div className={`relative backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-900/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600' 
                  : 'bg-gray-800/50 border-gray-600 hover:bg-gray-700/70 hover:border-gray-500'
              }`}>
                <div className="flex flex-col items-center gap-3">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {member.icon}
                  </div>
                  <p className="text-blue-300 font-medium text-sm text-center whitespace-nowrap" 
                     style={{ fontFamily: 'var(--font-family-sans)' }}>
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Center Content */}
          <div className="relative z-10 text-center max-w-2xl px-6">
            <div className="mb-6 flex items-center justify-center gap-4">
              {/* Left decorative lines */}
              <div className="flex flex-col gap-2">
                <div className="w-8 h-1 bg-yellow-400 rotate-45 origin-right"></div>
                <div className="w-12 h-1 bg-yellow-400 rotate-45 origin-right"></div>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white" 
                  style={{ fontFamily: 'var(--font-family-serif)' }}>
                Problems <span className="text-yellow-400">we solve</span>
              </h2>

              {/* Right decorative lines */}
              <div className="flex flex-col gap-2">
                <div className="w-8 h-1 bg-yellow-400 -rotate-45 origin-left"></div>
                <div className="w-12 h-1 bg-yellow-400 -rotate-45 origin-left"></div>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto" 
               style={{ fontFamily: 'var(--font-family-sans)' }}>
              Think of an in house content team, that you don't have to manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
