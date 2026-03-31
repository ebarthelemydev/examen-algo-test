function compterOccurrences(tab, valeur) {
    let total = 0;

	for (let i = 0; i < tab.length; i++) {
		if (tab[i] === valeur) {
			total++
		}
		
	}

    return total
}

// Exemples attendus :

compterOccurrences([1, 2, 3, 2, 2], 2);
compterOccurrences(["chat", "chien", "chat"], "chat");
compterOccurrences([1, 2, 3], 5);
