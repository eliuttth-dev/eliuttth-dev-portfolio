import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { ContactMe } from "./components/ContactMe";

export const App = () => {
  return (
    <div
      className="h-screen bg-primaryWhite dark:bg-primaryBlack 
      transition-all duration-200 ease-linear overflow-x-hidden"
    >
      <Header />
      <Hero />
      <Banner />
      <Skills />
      <ContactMe />
    </div>
  );
};
