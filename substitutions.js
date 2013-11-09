var words = [
	{find: /witnesses/gi, replace: 'these dudes I know'},
	{find: /allegedly/gi, replace: 'kinda probably'},
	{find: /new study/gi, replace: 'tumbler post'},
	{find: /rebuild/gi, replace: 'avenge'},
	{find: /space/gi, replace: 'spaaace'},
	{find: /google glass/gi, replace: 'virtual boy'},
	{find: /smartphone/gi, replace: 'Pokédex'},
	{find: /electric/gi, replace: 'atomic'},
	{find: /senator/gi, replace: 'elf-lord'},
	{find: /car/gi, replace: 'cat'},
	{find: /election/gi, replace: 'eating contest'},
	{find: /congressional leaders/gi, replace: 'river spirits'},
	{find: /homeland security/gi, replace: 'homestar runner'},
	{find: /could not be reached for comment/gi, replace: 'is guilty and everyone knows it'},
];

for (var i = 0; i < words.length; i++) {
	document.body.innerHTML = document.body.innerHTML.replace(words[i].find, words[i].replace);
};

