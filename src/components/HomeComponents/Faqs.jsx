import Link from "next/link";
import React from "react";

export const Faqs = () => {
  const faqs = [
    {
      name: "I need a solution for my business",
      link: "I-need-a-solution-for-my-business",
      id: 1,
    },
    {
      name: "I want to apply for job at Vamsnet",
      link: "I-want-to-apply-for-job-at-Vamsnet",
      id: 2,
    },
    {
      name: "I want to hire a tech expert",
      link: "I-want-to-hire-a-tech-expert",
      id: 3,
    },
    {
      name: "I have another question/comment",
      link: "I have another question / comment",
      id: 4,
    },
  ];
  return (
    <section className="bg-[#D9D9D9] w-full md:py-6 py-4 shadow-lg">
      <div className="container mx-auto">
        <h3 className="text-center font-medium md:text-xl text-base text-[#616161] leading-[24px] md:my-6 my-2">
          HOW CAN WE HELP YOU TODAY?
        </h3>
        <div className="md:px-0 px-4 w-full">
          {faqs.map((faq) => (
            <Link
              href={`#${faq.link}`}
              className="block  bg-white md:py-5 py-4 text-center rounded-lg shadow-lg md:text-2xl text-sm leading-29 font-semibold text-secondary my-3"
              key={faq.id}
            >
              {faq.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
