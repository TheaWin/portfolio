"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

import Testimonial from "@/components/Testimonial";

import Footer from "@/components/Footer";

import memojiAvatar1 from "@/public/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/public/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/public/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/public/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/public/assets/images/memoji-avatar-5.png";

import { Fragment } from "react";
import StarIcon from "@/public/assets/icons/star.jsx";
import Profile from "@/public/assets/images/about.jpg";
import { Camera } from "lucide-react";
import Cards from "@/components/Cards";

import Insights from "@/components/Insights";
import Focus from "@/components/Focus";

const testimonials = [
  {
    name: "Muhammad Usman Ali",
    position: "Tutor @ CareerFoundry Program",
    text: "Win was a pleasure to mentor during the Software Engineering cohort at CareerFoundry. She showed great enthusiasm for learning, picked up new concepts quickly, and consistently applied herself to every challenge. Her problem-solving skills and attention to detail were impressive, and she was always proactive in seeking feedback to improve her work. I’m confident that her strong work ethic and dedication will make her a valuable asset in any software engineering role, and I look forward to seeing her continued success.",
    avatar: memojiAvatar1,
  },
  {
    name: "Martin Macharia",
    position: "Mentor @ CareerFoundry Program",
    text: `
    I have had the privilege of witnessing Win Win Khaing's incredible growth and development throughout her journey in this course. From her early projects to her final submissions, her dedication, attention to detail, and drive for excellence have been truly impressive.

    Win Win consistently demonstrated a strong grasp of foundational skills, from producing high-quality, error-free code to refining her abilities in cross-browser testing and web hosting. Her ability to take feedback, integrate it effectively, and apply it to future work showcased a remarkable capacity for learning and adapting. Each project she submitted showed not only her technical growth but also her commitment to code quality and project organization. She took extra steps to improve her work, adding linters, enhancing documentation, and ensuring her projects were scalable and maintainable.

    What stands out most about Win Win is her continuous improvement in complex areas like data security, authentication, and API development. She successfully implemented secure password hashing, session management, and data validation, demonstrating both her technical skills and her understanding of security best practices. Her dedication to creating well-structured, reusable, and tested code reflects her growth into a developer who can confidently handle larger, more challenging projects.

    Additionally, her efforts in contributing to the tech community and improving her portfolio demonstrate her commitment to personal growth and professional readiness. Her ability to communicate clearly and structure user stories and project proposals is a testament to her understanding of agile principles and her readiness to work in team environments.

    Overall, Win Win Khaing's journey is a story of consistent hard work, growth, and an ever-evolving mastery of both technical and project management skills. I am confident she will continue to excel and make impactful contributions to any team or project she is a part of.
  `,
    avatar: memojiAvatar5,
  },
  {
    name: "Renish B",
    position: "Mentor @ CareerFoundry Program",
    text: `Mentoring Win during the Cloud Computing BootCamp at CareerFoundry was such a pleasure! She picked up new concepts quickly, showed great motivation, and independently handled challenges.

    Her eagerness and genuine enthusiasm made her stand out. I can’t wait to see all the great things she’ll accomplish!`,
    avatar: memojiAvatar3,
  },
];

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="container mx-auto min-h-[75vh] ">
          <Tabs defaultValue="focus" className="flex flex-col gap-[40px]">
            <TabsList className="flex items-center justify-center w-full max-w-[400px] mx-auto bg-[#27272c] gap-1 p-1 rounded-full border-white/15 border">
              <TabsTrigger value="focus" className="rounded-full">
                Focus
              </TabsTrigger>
              <TabsTrigger value="insights" className="rounded-full">
                Insights
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="rounded-full">
                Testimonials
              </TabsTrigger>
            </TabsList>

            <div className="w-full">
              <TabsContent value="focus" className="w-full">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center">
                    The Person Behind the Code
                  </h2>
                  {/* Testing */}
                  <Focus />
                  {/* <div className="container px-4 py-16 mx-auto max-w-6xl xl:h-[350px]">
                    <div className="grid gap-16 md:grid-cols-[1fr,1.5fr] items-start">
                      
                      <div className="space-y-8 animate-fade-in-up">
                        <div className="relative mx-auto w-[350px] h-[450px] overflow-hidden group">
                          <Image
                            src={Profile}
                            alt="Profile"
                            fill
                            className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                            priority
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <Camera className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      
                      <div className="space-y-12 animate-fade-in-up animation-delay-300">
                        <section className="space-y-8 animate-fade-in-up animation-delay-500">
                          <h2 className="text-3xl font-light">ABOUT</h2>
                          <div className="space-y-6 text-white/60">
                            <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                              I've always been a problem-solver first, long
                              before I discovered programming. It all started
                              with building simple websites when I was younger,
                              until the day I wrote my first real application
                              and discovered my true passion.
                            </p>
                            <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                              Creating intuitive and impactful software
                              solutions is at the core of my work. I believe
                              strongly in writing clean, maintainable code that
                              solves real-world problems. Even though it's the
                              technical challenges I'm tackling, I find that the
                              human element is always at the heart of great
                              software.
                            </p>
                            <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                              When I'm not coding, you'll find me exploring new
                              technologies, contributing to open-source
                              projects, or mentoring aspiring developers. I'm
                              endlessly inspired by the tech community and the
                              endless possibilities of what we can create
                              together.
                            </p>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div> */}
                </div>
              </TabsContent>
              <TabsContent value="insights" className="w-full">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Beyond the Résumé
                  </h2>
                  <Insights />
                </div>
              </TabsContent>
              <TabsContent value="testimonials" className="w-full">
                <div className="mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    What Others Say
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                      <Testimonial key={index} testimonial={testimonial} />
                    ))}
                  </div>
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

export default About;
