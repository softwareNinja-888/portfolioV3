import { Dot } from "lucide-react";
import { Line } from "./Header";

import { HeadShot } from './helper/HeadShot';

function Illustration({className}){
	return (
		<>
			<div className={`${className}`}>
				<img src="/webapp.svg" alt="Illustration" className=""/>
			</div>
		</>
	)
}

export function About() {
  return (
		<div id='about' className="flex flex-col lg:flex-row lg:px-24 pb-20 gap-[100px] px-5 py-32 text-white">

	        <Illustration  className="order-2 z-auto h-full flex-1" />

	        <div className="flex flex-col w-full lg:w-1/2 order-1">
	          <div className="flex items-center gap-5 ">
	            <p className="text-3xl text-primary font-roboto">{`#1.`}</p>
	            <p className="text-3xl  font-roboto">About Me</p>
	          </div>
	          <hr
	            className="w-12/12 h-2 self-center  my-4 text-primary  bg-primary "
	            style={{ transform: 'scaleY(0.5)' }}
	          />
	          <div className="flex flex-col mt-4 font-mont gap-5">
	            <div className="text-md font-space">
	              Hello! I'm Bayanda, a Passionate Front-End Developer.
	            </div>
	            <div className="flex flex-col text-md font-mont ">
	              <span className="mb-6">
	              I have a passion for  turning ideas into beautiful, functional websites. My sweet spot is crafting eye-catching landing pages that help businesses make that perfect first impression online. Every pixel matters to me, and I take pride in balancing stunning design with smooth, intuitive user experiences.
	              </span>
	              <span>
	                When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful – if you're looking for someone to bring your web presence to life, I'd love to chat about how we can make that happen together.
	             </span>
	            </div>
	          </div>

	        </div>
      </div>
  );
}
