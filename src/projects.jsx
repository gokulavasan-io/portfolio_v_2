import React from 'react'
import {  ExternalLink, } from 'lucide-react';

function Project() {

    
  const projects = [
    {
      title: "FSSA Mark Management",
      description: "A student management website that can maintain student marks in FSSA.",
      link: "https://fssamanagement.netlify.app/"
    },
    {
      title: "Voice Calculator",
      description: "Calculate quickly and accurately using voice commands with this smart voice calculator.",
      link: "https://gokulavasan-io.github.io/Voice_calculator/"
    },
    {
      title: "Text to Voice Convertor",
      description: "Convert text into natural voice audio in real-time with a simple and intuitive tool.",
      link: "https://gokulavasan-io.github.io/Text-to-voice_converter/"
    }
  ];


  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-6 mx-auto">
      <h2 className="section-title">Projects</h2>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-700">
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline" target='blank'
              >
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Project