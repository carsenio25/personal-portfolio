import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
	return (
		<div className="about-container">
		  <h1>About Me</h1>
		  <h3>Computer Science & Data Science Student @ UVA</h3>
		  <p>
			Passionate about leveraging technology to solve real-world problems. 
			Experienced in software development, data analysis, and machine learning.
		  </p>
		  <p><strong>Relevant Skills</strong> - Python, Java, SQL, R</p>
		  <h3>Work Experience:</h3>
		  <div className="work-experience">
			<div className="job">
			  <h4>Front End Cashier</h4>
			  <p><strong>Company ABC</strong> - June 2023 to August 2023</p>
			  <ul>
				<li>blah blah blah blah blah</li>
				<li>blah blah blah blah blah</li>
				<li>a bunch of stuff i did</li>
			  </ul>
			</div>
		  </div>
		</div>
	  );
	};