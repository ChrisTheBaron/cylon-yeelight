/*
 * cylon-yeelight discovery tool
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

'use strict';

console.log("Press Ctrl+C to exit");

var YeelightBlue = require('yeelight-blue');

YeelightBlue.discover(function (yeelight) {

	console.log("Found: " + yeelight.uuid);

});
