/* http://keith-wood.name/countdown.html
* Turkish initialisation for the jQuery countdown extension
* Written by Bekir Ahmetolu (bekir@cerek.com) Aug 2008. */
(function($) {
	$.countdown.regionalOptions['tr'] = {
		labels: ['Yl', 'Ay', 'Hafta', 'Gn', 'Saat', 'Dakika', 'Saniye'],
		labels1: ['Yl', 'Ay', 'Hafta', 'Gn', 'Saat', 'Dakika', 'Saniye'],
		compactLabels: ['y', 'a', 'h', 'g'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['tr']);
})(jQuery);
