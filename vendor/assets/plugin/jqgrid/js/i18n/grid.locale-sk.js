;(function($){
/**
 * jqGrid Slovak Translation
 * Milan Cibulka
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Zobrazench {0} - {1} z {2} zznamov",
	    emptyrecords: "Neboli njden iadne zznamy",
		loadtext: "Natm...",
		pgtext : "Strana {0} z {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
		caption: "Vyhadvam...",
		Find: "Hada",
		Reset: "Reset",
	    odata: [{ oper:'eq', text:"rovn sa"},{ oper:'ne', text:"nerovn sa"},{ oper:'lt', text:"menie"},{ oper:'le', text:"menie alebo rovnajce sa"},{ oper:'gt', text:"vie"},{ oper:'ge', text:"vie alebo rovnajce sa"},{ oper:'bw', text:"zana s"},{ oper:'bn', text:"nezana s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nie je v"},{ oper:'ew', text:"kon s"},{ oper:'en', text:"nekon s"},{ oper:'cn', text:"obahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "vetkch" },	{ op: "OR",  text: "niektorho z" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Prida zznam",
		editCaption: "Editcia zznamov",
		bSubmit: "Uloi",
		bCancel: "Storno",
		bClose: "Zavrie",
		saveData: "daje boli zmenen! Uloi zmeny?",
		bYes : "Ano",
		bNo : "Nie",
		bExit : "Zrui",
		msg: {
		    required:"Pole je poadovan",
		    number:"Prosm, vlote valdne slo",
		    minValue:"hodnota mus b via ako alebo rovn ",
		    maxValue:"hodnota mus b menia ako alebo rovn ",
		    email: "nie je valdny e-mail",
		    integer: "Prosm, vlote cel slo",
			date: "Prosm, vlote valdny dtum",
			url: "nie je platnou URL. Poadovan prefix ('http://' alebo 'https://')",
			nodefined : " nie je definovan!",
			novalue : " je vyadovan nvratov hodnota!",
			customarray : "Custom function mala vrti pole!",
			customfcheck : "Custom function by mala by prtomn v prpade custom checking!"
		}
	},
	view : {
	    caption: "Zobrazi zznam",
	    bClose: "Zavrie"
	},
	del : {
		caption: "Zmaza",
		msg: "Zmaza vybran() zznam(y)?",
		bSubmit: "Zmaza",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editova vybran riadok",
		addtext:" ",
		addtitle: "Prida nov riadek",
		deltext: " ",
		deltitle: "Zmaza vybran zznam ",
		searchtext: " ",
		searchtitle: "Njs zznamy",
		refreshtext: "",
		refreshtitle: "Obnovi tabuku",
		alertcap: "Varovanie",
		alerttext: "Prosm, vyberte riadok",
		viewtext: "",
		viewtitle: "Zobrazi vybran riadok"
	},
	col : {
		caption: "Zobrazit/Skr stpce",
		bSubmit: "Uloi",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nie je nastaven url",
		norecords: "iadne zznamy k spracovaniu",
		model : "Dka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "Ut", "St", "t", "Pi", "So",
				"Nedela", "Pondelok", "Utorok", "Streda", "tvrtok", "Piatek", "Sobota"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Mj", "Jn", "Jl", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Janur", "Februr", "Marec", "Aprl", "Mj", "Jn", "Jl", "August", "September", "Oktber", "November", "December"
			],
			AmPm : ["do","od","DO","OD"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
		        ISO8601Long:"Y-m-d H:i:s",
		        ISO8601Short:"Y-m-d",
		        ShortDate: "n/j/Y",
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
