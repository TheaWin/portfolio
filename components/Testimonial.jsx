"use client";

import { Quote } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const Testimonial = ({ testimonial }) => {
  const paragraphs = testimonial.text.split("\n\n");

  return (
    <div className="relative bg-complementary p-8 rounded-3xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col">
      <div className="absolute -top-4 -right-4 bg-accent text-background p-3 rounded-full">
        <Quote size={24} />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-muted-foreground text-sm">
            {testimonial.position}
          </p>
        </div>
      </div>

      <ScrollArea className="flex-grow pr-4 mb-6 h-[300px]">
        <div className="text-foreground/90 space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
export default Testimonial;
