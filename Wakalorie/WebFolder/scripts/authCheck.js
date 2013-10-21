﻿/**  * @fileOverview Drop this on a page if you want to make sure the user is logged in * to load the page, and if not will redirect them somewhere else.  Note that you * should have this run as soon as possible before the WAF starts trying to load * the catalog and stuff. * @author Welsh Harris * @created 10/21/2013 * * @name Wakalorie * @copyright (c) 2013 CoreBits DataWorks LLC * @license Released under the MIT license (included in distribution in MIT LICENSE.txt) */WAKL.auth.loggedInCheck("/login");