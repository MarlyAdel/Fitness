import logoImg from "../../../../public/assets/img/logo.png";
import Image from "next/image";
import gallery1 from '../../../../public/assets/img/post3.jpg'
import gallery2 from "../../../../public/assets/img/blog/post4.jpg";
import gallery3 from "../../../../public/assets/img/post1.jpg";
import gallery4 from "../../../../public/assets/img/post4.jpg";
import gallery5 from '../../../../public/assets/img/testimonial/maria.jpg'
import gallery6 from "../../../../public/assets/img/testimonial/lucy.jpg";
import gallery7 from "../../../../public/assets/img/testimonial/michael.jpg";
import gallery8 from "../../../../public/assets/img/post2.jpg";
import gallery9 from '../../../../public/assets/img/blog/post1.jpg'




export default function Footer() {
  return (
    <section className="footer">
      <div className="relative h-auto bg-[url('/assets/img/footer.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="footer-content relative z-20 container px-4 sm:px-10 md:px-20 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className=" text-white p-4 rounded-lg">
              <Image src={logoImg} alt="logo" className="w-28 mb-2.5" />
              <p>
                Fitness is essential for maintaining a healthy body and mind.
                Regular exercise helps improve strength, flexibility, and
                endurance, while also reducing the risk of chronic diseases.
              </p>
              <div className="footer-icons pt-1.5">
                <div className="icon">
                  <i className="fa-solid fa-location-dot text-red-700"></i>
                  <span className="ps-2">Lincoln Park, Chicago, Illinois</span>
                </div>
                <div className="icon2">
                  <i className="fa-solid fa-phone text-red-700"></i>
                  <span className="ps-2">+105 2211 3030</span>
                </div>
                <div className="icon3">
                  <i className="fa-solid fa-envelope text-red-700"></i>
                  <span className="ps-2">contact@fitness.com</span>
                </div>
              </div>
            </div>
            <div className=" text-white p-4 rounded-lg">
              <h3 className="uppercase font-bold text-shadow-md text-2xl">
                Recent Blog Posts
              </h3>
              <p className="text-gray-300 text-sm uppercase mt-1.5">
                How to be Motivated for all Exercise
              </p>
              <span className="text-gray-300 text-xs">July 31, 2020</span>
              <div className="border-b-2 mt-1.5"></div>
              <p className="text-gray-300 text-sm uppercase mt-1.5">
                How to do complete workout without tired
              </p>
              <span className="text-gray-300 text-xs">July 29, 2020</span>
              <div className="border-b-2 mt-1.5"></div>
              <p className="text-gray-300 text-sm uppercase mt-1.5">
                Maintain a perfect structure after workout
              </p>
              <span className="text-gray-300 text-xs">July 24, 2020</span>
            </div>
            <div className=" text-white p-4 rounded-lg">
              <h3 className="uppercase font-bold text-shadow-md text-2xl">
                Gallery
              </h3>
              <div className="gallery-img flex flex-wrap gap-4 mt-2">
                <Image src={gallery1} alt="fitness" className="w-20" />
                <Image src={gallery2} alt="fitness" className="w-20" />
                <Image src={gallery3} alt="fitness" className="w-20" />
                <Image src={gallery4} alt="fitness" className="w-20" />
                <Image src={gallery5} alt="fitness" className="w-20" />
                <Image src={gallery6} alt="fitness" className="w-20" />
                <Image src={gallery7} alt="fitness" className="w-20" />
                <Image src={gallery8} alt="fitness" className="w-20" />
                <Image src={gallery9} alt="fitness" className="w-20" />
              </div>
            </div>
            <div className=" text-white p-4 rounded-lg">
              <h3 className="uppercase font-bold text-shadow-md text-2xl">
                Newsletter
              </h3>
              <p className="text-gray-300 text-sm mt-1.5">
                By subscribing us you will get discount offers and our tips for
                your fitness for good results
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="mt-3.5 bg-white p-1 placeholder-gray-400"
                />
                <button className="uppercase mt-6 p-1 text-gray-300 bg-red-700 text-sm sm:text-base cursor-pointer rounded-md">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-b-2 mt-1.5 px-3 text-white  z-20"></div>
        <div className="copyright-footer relative z-20 flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-20 py-4 text-white text-center md:text-left">
          <p>
            Copyright @ 2025 Templates Jungle. Developed by
            <span className="text-red-700 "> fitness.com</span>
          </p>
          <div className="flex w-[50%] justify-end  mt-4 md:mt-0 gap-3">
            <span className="w-8 h-8 flex justify-center items-center bg-white rounded-full me-2.5 cursor-pointer">
              <i className="fa-brands fa-facebook-f text-red-700 "></i>
            </span>
            <span className="w-8 h-8 flex justify-center items-center bg-white rounded-full me-2.5 cursor-pointer">
              <i className="fa-brands fa-twitter text-red-700"></i>
            </span>
            <span className="w-8 h-8 flex justify-center items-center bg-white rounded-full me-2.5 cursor-pointer">
              <i className="fa-brands fa-youtube text-red-700"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
