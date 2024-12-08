import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to control the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src="Pictures/Logo-Emag.png" alt="Emag Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded px-2">
            <input
              type="text"
              placeholder="Începe o nouă căutare"
              className="flex-grow py-1 px-6 outline-none"
            />
            <button className="py-1 px-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Cautare
            </button>
          </div>

          <div className="user-cart">
            <a href="/ContulMeu">
              <i className="fas fa-user"></i> Contul Meu 🔐
            </a>
            <a href="#">
              <i className="fas fa-heart"></i> Favorite ❤️
            </a>
            <a href="/CosulMeu">
              <i className="fas fa-shopping-chart"></i> Cosul meu 🛒
            </a>
          </div>
        </div>
      </header>

      <nav className="navigation-menu">
        <ul>
          <li className="dropdown">
            <a href="#" className="dropbtn" onClick={toggleDropdown}>
              Produse
            </a>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/TableteTelefoane" onClick={closeDropdown}>
                  Tablete & Telefoane
                </Link>
                <Link to="/PC&Laptop" onClick={closeDropdown}>
                  PC & Laptop
                </Link>
                <Link to="/TVAudioFoto" onClick={closeDropdown}>
                  TV, Audio & Foto
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/TVAudioFoto">TV, Audio & Foto</Link>
          </li>

          <li>
            <Link to="/PC&Laptop">PC & Laptop</Link>
          </li>
          <li>
            <Link to="/TableteTelefoane">Tablete & Telefoane</Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-headphones"></i> eMag Help
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
