import Link from "next/link";
import React from "react";

export const NavList = ({ active }) => {
  const routes = [
    {
      name: "Home",
      link: "/",
      id: 1,
    },
    {
      name: "About Us",
      link: "/about-us",
      id: 2,
    },
    {
      name: "Our Services",
      link: "/our-services",
      id: 3,
    },
    {
      name: "Blog",
      link: "/blog",
      id: 4,
    },
  ];
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map((route) => (
        <li key={route.id}>
          <Link
            href={route.link}
            className={`${
              active === route.link ? "text-white" : "text-light-gray"
            } leading-19 font-medium text-base`}
          >
            {route.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
