import { BrandingOne } from "@/components/HomeComponents/BrandingOne";
import { BrandingTwo } from "@/components/HomeComponents/BrandingTwo";
import { ChatWithUs } from "@/components/HomeComponents/ChatWithUs";
import { Faqs } from "@/components/HomeComponents/Faqs";
import { Hero } from "@/components/HomeComponents/Hero";
import { Ourservices } from "@/components/HomeComponents/Ourservices";
import Showcase from "@/components/HomeComponents/Showcase";
import { SocialMedia } from "@/components/HomeComponents/SocialMedia";
import { WhatWeOffer } from "@/components/HomeComponents/WhatWeOffer";
import MainLayout from "@/components/layouts";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const chatUs = [
    {
      title: "You can also chat with us on Whatsapp",
      name: "Chat With Us",
      id: 1,
    },
    {
      title: "Want to become an expert in any tech skill?",
      name: "Register Here",
      id: 2,
    },
  ];

  const chatUs2 = [
    {
      title: "Do you want to get updated on job opportunities? ",
      name: "Subcribe Free",
      id: 1,
    },
    {
      title: "Do you want to get updated on our newsletters? ",
      name: "Subcribe For Free",
      id: 2,
    },
  ];
  return (
    <MainLayout active={router.asPath}>
      <>
        <Hero />
        <SocialMedia />
        <Faqs />
        <ChatWithUs lists={chatUs} color={"bg-white"} />
        <Ourservices />
        <WhatWeOffer />
        <BrandingOne />
        <BrandingTwo />
        <Faqs />
        <ChatWithUs lists={chatUs2} color={"bg-[#D9D9D9]"} />
        <Showcase />
      </>
    </MainLayout>
  );
}
