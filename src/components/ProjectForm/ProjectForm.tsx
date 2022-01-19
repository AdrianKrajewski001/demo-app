import React, { ReactElement, useEffect, useRef, useState } from "react";
import createProject from "../../util/createProject";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import FileInput from "../FileInput";
import addFilesToFormData from "../../util/addFilesToFormData";
import { createModuleResolutionCache } from "typescript";
export default function ProjectForm(): ReactElement {
	const [email, setEmail] = useState<string>("");
	const [emailTo, setEmailTo] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [files, setFiles] = useState<FormData>(new FormData());
	const navigate = useNavigate();

	useEffect(() => {
		console.log(files.getAll("picture"));
	}, [files]);
	return (
		<div className="bg-white rounded-lg border-white border-opacity-5 flex  items-center justify-center md:ml-8 py-12 px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Create a project
					</h2>
				</div>
				<form
					className="mt-8 space-y-6"
					method="POST"
					onSubmit={async (e) => {
						e.preventDefault();
						const id = await createProject(email, emailTo, title, files);
						navigate(`/${id}`);
					}}
				>
					<Input
						id="email"
						type="email"
						placeholder="Your email"
						value={email}
						setValue={setEmail}
					/>
					<Input
						id="emailTo"
						type="email"
						placeholder="Email to"
						value={emailTo}
						setValue={setEmailTo}
					/>
					<Input
						id="projectTitle"
						type="text"
						placeholder="Project title"
						value={title}
						setValue={setTitle}
					/>
					<FileInput multiple={true} setValue={setFiles} />

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
