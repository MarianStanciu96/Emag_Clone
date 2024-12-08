import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ProdList } from "../App";

const CarouselLaptopPC = () => {
  const listOfProd = useContext(ProdList);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel responsive={responsive}>
        <div className="product-card">
          <img src="/Pictures/Apple-MacBook-Air-2024.jpg" alt="product image" />
          <h2>Apple MacBook Air 2024</h2>
          <p className="price">5.800 Lei</p>
          <p>Laptop Apple MacBook Air 2024, 512GB, Titanium</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Apple-MacBook-Pro.jpg" alt="product image" />
          <h2>Apple MacBook Pro</h2>
          <p className="price">7000 Lei</p>
          <p>Laptop Apple MacBook Pro 2024, 512GB/1TB, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Apple-Mac-Mini.jpg" alt="product image" />
          <h2>Apple Mac Mini 2024</h2>
          <p className="price">3.800 Lei</p>
          <p>Desktop Apple Mac Mini 2024, 512GB, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/ASUS-TUF-A15.jpg" alt="product image" />
          <h2>Asus TUF A15</h2>
          <p className="price">5000 Lei</p>
          <p>Laptop Asus TUF, 512GB/1TB, Ryzen 7, Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/ASUS-VIVOBOOK-PRO-15.jpg" alt="product image" />
          <h2>Asus VivoBook Pro</h2>
          <p className="price">5.600 Lei</p>
          <p>Laptop Asus VivoBook Pro 15, 512GB/1TB, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/LENOVO-IDEA-PAD1.jpg" alt="product image" />
          <h2>Lenovo Idea Pad 1</h2>
          <p className="price">3.800 Lei</p>
          <p>Laptop Lenovo Idea Pad 1, 512GB/1TB, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/LENOVO-THINKBOOK-15.jpg" alt="product image" />
          <h2>Lenovo ThinkBook 15</h2>
          <p className="price">6000 Lei</p>
          <p>Laptop Lenovo ThinkBook 15, 512GB/1TB, Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>

        <div className="product-card">
          <img src="/Pictures/LENOVO-LEGION-5.jpg" alt="product image" />
          <h2>Lenovo Legion 5</h2>
          <p className="price">8000 Lei</p>
          <p>Laptop Lenovo Legion 5, 512GB/1TB, Intel i9 Titanium</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/HP-VICTUS-15.jpg" alt="product image" />
          <h2>HP Victus 15</h2>
          <p className="price">5.200 Lei</p>
          <p>Laptop HP Victus 15, 512GB/1TB, Ryzen 5, Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/HP-PAVILION-LAPTOP.jpg" alt="product image" />
          <h2>HP Pavilion </h2>
          <p className="price">5.500 Lei</p>
          <p>Laptop HP Pavilion, 512GB/1TB, Intel i9, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/ACER-NITRO-V15.jpg" alt="product image" />
          <h2>Acer Nitro V15</h2>
          <p className="price">7.200 Lei</p>
          <p>Laptop Acer Nitro V15, 512GB/1TB, Intel i9, Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/ACER-SWIFT-GO14.jpg" alt="product image" />
          <h2>Acer Swift Go 14</h2>
          <p className="price">4.800 Lei</p>
          <p>Laptop Acer Swift Go 14, 512GB/1TB, Intel i7, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="Pictures/ASUS-GAMING-PC-G35CA.jpg" alt="product image" />
          <h2>ASUS ROG </h2>
          <p className="price">8000 Lei</p>
          <p>Gaming Pc Asus ROG, 1TB, Ryzen 9, Black-RGB</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img
            src="/Pictures/ACER-PREDATOR-ORION-3000.jpg"
            alt="product image"
          />
          <h2>Acer Predator Orion 3000</h2>
          <p className="price">8000 Lei</p>
          <p>Gaming Pc Predator Orion 3000, 1TB, Intel i9, Black-RGB</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/PC-ACER-NITRO-N50.jpg" alt="product image" />
          <h2>Acer Nitro N50</h2>
          <p className="price">5.600 Lei</p>
          <p>Gaming Pc Acer Nitro N50, Intel i5, Black-RGB</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/GAMING-PC-HP-OMEN.jpg" alt="product image" />
          <h2>Gaming Pc HP Omen</h2>
          <p className="price">6.500 Lei</p>
          <p>Gaming Pc HP Omen, 1TB, Intel i7, Black-RGB</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img
            src="/Pictures/MSI-GAMING-PC-MPG-INFINITE-X3.jpg"
            alt="product image"
          />
          <h2>Gaming PC MSI Infinite X3</h2>
          <p className="price">8.500 Lei</p>
          <p>Gaming Pc MSI Infinite X3, 1TB, Intel i9, Black-RGB</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselLaptopPC;
