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
              <a
                href="https://x.com/0xkinani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine />
              </a>
            </div>
            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <a
                href="https://github.com/0xkinani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <a
                href="https://t.me/kinani0x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiLogoTelegram />
              </a>
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <a
                href="https://www.instagram.com/0xkinani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="border border-r-3 border-b-3 rounded-xl p-2 text-2xl bg-white cursor-pointer">
              <a
                href="https://discord.gg/0xkinani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
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
