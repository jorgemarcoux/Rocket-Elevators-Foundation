/* http://keith-wood.name/countdown.html
   Icelandic initialisation for the jQuery countdown extension
   Written by Rbert K. L. */
(function($) {
	$.countdown.regionalOptions['is'] = {
		labels: ['r', 'Mnuir', 'Vikur', 'Dagar', 'Klukkustundir', 'Mntur', 'Sekndur'],
		labels1: ['r', 'Mnuur', 'Vika', 'Dagur', 'Klukkustund', 'Mnta', 'Seknda'],
		compactLabels: ['r.', 'mn.', 'vik.', 'dag.', 'klst.', 'mn.', 'sek.'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['is']);
})(jQuery);