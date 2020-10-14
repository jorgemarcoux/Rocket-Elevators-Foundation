/* http://keith-wood.name/countdown.html
 * Latvian initialisation for the jQuery countdown extension
 * Written by Jnis Peisenieks janis.peisenieks@gmail.com (2010) */
(function($) {
	$.countdown.regionalOptions['lv'] = {
		labels: ['Gadi', 'Mnei', 'Nedas', 'Dienas', 'Stundas', 'Mintes', 'Sekundes'],
		labels1: ['Gads', 'Mnesis', 'Neda', 'Diena', 'Stunda', 'Minte', 'Sekunde'],
		compactLabels: ['l', 'm', 'n', 'd'], compactLabels1: ['g', 'm', 'n', 'd'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['lv']);
})(jQuery);
