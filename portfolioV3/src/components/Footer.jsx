import { Dot } from "lucide-react"

export function Footer(){
	const contact = [
		{id:0,name:'Email',link:'www.instagram.com',icon:'/linkedin.svg'},
		{id:1,name:'Linkedin',link:'www.instagram.com',icon:'/linkedin.svg'},
		{id:2,name:'Github',link:'www.instagram.com',icon:'/githubIcon.svg'},
		{id:3,name:'Instagram',link:'www.instagram.com',icon:'/linkedin.svg'},
	]
	return(
		<>
			<div id="contact" className=" flex flex-col lg:flex-row md:px-24 lg:px-24 pb-20 gap-[100px] px-5 py-32 text-white">
				<div className="mx-auto">
					<div className="flex items-center justify-center gap-5 mx-auto text-center">
			            <p className="text-3xl text-primary font-roboto">{`#2.`}</p>
			            <p className="text-3xl  font-roboto text-white block">Contact</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 py-10">
						{contact.map(contact=>{
							return (
								<div className="border-2 border-white rounded-xl w-full lg:w-140 h-15 cursor-pointer ">
									<div className="flex flex-row gap-3 items-center px-4 py-3">
										<img src={contact.icon} className="w-5 h-5" alt={`${contact.name} icon`}/>
										<div className="text-lg font-quickSand">{contact.name}</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</>
	)
}