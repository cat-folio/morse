var output = document.querySelector('#text-output');
var pressKey = document.querySelector('#press-key');
// var letter = document.querySelector('.letter-output');


var keyMorze = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..',
	0: '-----',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.'
}

pressKey.addEventListener('keyup', outputKey, false);

function outputKey(event){
	var codeKey = event.keyCode;
	var getKey = String.fromCharCode(codeKey).toLowerCase();
	for (var prop in keyMorze){
		if(getKey == prop){
			createTags(getKey, prop);
		}
	}
}

function createTags(getKey, prop){
	var letter = document.createElement('div');
	letter.className = "letter-output";
	output.appendChild(letter);

	var divMorzeCode = document.createElement('div');
	divMorzeCode.className = "morze-letter";
	divMorzeCode.innerHTML = keyMorze[prop];
	letter.appendChild(divMorzeCode);

	var divLetter = document.createElement('div');
	divLetter.className = "letter";
	divLetter.innerHTML = getKey;
	letter.appendChild(divLetter);
}
