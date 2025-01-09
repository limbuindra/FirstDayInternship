import React from "react";
import { StarFilled } from "@ant-design/icons";

const SocialMedia = () => {
	return (
		<>
			<div className="card div2">
				<h1>
					Social Media{" "}
					<span style={{ color: "orange" }}>
						10x
						<br />
					</span>{" "}
					Faster with AI
				</h1>
				<div className="rating">
					<StarFilled />
					<StarFilled />

					<StarFilled />

					<StarFilled />

					<StarFilled />
				</div>
				<p style={{ fontSize: "15px" }}>Over 4,000 5-star reviews</p>
			</div>
		</>
	);
};

export default SocialMedia;
