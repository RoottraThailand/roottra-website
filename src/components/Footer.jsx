import "../styles/sugar-cane-animation.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Sugar Cane Outline Background */}
      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between md:items-start text-left md:text-left">
          {/* Logo + Description */}
          <div className="mb-8 md:mb-0 md:w-2/3">
            <img src="/logo.png" alt="Root Tra Logo" className="h-16 mb-4" />
            <p className="text-gray-400 max-w-md">
              Root Tra – Transforming climate data for a sustainable future
              through transparent, secure, and interoperable technologies.
            </p>

            {/* Move email here for mobile alignment */}
            <div className="mt-4 md:hidden">
              <h3 className="text-green-500 font-bold mb-2">Contact</h3>
              <p className="text-gray-400">hello@roottra.com</p>
            </div>
          </div>

          {/* Desktop contact (hidden on mobile) */}
          <div className="hidden md:block">
            <h3 className="text-green-500 font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@roottra.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
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
