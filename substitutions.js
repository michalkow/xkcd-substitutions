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
		{find: new RegExp('\\bhorsepower\\b', 'gi'), replace: 'tons of horsemeat '},
	];

	var html = document.body.innerHTML;
	for (var i = 0; i < words.length; i++) {
		html = html.replace(words[i].find, words[i].replace);
	}

	return html;
}

document.body.innerHTML=xkcdSubstitutions();
// vim: noet
