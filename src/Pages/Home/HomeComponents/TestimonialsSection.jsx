import React from 'react'
import Sliders from '../../../Components/Slider/Sliders'

const TestimonialsSection = () => {
  return (
    <>
	<div className="max-w-screen-xl mx-auto px-4 lg:px-8 lg:mt-6">
				<section>
					<div className="mt-8 text-center justify-center rounded-xl lg:space-x-2 lg:flex lg:items-center lg:justify-start lg:gap-8 lg:mt-16">
						<h2 className="text-2xl lg:text-4xl bg-[#B9FF66] lg:px-2 lg:py-2 px-1 rounded-xl lg:font-medium inline-block">
							Testimonials
						</h2>
						<p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl">
							Hear from Our Satisfied Clients: Read Our Testimonials to Learn
							More about Our Digital Marketing Services
						</p>
					</div>
				</section>

				<section className="lg:mt-18 mt-14 p-4 ">
					<Sliders />
				</section>
			</div>
    </>
  )
}

export default TestimonialsSection