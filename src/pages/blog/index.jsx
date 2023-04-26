import MainLayout from "@/components/layouts";
import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  return (
    <MainLayout active={router.asPath}>
      <section className="">Blog</section>
    </MainLayout>
  );
}
