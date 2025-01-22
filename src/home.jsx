import React from 'react'
import {Github, Linkedin, Mail } from 'lucide-react';

function Home() {
  return (
    <section id="home" className="px-6 pt-32 pb-20">
        <div className="container flex flex-col items-center mx-auto text-center">
          <img
            src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon.png"
            alt="Profile"
            className="object-cover w-40 h-40 mb-8 rounded-full"
          />
          <h1 className="mb-4 text-5xl font-bold text-gray-800 dark:text-white">
            Gokulavasan
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/gokulavasan-io" className="social-link" target='blank'><Github /></a>
            <a href="https://www.linkedin.com/in/gokulavasan-govindan/" className="social-link" target='blank'><Linkedin /></a>
            <a href="mailto:gokulavasanoff@gmail.com" className="social-link" target='blank'><Mail /></a>
          </div>
        </div>
      </section>
  )
}

export default Home