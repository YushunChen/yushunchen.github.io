document.addEventListener('DOMContentLoaded', function(event) {
	// array with texts to type in typewriter
	var dataText = [ '你好呀，我是陈昱舜!', 'Hola, me llamo Oliver', 'Hi, my name is Oliver!' ];

	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
		// chekc if text isn't finished yet
		if (i < text.length) {
			// add next character to h1
			document.querySelector('#typing-text').innerHTML =
				text.substring(0, i + 1) + '<span id="typing-span" aria-hidden="true"></span>';

			// wait for a while and call this function again for next character
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback);
			}, 100);
		} else if (typeof fnCallback == 'function') {
			// text finished, call callback if there is a callback function
			// call callback after timeout
			setTimeout(fnCallback, 2000);
		}
	}
	// start a typewriter animation for a text in the dataText array
	function StartTextAnimation(i) {
		if (typeof dataText[i] == 'undefined') {
			setTimeout(function() {
				StartTextAnimation(0);
			}, 20000);
		}
		// check if dataText[i] exists
		if (i < dataText[i].length) {
			// text exists! start typewriter animation
			typeWriter(dataText[i], 0, function() {
				// after callback (and whole text has been animated), start next text
				StartTextAnimation(i + 1);
			});
		}
	}
	// start the text animation
	StartTextAnimation(0);
});
