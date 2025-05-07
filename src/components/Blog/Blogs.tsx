import blogs from "../../data/blogs.json";
import { Link } from "react-router-dom";

export const Blogs = () => {
  const authorImagePath = "/images/blog/author.jpeg";

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-[90%] flex flex-wrap justify-between gap-5">
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <div className="lg:w-[48%] w-full flex flex-col">
              <div className="w-full h-[400px] border border-r-6 border-b-6 rounded-tl-xl rounded-tr-xl rounded-bl-xl overflow-hidden relative">
                <img
                  className="w-full h-full object-cover rounded-inherit hover:scale-120 transition-all duration-700 ease-in-out"
                  src={blog.image}
                  alt=""
                />

                {/* blog  category */}
                <div
                  className={`absolute top-4 left-4 bg-${blog.category.toLowerCase()} border border-r-3 border-b-3 px-2 rounded-xl w-fit flex items-center gap-1`}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <h3 className="text-sm text-white">{blog.category}</h3>
                </div>

                {/* blog title */}

                <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
                  <div className="w-[95%] left-4 bg-white border border-r-5 border-b-5 px-2   flex items-center gap-1 my-3 p-2">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-4xl font-bold hover:underline hover:text-red-500 transition-all duration-700 ease-in-out cursor-pointer"
                    >
                      {blog.title}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center gap-2 my-5">
                <div>
                  <img
                    src={authorImagePath}
                    className="w-[30px] h-[30px] rounded-full shadow-2xl"
                    alt=""
                  />
                </div>

                <div>
                  <p className="font-bold">{blog.author}</p>

                  <p className="text-sm">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="w-full mb-5 text-xl">
                <p>{blog.content.replace(/[^\w\s]/g, " ").slice(0, 100)}...</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
