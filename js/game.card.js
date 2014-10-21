'use strict';

// Card constructor function.
// Returns object with public functions.
game.createCard = function (rank, suit) {

	/* * * * * *
	 * Private *
	 * * * * * */
	var isRevealed = true,
		value = getValue(),
		url = getUrl();

	function getValue() {
		// If it is a letter card return 11 or 10..
		if (rank === 'Ace') {
			return 11;
		} else if (!$.isNumeric(rank)) { // is not numeric
			return 10;
		} else { // otherwise return the rank itself
			return Number(rank);
		}
	}

	function getUrl() { // For card image file
		return 'img/cards/' + rank + '_of_' + suit + '.svg';
	}

	/* * * * * *
	 * Public  *
	 * * * * * */
	var card = {}; // Public functions are returned with this object

	card.flip = function () {
		isRevealed = !isRevealed;
	};
	card.isRevealed = function () {
		return isRevealed;
	};
	card.getUrl = function () {
		return url;
	};
	card.getValue = function () {
		return value;
	};
	card.toString = function () { // Text representation of card, i.e. '9 of clubs'
		return rank + ' of ' + suit;
	};
	return card;
};