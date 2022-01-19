import React, { ReactElement, useCallback, useRef } from "react";
import { Rnd } from "react-rnd";
import useKeydown from "../../hooks/useKeydown";
interface Props {
	posX: number;
	posY: number;
	url: string;
}

export default function Image({ posX, posY, url }: Props): ReactElement {
	const size: number = 200;
	const ref = useRef(null);
	const escFunction = useCallback((e) => {
		if (e.keyCode === 46) {
			console.log(e.target);
		}
	}, []);
	useKeydown(escFunction, ref);
	return (
		<Rnd
			ref={ref}
			default={{
				x: posX,
				y: posY,
				width: size,
				height: size,
			}}
			onResizeStart={(e, dir, ref) => {
				e.stopPropagation();
			}}
			onDragStop={(e) => {
				// let rect = e.target.getBoundingClientRect();
				console.log(
					"x: " + ref.current.draggable.state.x,
					"y: " + ref.current.draggable.state.y
				);
			}}
			enableResizing={{
				top: false,
				right: false,
				bottom: false,
				left: false,
				topRight: true,
				bottomRight: true,
				bottomLeft: true,
				topLeft: true,
			}}
			maxWidth={size * 2}
			maxHeight={size * 2}
			minHeight={size}
			minWidth={size}
			lockAspectRatio={true}
			bounds="parent"
			className="border-2 border-blue-500 bg-blue-300 items-center justify-center "
		>
			<img src={url} alt="img" draggable={false} />
		</Rnd>
	);
}
