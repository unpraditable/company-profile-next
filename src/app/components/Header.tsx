const Header = () => {
  return (
    <header className="bg-gray-900 fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex px-4 py-6 lg:px-8 justify-center gap-6"
      >
        <a href="#about-section" className="text-md font-semibold text-white">
          About
        </a>
        <a href="#product-section" className="text-md font-semibold text-white">
          Product
        </a>
        <a
          href="#location-section"
          className="text-md font-semibold text-white"
        >
          Location
        </a>
      </nav>
    </header>
  );
};

export default Header;
