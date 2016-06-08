(function() {
	var replacements = {
		"entrepreneur": "artist",
		"Donald Trump": "Micheal Jackson",
		"Bernie Sanders": "Moses",
		"random": "broken",
		"gaffe": "haunted",
		"star[- ]studded": "blood-soaked",
		"remains to be seen": "will never be known",
		"silver bullet": "way to kill werewolves",
		"subway system": "tunnels I found",
		"surprising": "surprising to everyone except me",
		"war of words": "interplanetary war",
		"tension": "sexual tension",
		"cautiously optimistic": "delusional",
		"Doctor Who": "the Big Bang Theory",
		"win votes": "find pokemon",
		"behind the healines": "beyond the grave",
		"read between the lines": "see into the future",
		"email": "poem",
		"facebook post": "poem",
		"tweet": "poem",
		"facebook ceo": "this guy",
		"Mark Zuckerberg": "this guy",
		"latest": "final",
		"disrupt": "destroy",
		"meeting": "menage a trois",
		"you won't believe": "I'm really sad about",
		"scientist\b": "Channing Tatum",
		"scientists": "Channing Tatum and his friends",
		"terrorists": "scientists",
		"journalist\b": "Obama",
		"journalists": "Senators",
		"journalism": "voyeurism",
	};

	Object.keys(replacements).map(function (target) {
		document.body.innerHTML = document.body.innerHTML.replace(new RegExp(target, "gi"), replacements[target]);
	});

	console.log("Fixed the news");
}());
