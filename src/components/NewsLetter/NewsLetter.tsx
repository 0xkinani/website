export const NewsLetter = () => {
  const newsLetterimagePath = "/images/blog/newsletter.png";

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-[900px] border border-r-6 border-b-6 rounded-xl h-[350px]">
        <div className="w-full h-full flex items-center">
          <div>
            <img src={newsLetterimagePath} className="w-[300px]" alt="" />
          </div>

          <div className="w-[60%]">
            <h3 className="text-4xl font-bold">Subscribe to my Newsletter</h3>

            <div className="my-3 flex items-center gap-2">
              <div className="w-10 h-1 bg-red-400 rounded-xl"></div>
              <div className="w-1 h-1 bg-red-400 rounded-xl"></div>
              <div className="w-1 h-1 bg-red-400 rounded-xl"></div>
              <div className="w-1 h-1 bg-red-400 rounded-xl"></div>
            </div>

            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="w-full mt-3">
              <input
                type="text"
                name=""
                className="w-full outline-none px-4 py-2 text-xl border border-r-3 border-b-3 rounded-xl"
                id=""
              />
            </div>

            <div className="w-full mt-3">
              <button className="w-full bg-red-400 rounded-xl text-white p-4 cursor-pointer hover:bg-black  border border-black border-r-3 border-b-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
