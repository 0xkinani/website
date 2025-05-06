import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { BiSolidFaceMask } from "react-icons/bi";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex items-center justify-center py-10">
      <div className="w-[90%] flex flex-col items-center">
        <div className="w-full h-[2px] bg-black mb-10"></div>

        <div className="w-full mt-3 flex items-center justify-between gap-5 lg:flex-row flex-col">
          <div>
            <p> &copy; {currentYear} All Rights Reserved</p>
          </div>

          <div className="flex items-center justify-center gap-5 flex-wrap">
            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <RiTwitterXLine />
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <FaGithub />
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <BiLogoTelegram />
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <FaInstagram />
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <FaDiscord />
            </div>
          </div>

          <div className="lg:block hidden">
            <p>
              <BiSolidFaceMask size={35} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
