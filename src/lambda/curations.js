require('dotenv').config();
const axios = require('axios');

const nordotApiToken = process.env.REACT_APP_NORDOT_API_TOKEN
const nordotUnitId = process.env.REACT_APP_BEAUTY_UNIT_ID

exports.handler = function(event, context, callback) {
	axios({
        url: `v1.0/curator/curations.list`,
        method: `get`,
        headers: {
          Authorization: `Bearer ${nordotApiToken}`,
        },
        params: {
          unit_id: nordotUnitId,
          status: `public`,
          limit: 100,
        },
	}).then(json => {
		callback(null, {
			statusCode: 200,
			body: JSON.stringify(json.data)
		})
	}).catch(ex => callback(ex))
}