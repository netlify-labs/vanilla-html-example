exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || "World"
    return { statusCode: 200, body: JSON.stringify({ msg: `Hello ${subject}` }) }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
