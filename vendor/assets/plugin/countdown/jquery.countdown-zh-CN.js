/* http://keith-wood.name/countdown.html
   Simplified Chinese initialisation for the jQuery countdown extension
   Written by Cloudream (cloudream@gmail.com). */
(function($) {
	$.countdown.regionalOptions['zh-CN'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		compactLabels: ['', '', '', ''], compactLabels1: ['', '', '', ''],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['zh-CN']);
})(jQuery);
