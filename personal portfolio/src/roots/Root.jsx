import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
	return (
		<div>
			<h1>Root Page</h1>
			<Link to={"/projects"}>student</Link>
			<br></br>
			<Link to={"/about"}>about</Link>
			<br></br>
			<Link to={"/contact"}>contact</Link>
		</div>
	);
};