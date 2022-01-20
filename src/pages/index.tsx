import React, { useEffect } from "react";
import "./index.css";
import { Cards } from "../components/Cards";
import { Repos } from "../components/Repos";
import { BottomCards } from "../components/BottomCards";
import { Footer } from "../components/Footer";

import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("bg-[#F7F8FA]", "dark:bg-[#22242F]");
  }, []);
  return (
    <div>
      <div className="max-w-4xl mx-auto pb-16 dark:text-white px-4">
        <Navbar />
        <h1 className="text-4xl font-bold text-center my-16">
          Welcome to XP.network Docs
        </h1>
        {/* <SearchBar /> */}
        <Cards />

        <h1 className="text-center mt-20 font-bold text-3xl">
          Developer Links
        </h1>
        <p className="text-center text-gray-500 mt-8 max-w-lg mx-auto">
          The Uniswap codebase is comprised of an ecosystem of open source
          components.
        </p>
        <Repos />

        <h1 className="text-center mt-20 font-bold text-3xl">
          Developer Links
        </h1>
        <p className="text-center text-gray-500 mt-8 max-w-lg mx-auto">
          The Uniswap codebase is comprised of an ecosystem of open source
          components.
        </p>
        <BottomCards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;