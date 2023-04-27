import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/svg/logo.svg";
import {
  LearnList,
  companyList,
  getHelpList,
  socialList,
} from "@/constant/FooterLinks";
const Footer = () => {
  return (
    <footer className=" bg-light-dark py-12 border-t-2 border-white shadow-lg">
      <section className="mx-auto container grid lg:grid-cols-5 md:grid-cols-1 gap-6">
        <div>
          <Link href={"/"}>
            <Image src={Logo} alt="Vamsnet Logo" />
          </Link>
        </div>
        <div>
          <h3 className="font-bold text-xl leading-19 text-white mb-6">
            Company
          </h3>
          <ul className="flex flex-col items-start gap-3">
            {companyList.map((company) => (
              <li key={company.id}>
                <Link
                  href={company.link}
                  className="font-semibold text-sm leading-6 text-white"
                >
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl leading-19 text-white mb-6">
            Learn
          </h3>
          <ul className="flex flex-col items-start gap-3">
            {LearnList.map((company) => (
              <li key={company.id}>
                <Link
                  href={company.link}
                  className="font-semibold text-sm leading-6 text-white"
                >
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl leading-19 text-white mb-6">
            Get Help
          </h3>
          <ul className="flex flex-col items-start gap-3">
            {getHelpList.map((company) => (
              <li key={company.id}>
                <Link
                  href={company.link}
                  className="font-semibold text-sm leading-6 text-white"
                >
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl leading-19 text-white mb-6">
            Contact Us
          </h3>
          <ul className="flex flex-col items-start gap-3">
            {socialList.map((company) => (
              <li key={company.id}>
                <Link
                  href={company.link}
                  className="font-semibold text-sm leading-6 text-white"
                >
                  <Image
                    src={company.image}
                    alt={company.name}
                    className="h-[40px]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
