/* global $ */
'use strict';
import 'rangeslider.js';

const positionTriangle = localStorage.getItem('graph-position');
const rangeS = $('.graph-javascript__input-range');

function trianglePosition(){
	rangeS.rangeslider({
		polyfill: false,
		onInit() {
			const valueS = rangeS.attr('value');
			localStorage['graph-position'] = valueS;
			console.log('initial value: ', valueS);
		},
		onSlideEnd(position, value) {
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

