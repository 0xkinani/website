import { Header } from "../../components/ui/Header/Header";
import { FeaturedBlog } from "../../components/FeaturedBlog/FeaturedBlog";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
export const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <FeaturedBlog />
      <SectionTitle />
    </div>
  );
};
