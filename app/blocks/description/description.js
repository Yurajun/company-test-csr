/* global jQuery */
(function description($){
	const divResult = document.querySelector('.description');

	function printP(str, clsName) {
		const p = document.createElement('p');
		p.classList.add(clsName);
		p.appendChild(document.createTextNode(str));
		divResult.appendChild(p);
	}

	function wrapText(text, lineHeight, clName){
		const words = text.split(' ');
		const countWords = words.length;
		let line = '';
		let n = 0;
		for (n; n < countWords; n++){
			const testLine = line + words[n] + ' ';
			const testWidth = testLine.length;
			if (testWidth > lineHeight){
				printP(line, clName);
				line = words[n] + ' ';
			}else {
				line = testLine;
			}
		}
		printP(line, clName);
	}

	const p = $('.description__p');
	divResult.innerHTML = '';

	p.map(function (i, o){
		wrapText($(o).text(), 43, $(o).attr('class'));
	});

})(jQuery);
