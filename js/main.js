$(() => {
	"use strict";

	// this should work because of typed.js
	var terminal = new Typed('#terminal', {
		strings: ['Hello!', 'I am a student at Georgia Tech.', 'I am an Ohio State alumni.', 'I love solving problems.', "It's nice to meet you :)"],
		typeSpeed: 50,
		backSpeed: 10,
		cursorChar: '&#9608;',
	});
});

