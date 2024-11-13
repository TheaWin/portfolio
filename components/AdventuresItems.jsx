import Image from "next/image";
import { Fragment } from "react";

const AdventuresItems = ({ items, className, wrapperClassName }) => {
  return (
    <div className={`flex masked-gradient ${className} `}>
      <div className={`flex flex-none py-0.5 gap-6 pr-6 ${wrapperClassName}`}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-1 py-1 px-3 border border-white/10 rounded-lg bg-[#232329] hover:text-accent"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  className="h-[50px] w-auto"
                />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdventuresItems;
