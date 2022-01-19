import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import createProject from "../../util/createProject";
import ProjectForm from "../../components/ProjectForm";

export default function LandingPage(): ReactElement {
	return (
		<div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-indigo-500">
			<ProjectForm />
		</div>
	);
}
