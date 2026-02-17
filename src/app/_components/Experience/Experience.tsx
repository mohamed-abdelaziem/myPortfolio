import Image from "next/image";
import React from "react";
import nzmLogo from "../../../../public/images/nzm-logo.png";
import torvoLogo from "../../../../public/images/torvo-logo.png";

export default function Experience() {
  return (
    <>
      <div
      data-aos="fade-up"
        id="experience"
        className="p-4 lg:px-20 lg:py-24 min-h-screen bg-[#F9FAFB] dark:bg-second">
        <div className="heading-center mb-12 text-center">
          <h2 className=" w-fit mx-auto bg-[#E5E7EB] dark:bg-heading-two px-[20px] py-1 rounded-xl text-[#4B5563] dark:text-paragraph ">
            Experience
          </h2>
          <p className="text-[#4B5563] md:text-[20px] dark:text-paragraph mt-4">
            Here is a quick summary of my most recent experiences
          </p>
        </div>

        <div className="my-container  md:px-8 flex flex-col items-center gap-12 ">
          <div data-aos="fade-right" className="bg-white dark:bg-divider-bg rounded-xl lg:w-4xl lg:h-72 p-8">
            <div className="flex items-start flex-col lg:flex-row gap-4 lg:gap-[5%] flex-wrap">
              <div className="company-logo w-full lg:w-[20%] ">
                <Image
                  src={nzmLogo}
                  alt="nzmLogo"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-full lg:w-[50%]  center flex flex-col gap-4">
                <h3 className="text-[18px] font-semibold text-second dark:text-[#F9FAFB]">
                  Wordpress Developer
                </h3>
                <ul className="flex gap-1 flex-col list-disc text-[#4B5563] dark:text-paragraph text-links">
                  <li>
                    Developing responsive user interfaces with a strong focus on
                    performance and user experience. 
                  </li>
                  <li>Optimizing website speed, Core Web Vitals, and overall performance.</li>
                  <li>Collaborating with designers and marketing teams to deliver conversion-focused digital solutions.</li>
                </ul>
              </div>

              <div className="date w-full lg:w-[20%] ">
                <p className="text-links text-heading-two dark:text-[#E5E7EB] font-semibold">2024 Aug - Present</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="bg-white dark:bg-divider-bg rounded-xl lg:w-4xl lg:h-72 p-8">
            <div className="flex items-start flex-col lg:flex-row gap-4 lg:gap-[5%] flex-wrap">
              <div className="company-logo w-full lg:w-[20%] ">
                <Image
                  src={torvoLogo}
                  alt="torvoLogo"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="w-full lg:w-[50%]  center flex flex-col gap-4">
                <h3 className="text-[18px] font-semibold text-second dark:text-[#F9FAFB]">
                  Front-End & WordPress Developer – Automation Solutions
                </h3>
                <ul className="flex gap-1 flex-col list-disc text-[#4B5563] dark:text-paragraph text-links">
                  <li>
                   Implementing automations for lead handling, customer communication, and internal workflows.
                  </li>
                  <li>Integrating third-party tools, APIs, and tracking systems.</li>
                  <li>Collaborating with technical and marketing teams to deliver efficient, conversion-focused products.</li>
                </ul>
              </div>

              <div className="date w-full lg:w-[20%] ">
                <p className="text-links text-heading-two dark:text-[#E5E7EB] font-semibold">2024 Aug - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
