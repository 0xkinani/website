import { Logo } from "../../Logo/Logo";
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center pt-20">
      <div className="w-[90%] mx-auto flex items-center justify-center flex-col">
        <div className="w-full flex items-center justify-between gap-5 ">
          <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
            <FaSearch />
          </div>
          <Logo />

          <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
            <FaGithub />
          </div>
        </div>

        <div className="w-full p-5 border border-r-6 border-b-6 mt-10 rounded-xl flex items-center justify-center bg-white ">
          <div className="w-full flex items-center justify-center gap-5 text-xl font-bold">
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </header>
  );
};
