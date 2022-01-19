interface RequestBody {
	email: string;
	emailTo: string;
	title: string;
	files: FormData;
}

export default async function createProject(
	email: string,
	emailTo: string,
	title: string,
	files: FormData
): Promise<String> {
	const reqBody: RequestBody = {
		email,
		emailTo,
		title,
		files,
	};
	try {
		const res = await fetch("http://localhost:3001/api/createProject", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		});

		const id: string = await res.json();
		console.log(id);
		return id;
	} catch (e) {
		console.log(e);
	}
}
