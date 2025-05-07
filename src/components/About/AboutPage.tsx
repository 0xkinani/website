import { FaQuoteRight } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export const AboutPage = () => {
  const imagePath = "/images/blog/author.jpeg";

  return (
    <div className="w-full lg:py-20 py-10 flex items-center justify-center">
      <div className="w-[90%] flex items-start justify-between lg:flex-row flex-col-reverse">
        <div className="lg:w-[68%] w-full">
          <div className="w-full text-center">
            <h3 className="text-4xl font-bold">About Me</h3>
          </div>

          <div className="mt-10">
            <p className="text-2xl mt-5">
              I'm <strong>0xkinani</strong>, a software engineer and systems
              architect who’s worked behind the scenes on some of the most
              resilient and widely used platforms in tech today. My experience
              spans Full Stack Development, Blockchain Engineering, and digital
              security.
            </p>
            <p className="text-2xl mt-5">
              After years of building in the open, I chose anonymity, not to
              hide, but to create without limits. Without ego or distraction. My
              goal is simple: to engineer systems that last, algorithms that
              scale, and infrastructure that defies compromise. This space is a
              glimpse into the mind behind the mask.
            </p>
          </div>

          {/* quote */}

          <div className="w-full lg:h-[300px] h-fit py-10 bg-red-500 mt-10 rounded-xl border border-r-4 border-b-4 px-10">
            <div className="w-full flex items-center justify-center h-full flex-col">
              <div className="w-[50px] h-[50px] bg-white/50 rounded-xl flex items-center justify-center text-white text-xl">
                <FaQuoteRight />
              </div>

              <div className="w-full text-center text-white mt-3">
                <p className="text-xl font-bold">
                  Going anonymous isn’t about secrecy. It’s about focus, on the
                  code, the system, and the mission.
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-5 mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-[2px] bg-white/50 rounded-xl"></div>
                  <div className="w-8 h-[2px] bg-white/50 rounded-xl"></div>
                </div>

                <div>
                  <h3 className="text-xl text-white">0xkinani</h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-white/50 rounded-xl"></div>
                  <div className="w-2 h-[2px] bg-white/50 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-2xl mt-5">
              I build with a purpose: resilient, scalable systems that put users
              first and surveillance last. This is not just software, it's
              infrastructure for the new internet.
            </p>
          </div>
        </div>

        <div className="lg:w-[30%] w-full lg:px-5 px-0">
          <div className="w-full lg:h-[400px] lg:mb-0 mb-10 h-fit border border-r-6 border-b-6 rounded-xl flex items-center  flex-col p-4">
            <div className="w-[200px] h-[200px] rounded-full border border-r-6 border-b-6">
              <img
                src={imagePath}
                className="w-full h-full rounded-inherit"
                alt=""
              />
            </div>

            <div className="w-full my-3 text-center">
              <h3 className="text-2xl font-bold">0xKinani</h3>
            </div>

            <div className="flex items-center justify-center gap-5 flex-wrap mt-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};
