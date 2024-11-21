"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import Footer from "@/components/Footer";
import Focus from "@/components/Focus";
import Insights from "@/components/Insights";
import Testimonial from "@/components/Testimonial";

import memojiAvatar1 from "@/public/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/public/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/public/assets/images/memoji-avatar-5.png";

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
            <TabsList className="flex items-center justify-center w-full max-w-[400px] mx-auto bg-complementary gap-1 p-1 rounded-full border-black/15 dark:border-white/15 border">
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
                  <Focus />
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
