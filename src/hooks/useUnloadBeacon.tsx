import { useEffect } from "react";
interface Args {
	url: string;
	payload: any;
}
export default function useUnloadBeacon({ url, payload = () => {} }: Args) {
	const eventHandler = () => navigator.sendBeacon(url, payload());

	useEffect(() => {
		window.addEventListener("unload", eventHandler, true);
		return () => {
			window.removeEventListener("unload", eventHandler, true);
		};
	}, []);
}
