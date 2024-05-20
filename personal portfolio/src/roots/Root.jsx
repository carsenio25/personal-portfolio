import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
	return (
		<div>
			<h1>Carson Colyer</h1>
			<Link to={"/about"}>about</Link>
			<br></br>
			<Link to={"/projects"}>projects</Link>
			<br></br>
			<Link to={"/contact"}>contact</Link>
		</div>
	);
};