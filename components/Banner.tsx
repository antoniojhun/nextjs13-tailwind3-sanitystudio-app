function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h2 className="text-6xl">Antonio's Blog</h2>
        <h3 className="mt-5 md:mt-1">
          Welcome to my collection of favourite food and poetry written by M.
          Shin.
        </h3>
      </div>
      <p className="mt-6 md:-mt-2 text-gray-400 max-w-sm">
        Recipe | Poetry & More!
      </p>
    </div>
  );
}

export default Banner;
