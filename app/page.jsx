import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-28">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Thea Win</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/80 dark:text-white/80">
              Web developer passionate about crafting creative digital
              experiences using a variety of programming languages and
              technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase gap-2">
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Me
                  <FaEnvelope />
                </Link>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-background hover: transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
