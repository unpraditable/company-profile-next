const About = () => {
  return (
    <section id="about-section" className="description container px-4">
      <h2 className="text-center font-bold text-xl my-4">What We Offer</h2>
      <ul>
        <li className="lg:flex lg:items-center lg:gap-6">
          <p className="text-sm mb-4 lg:w-2/3 lg:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="The Picture of Service 1"
            className="w-full max-h-[200px] object-contain rounded lg:w-1/3 lg:object-cover"
          />
        </li>
        <li className="lg:flex lg:flex-row-reverse lg:items-center lg:gap-6">
          <p className="text-sm mb-4 lg:w-2/3 lg:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="The Picture of Service 2"
            className="w-full max-h-[200px] object-contain rounded lg:w-1/3 lg:object-cover"
          />
        </li>
        <li className="lg:flex lg:items-center lg:gap-6">
          <p className="text-sm mb-4 lg:w-2/3 lg:text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="The Picture of Service 3"
            className="w-full max-h-[200px] object-contain rounded lg:w-1/3 lg:object-cover"
          />
        </li>
      </ul>
    </section>
  );
};

export default About;
