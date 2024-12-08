import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import ProductPage from "./components/Product-Page.jsx";
import Contact from "./pages/Contact.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import CosulMeu from "./pages/CosulMeu.jsx";
import TableteTelefoane from "./pages/TableteTelefoane.jsx";
import PCLaptop from "./pages/PC&Laptop.jsx";
import TVAudioFoto from "./pages/TVAudioFoto.jsx";
import EasyBuyBack from "./pages/EasyBuyBack.jsx";
import Genius from "./pages/Genius.jsx";
import OferteEmag from "./pages/OferteEmag.jsx";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/CosulMeu" element={<CosulMeu />}></Route>
      <Route path="/productPage/:id" element={<ProductPage />}></Route>
      <Route
        path="/TableteTelefoane"
        element={<TableteTelefoane />}
      ></Route>{" "}
      <Route path="/PC&Laptop" element={<PCLaptop />}></Route> {/* New Route */}
      <Route path="/TVAudioFoto" element={<TVAudioFoto />}></Route>{" "}
      <Route path="/EasyBuyBack" element={<EasyBuyBack />}></Route>{" "}
      <Route path="/Genius" element={<Genius />}></Route>{" "}
      <Route path="/OferteEmag" element={<OferteEmag />}></Route>{" "}
      <Route path="*" element={<div>Error</div>}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

let cartCount = 0;

// Update the cart count when a product is added
document.querySelectorAll(".product-card button").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    document.querySelector(
      '.user-cart a[href*="Cosul meu"]'
    ).textContent = `Cosul meu (${cartCount})`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown menu visibility on click
  dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    // Check if the dropdown content is currently hidden or shown
    const isVisible = dropdownContent.classList.contains("show");
    // Toggle the 'show' class based on current visibility
    dropdownContent.classList.toggle("show", !isVisible);
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (event) {
    if (
      !dropdown.contains(event.target) &&
      dropdownContent.classList.contains("show")
    ) {
      dropdownContent.classList.remove("show");
    }
  });
});
