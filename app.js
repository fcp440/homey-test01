'use strict';

const Log = require('homey-log').Log;

module.exports.init = () => {
	console.log("Hello Jon!");
	console.log(`${Homey.manifest.id} running...`);
};
