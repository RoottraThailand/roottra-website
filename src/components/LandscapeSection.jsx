const LandscapeSection = () => {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <img 
        src="/MVP.png"  // make sure this file is in your public/ folder
        alt="RootTra Landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* optional dark overlay */}
    </section>
  );
};

export default LandscapeSection;
