function xkcdSubstitutions(){
	var words = [
		{find: new RegExp('\\bwitnesses\\b', 'gi'), replace: 'these dudes I know'},
		{find: new RegExp('\\ballegedly\\b', 'gi'), replace: 'kinda probably'},
		{find: new RegExp('\\bnew study\\b', 'gi'), replace: 'tumblr post'},
		{find: new RegExp('\\brebuild\\b', 'gi'), replace: 'avenge'},
		{find: new RegExp('\\bspace\\b', 'gi'), replace: 'spaaace'},
		{find: new RegExp('\\bgoogle glass\\b', 'gi'), replace: 'virtual boy'},
		{find: new RegExp('\\bsmartphone\\b', 'gi'), replace: 'Pokédex'},
		{find: new RegExp('\\belectric\\b', 'gi'), replace: 'atomic'},
		{find: new RegExp('\\bsenator\\b', 'gi'), replace: 'elf-lord'},
		{find: new RegExp('\\bcar\\b', 'gi'), replace: 'cat'},
		{find: new RegExp('\\belection\\b', 'gi'), replace: 'eating contest'},
		{find: new RegExp('\\bcongressional leaders\\b', 'gi'), replace: 'river spirits'},
		{find: new RegExp('\\bhomeland security\\b', 'gi'), replace: 'homestar runner'},
		{find: new RegExp('\\bcould not be reached for comment\\b', 'gi'), replace: 'is guilty and everyone knows it'},
		{find: new RegExp('\\bdebate\\b', 'gi'), replace: 'dance-off'},
		{find: new RegExp('\\bself driving\\b', 'gi'), replace: 'uncontrollably swerving'},
		{find: new RegExp('\\bpoll\\b', 'gi'), replace: 'psychic reading'},
		{find: new RegExp('\\bcandidate\\b', 'gi'), replace: 'airbender'},
		{find: new RegExp('\\bdrone\\b', 'gi'), replace: 'dog'},
		{find: new RegExp('\\bvows to\\b', 'gi'), replace: 'probably won\'t'},
		{find: new RegExp('\\bat large\\b', 'gi'), replace: 'very large'},
		{find: new RegExp('\\bsuccessfully\\b', 'gi'), replace: 'suddenly'},
		{find: new RegExp('\\bexpands\\b', 'gi'), replace: 'physically expands'},
		{find: new RegExp('\\b(first|second|third)-degree\\b', 'gi'), replace: 'friggin\' awful'},
		{find: new RegExp('\\ban unknown number\\b', 'gi'), replace: 'like hundreds'},
		{find: new RegExp('\\bfront runner\\b', 'gi'), replace: 'blade runner'},
		{find: new RegExp('\\bglobal\\b', 'gi'), replace: 'spherical'},
		{find: new RegExp('\\byears\\b', 'gi'), replace: 'min_placeholder'},
		{find: new RegExp('\\bminutes\\b', 'gi'), replace: 'years'},
		{find: new RegExp('\\bmin_placeholder\\b', 'gi'), replace: 'minutes'},
		{find: new RegExp('\\bno indication\\b', 'gi'), replace: 'lots of signs'},
		{find: new RegExp('\\burged restraint by\\b', 'gi'), replace: 'drunkenly egged on'},
		{find: new RegExp('\\bhorsepower\\b', 'gi'), replace: 'tons of horsemeat'},
		{find: new RegExp('\\bgaffe\\b', 'gi'), replace: 'magic spell'},
		{find: new RegExp('\\bancient\\b', 'gi'), replace: 'haunted'},
		{find: new RegExp('\\bstar[- ]studded\\b', 'gi'), replace: 'blood soaked'},
		{find: new RegExp('\\bremains to be seen\\b', 'gi'), replace: 'will never be known'},
		{find: new RegExp('\\bsilver bullet\\b', 'gi'), replace: 'way to kill warewolves'},
		{find: new RegExp('\\bsubway system\\b', 'gi'), replace: 'tunnels I found'},
		{find: new RegExp('\\bsurprising\\b', 'gi'), replace: 'surprising (but not to me)'},
		{find: new RegExp('\\bwars of words\\b', 'gi'), replace: 'interplanetary war'},
		{find: new RegExp('\\btension\\b', 'gi'), replace: 'sexual tension'},
		{find: new RegExp('\\bcautiously optimistic\\b', 'gi'), replace: 'delusional'},
		{find: new RegExp('\\bdoctor who\\b', 'gi'), replace: 'The Big Bang Theory'},
		{find: new RegExp('\\bwin votes\\b', 'gi'), replace: 'find Poke\&#769;mon'},
		{find: new RegExp('\\bbehind the headlines\\b', 'gi'), replace: 'beyond the grave'},
		{find: new RegExp('\\be[- ]?mail\\b', 'gi'), replace: 'poem'},
		{find: new RegExp('\\bfacebook post\\b', 'gi'), replace: 'poem'},
		{find: new RegExp('\\btweet\\b', 'gi'), replace: 'poem'},
		{find: new RegExp('\\bfacebook ceo\\b', 'gi'), replace: 'this guy'},
		{find: new RegExp('\\blatest\\b', 'gi'), replace: 'final'},
		{find: new RegExp('\\bdisrupt\\b', 'gi'), replace: 'destroy'},
		{find: new RegExp('\\bmeeting\\b', 'gi'), replace: 'me\&#769;nage a\&#768; trois'},
		{find: new RegExp('\\bscientists\\b', 'gi'), replace: 'Channing Tatum and his friends'},
		{find: new RegExp('\\byou won\'t believe\\b', 'gi'), replace: 'I\'m really sad about'}
	];

	var html = document.body.innerHTML;
	for (var i = 0; i < words.length; i++) {
		html = html.replace(words[i].find, words[i].replace);
	}

	return html;
}

document.body.innerHTML=xkcdSubstitutions();
// vim: noet
