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
	            <div className="flex flex-col text-md font-roboto ">
			        <span className="mb-6">
						I'm a developer who cares about the full picture, from the database to the interface and everything in between.
					</span>
					<span className="mb-6">
						My journey started in frontend development, building websites and web applications that solve real problems for businesses. Over time I've grown into backend development, learning to create systems that power great products. Today I'm working across the full stack, and actively exploring machine learning and AI integration to build smarter, more capable applications.
					</span>
					<span>
						I believe good software has to the power to bring to solve real problems, and I'm passionate about using my skills to make a positive impact.
						If you have a project that needs someone who thinks about the big picture, I'd love to be part of it.
					</span>
	            </div>
	          </div>

	        </div>
      </div>
  );
}