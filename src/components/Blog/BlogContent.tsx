import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useParams } from "react-router-dom";
import blogs from "../../data/blogs.json";

interface Blog {
  id: string;
  date: string;
  title: string;
  image: string;
  content: string;
  author: string;
  category: string;
}

export const BlogContent = () => {
  const authorImagePath = "/images/blog/author.jpeg";
  const { id } = useParams();
  const blog = (blogs as Blog[]).find((blog) => blog.id === id);

  if (!blog) return <div className="w-full flex items-center justify-center my-10">Oops! Blog not found</div>;
  
  return (
    <div className="w-full flex items-center justify-center my-10">
      <div className="w-[80%]">
        <div className="w-full flex items-center gap-3 p-5">
          <div className={` bg-${blog.category.toLowerCase()} border border-r-3 border-b-3 px-2 rounded-xl w-fit flex items-center gap-1`}>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <h3 className="text-sm text-white uppercase">{blog.category}</h3>
          </div>

          
        </div>

        <div className="w-full px-5">
            <h3 className="text-6xl font-bold">
               {blog.title}
          </h3>
        </div>

        <div className="w-full mt-10">
          <div className="w-full h-[2px] bg-gray-300"></div>
        </div>

        <div className="w-full mt-10">
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

              <p className="text-sm">{new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full">
        <div className="blog-content w-full">
          <div className="prose prose-lg max-w-none w-full">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {children}
                  </a>
                ),
              }}
            >
              {blog.content ? blog.content : ""}
            </ReactMarkdown>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
