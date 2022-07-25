const axios = require('axios')
const jwt = require('jsonwebtoken')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const email = "devrel@deepgram.com"
  const secret = process.env.HELLONEXT_SSO
  const token = jwt.sign({email}, secret, { algorithm: "HS256" })
  const payload = {
    title: `Feedback on ${body.page}`,
    description: body.feedback,
    bucket_id: 10405,
  }
  
  const {
    data,
  } = await axios.post(
    "https://app.hellonext.co/api/v3/feature_requests",
    payload,
    {
      headers: {
        "API-KEY": process.env.HELLO_NEXT_API,
        "Authorization": token,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "ALLOW-PRIVATE": false
      }
    }
    
    )
  console.log("data", data)
    return {
      statusCode: 200,
      body: JSON.stringify({postId: data.id})
    }  
}