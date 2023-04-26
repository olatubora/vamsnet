import React from "react";

export const WhatWeOffer = () => {
  const offers = [
    {
      id: 1,
      name: "Education",
      image:
        "https://res.cloudinary.com/mobinet/image/upload/v1682312281/spacefi/Education_ehn0bb.png",
    },
    {
      id: 2,
      name: "Technology",
      image:
        "https://res.cloudinary.com/mobinet/image/upload/v1682312282/spacefi/technology_v4oxci.png",
    },
    {
      id: 3,
      name: "Positivity",
      image:
        "https://res.cloudinary.com/mobinet/image/upload/v1682312283/spacefi/positive_uh9vgf.png",
    },
    {
      id: 4,
      name: "Quality Experience ",
      image:
        "https://res.cloudinary.com/mobinet/image/upload/v1682312285/spacefi/experience_xkwtnh.png",
    },
  ];
  return (
    <section className="mx-auto container grid md:grid-cols-4 grid-cols-1 py-12 gap-4 md:px-0 px-4">
      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            backgroundImage: `url(${offer.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "220px",
          }}
          className=" rounded-xl"
        >
          <h3 className="px-4 py-3 font-semibold text-base text-white leading-19">
            {offer.name}
          </h3>
        </div>
      ))}
    </section>
  );
};
