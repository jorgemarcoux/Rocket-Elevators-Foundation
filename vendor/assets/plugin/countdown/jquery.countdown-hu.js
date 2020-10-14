/* http://keith-wood.name/countdown.html
 * Hungarian initialisation for the jQuery countdown extension
 * Written by Edmond L. (webmond@gmail.com). */
(function($) {
	$.countdown.regionalOptions['hu'] = {
		labels: ['v', 'Hnap', 'Ht', 'Nap', 'ra', 'Perc', 'Msodperc'],
		labels1: ['v', 'Hnap', 'Ht', 'Nap', 'ra', 'Perc', 'Msodperc'],
		compactLabels: ['', 'H', 'H', 'N'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['hu']);
})(jQuery);
