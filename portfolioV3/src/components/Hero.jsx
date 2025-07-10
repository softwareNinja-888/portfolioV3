import { useState } from 'react';

import { Profile } from './helper/Profile';
import { Introduction } from './helper/Introduction'
import { Menu, X } from 'lucide-react';
import { Code } from "lucide-react"; 

export function Line({ height = "h-20", color = "bg-gray-300", width = "w-px", className = "" }) {
  return <div className={`mx-auto ${width} ${height} ${color} ${className}`}></div>;
}

export function FramedImagePlaceholder() {
  return (
    <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 border-4 border-primary rounded-sm">
      <div className="absolute -bottom-4 -right-4 bg-bg px-1 py-1 rounded">
        <Code className="text-teal-400 w-6 h-6" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-0 py-16 px-4 lg:px-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center ">
        <FramedImagePlaceholder />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Introduction />
      </div>
    </div>
  );
}
