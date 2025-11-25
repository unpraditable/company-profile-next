const HeroSection = () => {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex p-6 lg:px-8 justify-center gap-6"
        >
          <a href="#about-section" className="text-md font-semibold text-white">
            About
          </a>
          <a
            href="#product-section"
            className="text-md font-semibold text-white"
          >
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

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white sm:text-5xl">
              Welcome to Cifera Shop!
            </h1>
            <p className="mt-8 text-md font-medium text-gray-300 sm:text-lg">
              Selamat datang di toko serba ada di mana kita menjual banyak
              barang, dari mulai lem, gim PS1, hingga televisi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
