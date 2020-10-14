/* http://keith-wood.name/countdown.html
   Norwegian Bokml translation
   Written by Kristian Ravnevand */
(function($) {
	$.countdown.regionalOptions['nb'] = {
		labels: ['r', 'Mneder', 'Uker', 'Dager', 'Timer', 'Minutter', 'Sekunder'],
		labels1: ['r', 'Mned', 'Uke', 'Dag', 'Time', 'Minutt', 'Sekund'],
		compactLabels: ['', 'M', 'U', 'D'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['nb']);
})(jQuery);
