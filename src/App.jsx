import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Targets from './components/Targets.jsx';   // NEW
import Vision from './components/Vision.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import LandscapeSection from './components/LandscapeSection.jsx';
import Team from './components/Team.jsx';
import OurStory from './components/OurStory.jsx';
import OurWork from './components/OurWork.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Mission />
      <Targets />      {/* NEW SECTION */}
      <Vision />
      <WhatWeDo />
      <LandscapeSection />
      <Team />
      <OurStory />
      <OurWork />
      <Footer />
    </div>
  );
}

export default App;
