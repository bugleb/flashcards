const ClozeCard = function(text, cloze) {
	this.fullText = text;
	this.cloze = cloze;

	const index = this.fullText.indexOf(this.cloze);
	if (index === -1) {
		throw 'Cloze was not found in the text!';
	}

	this.partial = this.fullText.replace(this.cloze, '...');
}

module.exports = ClozeCard;