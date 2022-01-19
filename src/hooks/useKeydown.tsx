import { useEffect } from "react";

export default function useKeydown(callback, ref) {
	useEffect(() => {
		window.addEventListener("keydown", callback, false);

		return () => {
			window.removeEventListener("keydown", callback, false);
		};
	}, []);
}
