import Image from "next/image";
import React from "react";
import image1 from "../../../public/assets/png/4.png";
import image2 from "../../../public/assets/png/5.png";
import image3 from "../../../public/assets/png/6.png";
import { CustomButton } from "../UI/Button/CustomButton";

export const BrandingTwo = () => {
  return (
    <section className="brandingOne md:py-12 py-6 md:px-0 px-4 my-4">
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-6 relative top-0 left-0">
        <div className="relative top-0 left-0 w-full h-full">
          <Image
            src={image1}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute top-0 left-0 md:mb-0 mb-4 lg:block hidden"
          />
          <Image
            src={image2}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute top-[118px] left-[100px] md:mb-0 mb-4 lg:block hidden"
          />
          <Image
            src={image3}
            alt="Vamsnet Technology"
            className="md:w-[327px] w-full h-[178px] md:absolute right-0 top-[250px] md:mb-0 mb-4 lg:block hidden"
          />
        </div>
        <div>
          <h2 className="font-bold md:text-xl text-xs md:leading-39  leading-[24px] text-light-gray w-full md:text-start text-center">
            DO YOU WANT TO EARN more? ARE YOU LOOKING FOR REMOTE JOB? CONTACT US
            TODAY!
          </h2>
          <p className="text-white font-medium text-xs leading-19 lg:w-[446px] w-full md:my-4 my-2 md:text-start text-center">
            {` "Get a reliable job with your tech skills. make money and make impact!"`}
          </p>
          <p className="font-normal text-sm leading-6 text-[#EEEEEE] md:text-start text-center">
            Dont let a lack of job and experience hold you back from achieving
            your personal and business goals. Let us help you leverage your
            skillS, SET YOU UP TO makE impact and build wealth. Get to the next
            level with our reliable and efficient OPPORTUNITIES. Contact us
            today to learn more and take the first step towards success. We
            understand that every business is different, which is why we take
            the time to get to know you and your{" "}
          </p>
          <div className="flex justify-end">
            <CustomButton
              className={
                "md:p-6 p-4 text-base leading-19 my-3 font-medium md:w-[200px] w-full  shadow-md bg-primary text-white rounded-md hover:bg-yellow-800 hover:text-secondary transition-all duration-100 ease-out"
              }
              text={"Apply  Now"}
            />
          </div>
        </div>
        <Image
          src={image3}
          alt="Vamsnet Technology"
          className="md:w-[327px] w-full h-[150px] md:absolute right-0 top-[250px] md:mb-0 mb-4 md:hidden block"
        />
      </div>
    </section>
  );
};
