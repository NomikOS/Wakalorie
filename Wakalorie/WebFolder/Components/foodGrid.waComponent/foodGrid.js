﻿/** 
 * @fileOverview Component with grid for working with user foods
 * @author Welsh Harris
 * @created 08/08/2013
 *
 * @name Wakalorie
 * @copyright (c) 2013 CoreBits DataWorks LLC
 * @license Released under the MIT license (included in distribution in MIT LICENSE.txt)
 */
 
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {
	"use strict";
	
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'foodGrid';
	// @endregion// @endlock


	//-------------------------------------------------------------------------
	//Component API
	//-------------------------------------------------------------------------
	var foodGrid = $$(getHtmlId("dataGrid1")),
		addBtn = $$(getHtmlId("imageButton1")),
		deleteBtn = $$(getHtmlId("imageButton2")),
		searchText = $$(getHtmlId("textField1"))

	//init
	function initC() {
		
		//add button click event
		WAF.addListener(addBtn, "click", function(event) {
			WAKL.foodAddModDlg.add();
		});
		
		//delete button click event
		WAF.addListener(deleteBtn, "click", function(event) {
			removeFood();
		});
		
		//grid onRowClick event
		WAF.addListener(foodGrid, "onRowClick", function(event) {
			WAKL.qtyAddArea.setAndGotoQty();
		});
		
		//grid onRowDblClick event
		WAF.addListener(foodGrid, "onRowDblClick", function(event) {
			WAKL.foodAddModDlg.modify();
		});
			
		//search bar on keyup event
		WAF.addListener(searchText, "keyup", _.throttle(
			function(event) {
				search();
			}, 
			300, {leading: false})
		);
	}

	//delete the current food
	function removeFood() {
		sources.food.removeCurrent(WAKL.err.async_ErrCheckOnly);
	}
	
	//do a contains search when user types in the search bar
	function search() {
		var searchVal = "*"+searchText.getValue()+"*";
		sources.food.query("name = :1", WAKL.err.async_ErrCheckOnly, {params:[searchVal]});
	}

	//--------------------
	//public API
	//--------------------
	this.initC = initC;


	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	// @endregion// @endlock

	// eventHandlers// @lock

	// @region eventManager// @startlock
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock