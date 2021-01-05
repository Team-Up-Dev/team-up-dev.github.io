import loadable from "@loadable/component";
import Carousel from "../components/Carousel/index";

const CardList = loadable(() => import("../components/Card"));
const Footer = loadable(() => import("../components/Footer"));

const Home = () => {
  return (
    <>
      <Carousel />
      <CardList />
      <Footer />
    </>
  );
};

export default Home;
