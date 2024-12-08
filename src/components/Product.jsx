import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { ProdList } from "../App";

const Product = () => {
  const db = useContext(ProdList);
  return (
    <>
      {/* <Carousel responsive={responsive}> */}
      {db
        .filter((dbProd) => {
          return (
            dbProd.type === "TV" ||
            dbProd.type === "Mobile" ||
            dbProd.type === "Audio" ||
            dbProd.type === "PC" ||
            dbProd.type === "Laptop" ||
            dbProd.type === "Audio" ||
            dbProd.type === "Camera" ||
            dbProd.type === "Tablet"
          );
        })
        .map((dbProd) => {
          return (
            <div key={dbProd.id} className="product-card">
              <img src={dbProd.imageurl} alt="product image" />
              <h2>{dbProd.name}</h2>
              <p className="price">{dbProd.price}</p>
              <p>{dbProd.description}</p>
              <p>{dbProd.type}</p>
              <p>
                <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Adauga in Cos
                </button>
              </p>
            </div>
          );
        })}
      {/* <div className="product-card">
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
          Telefon mobil Apple iPhone 15 Pro Max, 256GB/512GB, 5G, Black Titanium
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
        <img src="/Pictures/Samsung Galaxy S24 Ultra.png" alt="product image" />
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
          Telefon mobil Samsung Galaxy S24, Dual SIM, 8GB RAM, 256GB, 5G, Cobalt
          Violet
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
        <h2>OnePlus Pad 2</h2>
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
          Tableta Samsung Galaxy Tab S10 Ultra, Octa-Core, 14.6'', 12GB
          RAM,512GB, WiFi, Moonstone Gray
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
        <img src="/Pictures/ACER-PREDATOR-ORION-3000.jpg" alt="product image" />
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
          Aparat foto Mirrorless Sony Alpha A7, 24.2 MP, Full-Frame, E-Mount, 4K
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
      </div> */}
      {/* </Carousel> */}
    </>
  );
};

export default Product;

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 1024 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 800 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 800, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
