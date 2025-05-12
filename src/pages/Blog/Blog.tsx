import { Footer } from "../../components/ui/Footer/Footer";
import { Header } from "../../components/ui/Header/Header";
import { Blogs } from "../../components/Blog/Blogs";
export const Blog = () => {
  document.title = "Blog | 0xKinani";
  return (
    <div className="w-full">
      <Header />
      <Blogs />

      <Footer />
    </div>
  );
};
