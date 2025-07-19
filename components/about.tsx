// import Image from "next/image"; 
// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-deepPurple/30 relative">
//       <div className="container mx-auto px-4 md:px-8 relative z-10">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display section-title">About Me</h2>
//           <p className="text-stardust max-w-2xl mx-auto mt-8">
//             A passionate web developer with an eye for design and a heart for creating beautiful digital experiences.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <div className="md:w-2/5">
//             <div className="relative">
//               <div className="card p-4 border border-orchid/20">
//                 <div className="h-80 bg-royalPurple/30 rounded-lg overflow-hidden relative">
//                   <svg className="w-full h-full" viewBox="0 0 400 400">
//                     <rect width="400" height="400" fill="#2D1B4E" />
//                     <circle cx="200" cy="200" r="150" fill="#3D2C62" opacity="0.5" />
//                     <circle cx="200" cy="200" r="120" fill="#1A0B2E" opacity="0.7" />

//                     {/* Decorative flowers */}
//                     <g transform="translate(80, 80) scale(0.5)">
//                       <path
//                         d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z"
//                         fill="#DA70D6"
//                         opacity="0.7"
//                       />
//                     </g>
//                     <g transform="translate(280, 100) scale(0.4)">
//                       <path
//                         d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z"
//                         fill="#FF69B4"
//                         opacity="0.7"
//                       />
//                     </g>
//                     <g transform="translate(100, 280) scale(0.6)">
//                       <path
//                         d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z"
//                         fill="#9370DB"
//                         opacity="0.7"
//                       />
//                     </g>
//                     <g transform="translate(300, 250) scale(0.3)">
//                       <path
//                         d="M50 10C55 25 75 30 90 35C75 40 55 45 50 60C45 45 25 40 10 35C25 30 45 25 50 10Z"
//                         fill="#FF007F"
//                         opacity="0.7"
//                       />
//                     </g>

//                     {/* Girl silhouette */}
//                     <path
//                       d="M170,140 Q200,120 230,140 Q240,180 230,220 Q200,240 170,220 Q160,180 170,140"
//                       fill="#3D2C62"
//                       stroke="#DA70D6"
//                       strokeWidth="1"
//                     />
//                     <circle cx="200" cy="150" r="25" fill="#3D2C62" stroke="#DA70D6" strokeWidth="1" />
//                     <path d="M175,130 Q200,100 225,130" stroke="#DA70D6" strokeWidth="3" fill="none" />
//                     <circle cx="190" cy="145" r="3" fill="#FF69B4" />
//                     <circle cx="210" cy="145" r="3" fill="#FF69B4" />
//                     <path d="M190,160 Q200,165 210,160" stroke="#FF69B4" strokeWidth="1" fill="none" />

//                     {/* Laptop */}
//                     <rect
//                       x="170"
//                       y="190"
//                       width="60"
//                       height="40"
//                       rx="3"
//                       fill="#1A0B2E"
//                       stroke="#DA70D6"
//                       strokeWidth="1"
//                     />
//                     <rect
//                       x="165"
//                       y="230"
//                       width="70"
//                       height="5"
//                       rx="2"
//                       fill="#3D2C62"
//                       stroke="#DA70D6"
//                       strokeWidth="1"
//                     />
//                     <line x1="180" y1="200" x2="220" y2="200" stroke="#FF69B4" strokeWidth="1" />
//                     <line x1="180" y1="210" x2="210" y2="210" stroke="#9370DB" strokeWidth="1" />
//                     <line x1="180" y1="220" x2="215" y2="220" stroke="#FF007F" strokeWidth="1" />

//                     {/* Sparkles */}
//                     <circle cx="160" cy="170" r="2" fill="white" opacity="0.8" />
//                     <circle cx="240" cy="170" r="2" fill="white" opacity="0.8" />
//                     <circle cx="200" cy="120" r="2" fill="white" opacity="0.8" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="md:w-3/5">
//             <h3 className="text-2xl font-bold mb-4 gradient-text font-display">Frontend Web Developer</h3>
//             <p className="text-stardust mb-6">
//               Hi, I'm Hanan Saeed. I'm a frontend web developer dedicated to turning ideas into creative solutions. I
//               specialize in creating seamless and intuitive user experiences.
//             </p>
//             <p className="text-stardust mb-8">
//               My approach focuses on creating scalable, high-performing solutions tailored to both user needs and
//               business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver
//               experiences that not only engage users but also drive tangible results.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="card p-4 border border-orchid/20">
//                 <h4 className="text-lg font-semibold mb-2 text-orchid">Education</h4>
//                 <p className="text-starlight">BS Computer Science</p>
//                 <p className="text-stardust">GIFT University</p>
//               </div>
//               <div className="card p-4 border border-orchid/20">
//                 <h4 className="text-lg font-semibold mb-2 text-orchid">Experience</h4>
//                 <p className="text-starlight">1+ Years</p>
//                 <p className="text-stardust">Web Development</p>
//               </div>
//               <div className="card p-4 border border-orchid/20">
//                 <h4 className="text-lg font-semibold mb-2 text-orchid">Location</h4>
//                 <p className="text-starlight">Gujranwala, Pakistan</p>
//                 <p className="text-stardust text-lg font-medium mt-4">
//                   Available <span className="text-pink-400 font-semibold">Remotely</span> or <span className="text-pink-400 font-semibold">Willing to Relocate</span>
//               </p>
//               </div>
//               <div className="card p-4 border border-orchid/20">
//                 <h4 className="text-lg font-semibold mb-2 text-orchid">Interests</h4>
//                 <p className="text-starlight">UI/UX Design, Responsive Web Development</p>
//                 <p className="text-stardust">Creative Coding, Animation, Photography, Travel</p>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative wave */}
//       <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
//         <path
//           fill="#1A0B2E"
//           fillOpacity="1"
//           d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         />
//       </svg>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { aboutContainer, aboutContent } from '@/lib/animations'

export default function About() {
  return (
    <section className="py-20 sm:py-32" id="about">
      <motion.div
        className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2"
        variants={aboutContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Replaced SVG with your image */}
        <div className="h-80 bg-royalPurple/30 rounded-lg overflow-hidden relative">
          <img
            src="/hanan.jpg"
            alt="Hanan Saeed"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <motion.div className="space-y-6" variants={aboutContent}>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="bg-gradient-to-r from-royalPurple to-lightPurple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted">
            I'm a dedicated and creative web developer passionate about designing
            beautiful and user-friendly digital experiences. With a strong
            foundation in front-end technologies, I aim to build responsive and
            accessible websites that bring ideas to life.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Beyond coding, I enjoy learning new tools, exploring UI/UX trends, and
            continuously improving my skills. Let's build something amazing
            together!
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

