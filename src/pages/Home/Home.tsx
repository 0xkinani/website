import { Header } from "../../components/ui/Header/Header";
import { FeaturedBlog } from "../../components/FeaturedBlog/FeaturedBlog";
import { SectionTitle } from "../../components/ui/SectionTitle/SectionTitle";
import { RecentArticles } from "../../components/RecentArticles/RecentArticles";
export const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <FeaturedBlog />
      <SectionTitle />
      <RecentArticles />
    </div>
  );
};
