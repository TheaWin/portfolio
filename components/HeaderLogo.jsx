"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import darkLogo from "@/public/assets/logo.svg";
import lightLogo from "@/public/assets/logolight.svg";
import Image from "next/image";

const HeaderLogo = ({ className }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const imageSrc = theme == "dark" ? darkLogo : lightLogo;

  return (
    <h1 className={`text-4xl font-semibold flex flex-row gap-3 ${className}`}>
      Thea Win
      <Image
        src={imageSrc}
        alt="Thea Win Logo. It is a blueberry"
        width={40}
        height={40}
      />
    </h1>
  );
};

export default HeaderLogo;
