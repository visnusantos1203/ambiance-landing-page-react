import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Components
import NavLink from './components/Nav/NavLink';
import HeroBanner from './components/Hero/HeroBanner';
import AboutUs from './components/AboutUs/AboutUs';
import WhatWeDo from './components/WhatWeDo/WhatWeDo';
import Projects from './components/Projects/Projects';
import Testimonial from './components/Testimonials/Testimonial';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <div className="App">
      <NavLink 
        links={["ABOUT US", "WHAT WE DO", "PROJECTS", "CAREERS"]}
        callToAction={"CONTACT US"}
      />
      <HeroBanner />
      <AboutUs />
      <WhatWeDo />
      <Projects />
      <Testimonial />
      <Careers />
    </div>
  );
}

export default App;
