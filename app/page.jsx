import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-36">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full-Stack Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Thea Win</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase gap-2">
                <a
                  href="/assets/resume.pdf"
                  download="resume.pdf"
                  className="flex items-center"
                >
                  <span>Download CV </span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"
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
