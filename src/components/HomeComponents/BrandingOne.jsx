import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/png/1.png";
import image2 from "../../../public/assets/png/2.png";
import image3 from "../../../public/assets/png/3.png";

export const BrandingOne = () => {
  return (
    <section className="brandingOne py-12 md:px-0 px-4">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-6 relative top-0 left-0">
        <div>
          <h2 className="font-bold md:text-xl text-sm md:leading-39  leading-[24px] text-light-gray w-full md:text-start text-center">
            DO YOU WANT TO MAKE MORE SALES? DOES YOUR BUSINESS FRUSTRATES YOU?
            LOOK NO FURTHER!
          </h2>
          <p className="text-white font-medium text-sm leading-19 lg:w-[446px] w-full my-4 md:text-start text-center">
            {` "Work with our world-class business and tech expert team  and take your business to the next level"`}
          </p>
          <p className="font-normal text-sm leading-6 text-[#EEEEEE] md:text-start text-center">
            We understand that every business is different, which is why we take
            the time to get to know you and your{" "}
            <span className="text-primary"> BRAND</span> so that we can create a
            customized{" "}
            <span className="text-primary">
              BUSINESS GROWTH SOLUTIONS, A WEBSITE, digital marketing plan, and
              more designed specifically for you.
            </span>{" "}
            With our expertise and attention to detail, you can trust that your
            business is in good hands
          </p>
        </div>
        <div className="relative top-0 left-0 w-full h-full">
          <Image
            src={image1}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute top-0 right-0 md:mb-0 mb-4"
          />
          <Image
            src={image2}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute top-[118px] left-[100px] md:mb-0 mb-4 lg:block hidden"
          />
          <Image
            src={image3}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute left-0 top-[250px] md:mb-0 mb-4 lg:block hidden"
          />
        </div>
      </div>
    </section>
  );
};
