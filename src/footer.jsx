import React from 'react'
import {  Github, Linkedin, Mail,} from 'lucide-react';


function Footer() {
  return (
    <footer id="contact" className="py-5 bg-gray-900 dark:bg-gray-950">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-white">Get In Touch</h2>
          <div className="flex justify-center mb-8 space-x-6">
            <a href="mailto:gokulavasanoff@gmail.com" className="footer-link" target='blank'>
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a href="https://github.com/gokulavasan-io" className="footer-link" target='blank'>
              <Github className="w-6 h-6 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gokulavasan-govindan/" className="footer-link" target='blank'>
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
          </div>
          <p className="text-gray-400">© 2024. All rights reserved.</p>
        </div>
      </footer>
  )
}

export default Footer