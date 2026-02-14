import React from "react";
import myPhoto from "../../../../public/images/myPhoto.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <div data-aos="fade-down" id="hero" className="min-h-screen flex items-start  dark:bg-main p-2  md:py-24 md:px-20 bg-white">
      <div className="flex items-start flex-col lg:flex-row justify-between ">
        <div className="left-side flex w-full  flex-col gap-12 lg:w-[70%]">
          <div className="top">
            <h1 className="text-second font-bold dark:text-[#F9FAFB] text-[36px] lg:text-[40px] mt-10 lg:mt-0">
              Hi, I’m Mohamed Abdelaziem 👋
            </h1>
            <p className="dark:text-paragraph text-[#4B5563] text-links leading-6 lg:pr-5">
              Front-End Developer with experience in building modern websites
              and web applications using Angular, React, Next.js, and No Coding Solutions (Wordpress , Shopfiy , etc...).
              Specialized in transforming designs into fast, responsive, and
              interactive user interfaces, with a strong focus on performance,
              user experience (UX), and clean code quality. Experienced in
              working with REST APIs, optimizing website speed, supporting SEO,
              and developing custom WordPress solutions tailored to business
              needs.
            </p>
          </div>

          <div className="center flex gap-2 flex-col items-start ">
            <p className="flex items-center gap-2">
              <i className="fa-solid   fa-location-dot fa-fw text-links text-[#4B5563] dark:text-white p-0 "></i>
              <span className="text-links text-[#4B5563] dark:text-paragraph">
                Cairo , Egypt
              </span>
            </p>
            <p className="flex items-center gap-2">
              <i className="fa-solid fa-circle text-green-500 text-links"></i>
              <span className="text-links text-[#4B5563] dark:text-paragraph">
                Available for new projects
              </span>
            </p>
          </div>

          <div className="bottom flex gap-1 items-center text-[#4B5563] text-[20px] dark:text-paragraph">
            <a href="https://www.linkedin.com/in/muhmaedabdelaziem/">
              <i className="fa-brands fa-square-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/mohamed.abdelaziem1/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/mohamed.abdelaziem.52012">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/mohamed-abdelaziem">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="w-full right-side mx-auto lg:w-[30%] relative z-10 -order-1 lg:order-1">
          <div className="image w-full mx-auto ">
            <Image className="w-[80%] h-[80%] mx-auto border-8 dark:border-second border-[#E5E7EB]" src={myPhoto} alt="myPhoto" />
            <div className="-z-1 w-[90%] h-[90%] lg:w-70 lg:h-80 dark:bg-heading-two border-8 dark:border-second border-[#E5E7EB] absolute top-13 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
