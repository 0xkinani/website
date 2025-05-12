import { Footer } from "../../components/ui/Footer/Footer";
import { Header } from "../../components/ui/Header/Header";
import { ContactPage } from "./ContactPage";
export const Contact = () => {
  document.title = "Contact | 0xKinani";
  return (
    <div className="w-full">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
};
