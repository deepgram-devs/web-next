const axios = require("axios");

exports.handler = async function (event, context) {
	const body = JSON.parse(event.body);
	const honeypot = body.honeypot;
	if (honeypot !== "") {
		return {
			statusCode: 200,
			headers: {
				"access-control-allow-origin": "*",
			},
		};
	}
	const hookId = body.hookId;

	const url = `${process.env.ZAP_HOOK_URL}${hookId}`;

	try {
		await axios.post(url, event.body);

		return {
			statusCode: 200,
			headers: {
				"access-control-allow-origin": "*",
			},
		};
	} catch (err) {
		console.log(err);

		return {
			statusCode: 500,
			headers: {
				"access-control-allow-origin": "*",
			},
		};
	}
};
