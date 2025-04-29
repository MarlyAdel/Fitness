
export default function About() {
  return (
    <section className="about">
      <div className="container px-4 sm:px-10 md:px-20 py-20">
        <div className="about-header flex flex-col md:flex-row justify-center items-center md:text-left">
          <h1 className="uppercase font-black text-4xl sm:text-5xl pe-0 md:pe-5 pt-2 pb-2.5">
            About us
          </h1>
          <span className="mt-4 md:mt-0 md:w-[50%] text-gray-600 text-sm sm:text-base">
            At Fitness Pro, we believe that true strength starts from within.
            Our mission is to empower individuals of all fitness levels to
            achieve their health goals through expert guidance and a supportive
            community. Whether you’re taking your first step towards a healthier
            lifestyle or pushing your limits to new heights, we are here to help
            you every step of the way. Join us and discover the best version of
            yourself — strong, confident, and unstoppable.
          </span>
        </div>

        <div className="about-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-30">
          <div className="relative text-center pt-5">
            <span className="absolute text-8xl font-extrabold text-gray-200 -top-6 left-44 transform -translate-x-1/2 pt-5">
              01
            </span>
            <h3 className="relative font-bold text-lg mt-10 z-30">
              WINNER COACHES
            </h3>
            <p className="text-gray-500 text-sm mt-2 z-30">
              refers to a team of highly skilled and successful coaches who
              guide individuals or groups to achieve their goals and maximize
              performance.
            </p>
          </div>
          <div className="relative text-center pt-5">
            <span className="absolute text-8xl font-extrabold text-gray-200 -top-6 left-44 transform -translate-x-1/2 pt-5">
              02
            </span>
            <h3 className="relative font-bold text-lg mt-10 z-30 uppercase">
              affordable price
            </h3>
            <p className="text-gray-500 text-sm mt-2 z-30">
              refers to a cost that is reasonable and accessible for most
              people, offering good value for the quality or service provided.
            </p>
          </div>
          <div className="relative text-center pt-5">
            <span className="absolute text-8xl font-extrabold text-gray-200 -top-6 left-44 transform -translate-x-1/2 pt-5">
              03
            </span>
            <h3 className="relative font-bold text-lg mt-10 z-30 uppercase">
              Modern Equipments
            </h3>
            <p className="text-gray-500 text-sm mt-2 z-30">
              refers to the latest, most advanced tools and technology used to
              enhance performance, efficiency, and quality in various fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
