// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Github, Linkedin } from "lucide-react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Here you would typically send the form data to your backend
//     console.log("Form submitted:", formData)
//     setShowSuccess(true)
//     setTimeout(() => setShowSuccess(false), 5000)
//     setFormData({ name: "", email: "", subject: "", message: "" })
//   }

//   return (
//     <section id="contact" className="py-20 bg-midnight relative">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display section-title">Get In Touch</h2>
//           <p className="text-stardust max-w-2xl mx-auto mt-8">
//             Ready to bring your ideas to life? Let's create something beautiful together. I'd love to hear about your
//             project!
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div>
//             <h3 className="text-2xl font-bold mb-6 gradient-text font-display">Let's Connect</h3>
//             <p className="text-stardust mb-8">
//               I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
//               question, a project idea, or just want to say hello, feel free to reach out!
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-orchid/20 rounded-full flex items-center justify-center">
//                   <svg
//                     className="w-6 h-6 text-orchid contact-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-starlight">Email</h4>
//                   <p className="text-stardust">hanansaeed933@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-orchid/20 rounded-full flex items-center justify-center">
//                   <svg
//                     className="w-6 h-6 text-orchid contact-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-starlight">Phone</h4>
//                   <p className="text-stardust">+92 312-2948713</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-orchid/20 rounded-full flex items-center justify-center">
//                   <svg
//                     className="w-6 h-6 text-orchid contact-icon"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-starlight">Location</h4>
//                   <p className="text-stardust">Gujranwala, Pakistan</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8">
//               <h4 className="text-lg font-semibold mb-4 text-starlight">Follow Me</h4>
//               <div className="flex space-x-4">
//                 <a
//       href="https://github.com/Ha-n-an"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
//     >
//       <Github className="w-6 h-6 text-white" />
//     </a>
//     <a
//       href="https://www.linkedin.com/in/hanan-saeed-76013a247"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-12 h-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
//     >
//       <Linkedin className="w-6 h-6 text-white" />
//     </a>
               
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="card p-8 border border-orchid/20">
//             <h3 className="text-2xl font-bold mb-6 gradient-text font-display">Send Message</h3>

//             {showSuccess && (
//               <div className="success-message" style={{ display: "block" }}>
//                 <p>Thank you for your message! I'll get back to you soon. 💜</p>
//               </div>
//             )}

//            <form
//   action="https://formspree.io/f/mzzvzleg"
//   method="POST"
//   className="space-y-6"
// >
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     <div>
//       <label htmlFor="name" className="block text-sm font-medium text-starlight mb-2">
//         Your Name
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         required
//         className="form-input w-full px-4 py-3 rounded-lg"
//         placeholder="Enter your name"
//       />
//     </div>
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-starlight mb-2">
//         Your Email
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         required
//         className="form-input w-full px-4 py-3 rounded-lg"
//         placeholder="Enter your email"
//       />
//     </div>
//   </div>

//   <div>
//     <label htmlFor="subject" className="block text-sm font-medium text-starlight mb-2">
//       Subject
//     </label>
//     <input
//       type="text"
//       id="subject"
//       name="subject"
//       required
//       className="form-input w-full px-4 py-3 rounded-lg"
//       placeholder="Enter subject"
//     />
//   </div>

//   <div>
//     <label htmlFor="message" className="block text-sm font-medium text-starlight mb-2">
//       Message
//     </label>
//     <textarea
//       id="message"
//       name="message"
//       required
//       rows={5}
//       className="form-input w-full px-4 py-3 rounded-lg resize-none"
//       placeholder="Enter your message"
//         />
//         </div>

//             <button type="submit" className="btn-gradient w-full px-6 py-3 rounded-lg font-medium">
//           Send Message ✨
//           </button>
//         </form>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <div className="mt-20 pt-8 border-t border-orchid/20 text-center">
//         <p className="text-stardust">
//           © 2025 All rights reserved by <span className="gradient-text font-semibold">Hanan Saeed</span>
//         </p>
//       </div>
//     </section>
//   )
// }
import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/mzzvzleg", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <CardContent className="p-8">
      <h3 className="text-3xl font-bold text-white mb-10 text-center">Contact Me</h3>
      <div className="grid md:grid-cols-2 gap-12 text-white">
        {/* LEFT SIDE INFO */}
        <div>
          <h4 className="text-2xl font-semibold mb-4">Get In Touch</h4>
          <p className="mb-4 text-gray-300">
            Ready to bring your ideas to life? Let's create something beautiful together. I'd love to hear about your project!
          </p>
          <p className="mb-6 text-gray-300">
            I'm always excited to work on new projects and collaborate with amazing people. Whether you have a question,
            a project idea, or just want to say hello, feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span>hanansaeed933@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} /> <span>+92 312-2948713</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} /> <span>Gujranwala, Pakistan</span>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-6 flex gap-4">
            <a href="https://linkedin.com/in/YOUR-LINK" target="_blank" rel="noopener noreferrer">
              <Linkedin className="hover:text-purple-500 transition" />
            </a>
            <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer">
              <Github className="hover:text-purple-500 transition" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          {submitted ? (
            <div className="text-green-400 text-lg font-semibold">
              ✅ Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform"
              >
                Send Message ✨
              </button>
            </form>
          )}
        </div>
      </div>
    </CardContent>
  );
}
