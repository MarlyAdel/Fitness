export default function Home() {
  return (
    <>
      <section className="home">
        <div className="relative h-[85vh] bg-[url('/assets/img/hero/bg.png')] bg-cover bg-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full ms-0 lg:ms-60 sm:px-10 md:px-16">
            <h1 className="font-oswald font-black tracking-tight uppercase text-red-700 text-4xl sm:text-5xl md:text-6xl">
              Hard Work
            </h1>
            <p className="text-white uppercase text-2xl sm:text-3xl md:text-4xl">
              Is For Every Success
            </p>
            <p className="tracking-tighter text-gray-300 mt-1.5 text-sm sm:text-base md:text-lg">
              Start by taking inspirations, continue it to give inspirations
            </p>
            <button className=" uppercase flex mt-5 p-2.5 text-white bg-red-700 text-sm sm:text-base cursor-pointer rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Count Section */}

      <section className="count my-6">
        <div className="container px-4 sm:px-10 md:px-20 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full border-2 border-red-700 flex justify-center items-center">
                <div className="w-36 h-36 bg-white border-red-400 rounded-full shadow-2xl flex justify-center items-center">
                  <h1 className="text-7xl font-bold text-black">18</h1>
                </div>
              </div>
              <p className="mt-3 text-black uppercase font-semibold text-center">
                Training Courses
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full border-2 border-red-700 flex justify-center items-center">
                <div className="w-36 h-36 bg-white border-red-400 rounded-full shadow-2xl flex justify-center items-center">
                  <h1 className="text-7xl font-bold text-black">152</h1>
                </div>
              </div>
              <p className="mt-3 text-black uppercase font-semibold text-center">
                Happy Customers
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full border-2 border-red-700 flex justify-center items-center">
                <div className="w-36 h-36 bg-white border-red-400 rounded-full shadow-2xl flex justify-center items-center">
                  <h1 className="text-7xl font-bold text-black">873</h1>
                </div>
              </div>
              <p className="mt-3 text-black uppercase font-semibold text-center">
                Working Hours
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-44 h-44 rounded-full border-2 border-red-700 flex justify-center items-center">
                <div className="w-36 h-36 bg-white border-red-400 rounded-full shadow-2xl flex justify-center items-center">
                  <h1 className="text-7xl font-bold text-black">6</h1>
                </div>
              </div>
              <p className="mt-3 text-black uppercase font-semibold text-center">
                International Awards
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
