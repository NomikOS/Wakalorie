﻿/**  * @fileOverview Code to run when the project first launches to do things like * init tables * @author Jeffrey Wallace * @created 11/12/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) */ var numRecs,utl = require('utl'); //promote session to the admin group so we can work with restricted classes and methodscurrentSession().promoteWith("Admin");	 //If no GenFoods recs, do the GenFood importnumRecs = ds.GenFoods.length;if(numRecs === 0) {	utl.importTabDelim("GenFoods", "GenFoods.txt", true, ["name", "calories"]);}if (self.close) {	self.close();}