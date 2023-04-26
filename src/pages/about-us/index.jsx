import MainLayout from "@/components/layouts";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter();
  return (
    <MainLayout active={router.asPath}>
      <section className="">About Us</section>
    </MainLayout>
  );
}
