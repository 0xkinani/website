import { FaArrowRight } from "react-icons/fa6";

export const FeaturedBlog = () => {
  const demoImagePath = "/images/blog/demo.jpg";
  const authorImagePath = "/images/blog/author.jpeg";

  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[90%] w-[98%] max-w-full mx-auto flex items-center justify-center border border-r-6 border-b-6 rounded-[30px] p-5 lg:h-[500px] h-fit mt-10 lg:flex-row flex-col">
        <div className="w-full h-full flex items-center justify-center gap-5 lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full h-full border border-r-6 border-b-6 rounded-tr-xl rounded-bl-xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover rounded-inherit hover:scale-120 transition-all duration-700 ease-in-out"
              src={demoImagePath}
              alt=""
            />

            {/* blog  category */}
            <div className="absolute top-4 left-4 bg-green-400 border border-r-3 border-b-3 px-2 rounded-xl w-fit flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h3 className="text-sm text-white">HEALTH</h3>
            </div>
          </div>

          <div className="lg:w-[50%] w-full h-full flex flex-col items-center justify-center lg:px-10 px-2">
            <div className="w-full">
              <h3 className="lg:text-5xl text-3xl font-extrabold hover:underline hover:text-red-500 transition-all duration-700 ease-in-out cursor-pointer">
                No News Has Yet Reached Us About Who Will Be Attending
              </h3>
            </div>
            <div className="w-full flex items-center gap-2 my-5">
              <img
                src={authorImagePath}
                className="w-[30px] h-[30px] rounded-full shadow-2xl"
                alt=""
              />

              <p className="font-bold">0xkinani</p>

              <div className="w-2 h-2 bg-black rounded-full"></div>

              <p>November 29, 2022</p>
            </div>

            <div className="w-full mb-5 text-xl lg:block hidden">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live...
              </p>
            </div>

            <div className="w-full">
              <button className="flex items-center gap-2 border border-r-3 border-b-3 px-10 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white">
                Read More
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
