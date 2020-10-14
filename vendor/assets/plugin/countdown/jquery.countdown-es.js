/* http://keith-wood.name/countdown.html
 * Spanish initialisation for the jQuery countdown extension
 * Written by Sergio Carracedo Martinez webmaster@neodisenoweb.com (2008) */
(function($) {
	$.countdown.regionalOptions['es'] = {
		labels: ['Aos', 'Meses', 'Semanas', 'Das', 'Horas', 'Minutos', 'Segundos'],
		labels1: ['Ao', 'Mes', 'Semana', 'Da', 'Hora', 'Minuto', 'Segundo'],
		compactLabels: ['a', 'm', 's', 'd'],
		whichLabels: null,
		digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		timeSeparator: ':', isRTL: false};
	$.countdown.setDefaults($.countdown.regionalOptions['es']);
})(jQuery);
