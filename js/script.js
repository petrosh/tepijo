// tepijo object
tepijo = {
	token: null,
	settings: { 'one': 1 }
}

// DOM ready
$(function () {

	$('.command').click( function (e) { e.preventDefault(); });
	$('#clear-store').click( function() { 
		clearStore();
	});
	$('#toggle-menu').click( function() {
        $("#menu").toggleClass("active");		
	});
	
	// simple modal
	$("#modal-launcher, #modal-background, #modal-close").click( function() {
        $("#modal-content, #modal-background").toggleClass("active");
    });

	// localstore

	if( store.enabled ) {
		store.get('unsetValue');

		var all = store.getAll();
		console.log(all)

		if ( all.tepijo.token != 'true' ) {
			$('#console').html('tepijo ' + all.tepijo + ', count = ' + countProperties(all));

		} else {
			localInit();
		}

	} else {
	    $('#console').html('localStorage not available');
	}

	// functions

	function localInit() {
		store.set('tepijo', tepijo);
		$('#console').html('tepijo set ok');

	}

	function clearStore() {
		store.clear(); // Clear all keys
		$('#console').html('tepijo clear ok');
	}
	
	function countProperties(obj) {
		var count = 0
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) { count++ }
		}
		return count
	}

});

// mousetrap

Mousetrap.bind('4', function() { $('#console').html('4') });
Mousetrap.bind('x', function() { 
	$('#console').html('x');
}, 'keyup');
