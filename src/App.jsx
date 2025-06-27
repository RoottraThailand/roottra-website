import Hero from './components/Hero.jsx';
import Mission from './components/Mission.jsx';
import Vision from './components/Vision.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Team from './components/Team.jsx';
import MVPShowcase from './components/MVPShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Mission />
      <Vision />
      <WhatWeDo />
      <Team />
      <MVPShowcase />
      <Footer />
    </div>
  );
}

export default App;
