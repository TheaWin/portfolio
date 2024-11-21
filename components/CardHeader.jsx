import StarIcon from "@/public/assets/icons/star";

const CardHeader = ({ title, description, className }) => {
  return (
    <div
      className={`flex flex-col p-6 md:py-8 md:px-10 xl:py-3 xl:px-6 ${className}`}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-accent  size-9" />
        <h3 className="text-3xl xl:text-2xl">{title}</h3>
      </div>
      <p className="text-sm text-black/60 dark:text-white/60 mt-2 lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;
