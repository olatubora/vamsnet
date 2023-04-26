import Image from "next/image";
import React from "react";
import arrowLeft from "../../../public/assets/svg/arrowLeft.svg";
import { CustomButton } from "../UI/Button/CustomButton";

export const ChatWithUs = ({ lists, color }) => {
  return (
    <section className="container mx-auto py-6 md:px-0 px-4">
      {lists.map((list) => (
        <div
          className=" flex items-center gap-6 md:flex-row flex-col my-4"
          key={list.id}
        >
          <div
            className={`py-2 shadow-lg  px-4 flex justify-center items-center gap-6 flex-1 h-[71px] rounded-md w-full ${color}`}
          >
            <h3 className="text-black font-medium md:text-base text-xs leading-19 ">
              {list.title}
            </h3>
            <Image
              src={arrowLeft}
              alt="arrow"
              className="md:block hidden w-[100px]"
            />
          </div>
          <CustomButton
            text={list.name}
            className={
              "bg-primary text-secondary p-3 rounded-[10px] md:w-[174px] w-full text-base leading-19 font-medium md:h-[54px] h-10"
            }
          />
        </div>
      ))}
    </section>
  );
};
