import  { useState } from 'react';
import { FaBars, FaTimes,  } from 'react-icons/fa'; // Icons for menu and links
import { Link } from 'react-router-dom';
import logo from '../Images/LOGOEXPLORATION Search Bar Icon 8.png'
import noti from '../Images/Group 1171276277.png'
import img from '../Images/Rectangle 5412.png'



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
    <nav className="w-[100%] h-[59px] bg-[#E4E4E7] text-[#F4F4F5] py-1.5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="">
            <img className='w-[131px] h-[36px]' src={logo} alt="./" />
        
        </div>

        {/* Hamburger Menu Icon (visible on mobile only) */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Links (visible on desktop) */}
        <div className="hidden md:flex gap-8 ">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 ${
              activeLink === 'dashboard' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('dashboard')}
          >
           
            <span>Dashboard</span>
          </Link>

          <Link
            to="/incidents"
            className={`flex items-center space-x-2 ${
              activeLink === 'incidents' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('incidents')}
          >
           
            <span>Incidents</span>
          </Link>
          <Link
            to="/locations"
            className={`flex items-center space-x-2 ${
              activeLink === 'locations' ?'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('locations')}
          >
           
            <span>Locations</span>
          </Link>
          <Link
            to="/activities"
            className={`flex items-center space-x-2 ${
              activeLink === 'activities' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('activities')}
          >
           
            <span>Activities</span>
          </Link>
          <Link
            to="/documents"
            className={`flex items-center space-x-2 ${
              activeLink === 'documents' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('documents')}
          >
           
            <span>Documents</span>
          </Link>
          <Link
            to="/cypher"
            className={`flex items-center space-x-2 ${
              activeLink === 'cypher' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('cypher')}
          >
           
            <span>Cypher AI</span>
          </Link>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <img className='size-[40px]' src={noti} alt="./" />
            <img className='size-[40px]' src={img} alt="./" />
            <div>
                <h1 className='text-black font-[600px] text-'>Usman Zafar</h1>
                <p className='text-black font-[400px] text-[14px]'>usmanzafar@gmail.com</p>
            </div>
        </div>
      </div>

      {/* Mobile Menu (visible when toggled) */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4">
          <Link
            to="/dashboard"
            className={`flex items-center space-x-2 ${
              activeLink === 'dashboard' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('dashboard')}
          >
            
            <span>Dashboard</span>
          </Link>

          <Link
            to="/incidents"
            className={`flex items-center space-x-2 ${
              activeLink === 'incidents' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('incidents')}
          >
          
            <span>Incidents</span>
          </Link>
          <Link
            to="/locations"
            className={`flex items-center space-x-2 ${
              activeLink === 'locations' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('locations')}
          >
           
            <span>Locations</span>
          </Link>
          <Link
            to="/activities"
            className={`flex items-center space-x-2 ${
              activeLink === 'activities' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('activities')}
          >
           
            <span>Activities</span>
          </Link>
          <Link
            to="/documents"
            className={`flex items-center space-x-2 ${
              activeLink === 'documents' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('documents')}
          >
           
            <span>Documents</span>
          </Link>
          <Link
            to="/cypher"
            className={`flex items-center space-x-2 ${
              activeLink === 'cypher' ? 'font-semibold text-[#09090B]' : 'text-[#71717A]'
            }`}
            onClick={() => handleLinkClick('cypher')}
          >
           
            <span>Cypher AI</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
