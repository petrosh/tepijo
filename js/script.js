// DOM ready
$(function () {

	$('.command').click( function (e) { e.preventDefault(); });
	$('#clear-store').click( function () { 
		clearStore();
	});

	// localstore

	if( store.enabled ) {
		store.get('unsetValue');

		var all = store.getAll();

		if ( all.tepijo == 'true' ) {
			$('#console').html('-' + all.tepijo);

		} else {
			localInit();
		}

	} else {
	    $('#console').html('localStorage not available');
	}
	
	// functions

	function localInit() {
		store.set('tepijo', 'true');
		$('#console').html('tepijo set ok');

	}

	function clearStore() {
		store.clear();
		$('#console').html('tepijo clear ok');
	}

});

// mousetrap

Mousetrap.bind('4', function() { alert('4'); });
Mousetrap.bind('x', function() { alert('x'); }, 'keyup');
