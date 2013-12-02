﻿/**  * @fileOverview This file runs at the beginning of every javascript thread * as documented here: http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3845.html * @author Welsh Harris * @created 10/21/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) *///custom login listenerloginListener = function loginListener(email, password) {	"use strict";		var dsUser = {},		authenticated = false,		retObj = {},		hasLoggedIn = false,		result;		if (email === "admin") { //pass auth over to wakanda directory			//note that the ds isn't always loaded when this runs, so have to		//check for hardcoded admin names here		result = false; 			} else {				dsUser = ds.User.find('email = :1', email.toLowerCase());		if (dsUser !== null) { 					//we found a user with the given email, now auth the password			authenticated = dsUser.validatePassword(password);					//build success or error object			if (authenticated === true) { 							//determine if the user has logged in before				if (dsUser.hasLoggedIn === true) {					hasLoggedIn = true;				} else {					hasLoggedIn = false;  //need this here because the value could be null				}				//setup return object				retObj =  {					ID: dsUser.uuid,					name: dsUser.email,					fullName: hasLoggedIn.toString(), //swh: this is really lazy, should be adding a UserPrefs class to handle stuff like this					belongsTo: ["User"]				};								//record that the user has logged in at least once				if (dsUser.hasLoggedIn !== true) {					dsUser.hasLoggedIn = true;					dsUser.save();				}						} else {				retObj = {					error: 1,					errorMessage: 'invalid email and/or password'				};			}					//return sucess or error object			result = retObj;				} else { //pass auth over to wakanda directory			result = false; 		}			}		return result;}