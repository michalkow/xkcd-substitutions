function xkcdSubstitutions(){
	var words = [
		{find: new RegExp('\\bwitnesses\\b', 'gi'), replace: 'these dudes I know '},
		{find: new RegExp('\\ballegedly\\b', 'gi'), replace: 'kinda probably '},
		{find: new RegExp('\\bnew study\\b', 'gi'), replace: 'tumblr post '},
		{find: new RegExp('\\brebuild\\b', 'gi'), replace: 'avenge '},
		{find: new RegExp('\\bspace\\b', 'gi'), replace: 'spaaace '},
		{find: new RegExp('\\bgoogle glass\\b', 'gi'), replace: 'virtual boy '},
		{find: new RegExp('\\bsmartphone\\b', 'gi'), replace: 'Pokédex '},
		{find: new RegExp('\\belectric\\b', 'gi'), replace: 'atomic '},
		{find: new RegExp('\\bsenator\\b', 'gi'), replace: 'elf-lord '},
		{find: new RegExp('\\bcar\\b', 'gi'), replace: 'cat '},
		{find: new RegExp('\\belection\\b', 'gi'), replace: 'eating contest '},
		{find: new RegExp('\\bcongressional leaders\\b', 'gi'), replace: 'river spirits '},
		{find: new RegExp('\\bhomeland security\\b', 'gi'), replace: 'homestar runner '},
		{find: new RegExp('\\bcould not be reached for comment\\b', 'gi'), replace: 'is guilty and everyone knows it '},
	];

	var html = document.body.innerHTML;
	for (var i = 0; i < words.length; i++) {
		html = html.replace(words[i].find, words[i].replace);
	}; 

	return html;
}

document.body.innerHTML=xkcdSubstitutions();
