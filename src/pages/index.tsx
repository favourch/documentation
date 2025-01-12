import React, { useEffect } from "react";
import "./index.css";
import { Cards } from "../components/Cards";
import { Repos } from "../components/Repos";
import { BottomCards } from "../components/BottomCards";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Search } from "../components/Search";
import Head from "@docusaurus/Head";

const Home = () => {
  useEffect(() => {
    localStorage.removeItem("theme");
    document.querySelector("html").removeAttribute("data-theme");
    document.body.classList.add("bg-[#F7F8FA]", "dark:bg-[#22242F]");

    return () => {
      document.body.classList.remove("bg-[#F7F8FA]", "dark:bg-[#22242F]");
    };
  });
  return (
    <div>
      <Head>
        <title>XP.NETWORK Documentation</title>
        <meta name="description" content="Welcome to XP.NETWORK Docs" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta property="og:image" content="/cover-image.png" />
        <meta property="og:image:secure" content="/cover-image.png" />
        <meta property="og:title" content="Welcome to XP.NETWORK Docs" />
        <meta
          property="og:description"
          content="Out-of-the-box multichain support for minted NFTs: connect to XP.NETWORK bridge to move NFTs and funds seamlessly across 10+ blockchains."
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to XP.NETWORK Docs" />
        <meta
          name="twitter:description"
          content="Out-of-the-box multichain support for minted NFTs: connect to XP.NETWORK bridge to move NFTs and funds seamlessly across 10+ blockchains."
        />
        <meta name="twitter:image" content="/cover-image.png" />
        <meta name="twitter:image:src" content="/cover-image.png" />
      </Head>
      <div className="max-w-4xl mx-auto pb-16 dark:text-white px-4">
        <Navbar />
        <h1 className="text-4xl font-bold text-center my-16">
          Welcome to XP.NETWORK Docs
        </h1>
        <Search />

        <Cards />

        <h1 className="text-center mt-20 font-bold text-4xl">
          Developer Links
        </h1>
        <p className="text-center text-gray-500 mt-8 max-w-lg mx-auto">
          Quick access to the most popular code repositories.
        </p>
        <Repos />

        <h1 className="text-center mt-20 font-bold text-4xl">
          Join XP communities
        </h1>
        <p className="text-center text-gray-500 mt-8 max-w-lg mx-auto">
          Discover the power of XP.NETWORK through a wide range of content, from
          video interviews to real-time chats with the team.
        </p>
        <BottomCards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
