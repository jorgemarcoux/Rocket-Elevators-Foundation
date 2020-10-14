;(function($){
/**
 * jqGrid Czech Translation
 * Pavel Jirak pavel.jirak@jipas.cz
 * doplnil Thomas Wagner xwagne01@stud.fit.vutbr.cz
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Zobrazeno {0} - {1} z {2} zznam",
	    emptyrecords: "Nenalezeny dn zznamy",
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
		caption: "Vyhledvm...",
		Find: "Hledat",
		Reset: "Reset",
	    odata: [{ oper:'eq', text:"rovno"},{ oper:'ne', text:"nerovno"},{ oper:'lt', text:"men"},{ oper:'le', text:"men nebo rovno"},{ oper:'gt', text:"vt"},{ oper:'ge', text:"vt nebo rovno"},{ oper:'bw', text:"zan s"},{ oper:'bn', text:"nezan s"},{ oper:'in', text:"je v"},{ oper:'ni', text:"nen v"},{ oper:'ew', text:"kon s"},{ oper:'en', text:"nekon s"},{ oper:'cn', text:"obsahuje"},{ oper:'nc', text:"neobsahuje"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "vech" },	{ op: "OR",  text: "nkterho z" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Pidat zznam",
		editCaption: "Editace zznamu",
		bSubmit: "Uloit",
		bCancel: "Storno",
		bClose: "Zavt",
		saveData: "Data byla zmnna! Uloit zmny?",
		bYes : "Ano",
		bNo : "Ne",
		bExit : "Zruit",
		msg: {
		    required:"Pole je vyadovno",
		    number:"Prosm, vlote validn slo",
		    minValue:"hodnota mus bt vt ne nebo rovn ",
		    maxValue:"hodnota mus bt men ne nebo rovn ",
		    email: "nen validn e-mail",
		    integer: "Prosm, vlote cel slo",
			date: "Prosm, vlote validn datum",
			url: "nen platnou URL. Vyadovn prefix ('http://' or 'https://')",
			nodefined : " nen definovn!",
			novalue : " je vyadovna nvratov hodnota!",
			customarray : "Custom function ml vrtit pole!",
			customfcheck : "Custom function by mla bt ptomna v ppad custom checking!"
		}
	},
	view : {
	    caption: "Zobrazit zznam",
	    bClose: "Zavt"
	},
	del : {
		caption: "Smazat",
		msg: "Smazat vybran() zznam(y)?",
		bSubmit: "Smazat",
		bCancel: "Storno"
	},
	nav : {
		edittext: " ",
		edittitle: "Editovat vybran dek",
		addtext:" ",
		addtitle: "Pidat nov dek",
		deltext: " ",
		deltitle: "Smazat vybran zznam ",
		searchtext: " ",
		searchtitle: "Najt zznamy",
		refreshtext: "",
		refreshtitle: "Obnovit tabulku",
		alertcap: "Varovn",
		alerttext: "Prosm, vyberte dek",
		viewtext: "",
		viewtitle: "Zobrazit vybran dek"
	},
	col : {
		caption: "Zobrazit/Skrt sloupce",
		bSubmit: "Uloit",
		bCancel: "Storno"	
	},
	errors : {
		errcap : "Chyba",
		nourl : "Nen nastavena url",
		norecords: "dn zznamy ke zpracovn",
		model : "Dlka colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Ne", "Po", "t", "St", "t", "P", "So",
				"Nedle", "Pondl", "ter", "Steda", "tvrtek", "Ptek", "Sobota"
			],
			monthNames: [
				"Led", "no", "Be", "Dub", "Kv", "er", "vc", "Srp", "Z", "j", "Lis", "Pro",
				"Leden", "nor", "Bezen", "Duben", "Kvten", "erven", "ervenec", "Srpen", "Z", "jen", "Listopad", "Prosinec"
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
