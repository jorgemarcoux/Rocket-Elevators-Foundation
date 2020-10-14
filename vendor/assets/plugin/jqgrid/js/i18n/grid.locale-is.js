;(function($){
/**
 * jqGrid Icelandic Translation
 * jtm@hi.is Univercity of Iceland
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Skoa {0} - {1} af {2}",
	    emptyrecords: "Engar frslur",
		loadtext: "Hleur...",
		pgtext : "Sa {0} af {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
	    caption: "Leita...",
	    Find: "Leita",
	    Reset: "Endursetja",
	    odata: [{ oper:'eq', text:"sama og"},{ oper:'ne', text:"ekki sama og"},{ oper:'lt', text:"minna en"},{ oper:'le', text:"minna ea jafnt og"},{ oper:'gt', text:"strra en"},{ oper:'ge', text:"strra ea jafnt og"},{ oper:'bw', text:"byrjar "},{ oper:'bn', text:"byrjar ekki "},{ oper:'in', text:"er "},{ oper:'ni', text:"er ekki "},{ oper:'ew', text:"endar "},{ oper:'en', text:"endar ekki "},{ oper:'cn', text:"inniheldur"},{ oper:'nc', text:"inniheldur ekki"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "AND", text: "allt" },	{ op: "OR",  text: "ea" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "Bta vi frslu",
	    editCaption: "Breyta frslu",
	    bSubmit: "Vista",
	    bCancel: "Htta vi",
		bClose: "Loka",
		saveData: "Ggn hafa breyst! Vista breytingar?",
		bYes : "J",
		bNo : "Nei",
		bExit : "Htta vi",
	    msg: {
	        required:"Reitur er nausynlegur",
	        number:"Vinsamlega settu inn tlu",
	        minValue:"gildi verur a vera meira en ea jafnt og ",
	        maxValue:"gildi verur a vera minna en ea jafnt og ",
	        email: "er ekki lglegt email",
	        integer: "Vinsamlega settu inn tlu",
			date: "Vinsamlega setti inn dagsetningu",
			url: "er ekki lglegt URL. Vantar ('http://' ea 'https://')",
			nodefined : " er ekki skilgreint!",
			novalue : " skilagildi nausynlegt!",
			customarray : "Fall skal skila fylki!",
			customfcheck : "Fall skal vera skilgreint!"
		}
	},
	view : {
	    caption: "Skoa frslu",
	    bClose: "Loka"
	},
	del : {
	    caption: "Eya",
	    msg: "Eya vldum frslum ?",
	    bSubmit: "Eya",
	    bCancel: "Htta vi"
	},
	nav : {
		edittext: " ",
	    edittitle: "Breyta frslu",
		addtext:" ",
	    addtitle: "N frsla",
	    deltext: " ",
	    deltitle: "Eya frslu",
	    searchtext: " ",
	    searchtitle: "Leita",
	    refreshtext: "",
	    refreshtitle: "Endurhlaa",
	    alertcap: "Vivrun",
	    alerttext: "Vinsamlega veldu frslu",
		viewtext: "",
		viewtitle: "Skoa valda frslu"
	},
	col : {
	    caption: "Sna / fela dlka",
	    bSubmit: "Vista",
	    bCancel: "Htta vi"	
	},
	errors : {
		errcap : "Villa",
		nourl : "Vantar sl",
		norecords: "Engar frslur valdar",
	    model : "Lengd colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mn", "ri", "Mi", "Fim", "Fs", "Lau",
				"Sunnudagur", "Mnudagur", "rijudagur", "Mivikudagur", "Fimmtudagur", "Fstudagur", "Laugardagur"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Ma", "Jn", "Jl", "g", "Sep", "Oct", "Nv", "Des",
				"Janar", "Febrar", "Mars", "Aprl", "Ma", "Jn", "Jl", "gst", "September", "Oktber", "Nvember", "Desember"
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
