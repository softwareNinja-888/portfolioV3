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
	            {/*<div className="text-md font-roboto">
	              Hello! I'm Bayanda, a Full Stack Developer.
	            </div>*/}
	            <div className="flex flex-col text-md font-roboto ">
			        <span className="mb-6">
	              I'm passionate about crafting web applications that work beautifully from start to finish. My journey began in frontend development, creating websites that solve real problems for businesses and individuals.Now I'm expanding into backend development to become a full-stack developer. I'm also exploring machine learning and AI because I love learning new technologies that can make a real impact.
	              </span>
	              <span>
	                My philosophy is simple, build things that are as solid as they are beautiful. Clean code that users love, powerful systems that just work. If you have a project that needs someone who cares about both the big picture and the details from database to deployment let's talk. I'd love to help bring your ideas to life.
	             </span>
	            </div>
	          </div>

	        </div>
      </div>
  );
}
