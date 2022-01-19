import React, { ReactElement, useRef } from "react";
import addFilesToFormData from "../../util/addFilesToFormData";
interface Props {
	multiple: boolean;
	setValue: any;
}

export default function FileInput({ multiple, setValue }: Props): ReactElement {
	const fileInputText = useRef(null);
	return (
		<div className="border border-dashed border-gray-300 relative text-gray-500">
			<input
				type="file"
				accept="image/png, image/jpg, image/jpeg"
				multiple={multiple}
				required
				onChange={(e) => {
					setValue(addFilesToFormData(e.target.files));
					fileInputText.current.innerText = [...e.target.files].map(
						(file) => file.name
					);
				}}
				className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50 sm:text-sm"
			/>
			<div className="text-center p-10 absolute top-0 right-0 left-0 m-auto font-semibold">
				<h4 ref={fileInputText}>
					Drop files anywhere to upload
					<br />
					<span className="font-normal">or</span>
					<br />
					Click to select files
				</h4>
			</div>
		</div>
	);
}
