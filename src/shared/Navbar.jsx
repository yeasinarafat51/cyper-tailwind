import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu and links
import { Link } from "react-router-dom";
import logo from "../Images/LOGOEXPLORATION Search Bar Icon 8.png";
import noti from "../Images/Group 1171276277.png";
import img from "../Images/Rectangle 5412.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling mobile menu
  const [activeLink, setActiveLink] = useState(null); // State for active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu when link is clicked on mobile
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <nav className="w-full h-[59px] bg-[#E4E4E7] text-[#F4F4F5] py-1.5 px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="">
          <img className="w-auto h-[36px]" src={logo} alt="Logo" />
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <div className="md:hidden " onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links (visible on desktop) */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className={`${
              activeLink === "dashboard"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("dashboard")}
          >
            Dashboard
          </Link>

          <Link
            to="/incidents"
            className={`${
              activeLink === "incidents"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("incidents")}
          >
            Incidents
          </Link>

          <Link
            to="/locations"
            className={`${
              activeLink === "locations"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("locations")}
          >
            Locations
          </Link>

          <Link
            to="/activities"
            className={`${
              activeLink === "activities"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("activities")}
          >
            Activities
          </Link>

          <Link
            to="/documents"
            className={`${
              activeLink === "documents"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("documents")}
          >
            Documents
          </Link>

          <Link
            to="/cypher"
            className={`${
              activeLink === "cypher"
                ? "font-semibold text-[#09090B]"
                : "text-[#71717A]"
            }`}
            onClick={() => handleLinkClick("cypher")}
          >
            Cypher AI
          </Link>
          <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src={noti} alt="Notification" />
          <img className="w-6 h-6 rounded-full" src={img} alt="Profile" />
          <div>
            <h1 className="text-black font-semibold">Usman Zafar</h1>
            <p className="text-black font-normal text-[14px]">usmanzafar@gmail.com</p>
          </div>
        </div>
        </div>

        {/* Profile and Notifications */}
       
      </div>

      {/* Mobile Menu (visible when toggled) */}
      {isOpen && (
        <div className="absolute z-[999999] md:hidden  left-0 top-14 w-full h-full bg-black bg-opacity-50  flex flex-col justify-center items-center">
          <div className="bg-g p-4  space-y-4 flex flex-col w-[100%] text-center rounded-lg">
            <Link
              to="/"
              className={`${
                activeLink === "dashboard"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("dashboard")}
            >
              Dashboard
            </Link>

            <Link
              to="/incidents"
              className={`${
                activeLink === "incidents"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("incidents")}
            >
              Incidents
            </Link>

            <Link
              to="/locations"
              className={`${
                activeLink === "locations"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("locations")}
            >
              Locations
            </Link>

            <Link
              to="/activities"
              className={`${
                activeLink === "activities"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("activities")}
            >
              Activities
            </Link>

            <Link
              to="/documents"
              className={`${
                activeLink === "documents"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("documents")}
            >
              Documents
            </Link>

            <Link
              to="/cypher"
              className={`${
                activeLink === "cypher"
                  ? "font-semibold text-[#09090B]"
                  : "text-[#71717A]"
              }`}
              onClick={() => handleLinkClick("cypher")}
            >
              Cypher AI
            </Link>
            <div className="flex justify-center items-center gap-2">
          <img className="w-6 h-6" src={noti} alt="Notification" />
          <img className="w-6 h-6 rounded-full" src={img} alt="Profile" />
          <div>
            <h1 className="text-black font-semibold">Usman Zafar</h1>
            <p className="text-black font-normal text-[14px]">usmanzafar@gmail.com</p>
          </div>
        </div>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
