;(function($){
/**
 * jqGrid Vietnamese Translation
 * Le nh Dng dungtdc@gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "Khng c d liu",
		loadtext: "ang np d liu...",
		pgtext : "Trang {0} trong tng s {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
		caption: "Tm kim...",
		Find: "Tm",
		Reset: "Khi to li",
		odata: [{ oper:'eq', text:"bng"},{ oper:'ne', text:"khng bng"},{ oper:'lt', text:"b hn"},{ oper:'le', text:"b hn hoc bng"},{ oper:'gt', text:"ln hn"},{ oper:'ge', text:"ln hn hoc bng"},{ oper:'bw', text:"bt u vi"},{ oper:'bn', text:"khng bt u vi"},{ oper:'in', text:"trong"},{ oper:'ni', text:"khng nm trong"},{ oper:'ew', text:"kt thc vi"},{ oper:'en', text:"khng kt thc vi"},{ oper:'cn', text:"cha"},{ oper:'nc', text:"khng cha"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
		groupOps: [	{ op: "V", text: "tt c" },	{ op: "HOC",  text: "bt k" }	],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Them bn ghi",
		editCaption: "Sa bn ghi",
		bSubmit: "Gi",
		bCancel: "Hy b",
		bClose: "ng",
		saveData: "D liu  thay i! C lu thay i khng?",
		bYes : "C",
		bNo : "Khng",
		bExit : "Hy b",
		msg: {
			required:"Trng d liu bt buc c",
			number:"Hy in ng s",
			minValue:"gi tr phi ln hn hoc bng vi ",
			maxValue:"gi tr phi b hn hoc bng",
			email: "khng phi l mt email ng",
			integer: "Hy in ng s nguyen",
			date: "Hy in ng ngy thng",
			url: "khng phi l URL. Khi u bt buc l ('http://' hoc 'https://')",
			nodefined : " cha c nh ngha!",
			novalue : " gi tr tr v bt buc phi c!",
			customarray : "Hm nen tr v mt mng!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "Xem bn ghi",
		bClose: "ng"
	},
	del : {
		caption: "Xa",
		msg: "Xa bn ghi  chn?",
		bSubmit: "Xa",
		bCancel: "Hy b"
	},
	nav : {
		edittext: "",
		edittitle: "Sa dng  chn",
		addtext:"",
		addtitle: "Them mi 1 dng",
		deltext: "",
		deltitle: "Xa dng  chn",
		searchtext: "",
		searchtitle: "Tm bn ghi",
		refreshtext: "",
		refreshtitle: "Np li li",
		alertcap: "Cnh bo",
		alerttext: "Hy chn mt dng",
		viewtext: "",
		viewtitle: "Xem dng  chn"
	},
	col : {
		caption: "Chn ct",
		bSubmit: "OK",
		bCancel: "Hy b"
	},
	errors : {
		errcap : "Li",
		nourl : "khng url c t",
		norecords: "Khng c bn ghi  x l",
		model : "Chiu di ca colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ".", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: '0'},
		currency : {decimalSeparator:",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0'},
		date : {
			dayNames:   [
				"CN", "T2", "T3", "T4", "T5", "T6", "T7",
				"Ch nht", "Th hai", "Th ba", "Th t", "Th nm", "Th su", "Th by"
			],
			monthNames: [
				"Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12",
				"Thng mt", "Thng hai", "Thng ba", "Thng t", "Thng nm", "Thng su", "Thng by", "Thng tm", "Thng chn", "Thng mi", "Thng mi mt", "Thng mi hai"
			],
			AmPm : ["sng","chiu","SNG","CHIU"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
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
