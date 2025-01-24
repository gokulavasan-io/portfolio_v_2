import React from 'react'
import { Si1Password, Si30Secondsofcode, Si9Gag, SiAcademia, SiAdblockplus, SiAirbus, SiCodeium, SiDjango, SiDoxygen, SiHtml5, SiJavascript,SiLibreofficemath,SiMacos,SiMysql,SiPython,SiReact, SiWolframmathematica, } from "react-icons/si";
import {  Code2Icon, SidebarClose, Star,} from 'lucide-react';

function Skills() {

    const techSkills = [
      { name: "JavaScript", rating: 5, icon: SiJavascript },
      { name: "Python", rating: 5, icon: SiPython },
      { name: "My SQL", rating: 5, icon: SiMysql },
      { name: "Django", rating: 4, icon: SiDjango },
      { name: "React", rating: 3, icon: SiReact },
      { name: "HTML & CSS", rating: 5, icon: SiHtml5 },
      { name: "Problem Solving", rating: 5, icon: Code2Icon },
      ];
    const softSkills = [
        { name: "Writing", rating: 4, },
        { name: "Listening", rating: 3, },
        { name: "Speaking", rating: 3, },
        { name: "Reading", rating: 3, },
        { name: "Social Skills", rating: 4, },
        { name: "Self Awareness and Self Management", rating: 4, },
        { name: "Adaptability and Lifelong Learning", rating: 4, },
      ];
      

  return (
    <>
      <section id="skills" className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {techSkills.map((skill) => (
              <div key={skill.name} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-6 h-6 mr-3 text-blue-500" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < skill.rating
                          ? 'text-blue-500 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="skills" className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="section-title">Communication & Life skills</h2>
          <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill) => (
              <div key={skill.name} className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < skill.rating
                          ? 'text-blue-500 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills