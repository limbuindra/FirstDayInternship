import React from "react";
import Card from "../../Components/Card/Card";
import { Data } from "../../data/data";

const Home = () => {
	return (
		<div className="p-6  flex items-center justify-center flex-col lg:flex lg:px-20 lg:justify-center lg:mt-20">
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
  {/* Left Content */}
  <div className="lg:w-1/2 lg:pr-8 order-1">
    <div className="text-4xl font-medium lg:text-6xl">
      <p>Navigating the  <br /> digital landscape <br /> for success</p>
    </div>
    <div className="mt-6 lg:text-2xl lg:mt-8">
      <p>
        Our digital marketing agency helps businesses <br/>ow and succeed online
        with a range of services including SEO, PPC, social media marketing, and
        content creation.
      </p>
    </div>
    <div className="mt-6">
      <button className="bg-[#191A23] text-white px-20 py-4 rounded-xl lg:mt-6 lg:text-2xl lg:px-6">
        Book a consultation
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className=" lg:pl-8 order-2        lg:w-[600px]      "> 
    <img
      src="src/assets/illustration.png"
      alt="Digital Illustration"
      className="w-full"
    />
  </div>
</div>


</div>

				<div className="flex flex-wrap mt-6 justify-center lg:gap-22 items-center gap-5">
					<div>
						<img src="src/assets/Vector.png" alt="amazon" />
					</div>
					<div>
						<img src="src/assets/dribble.png" alt="dribble" />
					</div>
					<div>
						<img src="src/assets/hubspot.png" alt="hubspot" />
					</div>
					<div>
						<img src="src/assets/netflix.png" alt="netflix" />
					</div>
					<div>
						<img src="src/assets/notion.png" alt="notion" />
					</div>
					<div>
						<img src="src/assets/zoom.png" alt="zoom" />
					</div>
				</div>
			<div className="flex items-center justify-center flex-col mt-14">
				<div className="text-4xl bg-[#B9FF66] py-1 px-2 rounded-xl ">
					<h1>Services</h1>
				</div>
				<p className="text-center mt-6">
					At our digital marketing agency, we offer a range of services to help
					businesses grow and succeed online. These services include:
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
				{Data.map((item, index) => (
					<Card key={index} title={item.title} image={item.image} />
				))}
			</div>
		</div>
	);
};

export default Home;
