/* http://keith-wood.name/countdown.html
 * Malayalam/(Indian>>Kerala) initialisation for the jQuery countdown extension
 * Written by Harilal.B (harilal1234@gmail.com) Feb 2013. */
(function($) {
    $.countdown.regionalOptions['ml'] = {
        labels: ['', '', '', '', '', '', ''],
        labels1: ['', '', '', '', '', '', ''],
        compactLabels: ['', '', '', ''],
        whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
//		digits: ['', '', '', '', '', '', '', '', '', ''],
        timeSeparator: ':', isRTL: false};
    $.countdown.setDefaults($.countdown.regionalOptions['ml']);
})(jQuery);