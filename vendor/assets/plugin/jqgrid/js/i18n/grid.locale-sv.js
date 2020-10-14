;(function($){
/**
 * jqGrid Swedish Translation
 * Harald Normann harald.normann@wts.se, harald.normann@gmail.com
 * http://www.worldteamsoftware.com 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Visar {0} - {1} av {2}",
		emptyrecords: "Det finns inga poster att visa",
		loadtext: "Laddar...",
		pgtext : "Sida {0} av {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
		caption: "Sk Poster - Ange skvillkor",
		Find: "Sk",
		Reset: "Nollstll Villkor",
		odata: [{ oper:'eq', text:"lika"},{ oper:'ne', text:"ej lika"},{ oper:'lt', text:"mindre"},{ oper:'le', text:"mindre eller lika"},{ oper:'gt', text:"strre"},{ oper:'ge', text:"strre eller lika"},{ oper:'bw', text:"brjar med"},{ oper:'bn', text:"brjar inte med"},{ oper:'in', text:"tillhr"},{ oper:'ni', text:"tillhr inte"},{ oper:'ew', text:"slutar med"},{ oper:'en', text:"slutar inte med"},{ oper:'cn', text:"innehller"},{ oper:'nc', text:"innehller inte"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "alla" },	{ op: "OR",  text: "eller" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Ny Post",
		editCaption: "Redigera Post",
		bSubmit: "Spara",
		bCancel: "Avbryt",
		bClose: "Stng",
		saveData: "Data har ndrats! Spara frndringar?",
		bYes : "Ja",
		bNo : "Nej",
		bExit : "Avbryt",
		msg: {
	        required:"Fltet r obligatoriskt",
	        number:"Vlj korrekt nummer",
	        minValue:"vrdet mste vara strre n eller lika med",
	        maxValue:"vrdet mste vara mindre n eller lika med",
	        email: "r inte korrekt e-post adress",
	        integer: "Var god ange korrekt heltal",
	        date: "Var god ange korrekt datum",
	        url: "r inte en korrekt URL. Prefix mste anges ('http://' or 'https://')",
	        nodefined : " r inte definierad!",
	        novalue : " returvrde mste anges!",
	        customarray : "Custom funktion mste returnera en vektor!",
			customfcheck : "Custom funktion mste finnas om Custom kontroll sker!"
		}
	},
	view : {
		caption: "Visa Post",
		bClose: "Stng"
	},
	del : {
		caption: "Radera",
		msg: "Radera markerad(e) post(er)?",
		bSubmit: "Radera",
		bCancel: "Avbryt"
	},
	nav : {
		edittext: "",
		edittitle: "Redigera markerad rad",
		addtext:"",
		addtitle: "Skapa ny post",
		deltext: "",
		deltitle: "Radera markerad rad",
		searchtext: "",
		searchtitle: "Sk poster",
		refreshtext: "",
		refreshtitle: "Uppdatera data",
		alertcap: "Varning",
		alerttext: "Ingen rad r markerad",
		viewtext: "",
		viewtitle: "Visa markerad rad"
	},
	col : {
		caption: "Vlj Kolumner",
		bSubmit: "OK",
		bCancel: "Avbryt"
	},
	errors : {
		errcap : "Fel",
		nourl : "URL saknas",
		norecords: "Det finns inga poster att bearbeta",
		model : "Antal colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"Kr", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Sn", "Mn", "Tis", "Ons", "Tor", "Fre", "Lr",
				"Sndag", "Mndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lrdag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
			],
			AmPm : ["fm","em","FM","EM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'Y-m-d',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate:  "n/j/Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y g:i:s A",
	            MonthDay: "F d",
	            ShortTime: "g:i A",
	            LongTime: "g:i:s A",
	            SortableDateTime: "Y-m-d\\TH:i:s",
	            UniversalSortableDateTime: "Y-m-d H:i:sO",
	            YearMonth: "F, Y"
			},
			reformatAfterEdit : false,
			userLocalTime : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
