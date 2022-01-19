export default function addFilesToFormData(fileList: FileList): FormData {
	const formData = new FormData();
	[...fileList].forEach((item) => {
		formData.append("picture", item, item.name);
	});

	return formData;
}
