// export default function Skills() {
//   const frontendSkills = [
//     {
//       name: "JavaScript",
//       color: "#F7DF1E",
//       icon: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
//     },
//     {
//       name: "React",
//       color: "#61DAFB",
//       icon: "M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z",
//     },
//     {
//       name: "HTML5",
//       color: "#E34F26",
//       icon: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
//     },
//     {
//       name: "CSS3",
//       color: "#1572B6",
//       icon: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z",
//     },
//     {
//       name: "Tailwind",
//       color: "#06B6D4",
//       icon: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
//     },
//     {
//       name: "TypeScript",
//       color: "#3178C6",
//       icon: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
//     },
//   ]

//   const backendSkills = [
//     {
//       name: "Node.js",
//       color: "#339933",
//       icon: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z",
//     },
//     {
//       name: "Express",
//       color: "#FFFFFF",
//       icon: "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412z",
//     },
//     {
//       name: "MongoDB",
//       color: "#47A248",
//       icon: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z",
//     },
//     {
//       name: "Firebase",
//       color: "#FFCA28",
//       icon: "M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z",
//     },
//   ]

//   return (
//     <section id="skills" className="py-20 bg-midnight relative">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display section-title">My Skills</h2>
//           <p className="text-stardust max-w-2xl mx-auto mt-8">
//             A collection of tools and technologies I use to bring digital dreams to life.
//           </p>
//         </div>

//         <div className="mb-16">
//           <h3 className="text-2xl font-bold mb-8 text-center gradient-text font-display">MY STACK</h3>

//           {/* Frontend Stack */}
//           <div className="mb-12">
//             <h4 className="text-xl font-semibold mb-6 stack-category text-orchid">FRONTEND</h4>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//               {frontendSkills.map((skill) => (
//                 <div key={skill.name} className="tech-icon">
//                   <div className="tech-icon-bg">
//                     <svg width="40" height="40" viewBox="0 0 24 24" fill={skill.color}>
//                       <path d={skill.icon} />
//                     </svg>
//                   </div>
//                   <span className="text-sm text-stardust">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Backend Stack */}
//           <div className="mb-12">
//             <h4 className="text-xl font-semibold mb-6 stack-category text-orchid">BACKEND</h4>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//               {backendSkills.map((skill) => (
//                 <div key={skill.name} className="tech-icon">
//                   <div className="tech-icon-bg">
//                     <svg width="40" height="40" viewBox="0 0 24 24" fill={skill.color}>
//                       <path d={skill.icon} />
//                     </svg>
//                   </div>
//                   <span className="text-sm text-stardust">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// File: src/components/Skills.tsx (or wherever you're using it)

export default function SkillsPage() {
  const frontendSkills = [
    {
      name: "JavaScript",
      icon: (
        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xl">JS</span>
        </div>
      ),
    },
    {
      name: "React",
      icon: (
        <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89..." />
          </svg>
        </div>
      ),
    },
    {
      name: "HTML5",
      icon: (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">5</span>
        </div>
      ),
    },
    {
      name: "CSS3",
      icon: (
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">3</span>
        </div>
      ),
    },
    {
      name: "Tailwind",
      icon: (
        <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83..." />
          </svg>
        </div>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">TS</span>
        </div>
      ),
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: (
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 1.85c-.27 0-.55.07-.78.2..." />
          </svg>
        </div>
      ),
    },
    {
      name: "Express",
      icon: (
        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">EX</span>
        </div>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M17.193 9.555c-1.264-5.58..." />
          </svg>
        </div>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M5.803 21.59l2.87-16.98..." />
          </svg>
        </div>
      ),
    },
    {
      name: "GraphQL",
      icon: (
        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-white">
            <path fill="currentColor" d="M12 2L13.09 8.26L22 9L13.09 15.74..." />
          </svg>
        </div>
      ),
    },
  ];

  const tools = [
    {
      name: "VS Code",
      icon: (
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">VS</span>
        </div>
      ),
    },
    {
      name: "Figma",
      icon: (
        <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">FG</span>
        </div>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">GH</span>
        </div>
      ),
    },
    {
      name: "Postman",
      icon: (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">PM</span>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f0f1a] text-white px-8 py-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            MY STACK
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A collection of tools and technologies I use to bring digital dreams to life.
        </p>
      </div>

      {/* Frontend */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-pink-400 uppercase tracking-wider">Frontend</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {frontendSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-purple-800/30 backdrop-blur-sm border border-purple-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Backend */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-pink-400 uppercase tracking-wider">Backend</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {backendSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-purple-800/30 backdrop-blur-sm border border-purple-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <h2 className="text-2xl font-bold text-pink-400 uppercase tracking-wider">Tools</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-purple-800/30 backdrop-blur-sm border border-purple-600/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <span className="text-gray-300 text-sm font-medium text-center">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
