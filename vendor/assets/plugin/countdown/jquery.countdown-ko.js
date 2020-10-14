/* http://keith-wood.name/countdown.html
   Korean initialisation for the jQuery countdown extension
   Written by Ryan Yu (ryanyu79@gmail.com). */
(function($) {
	$.countdown.regionalOptions['ko'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		compactLabels: ['', '', '', ''],
		compactLabels1: ['', '', '', ''],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['ko']);
})(jQuery);
