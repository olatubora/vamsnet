import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { NavList } from "./NavList";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/assets/svg/logo.svg";
import { CustomButton } from "../UI/Button/CustomButton";

export default function NavbarMenu({ active }) {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 568 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      className="py-2 px-4 lg:px-8 lg:py-4 bg-light-dark sticky top-0 left-0 shadow-none backdrop-blur-0  border-none bg-opacity-100 z-[1000]"
      fullWidth
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image src={Logo} alt="vamsnet Technology Logo" />
        </Link>
        <div className="hidden lg:block">
          <NavList active={active} />
        </div>
        <CustomButton
          className="hidden lg:inline-block bg-primary text-secondary font-semibold text-base leading-19 w-[137px] h-[51px] rounded-lg p-4"
          text={"Contact Us"}
        />

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <NavList />
          <CustomButton
            className="inline-block lg:hidden bg-primary text-secondary font-semibold text-base leading-19 w-full h-[51px] rounded-lg p-4"
            text={"Contact Us"}
          />
        </div>
      </MobileNav>
    </Navbar>
  );
}
