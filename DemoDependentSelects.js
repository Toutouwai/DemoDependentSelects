$(document).ready(function() {

	// Get source selects
	var $source_selects = $('select[data-target]');

	// Update dependent selects
	function updateDependentSelect($source) {
		// Get selected option
		var $selected_option = $source.find(':selected');
		// Get the values that are valid for the dependent select
		var valid_values = $selected_option.data('valid-values');
		// Get the target select
		var $target = $('#' + $source.data('target'));
		// Get the options of the target select
		var $options = $target.find('option');
		// Hide all the options
		$options.attr('hidden', true);
		// Show the target options that are valid for the selected source option
		if(valid_values) {
			valid_values.toString().split('|').forEach(function(item) {
				$options.filter('[value="' + item + '"]').attr('hidden', false);
			});
		}
		// If the option currently selected in the target select isn't valid then clear the selection
		if($target.find(':selected').attr('hidden')) {
			$target.val('');
		}
	}

	// Update dependent selects on DOM ready
	$source_selects.each(function() {
		updateDependentSelect($(this));
	});

	// Update dependent select when source select is changed
	$source_selects.change(function() {
		updateDependentSelect($(this));
	});

});
