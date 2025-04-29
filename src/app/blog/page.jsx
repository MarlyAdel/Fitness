"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import blog1 from "../../../public/assets/img/blog/post1.jpg"
import blog2 from "../../../public/assets/img/blog/post2.jpg";
import blog3 from "../../../public/assets/img/blog/post3.jpg";
import blog4 from "../../../public/assets/img/blog/post4.jpg";
import blog5 from "../../../public/assets/img/blog/post5.jpg";
import blog6 from "../../../public/assets/img/blog/post6.jpg";
import blog7 from "../../../public/assets/img/blog/post7.jpg";
import blog8 from "../../../public/assets/img/blog/post8.jpg";



export default function Blog() {

const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300); 
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Maintain a Perfect Structure After Workout",
      date: "15 Jan",
      image: blog1,
    },
    {
      id: 2,
      title: "How to be Motivated For all Workouts",
      date: "18 Dec",
      image: blog2,
    },
    {
      id: 3,
      title: "How to Do Complete Workout Without Tired",
      date: "10 Sept",
      image: blog3,
    },
    {
      id: 4,
      title: "Workout In Perfect Way to Hit The Muscles",
      date: "11 Jan",
      image: blog4,
    },
    {
      id: 5,
      title: "Maintain a Perfect Structure After Workout",
      date: "15 Jun",
      image: blog5,
    },
    {
      id: 6,
      title: "How to be Motivated For all Workouts",
      date: "18 July",
      image: blog6,
    },
    {
      id: 7,
      title: "How to Do Complete Workout Without Tired",
      date: "20 Feb",
      image: blog7,
    },
    {
      id: 8,
      title: "Workout In Perfect Way to Hit The Muscles",
      date: "8 May",
      image: blog8,
    },
  ];

  return (
    <section className="blog ">
      <div className="container px-4 sm:px-40 md:px-30 py-10 bg-gray-900 w-[80%] mx-auto my-15">
        <div className="blog-title text-center">
          <h1
            className={`text-5xl font-bold border-b-4 text-white border-red-700 inline-block uppercase ${
              isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000 ease-out`}
          >
            Blogs
          </h1>
        </div>
        <div className="blog-content py-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false, 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[ Autoplay]}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="relative group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-sm font-bold">
                    {post.date}
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white group-hover:text-red-600 transition">
                    {post.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <button className="bg-red-600 px-6 py-2 uppercase text-white hover:bg-red-700 transition cursor-pointer">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
