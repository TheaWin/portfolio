"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsFileText } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import Footer from "@/components/Footer";

import Thumb1 from "@/public/assets/work/thumb1.png";
import Thumb2 from "@/public/assets/work/thumb2.png";
import Thumb3 from "@/public/assets/work/thumb3.png";
import Thumb4 from "@/public/assets/work/thumb4.png";
import Thumb5 from "@/public/assets/work/thumb5.png";
import Thumb6 from "@/public/assets/work/thumb6.png";
import Thumb7 from "@/public/assets/work/thumb7.png";

const projects = [
  {
    num: "01",
    name: "AnimeEiga - React",
    title: "project 1",
    description:
      "AnimeEiga is a responsive web application designed for anime movie enthusiasts to explore and manage their favorite movies. Users can create profiles, browse a collection of anime movies, and save their favorites for easy access later.",
    stack: [
      { name: "React" },
      { name: "React Bootstrap" },
      { name: "React Router" },
      { name: "Netlify" },
      { name: "Heroku" },
      { name: "Parcel" },
    ],
    image: Thumb1,
    live: "https://anime-eiga.netlify.app/",
    github: "https://github.com/TheaWin/eiga-client",
    casestudy: "/assets/casestudy.pdf",
  },
  {
    num: "02",
    name: "Portfolio",
    title: "project 2",
    description:
      "This very website you are currently looking at is coded by me. Crafted in Next.js, this portfolio captures my journey of diving into new technologies through YouTube tutorials and coding it from scratch. It’s not just a portfolio—it’s a glimpse into my commitment to learning and building, showcasing the skills I’ve picked up along the way.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Framer-motion" },
      { name: "Tailwind" },
      { name: "Swiper" },
    ],
    image: Thumb2,
    live: "https://portfolio-pink-tau-14.vercel.app/",
    github: "https://github.com/TheaWin/portfolio",
    casestudy: "",
  },
  {
    num: "03",
    name: "API",
    title: "project 3",
    description:
      "This project focuses on building the server-side component for the 'AnimeEiga' web application. It provides users with access to detail information about anime films, directors, and genres and the user details with JWT authentication.",
    stack: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Bcrypt" },
      { name: "JSWebToken" },
      { name: "Passport" },
      { name: "Express" },
      { name: "Postman" },
      { name: "JSDoc" },
    ],
    image: Thumb3,
    live: "",
    github: "https://github.com/TheaWin/anime-eiga",
    casestudy: "",
  },
  {
    num: "04",
    name: "Meet App",
    title: "project 4",
    description:
      "The Meet App will use serverless functions to fetch and filter public events from the Google Calendar API based on the user's selected city, manage the display of event details, and specify the number of events to show.",
    stack: [
      { name: "React" },
      { name: "Google Calendar API" },
      { name: "OAuth2" },
      { name: "AWS Lambda" },
      { name: "Severless" },
      { name: "Jest-Cucumber" },
      { name: "Puppeteer" },
      { name: "PWAs" },
      { name: "Atatus" },
    ],
    image: Thumb4,
    live: "https://theawin.github.io/meet/",
    github: "https://github.com/TheaWin/meet",
    casestudy: "",
  },
  {
    num: "05",
    name: "Realm Chat",
    title: "project 5",
    description:
      "Realm Chat is a mobile chat application built using React Native. This user-friendly app provides a seamless chat interface and advanced features for effortlessly sharing images and location in real time.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "Expo (ImagePicker, Location)" },
      { name: "Google Firestore/Firebase" },
      { name: "Gifted Chat" },
      { name: "Android Studio" },
    ],
    image: Thumb5,
    live: "",
    github: "https://github.com/TheaWin/realm-chat",
    casestudy: "",
  },
  {
    num: "06",
    name: "AnimeEiga - Angular",
    title: "project 6",
    description:
      "AnimeEiga is a responsive web application designed for anime movie enthusiasts to explore and manage their favorite movies. Users can create profiles, browse a collection of anime movies, and save their favorites for easy access later.",
    stack: [
      { name: "Angular" },
      { name: "Angular Material" },
      { name: "Node.js" },
      { name: "Typedoc" },
      { name: "TypeScript" },
    ],
    image: Thumb6,
    live: "https://theawin.github.io/animeEiga-Angular/welcome",
    github: "https://github.com/TheaWin/animeEiga-Angular",
    casestudy: "",
  },
  {
    num: "07",
    name: "Poképedia",
    title: "project 7",
    description:
      "A small web application with HTML, CSS, and JavaScript that loads data from an external API. Users can find Pokemon details from the application by viewing each Pokemon or search for a specific pokemon from the search box.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "external API (Pokemon API)" },
    ],
    image: Thumb7,
    live: "https://theawin.github.io/pokepedia/",
    github: "https://github.com/TheaWin/pokepedia",
    casestudy: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[75vh] flex flex-col justify-center  xl:px-0"
      >
        <div className="container ">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[15px]">
                <div className="text-8xl leading-none font-extrabold text-transparent custom-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-text group-hover:text-accent transition-all duration-500 capitalize">
                  {project.name} project
                </h2>
                <p className="text-text/60">{project.description}</p>
                <p className="text-text/60">Technologies used:</p>
                <ul className="flex flex-wrap gap-2 ">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                <div className="border border-text/20"></div>
                <div className="flex items-center gap-4">
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-complementary flex justify-center items-center group">
                            <BsArrowUpRight className="text-text text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-complementary flex justify-center items-center group">
                          <BsGithub className="text-text text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {project.casestudy && (
                    <Link href={project.casestudy} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-complementary flex justify-center items-center group">
                            <BsFileText className="text-text text-3xl group-hover:text-accent" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Case Study</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full bg-primary">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover object-left-top"
                            alt="Project Image"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-background text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Work;
