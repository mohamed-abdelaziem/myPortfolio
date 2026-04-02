"use client";
import Image from "next/image";
import logo from "../../favicon.ico";
import React, { useState } from "react";
import Link from "next/link";
import "../../globals.css";
export default function Navbar() {
  const [navIsShow, setnavIsShow] = useState<boolean>(false);
  function changeMode(eventInfo: any) {
    const icon = eventInfo.target as HTMLElement;
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("fa-gear");
    document.body.classList.toggle("dark");
  }

  function openNavInMobile(e: any) {
    const barsIcon = e.target as HTMLElement;
    if (barsIcon.classList.contains("fa-bars")) {
      barsIcon.classList.remove("fa-solid", "fa-bars");
      barsIcon.classList.add("fa-solid", "fa-xmark");
    } else {
      barsIcon.classList.remove("fa-solid", "fa-xmark");
      barsIcon.classList.add("fa-solid", "fa-bars");
    }
  }

  return (
    <>
      {/* navbar */}
      <nav className="z-99999 dark:bg-main bg-white px-4 py-4  lg:px-x-main lg:py-y-main fixed top-0 left-0 right-0 ">
        <div className="my-container lg:py-8 flex items-center justify-between  gap-4 flex-row  mx-auto">
          <div className="logo w-1/4 text-heading-three text-second dark:text-[#F9FAFB] font-bold">
            <a href="#hero"><h1 className="cursor-pointer" >M.Abdelaziem</h1></a>
          </div>

          <div onClick={()=>{setnavIsShow(!navIsShow)}} className="block lg:hidden text-[25px] cursor-pointer">
            <i
              onClick={(e) => openNavInMobile(e)}
              className="fa-solid fa-bars dark:text-paragraph text-[#4B5563]"></i>
          </div>

          <div className={` flex lg:gap-6 lg:flex-row flex-col justify-stretch items-stretch absolute ${navIsShow ? 'top-full' : '-top-250'} right-0 left-0 lg:static   h-screen lg:h-auto dark:bg-main bg-white z-50`}>
            <ul className="flex-col  lg:flex-row flex lg:items-center  w-full lg:w-auto  text-[#4B5563] border-t border-paragraph border-b  lg:border-0 dark:text-paragraph gap-6 p-4 lg:p-0">
              <li>
                <a className="text-links font-medium " href={"#about"}>
                  About
                </a>
              </li>
              <li>
                <a className="text-links font-medium " href={"#skills"}>
                  Skills
                </a>
              </li>
              <li>
                <a className="text-links font-medium " href={"#experience"}>
                  Experience
                </a>
              </li>
              <li>
                <a className="text-links font-medium" href={"#work"}>
                  Work
                </a>
              </li>
              <li>
                <a className="text-links font-medium" href={"#contact"}>
                  Contact
                </a>
              </li>

              <div className="hidden lg:block divider w-0.75 h-8 rounded my-auto bg-[#F3F4F6] dark:bg-divider-bg"></div>
            </ul>
              <div className="flex lg:flex-row flex-col items-stretch gap-4 p-4 lg:p-0">
               <div className="flex items-center justify-between  w-[80%] lg:w-auto mx-auto">
                <p className="text-links lg:hidden text-[#4B5563] dark:text-paragraph">Switch Theme</p>
                 <i
                  onClick={(e) => changeMode(e)}
                  className="fa-regular fa-moon text-[20px] text-[#4B5563] dark:text-paragraph cursor-pointer"></i>
               </div>
                <a
                  href="/pdf/cv.pdf"
                  download
                  className="block w-[80%] lg:w-auto text-center mx-auto  px-4 py-1.5 dark:bg-btn-bg bg-second text-btn-bg dark:text-second rounded-xl text-links font-medium">
                  Download CV
                </a>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}
