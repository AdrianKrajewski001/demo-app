import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapInteractionCSS } from "react-map-interaction";
import { Rnd } from "react-rnd";
import Image from "../../components/Image";
import useUnloadBeacon from "../../hooks/useUnloadBeacon";
export default function ProjectPage(): ReactElement {
	const [loading, setLoading] = useState<boolean>(true);
	const { projectId } = useParams();
	const imageUrl: string =
		"https://pixselo.com/wp-content/uploads/2018/03/dummy-placeholder-image-400x400.jpg";

	useUnloadBeacon({
		url: "http://localhost:3001/api/updateProject",
		payload: () => {
			return "";
		},
	});

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	if (loading) {
		return (
			<div className="w-screen h-screen flex justify-center items-center text-3xl ">
				Loading project ...
			</div>
		);
	} else {
		return (
			<>
				<div className="w-screen h-screen">
					<Image posX={10} posY={10} url={imageUrl} />
					<Image posX={276} posY={10} url={imageUrl} />
				</div>
			</>
		);
	}
}
