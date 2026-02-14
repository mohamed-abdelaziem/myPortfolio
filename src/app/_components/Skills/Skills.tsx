import Image from "next/image";
import angular from "../../../../public/images/icons8-angular-96 (1).webp";
import react from "../../../../public/images/icons8-react-96.png";
import bootstrap from "../../../../public/images/icons8-bootstrap-96.webp";
import css from "../../../../public/images/icons8-css-96.webp";
import tailwind from "../../../../public/images/icons8-tailwind-css-96.webp";
import html from "../../../../public/images/icons8-html-96.webp";
import sass from "../../../../public/images/icons8-sass-96.webp";
import next from "../../../../public/images/icons8-next.js-96.webp";
import reactQuery from "../../../../public/images/React-Query-Icon--Streamline-Svg-Logos.webp";
import typescript from "../../../../public/images/icons8-typescript-96.webp";
import js from "../../../../public/images/icons8-js-96.webp";
import redux from "../../../../public/images/icons8-redux-96.webp";
import postMan from "../../../../public/images/icons8-postman-inc-96.webp";
import vs from "../../../../public/images/icons8-visual-studio-code-96.webp";
import figma from "../../../../public/images/icons8-figma-96.webp";
import trello from "../../../../public/images/icons8-trello-96.webp";
import git from "../../../../public/images/icons8-git-96.png";
import github from "../../../../public/images/icons8-github-50.png";
import wordpress from "../../../../public/images/icons8-wordpress-96.webp";


export default function Skills() {
  return (
    <>
      <div data-aos="fade-down" id="skills" className="p-4 lg:px-20 lg:py-24 min-h-screen bg-white dark:bg-main">
        <div className="heading-center mb-12 text-center">
          <h2 className=" w-fit mx-auto bg-[#E5E7EB] dark:bg-heading-two px-[20px] py-1 rounded-xl text-[#4B5563] dark:text-paragraph ">
            Skills
          </h2>
          <p className="text-[#4B5563] md:text-[20px] dark:text-paragraph mt-4">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="grid lg:grid-cols-8 grid-cols-3 gap-5">
          <div data-aos='fade-right' className="lan-logo w-[80%]">
            <Image src={angular} className="w-full" alt="w-full" />
          </div>
          <div data-aos='fade-down' className="lan-logo w-[80%]">
            <Image src={react} className="w-full" alt="w-full" />
          </div>
          <div className="lan-logo w-[80%]">
            <Image src={next} className="w-full" alt="w-full" />
          </div>
            <div data-aos='fade-down' className="lan-logo w-[80%]">
            <Image src={js} className="w-full" alt="w-full" />
          </div>
          <div data-aos='fade-down' className="lan-logo w-[80%]">
            <Image src={typescript} className="w-full" alt="w-full" />
          </div>
           <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={sass} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={html} className="w-full" alt="w-full" />
          </div>
          <div data-aos='fade-left' className="lan-logo w-[80%]">
            <Image src={css} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={tailwind} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={bootstrap} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={redux} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={reactQuery} className="w-full" alt="w-full" />
          </div>
         
         
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={postMan} className="w-full" alt="w-full" />
          </div>

          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={git} className="w-full" alt="w-full" />
          </div>

          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={github} className="w-full" alt="w-full" />
          </div>
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={vs} className="w-full" alt="w-full" />
          </div>
          <div  data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={trello} className="w-full" alt="w-full" />
          </div>
        
          <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={figma} className="w-full" alt="w-full" />
          </div>

           <div data-aos="fade-down" className="lan-logo w-[80%]">
            <Image src={wordpress} className="w-full" alt="w-full" />
          </div>

         
          
        </div>
      </div>
    </>
  );
}
