/* http://keith-wood.name/countdown.html
   Faroese initialisation for the jQuery countdown extension
   Written by Kasper Friis Christensen (kasper@friischristensen.com). */
(function($) {
	$.countdown.regionalOptions['fo'] = {
		labels: ['r', 'Mnair', 'Vikur', 'Dagar', 'Tmar', 'Minuttir', 'Sekund'],
		labels1: ['r', 'Mnaur', 'Vika', 'Dagur', 'Tmi', 'Minuttur', 'Sekund'],
		compactLabels: ['', 'M', 'V', 'D'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['fo']);
})(jQuery);
