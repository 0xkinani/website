import { BlogContent } from "../../components/Blog/BlogContent";
import { Footer } from "../../components/ui/Footer/Footer";
import { Header } from "../../components/ui/Header/Header";

export const SingleBlog = () => {
  return (
    <div className="w-full">
      <Header />
      <BlogContent />
      <Footer />
    </div>
  );
};
