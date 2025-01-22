import React from 'react'

function About() {
  const content='I am passionate about computer science and emerging technologies, with a strong drive to craft innovative solutions. As an enthusiastic and creative web designer, I specialize in developing user-centric, visually appealing, and functional websites. My focus is on creating applications that are not only aesthetically pleasing but also address real-world challenges effectively. I thrive on blending creativity and technology to deliver impactful digital experiences.'

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
    <div className="container px-6 mx-auto">
      <h2 className="section-title">About Me</h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  </section>
  )
}

export default About