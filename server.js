const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
	console.log("Server running on port 3001");
});

app.post("/api/createProject", (req, res, next) => {
	console.log(req.body);
	const s4 = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};
	setTimeout(() => {
		res.json(s4() + s4());
	}, 2000);
});

app.post("/api/updateProject", (req, res, next) => {
	// console.log("Received " + req.body);
	console.log("received sendBeacon");
	res.status(200).end();
});
