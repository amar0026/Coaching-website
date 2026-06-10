const Navbar = () => {
  const logoUrl =
    "https://res.cloudinary.com/dquki4xol/image/upload/v1781085670/Onlite-logo_bdpcjy.png";

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Onlite Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="text-[16px] font-medium text-black border-b-2 border-green-500 pb-1"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-[16px] font-medium text-gray-700 hover:text-green-600 transition"
          >
            About Us
          </a>

          <a
            href="#service"
            className="text-[16px] font-medium text-gray-700 hover:text-green-600 transition"
          >
            Service
          </a>

          <a
            href="#project"
            className="text-[16px] font-medium text-gray-700 hover:text-green-600 transition"
          >
            Project
          </a>

          <a
            href="#contact"
            className="text-[16px] font-medium text-gray-700 hover:text-green-600 transition"
          >
            Contact us
          </a>
        </nav>

        {/* Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;