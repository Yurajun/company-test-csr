/* global jQuery */
/* eslint object-shorthand: ["error", "always", { "avoidQuotes": true }]*/
'use strict';
(function graphJavaScript($){
	const positionTriangle = localStorage.getItem('graph-position');
	const rangeS = $('.graph-javascript__input-range');

	function trianglePosition(){
		rangeS.rangeslider({
			polyfill: false,
			onInit: function (){
				const valueS = rangeS.attr('value');
				localStorage['graph-position'] = valueS;
				console.log('initial value: ', valueS);
			},
			onSlideEnd: function (position, value) {
				localStorage['graph-position'] = value;
				console.log('last value:', value);
			}
		});
	}

	if (positionTriangle){
		rangeS.attr('value', positionTriangle);
		trianglePosition();
	}else {
		trianglePosition();
	}
})(jQuery);
