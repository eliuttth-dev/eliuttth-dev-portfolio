import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <div
      className="h-screen bg-primaryWhite dark:bg-primaryBlack 
      transition-all duration-200 ease-linear overflow-x-hidden"
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Banner />
              <Skills />
              <ContactMe />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};
