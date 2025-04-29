import Image from "next/image";
import brand1 from "../../../public/assets/img/brands/brand-1.png"
import brand2 from "../../../public/assets/img/brands/brand-2.png"
import brand3 from "../../../public/assets/img/brands/brand-3.png"
import brand4 from "../../../public/assets/img/brands/brand-4.png"
import brand5 from "../../../public/assets/img/brands/brand-5.png"


export default function Prices() {
  return (
    <>
      <section className="prices">
        <div className="relative min-h-screen bg-[url('/assets/img/membership/bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container px-4 sm:px-30 md:px-40 py-10">
            <div className="prices-title py-10 text-center">
              <h1 className="relative z-50 text-5xl font-bold border-b-4 border-red-700 inline-block uppercase text-white">
                Membership
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="relative z-50 bg-black/70 p-8 text-white border-1 border-red-700">
                <h3 className="text-2xl font-bold uppercase border-b-1 border-red-700 pb-3 ">
                  Standard
                </h3>
                <ul className="pt-5">
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Includes
                    Membership
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Access
                    To All Gym Facilities
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-xmark me-2 text-red-600"></i> Diet
                    Plan Included
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Health
                    and Fitness Tips
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-xmark me-2 text-red-600"></i>{" "}
                    Monday-Friday Gym Access
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Full
                    Access To Everything
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-xmark me-2 text-red-600"></i> No
                    Additional Amenities
                  </li>
                </ul>

                <div className="price flex mt-6">
                  <span className="flex text-2xl text-red-800">
                    ${" "}
                    <h3 className="text-4xl text-red-600 font-semibold ms-1">
                      30
                    </h3>
                    <span className="mt-3 text-red-800 italic"> /month</span>
                  </span>
                </div>

                <button className="mt-5 bg-red-600 py-2 px-6 cursor-pointer">
                  Buy Now
                </button>
              </div>

              <div className="relative z-50 bg-black/70 p-8 text-white border-1 border-red-700">
                <h3 className="text-2xl font-bold uppercase border-b-1 border-red-700 pb-3 ">
                  Professional
                </h3>
                <ul className="pt-5">
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Includes
                    Membership
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Access
                    To All Gym Facilities
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-xmark me-2 text-red-600"></i> Diet
                    Plan Included
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Health
                    and Fitness Tips
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i>
                    Monday-Friday Gym Access
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Full
                    Access To Everything
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> No
                    Additional Amenities
                  </li>
                </ul>

                <div className="price flex mt-6">
                  <span className="flex text-2xl text-red-800">
                    $
                    <h3 className="text-4xl text-red-600 font-semibold ms-1">
                      45
                    </h3>
                    <span className="mt-3 text-red-800 italic"> /month</span>
                  </span>
                </div>

                <button className="mt-5 bg-red-600 py-2 px-6 cursor-pointer">
                  Buy Now
                </button>
              </div>

              <div className="relative z-50 bg-black/70 p-8 text-white border-1 border-red-700">
                <h3 className="text-2xl font-bold uppercase border-b-1 border-red-700 pb-3 ">
                  Standard
                </h3>
                <ul className="pt-5">
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Includes
                    Membership
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Access
                    To All Gym Facilities
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Diet
                    Plan Included
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Health
                    and Fitness Tips
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i>{" "}
                    Monday-Friday Gym Access
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> Full
                    Access To Everything
                  </li>
                  <li className="pb-2">
                    <i class="fa-solid fa-check me-2 text-red-600"></i> No
                    Additional Amenities
                  </li>
                </ul>

                <div className="price flex mt-6">
                  <span className="flex text-2xl text-red-800">
                    $
                    <h3 className="text-4xl text-red-600 font-semibold ms-1">
                      60
                    </h3>
                    <span className="mt-3 text-red-800 italic"> /month</span>
                  </span>
                </div>

                <button className="mt-5 bg-red-600 py-2 px-6 cursor-pointer">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}

      <section className="brands my-30">
        <div className="container px-4 sm:px-8 md:px-16 lg:px-24 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 cursor-pointer">
            {[brand1, brand2, brand3, brand4, brand5].map((brand, i) => (
              <div
                key={i}
                className="hover:scale-105 transition-transform duration-300"
              >
                <Image src={brand} alt="brand logo" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
