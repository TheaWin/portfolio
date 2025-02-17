"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "@/components/Footer";

const info = [
  {
    icon: <FaWhatsapp />,
    title: "Phone",
    description: (
      <a
        href="https://wa.me/6592382743"
        className="text-accent"
        target="_blank"
      >
        (+65) 9238 2743
      </a>
    ),
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: (
      <a
        href="mailto:mstheawin@gmail.com"
        className="text-accent"
        target="_blank"
      >
        mstheawin@gmail.com
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Sharjah, United Arab Emirates",
  },
];

const Contact = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-complementary rounded-xl">
                <h3 className="text-4xl text-text">Let&apos;s work together</h3>
                <p className="text-black/60 dark:text-white/60">
                  If you wanna create something amazing together, email me or
                  just fill up the form below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                <Button size="md" className="max-w-40">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-complementary text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-black/60 dark:text-white/60">
                          {item.title}
                        </p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default Contact;
