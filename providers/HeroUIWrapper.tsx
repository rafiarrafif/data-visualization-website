"use client";

import { HeroUIProvider } from "@heroui/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { useEffect, useState } from "react";

const HeroUIWrapper = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      {mounted && (
        <NextThemesProvider attribute="class" defaultTheme="light">
          <>{children}</>
        </NextThemesProvider>
      )}
    </HeroUIProvider>
  );
};

export default HeroUIWrapper;
