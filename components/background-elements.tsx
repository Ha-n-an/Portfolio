"use client"

import { useEffect } from "react"

export default function BackgroundElements() {
  useEffect(() => {
    // Create sparkles
    const createSparkles = () => {
      const sparklesContainer = document.getElementById("sparkles-container")
      if (!sparklesContainer) return

      for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement("div")
        sparkle.className = "sparkle"
        sparkle.style.left = Math.random() * 100 + "%"
        sparkle.style.top = Math.random() * 100 + "%"
        sparkle.style.animationDelay = Math.random() * 5 + "s"
        sparklesContainer.appendChild(sparkle)
      }
    }

    // Create glitter
    const createGlitter = () => {
      const glitterContainer = document.getElementById("glitter-container")
      if (!glitterContainer) return

      for (let i = 0; i < 30; i++) {
        const glitter = document.createElement("div")
        glitter.className = "glitter"
        glitter.style.left = Math.random() * 100 + "%"
        glitter.style.top = Math.random() * 100 + "%"
        glitter.style.animationDelay = Math.random() * 6 + "s"
        glitterContainer.appendChild(glitter)
      }
    }

    createSparkles()
    createGlitter()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div id="sparkles-container"></div>

      {/* Decorative flowers */}
      <div className="flower flower-1">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z" fill="#DA70D6" />
        </svg>
      </div>
      <div className="flower flower-2">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z" fill="#FF69B4" />
        </svg>
      </div>
      <div className="flower flower-3">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z" fill="#9370DB" />
        </svg>
      </div>
      <div className="flower flower-4">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z" fill="#FF007F" />
        </svg>
      </div>

      {/* Butterflies */}
      <div className="butterfly butterfly-1">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 30C60 10 80 5 95 15C80 25 60 30 50 50C40 30 20 25 5 15C20 5 40 10 50 30Z"
            fill="#DA70D6"
            fillOpacity="0.5"
          />
          <path
            d="M50 70C60 90 80 95 95 85C80 75 60 70 50 50C40 70 20 75 5 85C20 95 40 90 50 70Z"
            fill="#DA70D6"
            fillOpacity="0.5"
          />
          <rect x="48" y="30" width="4" height="40" fill="#DA70D6" />
        </svg>
      </div>
      <div className="butterfly butterfly-2">
        <svg width="25" height="25" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 30C60 10 80 5 95 15C80 25 60 30 50 50C40 30 20 25 5 15C20 5 40 10 50 30Z"
            fill="#FF69B4"
            fillOpacity="0.5"
          />
          <path
            d="M50 70C60 90 80 95 95 85C80 75 60 70 50 50C40 70 20 75 5 85C20 95 40 90 50 70Z"
            fill="#FF69B4"
            fillOpacity="0.5"
          />
          <rect x="48" y="30" width="4" height="40" fill="#FF69B4" />
        </svg>
      </div>
      <div className="butterfly butterfly-3">
        <svg width="35" height="35" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 30C60 10 80 5 95 15C80 25 60 30 50 50C40 30 20 25 5 15C20 5 40 10 50 30Z"
            fill="#9370DB"
            fillOpacity="0.5"
          />
          <path
            d="M50 70C60 90 80 95 95 85C80 75 60 70 50 50C40 70 20 75 5 85C20 95 40 90 50 70Z"
            fill="#9370DB"
            fillOpacity="0.5"
          />
          <rect x="48" y="30" width="4" height="40" fill="#9370DB" />
        </svg>
      </div>
      <div className="butterfly butterfly-4">
        <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 30C60 10 80 5 95 15C80 25 60 30 50 50C40 30 20 25 5 15C20 5 40 10 50 30Z"
            fill="#FF007F"
            fillOpacity="0.5"
          />
          <path
            d="M50 70C60 90 80 95 95 85C80 75 60 70 50 50C40 70 20 75 5 85C20 95 40 90 50 70Z"
            fill="#FF007F"
            fillOpacity="0.5"
          />
          <rect x="48" y="30" width="4" height="40" fill="#FF007F" />
        </svg>
      </div>

      <div id="glitter-container"></div>
    </div>
  )
}
