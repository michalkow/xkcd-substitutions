function xkcdSubstitutions(){
	var words = [
		{find: new RegExp('witnesses\s', 'gi'), replace: 'these dudes I know '},
		{find: new RegExp('allegedly\s', 'gi'), replace: 'kinda probably '},
		{find: new RegExp('new study\s', 'gi'), replace: 'tumbler post '},
		{find: new RegExp('rebuild\s', 'gi'), replace: 'avenge '},
		{find: new RegExp('space\s', 'gi'), replace: 'spaaace '},
		{find: new RegExp('google glass\s', 'gi'), replace: 'virtual boy '},
		{find: new RegExp('smartphone\s', 'gi'), replace: 'Pokédex '},
		{find: new RegExp('electric\s', 'gi'), replace: 'atomic '},
		{find: new RegExp('senator\s', 'gi'), replace: 'elf-lord '},
		{find: new RegExp('car\s', 'gi'), replace: 'cat '},
		{find: new RegExp('election\s', 'gi'), replace: 'eating contest '},
		{find: new RegExp('congressional leaders\s', 'gi'), replace: 'river spirits '},
		{find: new RegExp('homeland security\s', 'gi'), replace: 'homestar runner '},
		{find: new RegExp('could not be reached for comment\s', 'gi'), replace: 'is guilty and everyone knows it '},
	];

	var html = document.body.innerHTML;
	for (var i = 0; i < words.length; i++) {
		html = html.replace(words[i].find, words[i].replace);
	}; 

	return html;
}

document.body.innerHTML=xkcdSubstitutions();