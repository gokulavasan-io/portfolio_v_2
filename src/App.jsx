import Navbar from './navbar';
import Home from './home';
import Skills from './techSkills';
import Project from './projects';
import Footer from './footer';
import About from './about';

function App() {

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">

      {/* Navbar  */}
      <Navbar />
  
      {/* Home Section */}
      <Home />

      {/* About Section */}
       <About />

      {/* Skills Section */}
      <Skills  />

      {/* Projects Section */}
      <Project  />

      {/* Footer/Contact Section */}
      <Footer />
      
    </div>
  );
}

export default App;