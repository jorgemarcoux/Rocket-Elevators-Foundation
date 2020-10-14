/* http://keith-wood.name/countdown.html
   Persian () initialisation for the jQuery countdown extension
   Written by Alireza Ziaie (ziai@magfa.com) Oct 2008.
   Digits corrected by Hamed Ramezanian Feb 2013. */
(function($) {
	$.countdown.regionalOptions['fa'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		compactLabels: ['', '', '', ''],
		whichLabels: null,
		digits: ['', '', '', '', '', '', '', '', '', ''],
		timeSeparator: ':', isRTL: true};
	$.countdown.setDefaults($.countdown.regionalOptions['fa']);
})(jQuery);
