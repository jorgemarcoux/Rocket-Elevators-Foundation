/* http://keith-wood.name/countdown.html
   Thai initialisation for the jQuery countdown extension
   Written by Pornchai Sakulsrimontri (li_sin_th@yahoo.com). */
(function($) {
	$.countdown.regionalOptions['th'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		compactLabels: ['', '', '', ''],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['th']);
})(jQuery);
