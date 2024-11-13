"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import Profile from "@/public/assets/images/about.jpg";

const Focus = () => {
  return (
    <div className="container px-4 py-10 mx-auto max-w-6xl xl:h-[350px]">
      <div className="grid gap-16 md:grid-cols-[1fr,1.5fr] items-start">
        {/* Profile Section */}
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

        {/* Content Section */}
        <div className="space-y-12 animate-fade-in-up animation-delay-300">
          <section className="space-y-8 animate-fade-in-up animation-delay-500">
            <h2 className="text-3xl font-light">ABOUT</h2>
            <div className="space-y-6 text-white/60">
              <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                I&apos;ve always been a problem-solver first, long before I
                discovered programming. It all started with building simple
                websites when I was younger, until the day I wrote my first real
                application and discovered my true passion.
              </p>
              <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                Creating intuitive and impactful software solutions is at the
                core of my work. I believe strongly in writing clean,
                maintainable code that solves real-world problems. Even though
                it&apos;s the technical challenges I&apos;m tackling, I find
                that the human element is always at the heart of great software.
              </p>
              <p className="leading-relaxed hover:text-accent transition-colors duration-300">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or mentoring
                aspiring developers. I&apos;m endlessly inspired by the tech
                community and the endless possibilities of what we can create
                together.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Focus;
