import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./roots/Root.jsx";
import { About } from "./roots/About.jsx";
import { Projects } from "./roots/Projects.jsx";
import { Contact } from "./roots/Contact.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/projects",
		element: <Projects />,
	},
  {
		path: "/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);