import React from "react";
import HeroCard from "../components/HeroCard/HeroCard";
import ContentCard from "../components/ContentCard/ContentCard";
import BannerCard from "../components/BannerCard/BannerCard";
import ThumbnailCard from "../components/ThumbnailCard/ThumbnailCard";
import Article from "../components/Article/Article";
import ContactForm from "../components/ContactForm/ContactForm";
import Section, { columns } from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import contentHeaderImg from "../images/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.jpg";
import thumbnailImg1 from "../images/bruno-cervera-YH7mGnigHRs-unsplash 1 1.jpg";
import thumbnailImg2 from "../images/vandan-patel-vfiuGpL9fiU-unsplash 1 1.jpg";

export default function MainPage() {
  return (
    <>
      <Section layout={columns.smallLarge}>
        <HeroCard></HeroCard>
        <ContentCard img={contentHeaderImg}></ContentCard>
      </Section>
      <SectionTitle subtitle="offers today" dark>
        Products
      </SectionTitle>
      <Section>
        <BannerCard></BannerCard>
        <div>
          <ThumbnailCard img={thumbnailImg1} title="THE BEST COFFE" />
          <ThumbnailCard img={thumbnailImg2} title="TOP 100 BOOKS" />
        </div>
      </Section>
      <SectionTitle underline dark>
        Contact
      </SectionTitle>
      <Section layout={columns.largeSmall}>
        <Article title="Contact"></Article>
        <ContactForm></ContactForm>
      </Section>
    </>
  );
}
