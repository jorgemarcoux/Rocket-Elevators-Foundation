;(function($){
/**
 * jqGrid Hungarian Translation
 * rszigety dm udx6bs@freemail.hu
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Oldal {0} - {1} / {2}",
		emptyrecords: "Nincs tallat",
		loadtext: "Betlts...",
		pgtext : "Oldal {0} / {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
		caption: "Keress...",
		Find: "Keres",
		Reset: "Alaprtelmezett",
		odata: [{ oper:'eq', text:"egyenl"},{ oper:'ne', text:"nem egyenl"},{ oper:'lt', text:"kevesebb"},{ oper:'le', text:"kevesebb vagy egyenl"},{ oper:'gt', text:"nagyobb"},{ oper:'ge', text:"nagyobb vagy egyenl"},{ oper:'bw', text:"ezzel kezddik"},{ oper:'bn', text:"nem ezzel kezddik"},{ oper:'in', text:"tartalmaz"},{ oper:'ni', text:"nem tartalmaz"},{ oper:'ew', text:"vgzdik"},{ oper:'en', text:"nem vgzdik"},{ oper:'cn', text:"tartalmaz"},{ oper:'nc', text:"nem tartalmaz"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "j ttel",
		editCaption: "Ttel szerkesztse",
		bSubmit: "Ments",
		bCancel: "Mgse",
		bClose: "Bezrs",
		saveData: "A ttel megvltozott! Ttel mentse?",
		bYes : "Igen",
		bNo : "Nem",
		bExit : "Mgse",
		msg: {
			required:"Ktelez mez",
			number:"Krjk, adjon meg egy helyes szmot",
			minValue:"Nagyobb vagy egyenlnek kell lenni mint ",
			maxValue:"Kisebb vagy egyenlnek kell lennie mint",
			email: "hibs emailcm",
			integer: "Krjk adjon meg egy helyes egsz szmot",
			date: "Krjk adjon meg egy helyes dtumot",
			url: "nem helyes cm. Eltag ktelez ('http://' vagy 'https://')",
			nodefined : " nem definilt!",
			novalue : " visszatrsi rtk ktelez!!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "Ttel megtekintse",
		bClose: "Bezrs"
	},
	del : {
		caption: "Trls",
		msg: "Kivlaztott ttel(ek) trlse?",
		bSubmit: "Trls",
		bCancel: "Mgse"
	},
	nav : {
		edittext: "",
		edittitle: "Ttel szerkesztse",
		addtext:"",
		addtitle: "j ttel hozzadsa",
		deltext: "",
		deltitle: "Ttel trlse",
		searchtext: "",
		searchtitle: "Keress",
		refreshtext: "",
		refreshtitle: "Frissts",
		alertcap: "Figyelmeztets",
		alerttext: "Krem vlasszon ttelt.",
		viewtext: "",
		viewtitle: "Ttel megtekintse"
	},
	col : {
		caption: "Oszlopok kivlasztsa",
		bSubmit: "Ok",
		bCancel: "Mgse"
	},
	errors : {
		errcap : "Hiba",
		nourl : "Nincs URL belltva",
		norecords: "Nincs feldolgozsra vr ttel",
		model : "colNames s colModel hossza nem egyenl!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"Va", "H", "Ke", "Sze", "Cs", "P", "Szo",
				"Vasrnap", "Htf", "Kedd", "Szerda", "Cstrtk", "Pntek", "Szombat"
			],
			monthNames: [
				"Jan", "Feb", "Mr", "pr", "Mj", "Jn", "Jl", "Aug", "Szep", "Okt", "Nov", "Dec",
				"Janur", "Februr", "Mrcius", "prili", "Mjus", "Jnius", "Jlius", "Augusztus", "Szeptember", "Oktber", "November", "December"
			],
			AmPm : ["de","du","DE","DU"],
			S: function (j) {return '.-ik';},
			srcformat: 'Y-m-d',
			newformat: 'Y/m/d',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "Y/j/n",
				LongDate: "Y. F h d., l",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "a g:i",
				LongTime: "a g:i:s",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "Y, F"
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
