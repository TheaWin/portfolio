import Link from "next/link";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/TheaWin" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/thea-win/" },
  { icon: <FaXTwitter />, path: "https://x.com/mstheawin" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
