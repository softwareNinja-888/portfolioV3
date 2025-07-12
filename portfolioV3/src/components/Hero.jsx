import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Profile } from './helper/Profile';
import { Introduction } from './helper/Introduction'
import { Menu, X } from 'lucide-react';
import { CodeXml } from "lucide-react"; 

export function Line({ height = "h-20", color = "bg-gray-300", width = "w-px", className = "" }) {
  return <div className={`mx-auto ${width} ${height} ${color} ${className}`}></div>;
}


export function CodeBox() {
  const code = `const greet = () => {
  console.log("Hello, world!");

  };

greet();
`;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(interval);
    }, 100); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-50 h-50 sm:w-60 sm:h-60 lg:w-90 lg:h-90 border-4 border-primary rounded-sm bg-transparent ">
      <pre className="text-green-400 text-xs md:text-sm font-mono whitespace-pre-wrap px-2 pt-4">
        {displayedText}
        <motion.span
          className="inline-block bg-green-400 w-[1px] h-4 ml-1 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </pre>

      {/* Floating icon */}
      <div className="absolute -bottom-4 -right-4 bg-bg px-1 py-1 rounded">
        <CodeXml className="text-teal-400 w-8 h-8 rotate-10" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-0 py-16 px-4 lg:px-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center ">
        <CodeBox/>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Introduction />
      </div>
    </div>
  );
}
