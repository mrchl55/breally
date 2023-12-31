import { Inter } from "next/font/google";
import type { GetStaticProps, NextPage } from "next";
import Hero from "@/components/Sections/Hero/Hero";
import { getAllPages, getPageById } from "@/lib/helpers";
import { PageData, PageProps } from "@/models/page";
import Newsletter from "@/components/Sections/Newsletter/Newsletter";
import Testimonial from "@/components/Sections/Testimonial/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps<{
  page: PageData;
}> = async () => {
  const pages = await getAllPages();
  const homePage = await pages.find((p: PageData) => p.url === "/");

  return { props: { page: await getPageById(homePage.id) } };
};
type Props = {
  page: PageProps;
};
export default function Home(props: Props) {
  const { page } = props;
  const { sections } = page;
  const heroProps = sections.find((section) => section.type === "hero");
  const testimonialProps = sections.find(
    (section) => section.type === "testimonial"
  );

  return (
    <>
      {heroProps ? (
        <Hero
          img={heroProps.img!}
          text={heroProps.text!}
          alt={heroProps.text}
          imgWidth={516}
          imgHeight={384}
        />
      ) : (
        ""
      )}
      {testimonialProps ? (
        <Testimonial
          author={testimonialProps.author!}
          text={testimonialProps.text!}
        />
      ) : (
        ""
      )}
      <Newsletter />
    </>
  );
}
