import React from "react";
import arrow from "../../../public/assets/svg/smallArrow.svg";
import arrowdown from "../../../public/assets/svg/arrowdown.svg";
import Image from "next/image";
import Link from "next/link";

export const Ourservices = () => {
  const services = [
    {
      id: 1,
      name: "Online Marketing & SEO",
      slug: "online-Marketing-&-SEO",
    },
    {
      id: 2,
      name: "Ui/Ux Design",
      slug: "ui/ux-design",
    },
    {
      id: 3,
      name: "Software Development",
      slug: "software-development",
    },
    {
      id: 4,
      name: "Website Development",
      slug: "website-development",
    },
    {
      id: 5,
      name: "Mobile App Development",
      slug: "mobile-app-evelopment",
    },
    {
      id: 6,
      name: "E-commerce Development",
      slug: "e-commerce-development",
    },
  ];
  return (
    <section className="ourServices py-6 md:px-0 px-4 md:h-[500px] h-[604px]">
      <div className="container mx-auto">
        <h3 className="font-semibold md:text-3xl text-xl leading-[39px] text-[#D9D9D9] text-center my-4">
          Our Services
        </h3>
        <div className="grid md:grid-cols-2 gap-5 grid-cols-1 md:mt-12">
          {services.map((service) => (
            <Link
              href={service.slug}
              className="shw bg-[#EEEEEE] md:h-20 h-[54px] rounded-md flex justify-center items-center gap-4"
              key={service.id}
            >
              <p className="font-bold md:text-2xl text-sm leading-29 text-secondary">
                {service.name}
              </p>
              <Image src={arrow} alt={service.name} />
            </Link>
          ))}
        </div>
        <div className="text-center flex justify-center items-center my-6">
          <button className="bg-white text-secondary shw h-[39px] w-[77px] flex justify-center items-center gap-2 rounded-md">
            More <Image src={arrowdown} alt="More" />
          </button>
        </div>
      </div>
    </section>
  );
};
