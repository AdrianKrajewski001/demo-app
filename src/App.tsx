import React, { ReactElement } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";

function App(): ReactElement {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/:projectId" element={<ProjectPage />} />
		</Routes>
	);
}

export default App;
