import MainLayout from "@/components/layouts";
import { useRouter } from "next/router";

export default function OurServices() {
  const router = useRouter();
  return (
    <MainLayout active={router.asPath}>
      <section className="">Our Service</section>
    </MainLayout>
  );
}
