import { Logo } from "../../Logo/Logo";
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center lg:pt-20 pt-10">
      <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-between gap-5 ">
          <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer lg:block hidden">
            <FaSearch />
          </div>
          <Logo />

          <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer lg:block hidden">
            <FaGithub />
          </div>

          <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer lg:hidden ">
            <IoMenu />
          </div>
        </div>

        <div className="w-full p-5 border border-r-6 border-b-6 mt-10 rounded-xl items-center justify-center bg-white lg:flex hidden">
          <div className="w-full flex items-center justify-center gap-5 text-xl font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
