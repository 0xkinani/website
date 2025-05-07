import { IoClose } from "react-icons/io5";
import { useGlobal } from "../../../contexts/globals";
import { Link } from "react-router-dom";

export const MobileNav = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useGlobal();

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } w-full h-screen bg-white text-black fixed top-0 left-0 z-50 transition-transform duration-300 ease-in-out lg:hidden`}
    >
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-end p-5 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
          <IoClose size={40} />
        </div>

        <div className="w-full h-full flex items-center justify-center flex-col gap-5">
          <Link to="/" className="text-4xl font-bold" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/about" className="text-4xl font-bold" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/blog" className="text-4xl font-bold" onClick={handleLinkClick}>
            Blog
          </Link>
          <Link to="/contact" className="text-4xl font-bold" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
