"use client";

import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Dental Practice System",
      description: "An advanced dental X-ray diagnostic platform",
      image: "/dental.png", // ✅ Image stored in public/dental.png
      technologies: ["Next.js", "Tailwind CSS", "TensorFlow", "Python"],
      liveUrl: "https://dental-practice-system.vercel.app",
      githubUrl: "#",
      details:
        "A full-stack AI-powered dental X-ray diagnosis system with quadrant detection, tooth enumeration, and disease classification. Built with deep learning, the app supports real-time caries detection and deep caries tracking across patient data.",
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-deepPurple/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display section-title">
            My Projects
          </h2>
          <p className="text-stardust max-w-2xl mx-auto mt-8">
            Here's my featured AI-based project focused on dental diagnostics using panoramic X-rays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card card border border-orchid/20 overflow-hidden rounded-lg bg-purple-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 gradient-text">{project.title}</h3>
                <p className="text-stardust mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={() => openModal(project)}
                    className="btn-gradient px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    View Details
                  </button>
                  <a
                    href={project.liveUrl}
                    className="btn-outline px-4 py-2 rounded-lg text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="modal-content bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 gradient-text">{selectedProject.title}</h2>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProject.details}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech: string) => (
                <span key={tech} className="skill-pill">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={selectedProject.liveUrl}
                className="btn-gradient px-6 py-2 rounded-lg font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              {selectedProject.githubUrl !== "#" && (
                <a
                  href={selectedProject.githubUrl}
                  className="btn-outline px-6 py-2 rounded-lg font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
