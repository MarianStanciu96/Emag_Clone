import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "react-multi-carousel/lib/styles.css";

import { createContext } from "react";
import Home from "./pages/Home";

export const ProdList = createContext();

function App() {
  const productData = [
    {
      id: 1,
      imageurl: "/Pictures/Google Pixel 8a.jpg",
      name: "Google Pixel 8a",
      price: "2.499 Lei",
      description: "Telefon mobil Google Pixel 8a, 128GB, 8GB RAM, 5G, Blue",
      type: "Mobile",
    },
    {
      id: 2,
      imageurl: "/Pictures/iPhone 15 Plus.jpg",
      name: "iPhone 15 Plus",
      price: "4.599 Lei",
      description: "Telefon mobil Apple iPhone 15 Plus, 128GB/256GB, 5G, Blue",
      type: "Mobile",
    },
    {
      id: 3,
      imageurl: "/Pictures/iphone-15-Pro-Max.jpg",
      name: "iPhone 15 Pro Max",
      price: "7.039 Lei",
      description:
        " Telefon mobil Apple iPhone 15 Pro Max, 256GB/512GB, 5G, Black Titanium",
      type: "Mobile",
    },
    {
      id: 4,
      imageurl: "Pictures/OnePlus-12.jpg",
      name: "OnePlus 12",
      price: "4.373 Lei",
      description:
        " Telefon mobil OnePlus 12, Dual SIM, 16GB RAM, 256GB/512GB, 5G, Flowy Emerald",
      type: "Mobile",
    },
    {
      id: 5,
      imageurl: "/Pictures/OnePlus-12R.jpg",
      name: "OnePlus 12R",
      price: "2.870 Lei",
      description:
        "Telefon mobil OnePlus 12R, Dual SIM, 16GB RAM, 256GB, 5G, Iron Gray",
      type: "Mobile",
    },
    {
      id: 6,
      imageurl: "/Pictures/OPPO-Reno-12-Pro.jpg",
      name: "Oppo Reno 12 Pro",
      price: "2.232 Lei",
      description:
        "Telefon mobil Oppo Reno12, 12GB RAM, 512GB, 5G, Astro Silver",
      type: "Mobile",
    },
    {
      id: 7,
      imageurl: "/Pictures/Samsung Galaxy S24 Ultra.png",
      name: "Samsung Galaxy S24 Ultra",
      price: "5.300 Lei",
      description:
        "Telefon mobil Samsung Galaxy S24 Ultra, Dual SIM, 12GB RAM, 256GB/512GB, 5G, Titanium Black",
      type: "Mobile",
    },
    {
      id: 8,
      imageurl: "/Pictures/Samsung Galaxy S24.jpg",
      name: "Samsung Galaxy S24",
      price: "3.700 Lei",
      description:
        "Telefon mobil Samsung Galaxy S24, Dual SIM, 8GB RAM, 256GB, 5G, Cobalt Violet",
      type: "Mobile",
    },
    {
      id: 9,
      imageurl: "/Pictures/Xiaomi 14.jpg",
      name: "Xiaomi 14",
      price: "3.600 Lei",
      description: "Telefon mobil Xiaomi 14, 12GB RAM, 512GB, 5G, Green",
      type: "Mobile",
    },
    {
      id: 10,
      imageurl: "/Pictures/iPhone 15.jpg",
      name: "iPhone 15",
      price: "4.000 Lei",
      description: "Telefon mobil Apple iPhone 15, 128GB, 5G, Green",
      type: "Mobile",
    },
    {
      id: 11,
      imageurl: "/Pictures/iPad Pro.jpg",
      name: "iPad Pro",
      price: "5.400 Lei",
      description: "Apple iPad Pro, 256GB, Wi-Fi, Standard glass, Space Black",
      type: "Tablet",
    },
    {
      id: 12,
      imageurl: "/Pictures/iPad Air.jpg",
      name: "iPad Air",
      price: "3.600 Lei",
      description: "Apple iPad Air, 128GB, Wi-Fi, Blue",
      type: "Tablet",
    },
    {
      id: 13,
      imageurl: "/Pictures/iPad-Mini.jpg",
      name: "iPad Mini",
      price: "3.000 Lei",
      description: "Apple iPad mini, 128GB, Wi-Fi, Purple",
      type: "Tablet",
    },
    {
      id: 14,
      imageurl: "/Pictures/Pixel-Tab.jpg",
      name: "Google Pixel Tab",
      price: "3.800 Lei",
      description: "Google Pixel Tab, 128GB, 12GB RAM, 5G, Alb",
      type: "Tablet",
    },
    {
      id: 15,
      imageurl: "/Pictures/Oppo-Pad-3.jpg",
      name: "OPPO Pad 3",
      price: "2.800 Lei",
      description: "OPPO Pad 3, 12.7, 12GB, 256GB, Wi-Fi + 5G, Silver",
      type: "Tablet",
    },
    {
      id: 16,
      imageurl: "/Pictures/OPPO-Pad-Neo.jpg",
      name: "OPPO Pad Neo",
      price: "1.200 Lei",
      description: "OPPO Pad Neo tablet, 12.7, 8GB, 128GB, Wi-Fi + 4G, Gray",
      type: "Tablet",
    },
    {
      id: 17,
      imageurl: "/Pictures/OnePlus-Pad2.jpg",
      name: "OnePlus Pad 2",
      price: "2.500 Lei",
      description:
        "Tableta OnePlus Pad 2, 12.1 inch, 256GB, WIFI, 9510mAh, Gri",
      type: "Tablet",
    },
    {
      id: 18,
      imageurl: "/Pictures/Samsung-Galaxy-Tab-S10-Ultra.jpg",
      name: "Samsung Galaxy Tab S10",
      price: "6.000 Lei",
      description:
        "Tableta Samsung Galaxy Tab S10 Ultra, Octa-Core, 14.6, 12GB RAM,512GB, WiFi, Moonstone Gray",
      type: "Tablet",
    },
    {
      id: 19,
      imageurl: "/Pictures/Samsung-Galaxy-Tab-FE.jpg",
      name: "Samsung Galaxy Tab FE",
      price: "2.199 Lei",
      description:
        "Tableta Samsung Galaxy Tab S9 FE, 10.9, 8GB RAM, 256GB, WIFI, Gray",
      type: "Tablet",
    },
    {
      id: 20,
      imageurl: "/Pictures/Redmi-Pad-Pro.jpg",
      name: "Redmi Pad Pro",
      price: "2.000 Lei",
      description:
        "Tableta Xiaomi Redmi Pad Pro, 12.1, 6G RAM, 128GB, Ocean Blue",
      type: "Tablet",
    },
    {
      id: 21,
      imageurl: "/Pictures/Apple-MacBook-Air-2024.jpg",
      name: "Apple MacBook Air 2024",
      price: "5.800 Lei",
      description: "Laptop Apple MacBook Air 2024, 512GB, Titanium",
      type: "Laptop",
    },
    {
      id: 22,
      imageurl: "/Pictures/Apple-MacBook-Pro.jpg",
      name: "Apple MacBook Pro",
      price: "7000 Lei",
      description: "Laptop Apple MacBook Pro 2024, 512GB/1TB, Silver",
      type: "Laptop",
    },
    {
      id: 23,
      imageurl: "/Pictures/Apple-Mac-Mini.jpg",
      name: "Apple Mac Mini 2024",
      price: "3.800 Lei",
      description: "Desktop Apple Mac Mini 2024, 512GB, Silver",
      type: "Laptop",
    },
    {
      id: 24,
      imageurl: "/Pictures/ASUS-TUF-A15.jpg",
      name: "Asus TUF A15",
      price: "5000 Lei",
      description: "Laptop Asus TUF, 512GB/1TB, Ryzen 7, Black",
      type: "Laptop",
    },
    {
      id: 25,
      imageurl: "/Pictures/ASUS-VIVOBOOK-PRO-15.jpg",
      name: "Asus VivoBook Pro",
      price: "5.600 Lei",
      description: "Laptop Asus VivoBook Pro 15, 512GB/1TB, Silver",
      type: "Laptop",
    },
    {
      id: 26,
      imageurl: "/Pictures/LENOVO-IDEA-PAD1.jpg",
      name: "Lenovo Idea Pad 1",
      price: "3.800 Lei",
      description: "Laptop Lenovo Idea Pad 1, 512GB/1TB, Silver",
      type: "Laptop",
    },
    {
      id: 27,
      imageurl: "/Pictures/LENOVO-THINKBOOK-15.jpg",
      name: "Lenovo ThinkBook 15",
      price: "6000 Lei",
      description: "Laptop Lenovo ThinkBook 15, 512GB/1TB, Black",
      type: "Laptop",
    },
    {
      id: 28,
      imageurl: "/Pictures/LENOVO-LEGION-5.jpg",
      name: "Lenovo Legion 5",
      price: "8000 Lei",
      description: "Laptop Lenovo Legion 5, 512GB/1TB, Intel i9 Titanium",
      type: "Laptop",
    },
    {
      id: 29,
      imageurl: "/Pictures/HP-VICTUS-15.jpg",
      name: "HP Victus 15",
      price: "5.200 Lei",
      description: "Laptop HP Victus 15, 512GB/1TB, Ryzen 5, Black",
      type: "Laptop",
    },
    {
      id: 30,
      imageurl: "/Pictures/HP-PAVILION-LAPTOP.jpg",
      name: "HP Pavilion",
      price: "5.500 Lei",
      description: "Laptop HP Pavilion, 512GB/1TB, Intel i9, Silver",
      type: "Laptop",
    },
    {
      id: 31,
      imageurl: "/Pictures/ACER-NITRO-V15.jpg",
      name: "Acer Nitro V15",
      price: "7.200 Lei",
      description: "Laptop Acer Nitro V15, 512GB/1TB, Intel i9, Black",
      type: "Laptop",
    },
    {
      id: 32,
      imageurl: "/Pictures/ACER-SWIFT-GO14.jpg",
      name: "4.800 Lei",
      price: "5000 Lei",
      description: "Laptop Acer Swift Go 14, 512GB/1TB, Intel i7, Silver",
      type: "Laptop",
    },
    {
      id: 33,
      imageurl: "Pictures/ASUS-GAMING-PC-G35CA.jpg",
      name: "ASUS ROG",
      price: "8000 Lei",
      description: "Gaming Pc Asus ROG, 1TB, Ryzen 9, Black-RGB",
      type: "PC",
    },
    {
      id: 34,
      imageurl: "/Pictures/ACER-PREDATOR-ORION-3000.jpg",
      name: "Acer Predator Orion 3000",
      price: "8000 Lei",
      description: "Gaming Pc Predator Orion 3000, 1TB, Intel i9, Black-RGB",
      type: "PC",
    },
    {
      id: 35,
      imageurl: "/Pictures/PC-ACER-NITRO-N50.jpg",
      name: "Acer Nitro N50",
      price: "5.600 Lei",
      description: "Gaming Pc Acer Nitro N50, Intel i5, Black-RGB",
      type: "PC",
    },
    {
      id: 36,
      imageurl: "/Pictures/GAMING-PC-HP-OMEN.jpg",
      name: "Gaming Pc HP Omen",
      price: "6.500 Lei",
      description: "Gaming Pc HP Omen, 1TB, Intel i7, Black-RGB",
      type: "PC",
    },
    {
      id: 37,
      imageurl: "/Pictures/MSI-GAMING-PC-MPG-INFINITE-X3.jpg",
      name: "Gaming PC MSI Infinite X3",
      price: "8.500 Lei",
      description: "Gaming Pc MSI Infinite X3, 1TB, Intel i9, Black-RGB",
      type: "PC",
    },
    {
      id: 38,
      imageurl: "/Pictures/SAMSUNG-QLED-65Q60D.jpg",
      name: "Televisor Smart Samsung QLED 4k",
      price: "5.500 Lei",
      description: "Televisor Smart Samsung, QLED, 4k",
      type: "TV",
    },
    {
      id: 39,
      imageurl: "/Pictures/SAMSUNG-OLED-S90D.jpg",
      name: "Televisor Smart Samsung OLED 4K",
      price: "4.500 Lei",
      description: "Televisor Smart Samsung, OLED, 4k",
      type: "TV",
    },
    {
      id: 40,
      imageurl: "/Pictures/LG-QNED-4K.jpg",
      name: "Televisor LG QNED 4k",
      price: "5000 Lei",
      description: "Televisor Smart LG, QLED, 4k",
      type: "TV",
    },
    {
      id: 41,
      imageurl: "/Pictures/LG-NANOCELL-4K.jpg",
      name: "Televisor Smart LG UHD ThinkQ",
      price: "2.500 Lei",
      description: "Televisor Smart Samsung UHD 2023, LED, 1080x1920",
      type: "TV",
    },
    {
      id: 42,
      imageurl: "/Pictures/PHILIPS-AMBILIGHT-4K.jpg",
      name: "Televisor Smart Philips Ambilight 4k",
      price: "4.000 Lei",
      description: "Televisor Smart Philips Ambilight, OLED, 4k",
      type: "TV",
    },
    {
      id: 43,
      imageurl: "/Pictures/PANASONIC-MINI-LED-4K.jpg",
      name: "Televisor Smart Panasonic Mini Led 4k",
      price: "1.800 Lei",
      description: "Televisor Smart Panasonic, LED, 4k",
      type: "TV",
    },
    {
      id: 44,
      imageurl: "/Pictures/TOSHIBA-QLED-4K.jpg",
      name: "Televizor Smart Toshiba QLED 4k",
      price: "3.500 Lei",
      description: "Televisor Televisor Smart Toshiba, QLED, 4k",
      type: "TV",
    },
    {
      id: 45,
      imageurl: "/Pictures/NIKON-D7500.jpg",
      name: "Nikon D7500",
      price: "5.700 Lei",
      description:
        "Aparat Foto DSLR Nikon D7500, 20.9 MP + Obiectiv 18-140mm VR",
      type: "Camera",
    },
    {
      id: 46,
      imageurl: "/Pictures/CANON-90D.jpg",
      name: "CANON 90D",
      price: "6.000 Lei",
      description: "Aparat foto DSLR Canon 90D, 32.5 MP, Body, 4K, Negru",
      type: "Camera",
    },
    {
      id: 47,
      imageurl: "/Pictures/SONY-ALPHA-A7.jpg",
      name: "SONY ALPHA A7",
      price: "7.000 Lei",
      description:
        "Aparat foto Mirrorless Sony Alpha A7, 24.2 MP, Full-Frame, E-Mount, 4K",
      type: "Camera",
    },
    {
      id: 48,
      imageurl: "/Pictures/NIKON-Z6.jpg",
      name: "NIKON Z6",
      price: "14.000 Lei",
      description: "Aparat foto Mirrorless Nikon Z6, Full-Frame, 24.5 MP, 6K",
      type: "Camera",
    },
    {
      id: 49,
      imageurl: "/Pictures/SAMSUNG-SOUNDBAR-Q930D.jpg",
      name: "Soundbar Samsung Q930D",
      price: "3.000 Lei",
      description:
        " Soundbar Samsung Q930D,Bluetooth, Wi-Fi, Subwoofer wireless, Dolby Atmos, Black",
      type: "Audio",
    },
    {
      id: 50,
      imageurl: "/Pictures/JBL-SOUNDBAR-800.jpg",
      name: "Soundbar JBL 800",
      price: "3.500 Lei",
      description:
        "Soundbar JBL BAR 800, 5.1.2, Dolby Atmos, Wi-Fi, Airplay, Black",
      type: "Audio",
    },
    {
      id: 51,
      imageurl: "/Pictures/HISENSE-SOUNDBAR.jpg",
      name: "Soundbar HISENSE HS312",
      price: "1.500 Lei",
      description: "Soundbar HISENSE HS312, 300W, Bluetooth, Negru",
      type: "Audio",
    },
  ];

  return (
    <>
      <ProdList.Provider value={productData}>
        <Navbar />
        <Outlet />
        <Footer />
      </ProdList.Provider>
    </>
  );
}

export default App;
