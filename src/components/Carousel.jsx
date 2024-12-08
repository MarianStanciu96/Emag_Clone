import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ProdList } from "../App";

const CarouselComponent = () => {
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
          <img src="/Pictures/Google Pixel 8a.jpg" alt="product image" />
          <h2>Google Pixel 8a</h2>
          <p className="price">2.499 Lei</p>
          <p>Telefon mobil Google Pixel 8a, 128GB, 8GB RAM, 5G, Verde</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iPhone 15 Plus.jpg" alt="product image" />
          <h2>iPhone 15 Plus</h2>
          <p className="price">4.599 Lei</p>
          <p>Telefon mobil Apple iPhone 15 Plus, 128GB/256GB, 5G, Blue</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iphone-15-Pro-Max.jpg" alt="product image" />
          <h2>iPhone 15 Pro Max</h2>
          <p className="price">7.039 Lei</p>
          <p>
            Telefon mobil Apple iPhone 15 Pro Max, 256GB/512GB, 5G, Black
            Titanium
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="Pictures/OnePlus-12.jpg" alt="product image" />
          <h2>OnePlus 12</h2>
          <p className="price">4.373 Lei</p>
          <p>
            Telefon mobil OnePlus 12, Dual SIM, 16GB RAM, 256GB/512GB, 5G, Flowy
            Emerald
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/OnePlus-12R.jpg" alt="product image" />
          <h2>OnePlus 12R</h2>
          <p className="price">2.870 Lei</p>
          <p>
            Telefon mobil OnePlus 12R, Dual SIM, 16GB RAM, 256GB, 5G, Iron Gray
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/OPPO-Reno-12-Pro.jpg" alt="product image" />
          <h2>Oppo Reno 12 Pro</h2>
          <p className="price">2.232 Lei</p>
          <p>Telefon mobil Oppo Reno12, 12GB RAM, 512GB, 5G, Astro Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img
            src="/Pictures/Samsung Galaxy S24 Ultra.png"
            alt="product image"
          />
          <h2>Samsung Galaxy S24 Ultra</h2>
          <p className="price">5.300 Lei</p>
          <p>
            Telefon mobil Samsung Galaxy S24 Ultra, Dual SIM, 12GB RAM,
            256GB/512GB, 5G, Titanium Black
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Samsung Galaxy S24.jpg" alt="product image" />
          <h2>Samsung Galaxy S24</h2>
          <p className="price">3.700 Lei</p>
          <p>
            Telefon mobil Samsung Galaxy S24, Dual SIM, 8GB RAM, 256GB, 5G,
            Cobalt Violet
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Xiaomi 14.jpg" alt="product image" />
          <h2>Xiaomi 14</h2>
          <p className="price">3.600 Lei</p>
          <p>Telefon mobil Xiaomi 14, 12GB RAM, 512GB, 5G, Green</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iPhone 15.jpg" alt="product image" />
          <h2>iPhone 15</h2>
          <p className="price">4.000 Lei</p>
          <p>Telefon mobil Apple iPhone 15, 128GB, 5G, Green</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iPad Pro.jpg" alt="product image" />
          <h2>iPad Pro</h2>
          <p className="price">5.400 Lei</p>
          <p>Apple iPad Pro, 256GB, Wi-Fi, Standard glass, Space Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iPad Air.jpg" alt="product image" />
          <h2>iPad Air</h2>
          <p className="price">3.600 Lei</p>
          <p>Apple iPad Air, 128GB, Wi-Fi, Blue</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/iPad-Mini.jpg" alt="product image" />
          <h2>iPad Mini</h2>
          <p className="price">3.000 Lei</p>
          <p>Apple iPad mini, 128GB, Wi-Fi, Purple</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Pixel-Tab.jpg" alt="product image" />
          <h2>Google Pixel Tab</h2>
          <p className="price">3.800 Lei</p>
          <p>Google Pixel Tab, 128GB, 12GB RAM, 5G, Alb</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Oppo-Pad-3.jpg" alt="product image" />
          <h2>OPPO Pad 3</h2>
          <p className="price">2.800 Lei</p>
          <p>OPPO Pad 3, 12.7", 12GB, 256GB, Wi-Fi + 5G, Silver</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/OPPO-Pad-Neo.jpg" alt="product image" />
          <h2>OPPO Pad Neo</h2>
          <p className="price">1.200 Lei</p>
          <p>OPPO Pad Neo tablet, 12.7", 8GB, 128GB, Wi-Fi + 4G, Gray</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/OnePlus-Pad2.jpg" alt="product image" />
          <h2>OnePlus</h2>
          <p className="price">2.500 Lei</p>
          <p>Tableta OnePlus Pad 2, 12.1 inch, 256GB, WIFI, 9510mAh, Gri</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img
            src="/Pictures/Samsung-Galaxy-Tab-S10-Ultra.jpg"
            alt="product image"
          />
          <h2>Samsung Galaxy Tab S10</h2>
          <p className="price">6.000 Lei</p>
          <p>
            Tableta Samsung Galaxy Tab S10 Ultra, Octa-Core, 14.6'', 12GB RAM,
            512GB, WiFi, Moonstone Gray
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Samsung-Galaxy-Tab-FE.jpg" alt="product image" />
          <h2>Samsung Galaxy Tab FE</h2>
          <p className="price">2.199 Lei</p>
          <p>
            Tableta Samsung Galaxy Tab S9 FE, 10.9", 8GB RAM, 256GB, WIFI, Gray
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/Redmi-Pad-Pro.jpg" alt="product image" />
          <h2>Redmi Pad Pro</h2>
          <p className="price">2.000 Lei</p>
          <p>Tableta Xiaomi Redmi Pad Pro, 12.1", 6G RAM, 128GB, Ocean Blue</p>
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

export default CarouselComponent;
