import React, { ReactElement } from "react";

interface Props {
	id: string;
	type: string;
	placeholder: string;
	value: string;
	setValue: any;
}

export default function Input({
	id,
	type,
	placeholder,
	value,
	setValue,
}: Props): ReactElement {
	return (
		<div className="rounded-md shadow-sm -space-y-px">
			<div>
				<label htmlFor={id} className="sr-only">
					{placeholder}
				</label>
				<input
					id={id}
					name={id}
					type={type}
					autoComplete="nofill"
					required
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
