import React from 'react'
import TeamsCard from '../../../Components/Teams/TeamsCard';
import { Teams } from '../../../data/data';

const TeamSection = () => {
  return (
    <>
    	<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<section className="team">
					<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-36">
						<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
							Team
						</h1>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Meet the skilled and experienced team behind our successful
							digital marketing strategies
						</p>
					</div>

					<div className="lg:mt-18 mt-4">
						<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{Teams.map((item, index) => (
								<TeamsCard
									key={index}
									id={item.id}
									name={item.name}
									photo={item.photo}
									designation={item.designation}
									work={item.work}
								/>
							))}
						</div>
						<div className="bg-[#191A23]   w-full mx-auto flex justify-center mt-6  text-md text-white px-6 py-4 rounded-xl lg:mt-10 lg:text-xl lg:py-5 lg:mr-0 lg:px-16 lg:w-[269px] ">
							<button>See all Team</button>
						</div>
					</div>
				</section>
			</div>
    </>
  )
}

export default TeamSection