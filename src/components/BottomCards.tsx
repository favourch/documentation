import { BottomCard } from "./BottomCard";
import React from "react";

const bottomCards = [
  {
    title: "Discord",
    description: "Hop in the #dev-chat to get realtime help.",
    image: "/assets/discord.svg",
    link: "/",
  },
  {
    title: "Github",
    description: "Hop in the #dev-chat to get realtime help.",
    image: "/assets/github-blue.svg",
    link: "/",
  },
  {
    title: "Forum",
    description: "Hop in the #dev-chat to get realtime help.",
    image: "/assets/forum.svg",
    link: "/",
  },
];

export const BottomCards = () => {
  return (
    <div className="flex gap-6 mt-16 flex-col md:flex-row">
      {bottomCards.map((card, i) => (
        <BottomCard {...card} key={i} />
      ))}
    </div>
  );
};