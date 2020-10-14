/* http://keith-wood.name/countdown.html
   Urdu () initialisation for the jQuery countdown extension
   Translated by Azhar Rasheed (azhar.rasheed19@gmail.com), November 2013. */
(function($) {
	$.countdown.regionalOptions['ur'] = {
		labels: ['','','','','','',''],
		labels1: ['','','','','','',''],
		compactLabels: ['()', '', '', 'J'],
		whichLabels: null,
		digits: ['', '', '', '', '', '', '', '', '', ''],
		timeSeparator: ':', isRTL: true};
	$.countdown.setDefaults($.countdown.regionalOptions['ur']);
})(jQuery);
