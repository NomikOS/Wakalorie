﻿/**  * @fileOverview methods for the ErrDef datastore class * @author Welsh Harris * @created 11/08/2013 * * @name CalorieCounter * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) *///-------------------------------------------------------------------------//entity //-------------------------------------------------------------------------//-------------------------------------------------------------------------//collection //-------------------------------------------------------------------------//-------------------------------------------------------------------------//class //-------------------------------------------------------------------------//called at startup to add/modify our error definitionsmodel.ErrDef.methods.defineErrors = function () {	"use strict";		var errInfo = "*ErrInfo*",		modulePrefix = "";			//The reason we set these up in a datastore class is so we can change	//the settings in production. For instance, we might want to turn off	//emailing if we are getting tons of emails about one error. Then if	//we want that setting to remaing off going forward, it needs to be	//updated here as well (because if not that settings change will get	//overwritten the next time we deploy a new version).		//levels:	//* warning	//* critical		//general errors	if (true) {		modulePrefix = "GENERAL ERROR: ";			//Gen_ImpossibleElse		ds.ErrDef.addOrUpdate({			name: "Gen_ImpossibleElse",			modulePrefix: modulePrefix,			msg: "Impossible Else.",			callThrow: false,			createLog: true,			alertUser: false,			sendEmail: true,			level: "warning"		});		}		}//add or update an error definitionmodel.ErrDef.methods.addOrUpdate = function (err) {	"use strict";		var errEntity = {};		//get this error or create if it doesn't exist	errEntity = ds.ErrDef.find("name = :1", err.name);	if (errEntity === null) {		errEntity = ds.ErrDef.createEntity();	}		//set the attributes and save	errEntity.name = err.name;	errEntity.msg = err.modulePrefix + err.msg;	errEntity.callThrow = err.callThrow;	errEntity.createLog = err.createLog;	errEntity.alertUser = err.alertUser;	errEntity.sendEmail = err.sendEmail;	errEntity.level = err.level;	if (errEntity.isModified()) {		errEntity.save();	}	}//set scope of class methodsmodel.ErrDef.methods.defineErrors.scope ="publicOnServer";model.ErrDef.methods.addOrUpdate.scope ="publicOnServer";