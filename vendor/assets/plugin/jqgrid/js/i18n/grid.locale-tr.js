;(function($){
/**
 * jqGrid Turkish Translation
 * Erhan Gndoan (erhan@trposta.net)
 * http://blog.zakkum.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0}-{1} listeleniyor. Toplam:{2}",
	    emptyrecords: "Kayt bulunamad",
		loadtext: "Ykleniyor...",
		pgtext : "{0}/{1}. Sayfa",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid"
	},
	search : {
	    caption: "Arama...",
	    Find: "Bul",
	    Reset: "Temizle",	    
	    odata: [{ oper:'eq', text:"eit"},{ oper:'ne', text:"eit deil"},{ oper:'lt', text:"daha az"},{ oper:'le', text:"daha az veya eit"},{ oper:'gt', text:"daha fazla"},{ oper:'ge', text:"daha fazla veya eit"},{ oper:'bw', text:"ile balayan"},{ oper:'bn', text:"ile balamayan"},{ oper:'in', text:"iinde"},{ oper:'ni', text:"iinde deil"},{ oper:'ew', text:"ile biten"},{ oper:'en', text:"ile bitmeyen"},{ oper:'cn', text:"ieren"},{ oper:'nc', text:"iermeyen"},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}],
	    groupOps: [	{ op: "VE", text: "tm" },	{ op: "VEYA",  text: "herhangi" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
	    addCaption: "Kayt Ekle",
	    editCaption: "Kayt Dzenle",
	    bSubmit: "Gnder",
	    bCancel: "ptal",
		bClose: "Kapat",
		saveData: "Veriler deiti! Kayt edilsin mi?",
		bYes : "Evet",
		bNo : "Hayt",
		bExit : "ptal",
	    msg: {
	        required:"Alan gerekli",
	        number:"Ltfen bir numara giriniz",
	        minValue:"girilen deer daha byk ya da buna eit olmaldr",
	        maxValue:"girilen deer daha kk ya da buna eit olmaldr",
	        email: "geerli bir e-posta adresi deildir",
	        integer: "Ltfen bir tamsay giriniz",
			url: "Geerli bir URL deil. ('http://' or 'https://') n eki gerekli.",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Kayt Grntle",
	    bClose: "Kapat"
	},
	del : {
	    caption: "Sil",
	    msg: "Seilen kaytlar silinsin mi?",
	    bSubmit: "Sil",
	    bCancel: "ptal"
	},
	nav : {
		edittext: " ",
	    edittitle: "Seili satr dzenle",
		addtext:" ",
	    addtitle: "Yeni satr ekle",
	    deltext: " ",
	    deltitle: "Seili satr sil",
	    searchtext: " ",
	    searchtitle: "Kaytlar bul",
	    refreshtext: "",
	    refreshtitle: "Tabloyu yenile",
	    alertcap: "Uyar",
	    alerttext: "Ltfen bir satr seiniz",
		viewtext: "",
		viewtitle: "Seilen satr grntle"
	},
	col : {
	    caption: "Stunlar gster/gizle",
	    bSubmit: "Gnder",
	    bCancel: "ptal"	
	},
	errors : {
		errcap : "Hata",
		nourl : "Bir url yaplandrlmam",
		norecords: "lem yaplacak bir kayt yok",
	    model : "colNames uzunluu <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Paz", "Pts", "Sal", "ar", "Per", "Cum", "Cts",
				"Pazar", "Pazartesi", "Sal", "aramba", "Perembe", "Cuma", "Cumartesi"
			],
			monthNames: [
				"Oca", "ub", "Mar", "Nis", "May", "Haz", "Tem", "Au", "Eyl", "Eki", "Kas", "Ara",
				"Ocak", "ubat", "Mart", "Nisan", "Mays", "Haziran", "Temmuz", "Austos", "Eyll", "Ekim", "Kasm", "Aralk"
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
