const Location = () => {
  return (
    <>
      <div className="my-4 lg:flex lg:items-center lg:gap-6">
        <address className="text-sm mb-4 lg:w-1/2 lg:text-md">
          <div className="my-4">
            <p className="font-bold">Address:</p>
            <p>
              Jl. Cendrawasih Raya, Sawah Baru, Kec. Ciputat, Kota Tangerang
              Selatan, Banten 15413
            </p>
          </div>

          <div className="my-4">
            <p className="font-bold">Phone:</p>
            <p>+628123123123</p>
          </div>
        </address>

        <img
          src="/location.png"
          alt="The Picture of Location"
          className="w-full md:max-h-[300px] object-contain rounded lg:w-1/2 lg:object-cover"
        />
      </div>
    </>
  );
};

export default Location;
