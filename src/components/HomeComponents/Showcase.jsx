import Image from "next/image";
import React from "react";
import logoLarge from "../../../public/assets/png/logo-large.png";

const Showcase = () => {
  return (
    <section className="showase py-6  flex justify-center items-center flex-col">
      <div>
        <div className="flex items-center gap-4 justify-center">
          <Image
            src={logoLarge}
            alt="Vamsnet   Making impact with technology"
            className="md:w-[50px] md:h-[50px] w-[28px] h-[28px]"
          />
          <h2 className="font-bold text-primary md:text-[56px] text-4xl md:leading-[68px] leading-10 shadow-lg opacity-70 text-center">
            VAMSNET
          </h2>
        </div>
        <p className="font-bold text-white md:text-[40px] text-xl md:leading-[48px] leading-7 shadow-lg opacity-60 text-center">
          Making impact with technology
        </p>
      </div>
    </section>
  );
};

export default Showcase;
