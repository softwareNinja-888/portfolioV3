import { Profile } from './helper/Profile'


export function Line({ height = "h-20", color = "bg-gray-300", width = "w-px", className = "" }) {
  return (
    <div className={`mx-auto ${width} ${height} ${color} ${className}`}></div>
  );
}

export function Header() {

	const links = [
		{id:0,name:'About',href:'about'},
		{id:0,name:'Experience',href:'experience'},
		{id:0,name:'Tech Stack',href:'stack'},
		{id:0,name:'Projects',href:'projects'},
		{id:0,name:'Contact',href:'contact'},
	]

  return (
    <>
    	<div className="flex flex-row justify-between items-center px-16 py-6">
    		<div className="flex flex-row gap-6">
	    		<Profile/>
	    		<Line height='h-13' width='w-1' color="bg-primary" className="rotate-10"/>
    		</div>
    		<nav className="flex flex-row text-white gap-20 ">
    			{links.map(link=>{
    				return (
    					<div key={link.id}>
		    				<a href="#" className="relative after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#78dfea] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 font-roboto">
							  {link.name}
							</a>
		    			</div>
					)
    			})}
    		</nav>
    	</div>
    </>
  )
}