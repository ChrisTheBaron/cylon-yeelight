/*
 * cylon-yeelight commands
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */

"use strict";

var Cylon = require("cylon"),
	YeeLight = require("yeelight-blue"),
	Commands = require('./commands');

var Adaptor = module.exports = function Adaptor(opts) {
	Cylon.Logger.info("Adaptor#construct");

	Adaptor.__super__.constructor.apply(this, arguments);

	this.opts = opts || {};

	this.connector = null;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function (callback) {
	Cylon.Logger.info("Adaptor#connect");

	YeeLight.discover(function (yeelight) {

		if (yeelight.uuid === this.opts.uuid) {

			this.connector = yeelight;

			this.proxyMethods(Commands, this.connector, this);

			this.connector.connectAndSetup(callback);

		}

	}.bind(this));

};

Adaptor.prototype.disconnect = function (callback) {
	Cylon.Logger.info("Adaptor#disconnect");

	this.connector.disconnect(callback);

};
