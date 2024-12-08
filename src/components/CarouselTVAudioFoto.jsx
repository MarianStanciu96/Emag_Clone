import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ProdList } from "../App";

const CarouselTVAudioPhoto = () => {
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
          <img src="/Pictures/SAMSUNG-QLED-65Q60D.jpg" alt="product image" />
          <h2>Televisor Smart Samsung QLED 4k</h2>
          <p className="price">5.500 Lei</p>
          <p>Televisor Smart Samsung, QLED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/SAMSUNG-OLED-S90D.jpg" alt="product image" />
          <h2>Televisor Smart Samsung OLED 4K</h2>
          <p className="price">4.500 Lei</p>
          <p>Televisor Smart Samsung, OLED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/LG-QNED-4K.jpg" alt="product image" />
          <h2>Televisor LG QNED 4k</h2>
          <p className="price">5.000 Lei</p>
          <p>Televisor Smart LG, QLED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/LG-NANOCELL-4K.jpg" alt="product image" />
          <h2>Televisor Smart LG UHD ThinkQ</h2>
          <p className="price">2.500 Lei</p>
          <p>Televisor Smart Samsung UHD 2023, LED, 1080x1920</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/PHILIPS-AMBILIGHT-4K.jpg" alt="product image" />
          <h2>Televisor Smart Philips Ambilight 4k</h2>
          <p className="price">4.000 Lei</p>
          <p>Televisor Smart Philips Ambilight, OLED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/PANASONIC-MINI-LED-4K.jpg" alt="product image" />
          <h2>Televisor Smart Panasonic Mini Led 4k</h2>
          <p className="price">1.800 Lei</p>
          <p>Televisor Smart Panasonic, LED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/TOSHIBA-QLED-4K.jpg" alt="product image" />
          <h2>Televizor Smart Toshiba QLED 4k</h2>
          <p className="price">3.500 Lei</p>
          <p>Televisor Televisor Smart Toshiba, QLED, 4k</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/NIKON-D7500.jpg" alt="product image" />
          <h2>Nikon D7500</h2>
          <p className="price">5.700 Lei</p>
          <p>Aparat Foto DSLR Nikon D7500, 20.9 MP + Obiectiv 18-140mm VR</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/CANON-90D.jpg" alt="product image" />
          <h2>CANON 90D</h2>
          <p className="price">6.000 Lei</p>
          <p>Aparat foto DSLR Canon 90D, 32.5 MP, Body, 4K, Negru</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/SONY-ALPHA-A7.jpg" alt="product image" />
          <h2>SONY ALPHA A7</h2>
          <p className="price">7.000 Lei</p>
          <p>
            Aparat foto Mirrorless Sony Alpha A7, 24.2 MP, Full-Frame, E-Mount,
            4K
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/NIKON-Z6.jpg" alt="product image" />
          <h2>NIKON Z6</h2>
          <p className="price">14.000 Lei</p>
          <p>Aparat foto Mirrorless Nikon Z6, Full-Frame, 24.5 MP, 6K</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/SAMSUNG-SOUNDBAR-Q930D.jpg" alt="product image" />
          <h2>Soundbar Samsung Q930D</h2>
          <p className="price">3.000 Lei</p>
          <p>
            Soundbar Samsung Q930D,Bluetooth, Wi-Fi, Subwoofer wireless, Dolby
            Atmos, Black
          </p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/JBL-SOUNDBAR-800.jpg" alt="product image" />
          <h2>Soundbar JBL 800</h2>
          <p className="price">3.500 Lei</p>
          <p>Soundbar JBL BAR 800, 5.1.2, Dolby Atmos, Wi-Fi, Airplay, Black</p>
          <p>
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Adauga in Cos
            </button>
          </p>
        </div>
        <div className="product-card">
          <img src="/Pictures/HISENSE-SOUNDBAR.jpg" alt="product image" />
          <h2>Soundbar HISENSE HS312</h2>
          <p className="price">1.500 Lei</p>
          <p>Soundbar HISENSE HS312, 300W, Bluetooth, Negru</p>
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

export default CarouselTVAudioPhoto;
