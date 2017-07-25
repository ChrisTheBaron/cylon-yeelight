/*
 * cylon-yeelight commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

module.exports = [

/**
 * Turns on the Yeelight
 *
 * @param {Function} callback
 * @export
 */
	"turnOn",

/**
 * Turns off the Yeelight
 *
 * @param {Function} callback
 * @export
 */
	"turnOff",

/**
 * Sets whether the Yeelight changes gradually between light modes
 *
 * @param {Bool} on
 * @param {Function} callback
 * @export
 */
	"setGradualMode",
/**
 * Sets the colour and brightness of the Yeelight
 *
 * @param {Number} red between 0 and 255
 * @param {Number} green between 0 and 255
 * @param {Number} blue between 0 and 255
 * @param {Number} brightness between 0 and 100
 * @param {Function} callback
 * @export
 */
	"setColorAndBrightness",

/**
 * Gets the colour and brightness of the Yeelight
 *
 * @param {Function} callback
 * @export
 */
	"getColorAndBrightness"

];
