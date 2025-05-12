import { Header } from "../../components/ui/Header/Header";
import { Footer } from "../../components/ui/Footer/Footer";
import { AboutPage } from "../../components/About/AboutPage";
export const About = () => {
  document.title = "About | 0xKinani";
  return (
    <div>
        <Header />
        <AboutPage />

        <Footer />
    </div>
  )
}
