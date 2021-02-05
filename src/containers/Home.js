import loadable from "@loadable/component";
import Carousel from "../components/Carousel/index";
import ContributorCard from "../components/Contributor/ContributorCard";

const CardList = loadable(() => import("../components/Card"));
const Footer = loadable(() => import("../components/Footer"));

const Home = () => {
  return (
    <>
      <Carousel />
      <CardList />
      <ContributorCard />
      <Footer />
    </>
  );
};

export default Home;
