import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div class="footer-container">
					<div class="footer-section">
						<h3>About Us</h3>
						<p>We are a team dedicated to providing amazing web experiences.</p>
					</div>
					<div class="footer-section">
						<h3>Quick Links</h3>
						<ul>
						
						</ul>
					</div>
					<div class="footer-section">
						<h3>Follow Us</h3>
						<div class="social-links">
							<a href="#">Facebook</a>
							<a href="#">Twitter</a>
							<a href="#">Instagram</a>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<p>© 2025 My Website. All Rights Reserved.</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
