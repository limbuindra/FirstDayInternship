import React,{useState} from 'react'
import ServicesCard from '../Card/ServicesCard';
import { Data } from '../Data/Data';
const Services = () => {
	const [selectedCard, setSelectedCard] = useState([]);
	const handleSelect = (index) => {
		setSelectedCard((prevSelected) =>
		  prevSelected.includes(index)
			? prevSelected.filter((i) => i !== index) 
			: [...prevSelected, index] 
		);
	  };
  return (
    <>
    	<div className="max-w-screen-xl mx-auto px-4 lg:px-8">
			<h1 className='font-semibold text-xl'>Our Services</h1>
<p className='text-slate-500 text-sm'>Please select which service you are interested in.</p>
					<div className="lg:mt-18 mt-4">
						<div className="grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
							{Data.map((service, index) => (
								<ServicesCard
								key={index}
								photo={service.photo}
								title={service.title}
								index={index}
								selected={selectedCard.includes(index)}
								onSelect={handleSelect}
								/>
							))}
						</div>
					
					</div>
			</div>
    </>
  )
}

export default Services;