import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import { Root } from "./roots/Root.jsx";
import { About } from "./roots/About.jsx";
import { Projects } from "./roots/Projects.jsx";
import { Contact } from "./roots/Contact.jsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout><Root /></Layout>,
	  },
	  {
		path: "/about",
		element: <Layout><About /></Layout>,
	  },
	  {
		path: "/projects",
		element: <Layout><Projects /></Layout>,
	  },
	  {
		path: "/contact",
		element: <Layout><Contact /></Layout>,
	  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);