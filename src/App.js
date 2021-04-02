import Layout from "./components/Layout/Layout";
import HeroCard from "./components/HeroCard/HeroCard";
import ContentCard from "./components/ContentCard/ContentCard";
import BannerCard from "./components/BannerCard/BannerCard";
import ThumbnailCard from "./components/ThumbnailCard/ThumbnailCard";
import Article from "./components/Article/Article";
import ContactForm from "./components/ContactForm/ContactForm";
import contentHeaderImg from "./images/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.jpg";
import thumbnailImg1 from "./images/bruno-cervera-YH7mGnigHRs-unsplash 1 1.jpg";
import thumbnailImg2 from "./images/vandan-patel-vfiuGpL9fiU-unsplash 1 1.jpg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <HeroCard></HeroCard>
        <ContentCard img={contentHeaderImg}></ContentCard>
        <BannerCard></BannerCard>
        <ThumbnailCard img={thumbnailImg1} title="THE BEST COFFE" />
        <ThumbnailCard
          img="./images/vandan-patel-vfiuGpL9fiU-unsplash 1 1.jpg"
          title="TOP 100 BOOKS"
        />
        <Article title="Contact"></Article>
        <ContactForm></ContactForm>
      </Layout>
    </div>
  );
}

export default App;
