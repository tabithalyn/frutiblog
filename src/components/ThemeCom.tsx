"use client"

import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeCom = ({ children }:{
  children: ReactNode;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  return (
    <div className={theme}>
      <div className="bg-transparent text-gray-700 dark:text-gray-200 dark:bg-gray-900 min-h-screen">
        {children}
      </div>
    </div>
  );
}
 
export default ThemeCom;