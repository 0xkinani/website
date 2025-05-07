import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Blog } from "../pages/Blog/Blog";
import { Contact } from "../pages/Contact/Contact";
import { SingleBlog } from "../pages/Blog/SingleBlog";
import { Editor } from "../pages/Editor/Editor";
const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
