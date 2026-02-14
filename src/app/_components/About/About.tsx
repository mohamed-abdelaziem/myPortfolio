import React from "react";
import myPhoto from "../../../../public/images/myPhoto.webp";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div data-aos="fade-up" id="about" className="p-4 lg:px-20 lg:py-24 min-h-screen bg-[#F9FAFB] dark:bg-second">
        {/* heading center */}
        <div className="heading-center w-fit mx-auto mb-12">
          <h2 className=" bg-[#E5E7EB] dark:bg-heading-two px-[20px] py-1 rounded-xl text-[#4B5563] dark:text-paragraph ">
            About Me
          </h2>
        </div>

        <div className="flex lg:flex-row flex-col justify-between">
          <div className="left-side w-full lg:w-[50%] relative z-10 -order-1 lg:order-0">
            <div className="image w-full mx-auto">
              <Image
                className="w-[80%] h-[80%] mx-auto border-8 dark:border-second border-[#E5E7EB]"
                src={myPhoto}
                alt="myPhoto"
              />
              <div className="-z-1   w-[90%] h-[90%]  dark:bg-heading-two border-8 dark:border-second border-[#E5E7EB] absolute top-13 lg:top-25 lg:right-9 "></div>
            </div>
          </div>

          <div className="right-side lg:w-1/2" >
            <h3 className="dark:text-[#F9FAFB] text-second text-[24px] lg:text-heading-three font-semibold mt-10 lg:mt-0">
              Curious about me? Here you have it:
            </h3>
            <p className="text-links text-[#4B5563] dark:text-paragraph mt-6">
              I’m a passionate and detail-oriented Front-End Developer with
              solid experience in React, Angular, and WordPress, focused on
              building fast, scalable, and user-friendly web applications. I
              care deeply about clean code, performance optimization, and
              turning designs into pixel-perfect, real-world products. My
              journey in web development started several years ago, and
              throughout this time I’ve worked on a wide range of projects—from
              business websites and dashboards to full e-commerce solutions and
              marketing-driven platforms. I enjoy working at the intersection of
              development, performance, and user experience, making sure every
              product not only looks good but also works efficiently. I’m highly
              experienced with modern tools and technologies such as TypeScript,
              Tailwind CSS, REST APIs, WordPress & WooCommerce, and I constantly
              explore new frameworks and best practices to stay up to date in a
              fast-moving tech world. I’m a problem solver by nature and enjoy
              taking projects end-to-end—from understanding requirements and
              planning the architecture to development, optimization, and
              deployment. When I’m not coding, you’ll usually find me learning
              something new, analyzing digital products, or improving my skills
              in web performance and modern front-end workflows. Quick facts
              about me: Front-End Developer (React, Angular, WordPress) Strong
              focus on performance & clean architecture Continuous learner &
              tech enthusiast Freelancer with real-world project experience
              Passionate about building scalable, high-quality web products I’m
              currently open to freelance opportunities, so feel free to reach
              out—I’m always happy to discuss new ideas and exciting projects 🚀
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
