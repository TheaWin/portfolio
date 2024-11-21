"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJest,
  SiCucumber,
  SiPostman,
  SiPuppeteer,
  SiPassport,
  SiHeroku,
  SiNetlify,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAndroidstudio,
  SiAwslambda,
  SiReactbootstrap,
  SiExpo,
  SiFirebase,
  SiPwa,
  SiTypescript,
} from "react-icons/si";

import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const experience = {
  title: "My experience",
  description:
    "Here’s a glimpse into my professional journey. Each experience has shaped my skills, strengthened my expertise, and prepared me for future challenges.",
  items: [
    {
      company: "Active Global Respite Care",
      position: "Financial Accountant",
      duration: "Aug 2018 - Apr 2024",
    },
    {
      company: "Webster University",
      position: "Resident Assistant",
      duration: "Sep 2017 - May 2018",
    },
    {
      company: "Webster University",
      position: "Student Assistant",
      duration: "Aug 2017 - May 2018",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "Explore my educational journey, where degrees and certifications have shaped my skills and equipped me with the knowledge to excel in my career.",
  items: [
    {
      institution: "CareerFoundry",
      degree: "Full-Stack Web Development Program",
      duration: "Nov 2023 - Oct 2024",
    },
    {
      institution: "Webster University",
      degree: "Bachelor of Arts, Major in Management",
      duration: "2016 - 2018",
    },
    {
      institution: "London Chamber of Commerce & Industry (PEARSON)",
      degree: "Diploma in Accounting",
      duration: "2014",
    },
    {
      institution: "London Chamber of Commerce & Industry (PEARSON)",
      degree: "Diploma in Management Accounting",
      duration: "2014",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Explore the core skills and technologies I specialize in as a web developer, from front-end design to back-end development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaAngular />,
      name: "angular",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <SiReactbootstrap />,
      name: "react-bootstrap",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
    {
      icon: <SiPassport />,
      name: "passport",
    },
    {
      icon: <SiPostman />,
      name: "postman",
    },
    {
      icon: <SiJest />,
      name: "jest",
    },
    {
      icon: <SiCucumber />,
      name: "cucumber",
    },
    {
      icon: <SiPuppeteer />,
      name: "puppeteer",
    },
    {
      icon: <SiHeroku />,
      name: "heroku",
    },
    {
      icon: <SiNetlify />,
      name: "netlify",
    },
    {
      icon: <SiAwslambda />,
      name: "aws lambda",
    },
    {
      icon: <SiFirebase />,
      name: "google firebase",
    },
    {
      icon: <SiPwa />,
      name: "pwa",
    },
    {
      icon: <SiExpo />,
      name: "expo",
    },
    {
      icon: <SiAndroidstudio />,
      name: "android studio",
    },
    {
      icon: <FaAws />,
      name: "aws",
    },
  ],
};

const Resume = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[75vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger asChild value="download">
                <a href="/assets/resume.pdf" download="Thea-Win-Resume.pdf">
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </a>
              </TabsTrigger>
            </TabsList>

            <div className="min-h-[75vh] w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-complementary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-black/60 dark:text-white/60">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-complementary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-black/60 dark:text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-complementary rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="download" className="w-full">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">Downloaded</h3>
                  <p className="max-w-[600px] text-black/60 dark:text-white/60 mx-auto xl:mx-0">
                    The file has been downloaded.
                  </p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Resume;
