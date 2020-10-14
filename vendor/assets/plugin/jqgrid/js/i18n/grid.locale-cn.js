;(function($){
/**
 * jqGrid Chinese Translation
 *  yanhonglei@gmail.com
 * http://www.kafeitu.me 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
    defaults : {
        recordtext: "{0} - {1}\u3000 {2} ", // 
        emptyrecords: "",
        loadtext: "...",
        pgtext : " {0}  {1} ",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
    },
    search : {
        caption: "...",
        Find: "",
        Reset: "",
        odata: [{ oper:'eq', text:'\u3000\u3000'},{ oper:'ne', text:'\u3000\u3000'},{ oper:'lt', text:'\u3000\u3000'},{ oper:'le', text:''},{ oper:'gt', text:'\u3000\u3000'},{ oper:'ge', text:''},{ oper:'bw', text:''},{ oper:'bn', text:''},{ oper:'in', text:'\u3000\u3000'},{ oper:'ni', text:''},{ oper:'ew', text:''},{ oper:'en', text:''},{ oper:'cn', text:'\u3000\u3000'},{ oper:'nc', text:''},{ oper:'nu', text:''},{ oper:'nn', text:''}],
        groupOps: [ { op: "AND", text: "" },    { op: "OR",  text: "" } ],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
    },
    edit : {
        addCaption: "",
        editCaption: "",
        bSubmit: "",
        bCancel: "",
        bClose: "",
        saveData: "",
        bYes : "",
        bNo : "",
        bExit : "",
        msg: {
            required:"",
            number:"",
            minValue:" ",
            maxValue:" ",
            email: "e-mail",
            integer: "",
            date: "",
            url: " ('http://'  'https://')",
            nodefined : " ",
            novalue : " ",
            customarray : "",
            customfcheck : "!"
        }
    },
    view : {
        caption: "",
        bClose: ""
    },
    del : {
        caption: "",
        msg: "",
        bSubmit: "",
        bCancel: ""
    },
    nav : {
        edittext: "",
        edittitle: "",
        addtext:"",
        addtitle: "",
        deltext: "",
        deltitle: "",
        searchtext: "",
        searchtitle: "",
        refreshtext: "",
        refreshtitle: "",
        alertcap: "",
        alerttext: "",
        viewtext: "",
        viewtitle: ""
    },
    col : {
        caption: "",
        bSubmit: "",
        bCancel: ""
    },
    errors : {
        errcap : "",
        nourl : "url",
        norecords: "",
        model : "colNames  colModel "
    },
    formatter : {
        integer : {thousandsSeparator: ",", defaultValue: '0'},
        number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
        currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
        date : {
            dayNames:   [
                "", "", "", "", "", "", "",
                "", "", "", "", "", "", "",
            ],
            monthNames: [
                "", "", "", "", "", "", "", "", "", "", "", "",
                "", "", "", "", "", "", "", "", "", "", "", ""
            ],
            AmPm : ["am","pm","",""],
            S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
            srcformat: 'Y-m-d',
            newformat: 'Y-m-d',
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
