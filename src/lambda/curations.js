require('dotenv').config();
const axios = require('axios');

const nordotApiToken = process.env.REACT_APP_NORDOT_API_TOKEN
const nordotUnitId = process.env.REACT_APP_BEAUTY_UNIT_ID

console.log(nordotApiToken, nordotUnitId)

exports.handler = function(event, context, callback) {
  axios.get(`https://api.nordot.jp/v1.0/curator/curations.list`, {
    method: `get`,
    headers: {
      Authorization: `Bearer ${nordotApiToken}`,
    },
    params: {
      unit_id: nordotUnitId,
      status: `public`,
      limit: 30,
    },
  }).then(response => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(response.data)
		})
	}).catch(error => {
		const {
			status,
			statusText
		} = error.response;
		console.log(`Error! HTTP Status: ${status} ${statusText}`);
	})
}