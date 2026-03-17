import wethaqStore from "../../../../public/images/wethaq-store-website.png";
import noteApp from "../../../../public/images/note-app-photo.png";
import eCommerceApp from "../../../../public/images/e-commerce-app.jpg";
import hudaWeb from "../../../../public/images/dr-huda-website.png";
import socialApp from "../../../../public/images/social-app (2).png";
import feesTracker from "../../../../public/images/feesTracker.png";
import portfolio from "../../../../public/images/portfolio.png";
import enquirySystem from "../../../../public/images/enquirySystem.png";
import taskMaster from "../../../../public/images/taskMaster.png";
import techNova from "../../../../public/images/techNova.png";
import alhilalLab from "../../../../public/images/alhilalLab.png";
import Image from "next/image";

export default function Work() {
  return (
    <>
      <div
        data-aos="fade-down"
        id="work"
        className="p-4 lg:px-20 lg:py-24 min-h-screen bg-white dark:bg-main">
        <div className="heading-center mb-12 text-center">
          <h2 className=" w-fit mx-auto bg-[#E5E7EB] dark:bg-heading-two px-[20px] py-1 rounded-xl text-[#4B5563] dark:text-paragraph ">
            Work
          </h2>
          <p className="text-[#4B5563] md:text-[20px] dark:text-paragraph mt-4">
            Some of the noteworthy projects I have built
          </p>
        </div>

        {/* parent */}

        <div className="flex flex-col gap-12 items-center">
          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://e-commerce-61cz.vercel.app/#/home"
                className="block w-full h-full ">
                <Image
                  src={eCommerceApp}
                  alt="socialApp"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                E-commerce
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                A modern e-commerce store built with Angular, powered by
                TypeScript and styled using Tailwind CSS, delivering a fully
                responsive and seamless user experience across all devices.
                Integrated with a robust RESTful API for efficient product
                management, secure transactions, and smooth performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular (Standalone Components & Routing)
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind CSS
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Reactive Forms
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Route Guards
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  RESTful API Integration
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Services
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Interceptors
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Routes
                </span>
              </div>
              <a href="https://e-commerce-61cz.vercel.app/#/home">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://fees-tracker-app.vercel.app/"
                className="block w-full h-full">
                <Image
                  src={feesTracker}
                  alt="feesTracker"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Fees Tracker
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                FeesTracker – Enrollment & Payment Management Dashboard I’m
                excited to share FeesTracker, a modern admin dashboard designed
                to manage student enrollments and track payment progress in a
                clear and efficient way.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular (Standalone Components & Routing)
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Routes Guards
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Services
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Auth Handle
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Gsap
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Toastr Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Cookies Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  RESTful API Integration
                </span>
              </div>
              <a href="https://fees-tracker-app.vercel.app/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://enquiry-system.vercel.app/"
                className="block w-full h-full">
                <Image
                  src={enquirySystem}
                  alt="enquirySystem"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Enquiry System
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                The Enquiry Management System is a role-based web application
                built using Angular and Tailwind CSS to manage customer
                enquiries efficiently.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular (Standalone Components & Routing)
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Routes
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Toastr Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Cookies Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Services
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  RESTful API Integration
                </span>
              </div>
              <a href="https://enquiry-system.vercel.app/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://task-master-ten-kappa.vercel.app/"
                className="block w-full h-full">
                <Image
                  src={taskMaster}
                  alt="taskMaster"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                TaskMaster
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                TaskMaster is a full-featured productivity web application built
                with Angular and Tailwind CSS, designed to help users
                efficiently manage their tasks, goals, and reminders through a
                clean and responsive dashboard experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Toastr Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Cookies Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  REST APIS
                </span>
              </div>
              <a href="https://task-master-ten-kappa.vercel.app/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://tech-nova-8cy6.vercel.app/#/home"
                className="block w-full h-full">
                <Image
                  src={techNova}
                  alt="techNova"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Tech Nova
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                The project implements authentication and role-based
                permissions, using Angular Guards, Services, SSR, Reactive
                Forms, TypeScript, and Tailwind CSS to deliver a secure,
                scalable, and modern user interface. Proud to share this
                academic project that demonstrates real-world application
                architecture, clean code practices, and full-stack frontend
                development skills
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Toastr Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Cookies Service
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  REST APIS
                </span>
              </div>
              <a href="https://tech-nova-8cy6.vercel.app/#/home">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://my-portfolio-zoc4.vercel.app/"
                className="block w-full h-full">
                <Image
                  src={portfolio}
                  alt="portfolio"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Portfolio
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                The portfolio is built with Next.js and Tailwind CSS for a
                modern and fast UI, with AOS and jQuery used to add smooth
                animations and enhance the user experience. The website is also
                fully responsive, ensuring a seamless experience across all
                devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Next Js
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Aos Jquery
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Jquery
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Image Optimization
                </span>
              </div>
              <a href="https://my-portfolio-zoc4.vercel.app/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://social-app-annj.vercel.app/"
                className="block w-full h-full">
                <Image
                  src={socialApp}
                  alt="socialApp"
                  className="w-full h-full object-cover object-center rounded-xl cursor-pointer"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Social App
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                A dynamic social media application built with React, leveraging
                Zod for schema validation and React Hook Form for efficient form
                handling. Integrated with RESTful APIs, React Router DOM for
                seamless navigation, and styled using Tailwind CSS to deliver a
                responsive and modern user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  React
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Javascript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  REST APIs
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Zod Validation
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  React Hook Form
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  React Router Dom
                </span>
              </div>
              <a href="https://social-app-annj.vercel.app/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://note-app-sage-nu.vercel.app/#/home"
                className="block w-full h-full">
                <Image
                  src={noteApp}
                  alt="noteApp"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Note App
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                A feature-rich Note App built with Angular and TypeScript,
                integrated with RESTful APIs to perform full CRUD operations
                efficiently. Styled using Tailwind CSS with a fully responsive
                design, ensuring a smooth and consistent experience across all
                devices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Angular
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Tailwind
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Typescript
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  REST APIs
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Guards
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Services
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Interceptors
                </span>
              </div>
              <a href="https://note-app-sage-nu.vercel.app/#/home">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://wethaqstore.com/"
                className="block w-full h-full">
                <Image
                  src={wethaqStore}
                  alt="wethaqStore"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Wethaq Store
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                A custom WordPress e-commerce website developed for Wethaq
                Store, focused on delivering a modern Arabic fashion shopping
                experience. Built with WooCommerce, optimized for performance
                and SEO, fully responsive, and tailored to match the brand’s
                visual identity and color palette.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Wordpress
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Elementor
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Payment Getway
                </span>
              </div>
              <a href="https://wethaqstore.com/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://drhudaalmusalem.com/"
                className="block w-full h-full">
                <Image
                  src={hudaWeb}
                  alt="hudaWeb"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Dr Huda Musallem
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                A professional medical website developed for Dr. Huda Muslim,
                designed to present clinic services with clarity, trust, and a
                modern user experience. Built with a clean UI, fully responsive
                layout, and optimized performance to enhance patient engagement
                and streamline appointment booking.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Wordpress
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Elementor
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Payment Getway
                </span>
              </div>
              <a href="https://drhudaalmusalem.com/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="work-box w-full overflow-hidden lg:w-[95%] xl:w-[80%] flex lg:flex-row flex-col lg:h-125 rounded-xl ">
            <div className="left bg-[#F9FAFB] dark:bg-heading-two   p-4  lg:p-10  flex items-center justify-center basis-1/2  lg:h-full">
              <a
                href="https://alhilalmedlabs.com/"
                className="block w-full h-full">
                <Image
                  src={alhilalLab}
                  alt="alhilalLab"
                  className="w-full h-full object-cover rounded-xl cursor-pointer object-center"
                />
              </a>
            </div>

            <div className="right basis-1/2 flex p-4  lg:p-10 bg-white dark:bg-divider-bg   gap-3 flex-col h-full">
              <p className="text-[20px] font-semibold  text-second dark:text-[#F9FAFB]">
                Alhilal Lab
              </p>
              <p className="text-links text-[#4B5563] dark:text-paragraph">
                Al Hilal Medical Laboratory is a modern medical platform
                offering a wide range of diagnostic tests and healthcare
                services. The website allows users to بسهولة book tests, explore
                medical packages, and request home sample collection, providing
                a fast and convenient user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Wordpress
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Elementor
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Responsive Design
                </span>
                <span className="inline-block px-[20px] py-1 rounded-xl bg-[#E5E7EB] dark:bg-heading-two text-[#4B5563] dark:text-paragraph">
                  Payment Getway
                </span>
              </div>
              <a href="https://alhilalmedlabs.com/">
                <i className="fa-solid fa-link text-[#4B5563]"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
