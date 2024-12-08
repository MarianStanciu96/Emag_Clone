import CarouselComponent from "../components/Carousel";
import CarouselLaptopPC from "../components/CarouselLaptopPC";
import CarouselTVAudioPhoto from "../components/CarouselTVAudioFoto";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <h1>Telefoane si Tablete</h1>
      <CarouselComponent />
      <h1>Laptop & PC</h1>
      <CarouselLaptopPC />
      <h1>TV,Audio & Photo</h1>
      <CarouselTVAudioPhoto />
      <Product />
    </div>
  );
};

export default Home;
