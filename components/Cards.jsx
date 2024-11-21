import grainImage from "@/public/assets/images/grain.jpg";

const Cards = ({ className, children }) => {
  return (
    <div
      className={`bg-complementary rounded-3xl relative overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-black/20 dark:after:outline-white/20 after:pointer-events-none ${className}`}
    >
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Cards;
