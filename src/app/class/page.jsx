"use client"
import { useEffect, useState } from "react";

export default function Class() {

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); 
  }, []);

  return (
    <section className="classes">
      <div className="container px-4 sm:px-10 md:px-20 py-10">
        <div className="classes-title text-center">
          <h1
            className={`text-5xl font-bold border-b-4 border-red-700 inline-block uppercase ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-out`}
          >
            Classes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-0 pb-20">
          <div className="relative h-[55vh] bg-[url('/assets/img/classes/bodybuilding.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="card-content">
              <div className="relative text-center flex justify-center  ">
                <span className="absolute bg-red-600  p-2.5 top-28 left-52 hidden xl:block"></span>
                <h1 className="relative font-bold text-4xl text-white mt-28 ms-2.5 z-33 uppercase">
                  Body Building
                </h1>
              </div>
              <p className="relative z-35 text-center mx-auto w-[58%] pt-2 text-gray-300">
                Bodybuilding is the art of building muscle and strength through
                intense resistance training and nutrition.
              </p>
              <button className="relative z-35 cursor-pointer flex items-center justify-center gap-1 mx-auto p-3 text-white mt-5 bg-red-600 hover:bg-transparent border-2 border-red-600 transition-all duration-400">
                Read More
                <i className="fa-solid fa-arrow-right text-white ms-2.5"></i>
              </button>
            </div>
          </div>
          <div className="relative h-[55vh] bg-[url('/assets/img/classes/cardio.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="card-content">
              <div className="relative text-center flex justify-center  ">
                <span className="absolute bg-red-600  p-2.5 top-28 left-72 hidden xl:block"></span>
                <h1 className="relative font-bold text-4xl text-white mt-28 ms-9 z-33 uppercase">
                  Cardio
                </h1>
              </div>
              <p className="relative z-35 text-center mx-auto w-[58%] pt-2 text-gray-300">
                Cardio is any exercise that raises your heart rate, improving
                cardiovascular health and endurance.
              </p>
              <button className="relative z-35 cursor-pointer flex items-center justify-center gap-1 mx-auto p-3 text-white mt-5 bg-red-600 hover:bg-transparent border-2 border-red-600 transition-all duration-400">
                Read More
                <i className="fa-solid fa-arrow-right text-white ms-2.5"></i>
              </button>
            </div>
          </div>
          <div className="relative h-[55vh] bg-[url('/assets/img/classes/fitness.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="card-content">
              <div className="relative text-center flex justify-center  ">
                <span className="absolute bg-red-600  p-2.5 top-28 left-64 hidden xl:block"></span>
                <h1 className="relative font-bold text-4xl text-white mt-28 me-2 z-33 uppercase">
                  Fitness
                </h1>
              </div>
              <p className="relative z-35 text-center mx-auto w-[58%] pt-2 text-gray-300">
                Fitness is the state of being physically healthy and strong
                through regular exercise, proper nutrition, and lifestyle
                habits.
              </p>
              <button className="relative z-35 cursor-pointer flex items-center justify-center gap-1 mx-auto p-3 text-white mt-5 bg-red-600 hover:bg-transparent border-2 border-red-600 transition-all duration-400">
                Read More
                <i className="fa-solid fa-arrow-right text-white ms-2.5"></i>
              </button>
            </div>
          </div>
          <div className="relative h-[55vh] bg-[url('/assets/img/classes/crossfit.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/55"></div>
            <div className="card-content">
              <div className="relative text-center flex justify-center  ">
                <span className="absolute bg-red-600  p-2.5 top-28 left-64 hidden xl:block"></span>
                <h1 className="relative font-bold text-4xl text-white mt-28 ms-2.5 z-33 uppercase">
                  Crossfit
                </h1>
              </div>
              <p className="relative z-35 text-center mx-auto w-[58%] pt-2 text-gray-300">
                CrossFit is a high-intensity workout that combines elements of
                weightlifting, gymnastics, and cardio to improve overall fitness
                and strength.
              </p>
              <button className="relative z-35 cursor-pointer flex items-center justify-center gap-1 mx-auto p-3 text-white mt-5 bg-red-600 hover:bg-transparent border-2 border-red-600 transition-all duration-400">
                Read More
                <i className="fa-solid fa-arrow-right text-white ms-2.5"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
