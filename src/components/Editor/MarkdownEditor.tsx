import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

interface Blog {
  id: string;
  date: string;
  title: string;
  image: string;
  content: string;
}

export const MarkdownEditor = () => {
  const [value, setValue] = useState("");
  const [blog, setBlog] = useState<Blog>({
    id: "",
    date: "",
    title: "",
    image: "",
    content: "",
  });
  const handleChange = (val?: string) => {
    if (val !== undefined) setValue(val);
  };

  const generateId = (title: string) => {
    return title.toLowerCase().replace(/ /g, "-") + "-" + Date.now().toString();
  };

  const handleSave = () => {
    // const escaped = value
    //   .replace(/\\/g, '\\\\') // Escape backslashes
    //   .replace(/"/g, '\\"')   // Escape double quotes
    //   .replace(/\n/g, '\\n'); // Escape newlines

    // console.log(escaped);

    const newBlog = {
      ...blog,
      id: generateId(blog.title),
      date: new Date().toISOString(),
      content: value,
    };

    setBlog(newBlog);

    console.log(JSON.stringify(newBlog));
  };

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="w-[90%]">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">Markdown Editor</h1>
        </div>

        <div className="mb-5 flex items-center justify-end">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-6 py-2 rounded-xl border border-r-3 border-b-3 border-black cursor-pointer hover:bg-black"
          >
            Save
          </button>
        </div>

        <div className="w-full flex items-center justify-center my-10 flex-col">
          <div className="w-full">
            <input
              type="text"
              placeholder="Title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              className="w-full mt-2 p-3 text-md rounded-full outline-none border border-black border-r-4 border-b-4"
            />
          </div>

          <div className="w-full mt-5">
            <input
              type="text"
              value={blog.image}
              onChange={(e) => setBlog({ ...blog, image: e.target.value })}
              placeholder="https://example.com/image.jpg"
              className="w-full mt-2 p-3 text-md rounded-full outline-none border border-black border-r-4 border-b-4"
            />
          </div>
        </div>

        <div data-color-mode="light" className="border border-black border-r-6 border-b-6 rounded-xl">
          <MDEditor value={value} onChange={handleChange} height={1000} />
        </div>
      </div>
    </div>
  );
};
