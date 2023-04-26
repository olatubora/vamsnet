import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../public/assets/png/slide1.png";
import Image from "next/image";
import { CustomButton } from "../UI/Button/CustomButton";
export const Hero = () => {
  return (
    <Carousel showStatus={false} dynamicHeight={true}>
      <div className="">
        <Image src={slider1} alt="slide1" className="" />
        <div className=" absolute top-0 left-0 w-full  h-full ">
          <div className="mx-auto container grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-2  lg:py-12 py-6 md:px-0 px-4">
            <div>
              <div className="shadow-2xl border-2 border-primary md:p-4  p-2 rounded-tr-[30px]  rounded-bl-[30px]">
                <h3 className="text-white lg:font-normal font-bold xl:text-5xl  xl:leading-[68px] tracking-normal md:text-2xl text-xl md:leading-10 leading-[28px]">
                  SCALE YOUR <br className="hidden md:block" /> BUSINESS WITH US{" "}
                  <br className="hidden md:block" /> TODAY AT A VERY{" "}
                  <br className="hidden md:block" />{" "}
                  <span className="text-secondary font-bold">LOW COST!</span>
                </h3>
              </div>
              <div className="md:my-6 shadow-xl p-4">
                <p className="xl:text-5xl text-white  xl:leading-[58px] tracking-normal md:text-3xl text-2xl md:leading-10 leading-[32px]">
                  BRING YOUR IDEAS <br /> TO REALITY!
                </p>
              </div>
            </div>
            <div className="md:flex justify-center items-center flex-col">
              <div className=" md:p-6 p-2  rounded-md text-white shadow-lg">
                <p className="md:text-base text-sm md:text-justify leading-[28px] md:my-4 my-2">
                  We are dedicated to providing you and your team with a well
                  structured business growth solutions,{" "}
                  <span className="text-primary font-bold">
                    websites, custom mobile app, digital marketing & seo,
                    softwares
                  </span>{" "}
                  and more tailored to your targeted customers in no time.
                </p>
                <div className="text-start flex  items-center gap-6 justify-center">
                  <CustomButton
                    text={"Contact Us"}
                    className={
                      "bg-primary text-secondary lg:p-4 p-2  lg:w-[170px]  lg:h-[61px]  border border-white rounded-lg hover:opacity-50 lg:text-2xl text-xm font-semibold lg:leading-[29px]"
                    }
                  />
                  <CustomButton
                    text={"Learn More"}
                    className={
                      "text-light-gray  g:p-4 p-2  lg:w-[170px]  lg:h-[61px] border border-white rounded-lg hover:opacity-50 lg:text-2xl text-sm font-semibold leading-[29px]"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="legend">Legend 1</p>
      </div>
      <div className="">
        <Image src={slider1} alt="slide1" />
        <p className="legend">Legend 2</p>
      </div>
      <div className="">
        <Image src={slider1} alt="slide1" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
