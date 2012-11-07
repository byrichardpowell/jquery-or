( function($) {
	$.fn.or = function( fallbackSelector ) {
		return this.length ? this : $( fallbackSelector || 'body' );
	};
}( jQuery ));