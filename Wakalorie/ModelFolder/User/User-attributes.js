﻿/**  * @fileOverview setup datastore class, attributes, events for User * @author Welsh Harris * @created 09/07/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) *///-------------------------------------------------------------------------//dataclass //-------------------------------------------------------------------------model.User = new DataClass("Users", "public");//-------------------------------------------------------------------------//storage//-------------------------------------------------------------------------model.User.uuid = new Attribute("storage", "uuid", "key auto");model.User.email = new Attribute("storage","string", "btree");model.User.ha1key = new Attribute("storage","string");model.User.hasLoggedIn = new Attribute("storage","bool");//-------------------------------------------------------------------------//calculated//-------------------------------------------------------------------------model.User.password = new Attribute("calculated","string");//-------------------------------------------------------------------------//alias//-------------------------------------------------------------------------//-------------------------------------------------------------------------//relatedEntity//-------------------------------------------------------------------------//-------------------------------------------------------------------------//relatedEntities//-------------------------------------------------------------------------//-------------------------------------------------------------------------//attribute event//-------------------------------------------------------------------------model.User.email.onSet = function(value) {    this.email = value.toLowerCase();}model.User.password.onSet = function(value) {    this.ha1key = directory.computeHA1(this.uuid, value); }model.User.password.onGet = function() {    return null;}//-------------------------------------------------------------------------//datastore class event//-------------------------------------------------------------------------model.User.events.onRestrictingQuery = function() {	return require("auth").allEntities(this.getName());}