"use client";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Cards from "@/components/Cards";
import CardHeader from "@/components/CardHeader";
import AdventuresItems from "@/components/AdventuresItems";

import memojiMap from "@/public/assets/images/memoji-map.png";
import bookDark from "@/public/assets/images/book.png";
import bookLight from "@/public/assets/images/book-light.png";
import blackDesert from "@/public/assets/images/bdo.png";
import elderScroll from "@/public/assets/images/eso.png";
import finalFantasy from "@/public/assets/images/ff.png";
import guildWar from "@/public/assets/images/gw2.png";
import minecraft from "@/public/assets/images/mc.png";
import monsterHunter from "@/public/assets/images/mhw.png";
import throneLiberty from "@/public/assets/images/tnl.png";
import mapImage from "@/public/assets/images/map.png";

const adventures = [
  {
    title: "Guild Wars 2",
    icon: guildWar,
  },
  {
    title: "Throne and Liberty",
    icon: throneLiberty,
  },
  {
    title: "Black Desert Online",
    icon: blackDesert,
  },
  {
    title: "The Elder Scrolls Online",
    icon: elderScroll,
  },
  {
    title: "Minecraft",
    icon: minecraft,
  },
  {
    title: "Final Fantasy XIV",
    icon: finalFantasy,
  },
  {
    title: "Monster Hunter: World",
    icon: monsterHunter,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "5%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "45%",
    top: "70%",
  },
  {
    title: "Baking",
    emoji: "🍰",
    left: "5%",
    top: "65%",
  },
  {
    title: "Food",
    emoji: "🍱",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Self-Care",
    emoji: "♨️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
];

const Insights = () => {
  const constraintRef = useRef(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const bookSrc = theme == "dark" ? bookDark : bookLight;
  return (
    <div className="mt-3 flex flex-col gap-6 xl:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:grid-cols-3">
        <Cards className="h-[320px] md:col-span-2 xl:h-[250px] xl:col-span-1">
          <CardHeader
            title="My Reads"
            description="Explore the realms I dive into"
          />
          <div className="w-40 mx-auto mt-2 md:mt-0 relative">
            <div className="absolute left-0 right-0 text-center top-8">
              <TypeAnimation
                sequence={[
                  "Romance",
                  1000,
                  "Fantasy",
                  1000,
                  "Comedy",
                  1000,
                  "Fiction",
                  1000,
                  "Magical Realism",
                  1000,
                  "Fantasy Fiction",
                  1000,
                  "Horror",
                  1000,
                  "Graphic Novel",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                }}
                className="w-30 text-accent text-wrap"
                repeat={Infinity}
              />
            </div>
            <Image src={bookSrc} alt="Book cover" />
          </div>
        </Cards>
        <Cards className="h-[320px] md:col-span-3 xl:h-[250px] xl:col-span-2">
          <CardHeader
            title="My Adventures"
            description="Join me on adventures beyond reality"
          />
          <AdventuresItems
            items={adventures}
            wrapperClassName="animate-move-left [animation-duration:30s]"
          />
          <AdventuresItems
            items={adventures}
            className="mt-6 xl:mt-3"
            wrapperClassName="animate-move-right [animation-duration:18s]"
          />
        </Cards>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:grid-cols-3">
        <Cards className="h-[320px] flex flex-col md:col-span-3 xl:h-[250px] xl:col-span-2">
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital
                          realm"
          />
          <div className="relative flex-1" ref={constraintRef}>
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.title}
                className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-gradient to-accent rounded-full py-1.5"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
              >
                <span className="font-medium text-gray-950">{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </motion.div>
            ))}
          </div>
        </Cards>
        <Cards className="h-[320px] relative md:col-span-2 xl:h-[250px] xl:col-span-1">
          <Image
            src={mapImage}
            alt="map"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-gradient -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-gradient -z-10"></div>
            <Image src={memojiMap} alt="memoji for map" className="size-20" />
          </div>
        </Cards>
      </div>
    </div>
  );
};

export default Insights;
