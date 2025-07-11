export function Xp(){

	const xp = [
		{id:0,name:'Freelancer',date:'Jan 2022 - present',description:"When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful"},
		{id:0,name:'Freelancer',date:'Jan 2022 - present',description:"When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful"},
		{id:0,name:'Freelancer',date:'Jan 2022 - present',description:"When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful"},
		{id:0,name:'Freelancer',date:'Jan 2022 - present',description:"When I'm not coding away, I'm probably exploring the latest web design trends or experimenting with new techniques. I believe in keeping things simple yet impactful"}
	]
	return(
		<>
			<div id="xp" className=" flex flex-col  md:px-24 lg:px-24 pb-20 gap-[100px] px-5 py-32 text-white">
				<div className="mx-auto">
					<div className="flex items-center justify-center gap-5 mx-auto text-center">
			            <p className="text-3xl text-primary font-roboto">{`#2.`}</p>
			            <p className="text-3xl  font-roboto text-white block">Experience</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-10 justify-center items-center w-11/12 mx-auto">
					{xp.map(xp=>{
						return (
							<div className="flex flex-row gap-0 ">
								<div className="font-raleway text-primary flex-1/3 text-xl">
									{xp.date}
								</div>
								<div className="flex flex-col gap-8  flex-2/3">
									<div className="text-xl font-playfair">{xp.name}</div>
									<div className="font-raleway w-12/12">{xp.description}</div>
								</div>
							</div>	
						)
					})}
				</div>
			</div>
		</>
	)
}