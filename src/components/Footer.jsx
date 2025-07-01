const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img src="/logo.png" alt="Roottra Logo" className="h-16 mb-4" />
            <p className="text-gray-400 max-w-md">
              Root Tra - Transforming climate data for a sustainable future through transparent, secure, and interoperable technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div>
              <h3 className="text-green-500 font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>seth@roottra.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Root Tra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
