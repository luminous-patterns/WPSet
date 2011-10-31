
jQuery( document ).ready( function() {
	
	if ( jQuery( 'div.wpset-tabbed-settings' ).length > 0 ) {
		jQuery( 'div.wpset-tabbed-settings' ).each( function() {
			var these_settings = jQuery( this );
			var settings_tabs = these_settings.find( 'ul.settings-tabs li.tab');
			var settings_pages = these_settings.find( 'div.settings-sections div.group' );
			if ( settings_tabs.length > 0 ) {
				settings_tabs.click( function() {
					var match = /group\-([a-z-]+)/.exec( jQuery( this ).attr( 'class' ) );
					var page_name = match[1];
					settings_pages.addClass( 'hidden' );
					these_settings.find( 'div.settings-sections div.group-' + page_name ).removeClass( 'hidden' );
					settings_tabs.removeClass( 'selected' );
					jQuery( this ).addClass( 'selected' );
				} );
			}
		} );
	}
	
} );
