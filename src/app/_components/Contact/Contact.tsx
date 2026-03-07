import React from "react";

export default function Contact() {
  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }
  return (
    <>
      <div
      data-aos="fade-up"
        id="contact"
        className="flex flex-col p-4 lg:px-20 lg:py-24 min-h-screen bg-[#F9FAFB] dark:bg-second">
        <div className="heading-center mb-12 text-center">
          <h2 className=" w-fit mx-auto bg-[#E5E7EB] dark:bg-heading-two px-[20px] py-1 rounded-xl text-[#4B5563]  dark:text-paragraph ">
            Get in touch
          </h2>
          <p className="text-[#4B5563]  md:text-[20px] dark:text-paragraph mt-4">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="flex gap-8 flex-col  grow ">
          <div className="middle text-center space-y-4">
            <p className="text-second dark:text-[#F9FAFB] text-[18px] md:text-[36px] font-semibold block">
              <a href="mailto:muhmed.abdelaziem@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                muhmed.abdelaziem@gmail.com
              </a>
              <i
                className="fa-regular fa-clone cursor-pointer"
                onClick={() => copyText("muhmed.abdelaziem@gmail.com")}></i>
            </p>
            <p className="text-second dark:text-[#F9FAFB] text-[18px] md:text-[36px] font-semibold cursor-pointer">
              <a href="https://wa.me/201012658066">
                <i className="fa-solid fa-phone"></i> +20 1012658066
              </a>
              <i
                className="fa-regular fa-clone cursor-pointer "
                onClick={() => copyText("+201012658066")}></i>
            </p>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-second dark:text-[#F9FAFB]">
              You may also find me on these platforms!
            </p>
            <div className="flex justify-center gap-1 text-[#4B5563] dark:text-white">
              <a
                href="https://www.linkedin.com/in/muhmaedabdelaziem/"
                className="text-[20px]">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/mohamed.abdelaziem1/"
                className="text-[20px]">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://github.com/mohamed-abdelaziem"
                className="text-[20px]">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
