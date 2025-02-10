"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import Profile from "@/public/assets/images/about.jpg";

const Focus = () => {
  return (
    <div className="container px-4 pt-10 mx-auto max-w-6xl xl:h-[350px]">
      <div className="grid gap-16 md:grid-cols-[1fr,1.5fr] items-start">
        <div className="space-y-8 animate-fade-in-up">
          <div className="relative mx-auto w-[370px] h-[470px] overflow-hidden group">
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
            {/* <h2 className="text-3xl font-light">About</h2> */}
            <div className="space-y-6 text-black/60 dark:text-white/60">
              <p className="leading-relaxed  transition-colors duration-300">
                My journey into{" "}
                <span className="text-accent">web development</span> began in
                high school, where I was first introduced to programming.
                Although I didn&apos;t fully realize it at the time, that spark
                grew into a passion as I explored coding during a{" "}
                <span className="text-accent">career shift</span> last year.
              </p>
              <p className="leading-relaxed transition-colors duration-300">
                <span className="text-accent">Creating</span> functional
                applications and seeing my{" "}
                <span className="text-accent">ideas come to life</span> has been
                incredibly fulfilling. Despite the challenges and the occasional
                late nights, the{" "}
                <span className="text-accent">sense of achievement</span> I feel
                when a project is complete keeps me motivated and inspired.
              </p>
              <p className="leading-relaxed transition-colors duration-300">
                Now, as a web developer, I focus on building{" "}
                <span className="text-accent">
                  responsive, accessible, and efficient
                </span>{" "}
                websites and applications. I&apos;m{" "}
                <span className="text-accent">
                  constantly learning and adapting
                </span>{" "}
                to new technologies, always pushing myself to stay ahead of the
                curve. Outside of coding, I enjoy{" "}
                <span className="text-accent">reading and gaming</span>, which
                help me stay balanced and fueled with creativity for my work.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Focus;
