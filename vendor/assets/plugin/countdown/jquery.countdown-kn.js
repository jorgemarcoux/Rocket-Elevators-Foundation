/* http://keith-wood.name/countdown.html
 * Kannada initialization for the jQuery countdown extension
 * Written by Guru Chaturvedi guru@gangarasa.com (2011) */
(function($) {
	$.countdown.regionalOptions['kn'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		compactLabels: ['', '', '', ''],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['kn']);
})(jQuery);
