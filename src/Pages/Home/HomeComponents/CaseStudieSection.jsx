import React from 'react'
import { caseStudies } from '../../../data/data'
import { MdOutlineArrowOutward } from "react-icons/md";


const CaseStudieSection = () => {
  return (
    <>
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="mt-8 text-center justify-center lg:justify-start rounded-xl lg:flex lg:gap-8 lg:mt-36">
                        <h1 className="text-2xl lg:text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl lg:font-semibold inline-block">
                            Case Studies
                        </h1>
                        <p className="text-center mt-4 text-sm lg:mt-0 lg:text-xl ">
                            <span className="block">
                                Explore Real-Life Examples of Our Proven Digital Marketing
                            </span>
                            <span className="">Success through Our Case Studies</span>
                        </p>
                    </div>
                    <section className="w-full rounded-2xl p-4 text-white mt-6 lg:mt-20 lg:bg-[#191A23]">
                        <div className="flex lg:flex-row lg:gap-0 gap-4 overflow-x-auto scroll-smooth scrollbar-hide lg:divide-x lg:divide-white">
                            {caseStudies.map((item, index) => (
                                <div
                                    key={index}
                                    className={`min-w-[80%] lg:min-w-0 lg:flex-1 lg:text-xl p-4 lg:p-14 bg-[#191A23] rounded-2xl lg:rounded-none`}
                                >
                                    <p>{item.content}</p>
                                    <div className="mt-4 flex items-center gap-2 cursor-pointer text-[#B9FF66]">
                                        <span>Learn more</span>
                                        <MdOutlineArrowOutward />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
    </>
  )
}

export default CaseStudieSection