﻿/**  * @fileOverview Server side bootstrap file * @author Welsh Harris * @created 10/21/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) */ //install the login listener for when users try to authenticatedirectory.setLoginListener("loginListener", "Admin");//run startup code in its own threadnew SharedWorker("Workers/onStartup.js", "onStartup"); 