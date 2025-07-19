import { Dot } from "lucide-react";
import { Line } from "./Header";

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
		<div id='about' className="flex flex-col lg:flex-row md:px-24 lg:px-24 pb-20 gap-[100px] px-5 py-32 text-white justify-center items-center">

	        <Illustration  className="order-2 z-auto h-full flex-1 " />

	        <div className="flex flex-col w-full lg:w-1/2 order-1">
	          <div className="flex items-center gap-5 ">
	            <p className="text-3xl text-primary font-quickSand">{`#1.`}</p>
	            <p className="text-3xl  font-roboto font-bold">About Me</p>
	          </div>
	          <hr
	            className="w-12/12 h-2 self-center  my-4 text-primary  bg-primary "
	            style={{ transform: 'scaleY(0.5)' }}
	          />
	          <div className="flex flex-col mt-4 font-mont gap-5">
	            <div className="text-md font-roboto">
	              Hello! I'm Bayanda, a Full Stack Developer.
	            </div>
	            <div className="flex flex-col text-md font-roboto ">
			        <span className="mb-6">
	              I love building complete web applications from the ground up. My sweet spot is creating full-stack solutions that look great and work seamlessly behind the scenes. I get excited about both crafting clean, intuitive interfaces and architecting solid backend systems that power them.
	              </span>
	              <span>
	                When I'm not coding, I'm usually diving into new frameworks or exploring with different tech stacks. I believe in building things that are both powerful under the hood and clean on the surface. If you're looking for someone to bring your project to life from database to deployment, I'd be excited to chat about making that happen together.
	             </span>
	            </div>
	          </div>

	        </div>
      </div>
  );
}
