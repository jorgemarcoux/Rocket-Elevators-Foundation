/* http://keith-wood.name/countdown.html
 * Ukrainian initialisation for the jQuery countdown extension
 * Written by Goloborodko M misha.gm@gmail.com (2009), corrections by I K */
(function($) {
	$.countdown.regionalOptions['uk'] = {
		labels: ['', '', '', '', '', '', ''],
		labels1: ['', '', '', '', '', '', ''],
		labels2: ['', '', '', '', '', '', ''],
		compactLabels: ['r', 'm', 't', 'd'],
		whichLabels: function(amount) {
			return (amount == 1 ? 1 : (amount >=2 && amount <= 4 ? 2 : 0));
		},
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['uk']);
})(jQuery);
