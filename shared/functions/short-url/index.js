const { Client, query } = require("faunadb");

exports.handler = async (event, context) => {
	try {
		const shortUrl = await getLongUrl(event.queryStringParameters.path);
		const redirectUrl = shortUrl ? shortUrl.target : "https://deepgram.com/";

		return {
			statusCode: 302,
			headers: {
				location: redirectUrl,
				"Cache-Control": "no-cache",
			},
			body: JSON.stringify({ redirectUrl }),
		};
	} catch (err) {
		console.error(err);
	}
};

const getLongUrl = async (path) => {
	// Lookup path in FaunaDb & get the longUrl if it exists
	try {
		const client = new Client({
			secret: process.env.FAUNA_DB_SECRET,
		});

		const response = await client.query(
			query.Map(query.Paginate(query.Match(query.Index("shortCodesBySource"), path)), query.Lambda("shortcodes", query.Get(query.Var("shortcodes"))))
		);

		if (response.data && response.data.length > 0) {
			return response.data[0].data;
		}
	} catch (err) {
		console.error(err);
	}

	return undefined;
};
