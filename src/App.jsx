import React from 'react';
import NavBar from './Components/NavBar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <div className='overflow-x-hidden -z-10 h-full w-full antialiased text-neutral-300'>
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <NavBar></NavBar>
          <HeroSection />
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default App;