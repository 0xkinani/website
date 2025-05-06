import { Header } from "../../components/ui/Header/Header";
import { FeaturedBlog } from "../../components/FeaturedBlog/FeaturedBlog";
export const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <FeaturedBlog />
    </div>
  );
};
