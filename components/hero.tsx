"use client"

import { useEffect } from "react"

export default function Hero() {
  useEffect(() => {
    // Typing animation
    const typingElement = document.querySelector(".typing-text")
    if (typingElement) {
      typingElement.classList.add("typing-animation")
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="mb-2 inline-block">
              <span className="bg-orchid/20 text-orchid px-4 py-1 rounded-full text-sm font-medium">
                Web Developer & Designer
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              Hi, I'm <span className="gradient-text">Hanan Saeed</span> <span className="heart">💜</span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-stardust font-medium typing-text">
              Creating beautiful digital experiences.
            </h2>
            <p className="text-stardust mb-8 max-w-lg">
              I craft elegant, responsive websites that combine beauty and functionality. Let's bring your vision to
              life with a touch of magic and a sprinkle of creativity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-gradient px-6 py-3 rounded-full font-medium">
                View My Work
              </a>
              <a href="#contact" className="btn-outline px-6 py-3 rounded-full font-medium">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 floating">
              <svg className="w-full h-full" viewBox="0 0 400 400">
                {/* Background circle */}
                <circle cx="200" cy="200" r="150" fill="#2D1B4E" />

                {/* Decorative elements */}
                <circle cx="120" cy="150" r="5" fill="#DA70D6" className="glow" />
                <circle cx="280" cy="150" r="5" fill="#FF69B4" className="glow-pink" />
                <circle cx="150" cy="280" r="5" fill="#9370DB" />
                <circle cx="250" cy="280" r="5" fill="#FF007F" className="glow-rose" />

                {/* Connecting lines */}
                <line x1="120" y1="150" x2="150" y2="280" stroke="#DA70D6" strokeWidth="1" opacity="0.5" />
                <line x1="280" y1="150" x2="250" y2="280" stroke="#FF69B4" strokeWidth="1" opacity="0.5" />
                <line x1="120" y1="150" x2="280" y2="150" stroke="#9370DB" strokeWidth="1" opacity="0.5" />
                <line x1="150" y1="280" x2="250" y2="280" stroke="#FF007F" strokeWidth="1" opacity="0.5" />

                {/* Girl illustration */}
                <path
                  d="M200,100 C240,100 270,130 270,180 C270,230 240,280 200,280 C160,280 130,230 130,180 C130,130 160,100 200,100 Z"
                  fill="#3D2C62"
                />
                <ellipse cx="200" cy="180" rx="60" ry="70" fill="#FFC0CB" />
                <ellipse cx="180" cy="170" rx="8" ry="10" fill="#1A0B2E" />
                <ellipse cx="220" cy="170" rx="8" ry="10" fill="#1A0B2E" />
                <path d="M170,155 Q180,150 190,155" stroke="#3D2C62" strokeWidth="2" fill="none" />
                <path d="M210,155 Q220,150 230,155" stroke="#3D2C62" strokeWidth="2" fill="none" />
                <circle cx="175" cy="190" r="10" fill="#FF69B4" opacity="0.3" />
                <circle cx="225" cy="190" r="10" fill="#FF69B4" opacity="0.3" />
                <path d="M185,200 Q200,210 215,200" stroke="#FF007F" strokeWidth="2" fill="none" />
                <path d="M185,250 C185,270 215,270 215,250" fill="#FFC0CB" />
                <path d="M160,280 C160,260 240,260 240,280" fill="#DA70D6" />
                <path d="M160,280 L160,320 L240,320 L240,280" fill="#DA70D6" />
                <rect x="160" y="320" width="80" height="10" rx="2" fill="#3D2C62" />
                <rect x="170" y="300" width="60" height="20" rx="2" fill="#1A0B2E" />
                <rect x="175" y="305" width="50" height="10" rx="1" fill="#2D1B4E" />
                <line x1="180" y1="308" x2="200" y2="308" stroke="#DA70D6" strokeWidth="1" opacity="0.8" />
                <line x1="180" y1="312" x2="210" y2="312" stroke="#FF69B4" strokeWidth="1" opacity="0.8" />
                <circle cx="150" cy="120" r="2" fill="white" className="glow" />
                <circle cx="250" cy="120" r="2" fill="white" className="glow" />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-orchid hover:text-hotPink transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
