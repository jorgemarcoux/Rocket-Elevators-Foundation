;(function($){
/**
 * jqGrid Lithuanian Translation
 * aur1mas aur1mas@devnet.lt
 * http://aur1mas.devnet.lt
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Peririma {0} - {1} i {2}",
		emptyrecords: "ra nra",
		loadtext: "Kraunama...",
		pgtext : "Puslapis {0} i {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
		caption: "Paieka...",
		Find: "Iekoti",
		Reset: "Atstatyti",
		odata: [{ oper:'eq', text:"lygu"},{ oper:'ne', text:"nelygu"},{ oper:'lt', text:"maiau"},{ oper:'le', text:"maiau arba lygu"},{ oper:'gt', text:"daugiau"},{ oper:'ge', text:"daugiau arba lygu"},{ oper:'bw', text:"prasideda"},{ oper:'bn', text:"neprasideda"},{ oper:'in', text:"reikm yra"},{ oper:'ni', text:"reikms nra"},{ oper:'ew', text:"baigiasi"},{ oper:'en', text:"nesibaigia"},{ oper:'cn', text:"yra sudarytas"},{ oper:'nc', text:"nra sudarytas"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "AND", text: "visi" },	{ op: "OR",  text: "bet kuris" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Sukurti ra",
		editCaption: "Redaguoti ra",
		bSubmit: "Isaugoti",
		bCancel: "Ataukti",
		bClose: "Udaryti",
		saveData: "Duomenys buvo pakeisti! Isaugoti pakeitimus?",
		bYes : "Taip",
		bNo : "Ne",
		bExit : "Ataukti",
		msg: {
			required:"Privalomas laukas",
			number:"veskite tinkam numer",
			minValue:"reikm turi bti didesn arba lygi ",
			maxValue:"reikm turi bti maesn arba lygi",
			email: "neteisingas el. pato adresas",
			integer: "veskite teising sveikj skaii",
			date: "veskite teising dat",
			url: "blogas adresas. Nepamirkite pridti ('http://' arba 'https://')",
			nodefined : " nra apibrta!",
			novalue : " turi bti grainama kokia nors reikm!",
			customarray : "Custom f-ja turi grinti masyv!",
			customfcheck : "Custom f-ja trt bti sukurta, prie bandant j naudoti!"
			
		}
	},
	view : {
		caption: "Perirti raus",
		bClose: "Udaryti"
	},
	del : {
		caption: "Itrinti",
		msg: "Itrinti paymtus raus(-)?",
		bSubmit: "Itrinti",
		bCancel: "Ataukti"
	},
	nav : {
		edittext: "",
		edittitle: "Redaguoti paymt eilut",
		addtext:"",
		addtitle: "Pridti nauj eilut",
		deltext: "",
		deltitle: "Itrinti paymt eilut",
		searchtext: "",
		searchtitle: "Rasti raus",
		refreshtext: "",
		refreshtitle: "Perkrauti lentel",
		alertcap: "spjimas",
		alerttext: "Pasirinkite eilut",
		viewtext: "",
		viewtitle: "Perirti pasirinkt eilut"
	},
	col : {
		caption: "Pasirinkti stulpelius",
		bSubmit: "Gerai",
		bCancel: "Ataukti"
	},
	errors : {
		errcap : "Klaida",
		nourl : "Url reikm turi bti perduota",
		norecords: "Nra ra, kuriuos bt galima apdoroti",
		model : "colNames skaiius <> colModel skaiiui!"
	},
	formatter : {
		integer : {thousandsSeparator: "", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "e",
				"Sekmadienis", "Pirmadienis", "Antradienis", "Treiadienis", "Ketvirtadienis", "Penktadienis", "etadienis"
			],
			monthNames: [
				"Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugj", "Rugs", "Spa", "Lap", "Gru",
				"Sausis", "Vasaris", "Kovas", "Balandis", "Gegu", "Birelis", "Liepa", "Rugpjtis", "Rugsjis", "Spalis", "Lapkritis", "Gruodis"
			],
			AmPm : ["am","pm","AM","PM"],
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
