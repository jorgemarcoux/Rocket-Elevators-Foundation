/* http://keith-wood.name/countdown.html
 * Vietnamese initialisation for the jQuery countdown extension
 * Written by Pham Tien Hung phamtienhung@gmail.com (2010) */
(function($) {
	$.countdown.regionalOptions['vi'] = {
		labels: ['Nm', 'Thng', 'Tun', 'Ngy', 'Gi', 'Pht', 'Giy'],
		labels1: ['Nm', 'Thng', 'Tun', 'Ngy', 'Gi', 'Pht', 'Giy'],
		compactLabels: ['nm', 'th', 'tu', 'ng'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['vi']);
})(jQuery);