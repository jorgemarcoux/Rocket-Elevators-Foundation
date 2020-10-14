/* http://keith-wood.name/countdown.html
   Swedish initialisation for the jQuery countdown extension
   Written by Carl (carl@nordenfelt.com). */
(function($) {
	$.countdown.regionalOptions['sv'] = {
		labels: ['r', 'Mnader', 'Veckor', 'Dagar', 'Timmar', 'Minuter', 'Sekunder'],
		labels1: ['r', 'Mnad', 'Vecka', 'Dag', 'Timme', 'Minut', 'Sekund'],
		compactLabels: ['', 'M', 'V', 'D'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['sv']);
})(jQuery);
