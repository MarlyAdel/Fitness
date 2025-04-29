"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import team1 from "../../../public/assets/img/trainers/david.jpg"
import team2 from "../../../public/assets/img/trainers/rosy.jpg";
import team3 from "../../../public/assets/img/trainers/matt.jpg";
import team4 from "../../../public/assets/img/trainers/sofia.jpg";


export default function Team() {

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); 
  }, []);

  return (
    <section className="team">
      <div className="container px-4 sm:px-10 md:px-20 py-10">
        <div className="team-title text-center">
          <h1
            className={`text-5xl font-bold border-b-4 border-red-700 inline-block uppercase ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-out`}
          >
            Meet our trainers
          </h1>
        </div>
        <div className="team-content my-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative">
              <span className="absolute bg-red-600  p-3 top-6 left-6 "></span>
              <div className="p-4 ">
                <Image
                  src={team1}
                  alt="traniers"
                  className=" p-4 pb-0 relative z-55 w-full"
                />
              </div>
              <h1 className="uppercase text-2xl text-center font-bold">
                David willams
              </h1>
              <span className="text-sm text-gray-500 ms-24">
                BodyBuilder Coach
              </span>
              <div className="team-icons cursor-pointer text-center">
                <i class="fa-brands fa-facebook-f text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-twitter text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-youtube text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
              </div>
            </div>

            <div className="relative">
              <span className="absolute bg-red-600  p-3 top-6 left-6"></span>
              <div className="p-4 ">
                <Image
                  src={team2}
                  alt="traniers"
                  className=" p-4 pb-0 relative z-55 w-full"
                />
              </div>
              <h1 className="uppercase text-2xl text-center font-bold">
                Rosy Rivera
              </h1>
              <span className="text-sm text-gray-500 ms-28">Cardio Coach</span>
              <div className="team-icons cursor-pointer text-center">
                <i class="fa-brands fa-facebook-f text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-twitter text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-youtube text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
              </div>
            </div>

            <div className="relative">
              <span className="absolute bg-red-600  p-3 top-6 left-6"></span>
              <div className="p-4 ">
                <Image
                  src={team3}
                  alt="traniers"
                  className=" p-4 pb-0 relative z-55 w-full"
                />
              </div>
              <h1 className="uppercase text-2xl text-center font-bold">
                Matt Stonie
              </h1>
              <span className="text-sm text-gray-500 ms-28">Fitness Coach</span>
              <div className="team-icons cursor-pointer text-center">
                <i class="fa-brands fa-facebook-f text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-twitter text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-youtube text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
              </div>
            </div>

            <div className="relative">
              <span className="absolute bg-red-600  p-3 top-6 left-6"></span>
              <div className="p-4 ">
                <Image
                  src={team4}
                  alt="traniers"
                  className=" p-4 pb-0 relative z-55 w-full"
                />
              </div>
              <h1 className="uppercase text-2xl text-center font-bold">
                Sofia lauren
              </h1>
              <span className="text-sm text-gray-500 ms-28">
                Crossfit Coach
              </span>
              <div className="team-icons cursor-pointer text-center">
                <i class="fa-brands fa-facebook-f text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-twitter text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
                <i class="fa-brands fa-youtube text-gray-800 hover:text-red-700 pe-4 mt-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
