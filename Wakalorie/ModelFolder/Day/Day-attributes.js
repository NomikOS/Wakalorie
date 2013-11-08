﻿/**  * @fileOverview setup datastore class, attributes, events for Day * @author Welsh Harris * @created 07/20/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) *///-------------------------------------------------------------------------//dataclass //-------------------------------------------------------------------------model.Day = new DataClass("Days", "public");//-------------------------------------------------------------------------//storage//-------------------------------------------------------------------------model.Day.id = new Attribute("storage", "long", "key auto");model.Day.date = new Attribute("storage", "date", "btree", {	"simpleDate": true});model.Day.totalCal = new Attribute("calculated", "long");model.Day.weight = new Attribute("storage", "number");model.Day.userUUID = new Attribute("storage", "string", "btree");//-------------------------------------------------------------------------//calculated//-------------------------------------------------------------------------//-------------------------------------------------------------------------//alias//-------------------------------------------------------------------------//-------------------------------------------------------------------------//relatedEntity//-------------------------------------------------------------------------//-------------------------------------------------------------------------//relatedEntities//-------------------------------------------------------------------------model.Day.dayFoods = new Attribute("relatedEntities", "DayFoods", "day", {	"reversePath": true});//-------------------------------------------------------------------------//attribute event//-------------------------------------------------------------------------model.Day.totalCal.onGet = function() {    return this.dayFoods.sum("totalCal");}//-------------------------------------------------------------------------//datastore class event//-------------------------------------------------------------------------model.Day.events.onSave = function() {	this.userUUID = currentSession().user.ID;}model.Day.events.onRestrictingQuery = function() {	return require("auth").allEntities(this.getName());}