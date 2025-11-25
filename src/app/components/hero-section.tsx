const HeroSection = () => {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex p-6 lg:px-8 justify-center gap-6"
        >
          <a href="#" className="text-md font-semibold text-white">
            About
          </a>
          <a href="#" className="text-md font-semibold text-white">
            Product
          </a>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white sm:text-7xl">
              Welcome to Cifera Shop!
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
