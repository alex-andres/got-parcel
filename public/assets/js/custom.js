$(function () {

	// Modal Initialization
	$('.modal').modal();

	// Stepper Initialization
	$('.stepper').activateStepper();

	// Unit# Auto Complete
	$('input.autocomplete').autocomplete({
		data: {
			'1001': null,
			'1002': null,
			'1003': null,
			'1004': null,
			'1005': null,
			'1006': null,
			'1007': null,
			'1008': null,
			'1009': null,
			'1010': null,
			'1011': null,
			'1012': null
		},
		limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
		onAutocomplete: function (val) {
			// Callback function when value is autcompleted.
		},
		minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
	});

});