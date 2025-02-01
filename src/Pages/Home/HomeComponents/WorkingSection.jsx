import React from 'react';
import { Process } from '../../../data/data';
import ProcessCard from '../../../Components/ProcessCards/ProcessCard';

const WorkingSection = () => {
  return (
    <>
    	<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
				<section>
					<div className="mt-8 text-center justify-center rounded-xl lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-32">
						<h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
							Our Working Process
						</h1>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Step-by-Step Guide to Achieving Your Business Goals
						</p>
					</div>
				</section>

				<section className="process">
					<div className="mt-18">
						<div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-12">
							{Process.map((item, index) => (
								<ProcessCard
									key={index}
									id={item.id}
									title={item.title}
									content={item.content}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
    </>
  )
}

export default WorkingSection