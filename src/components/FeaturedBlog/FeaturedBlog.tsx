import { FaArrowRight } from "react-icons/fa6";
import blogs from "../../data/blogs.json";
import { Link } from "react-router-dom";

export const FeaturedBlog = () => {

  const authorImagePath = "/images/blog/author.jpeg";
  const featuredBlogId = "fee02a49-fb50-462f-84b1-3fe65e608092";
  const featuredBlog = blogs.find((blog) => blog.id === featuredBlogId);

  if (!featuredBlog) {
    return <div>No featured blog found</div>;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="lg:w-[90%] w-[98%] max-w-full mx-auto flex items-center justify-center border border-r-6 border-b-6 rounded-[30px] p-5 lg:h-[500px] h-fit mt-10 lg:flex-row flex-col">
        <div className="w-full h-full flex items-center justify-center gap-5 lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full h-full border border-r-6 border-b-6 rounded-tr-xl rounded-bl-xl overflow-hidden relative">
            <img
              className="w-full h-full object-cover rounded-inherit hover:scale-120 transition-all duration-700 ease-in-out"
              src={featuredBlog.image}
              alt=""
            />

            {/* blog  category */}
            <div className={`absolute top-4 left-4 bg-${featuredBlog.category.toLowerCase()} border border-r-3 border-b-3 px-2 rounded-xl w-fit flex items-center gap-1`}>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h3 className="text-sm text-white">{featuredBlog.category}</h3>
            </div>
          </div>

          <div className="lg:w-[50%] w-full h-full flex flex-col items-center justify-center lg:px-10 px-2">
            <div className="w-full">
              <Link to={`/blog/${featuredBlog.id}`} className="lg:text-5xl text-3xl font-extrabold hover:underline hover:text-red-500 transition-all duration-700 ease-in-out cursor-pointer">
                {featuredBlog.title}
              </Link>
            </div>
            <div className="w-full flex items-center gap-2 my-5">
              <img
                src={authorImagePath}
                className="w-[30px] h-[30px] rounded-full shadow-2xl"
                alt=""
              />

              <p className="font-bold">{featuredBlog.author}</p>

              <div className="w-2 h-2 bg-black rounded-full"></div>

              <p>{new Date(featuredBlog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
            </div>

            <div className="w-full mb-5 text-xl lg:block hidden">
              <p>
                {featuredBlog.content.replace(/[^\w\s]/g, " ").slice(0, 100)}...
              </p>
            </div>

            <div className="w-full">
              <Link to={`/blog/${featuredBlog.id}`} className="flex items-center gap-2 border border-r-3 border-b-3 px-10 py-2 rounded-full cursor-pointer hover:bg-black hover:text-white w-fit">
                Read More
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
