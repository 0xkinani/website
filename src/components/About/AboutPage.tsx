import { FaQuoteRight } from "react-icons/fa6";

export const AboutPage = () => {

    const imagePath = "/images/blog/author.jpeg"

  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-[90%] flex items-start justify-between">
        <div className="w-[68%]">
          <div className="w-full text-center">
            <h3 className="text-4xl font-bold">About Me</h3>
          </div>

          <div className="mt-10">
            <p className="text-2xl mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="text-2xl mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* quote */}

          <div className=" w-full h-[300px] bg-red-500 mt-10 roundex-xl border border-r-4 border-b-4 rounded-xl px-10">
            <div className="w-full flex items-center justify-center h-full flex-col">
              <div className="w-[50px] h-[50px] bg-white/50 rounded-xl flex items-center justify-center text-white text-xl">
                <FaQuoteRight />
              </div>

              <div className="w-full text-center text-white mt-3">
                <p className="text-xl font-bold">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-5 mt-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-[2px] bg-white/50 rounded-xl"></div>
                  <div className="w-8 h-[2px] bg-white/50 rounded-xl"></div>
                </div>

                <div>
                  <h3 className="text-xl text-white">John Doe</h3>
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
              I am so happy, my dear friend, so absorbed in the exquisite sense
              of mere tranquil existence, that I neglect my talents. I should be
              incapable of drawing a single stroke at the present moment; and
              yet I feel that I never was a greater artist than now.
            </p>
          </div>
        </div>

        <div className="w-[30%]">

            <div className="w-full h-[400px] border border-r-6 border-b-6 rounded-xl flex items-center  flex-col p-4">

                <div className="w-[200px] h-[200px] rounded-full border border-r-6 border-b-6">
                    <img src={imagePath} className="w-full h-full rounded-inherit" alt="" />
                </div>



            </div>


        </div>
      </div>
    </div>
  );
};
