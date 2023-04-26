import Image from "next/image";
import React from "react";
import linkedIn from "../../../public/assets/svg/linkedin.svg";
import youtube from "../../../public/assets/svg/youtube.svg";
import instagram from "../../../public/assets/svg/instagram.svg";
import facebook from "../../../public/assets/svg/facebook.svg";
import Link from "next/link";

export const SocialMedia = () => {
  const socialList = [
    {
      image: linkedIn,
      title: "Linkedin",
      id: 1,
    },
    {
      image: youtube,
      title: "YouTube ",
      id: 2,
    },
    {
      image: instagram,
      title: "Instagram",
      id: 3,
    },
    {
      image: facebook,
      title: "Facebook",
      id: 4,
    },
  ];
  return (
    <section className="mx-auto container md:py-6 py-4 md:px-0 px-4 grid grid-cols-4  md:gap-6 gap-4">
      {socialList.map((list) => (
        <Link
          className="flex items-center md:justify-center gap-3"
          key={list.id}
          href={"/"}
        >
          <Image
            src={list.image}
            alt="Linkedin"
            className="md:w-12 md:h-12 w-8 h-8"
          />
          <h3 className="hidden md:block font-medium text-sm leading-[29px]">
            {list.title}
          </h3>
        </Link>
      ))}
    </section>
  );
};
