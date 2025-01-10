import Social from "./Social";

const Footer = () => {
  return (
    <footer>
      <div className="container mt-3">
        <div className="border-t border-black/15 dark:border-white/15 py-6 text-sm flex flex-col xl:flex-row items-center xl:justify-between gap-4">
          <div className=" text-black/40 dark:text-white/40 ">
            &copy; 2025. All rights reserved.
          </div>
          <div className="mb-8 xl:mb-0">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-black/40 dark:border-white/40 rounded-full flex justify-center items-center text-black/40 dark:text-white/40 text-base hover:bg-accent hover:border-accent hover:text-white dark:hover:text-black hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
