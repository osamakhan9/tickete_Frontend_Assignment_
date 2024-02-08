import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { SectionGap } from "@/components/SectionGap";
import { HomeRedirect } from "./components/HomeRedirect";

export const Checkout: React.FC = () => {
  return (
    <>
      <Header />
      <SectionGap gap="80px" />
      <Main />
      <SectionGap gap="80px" />
      <Footer />
      <HomeRedirect />
    </>
  );
};
