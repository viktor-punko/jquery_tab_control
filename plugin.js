/**
Get in options ul-list. where each list item
include <a = href="id_modal_div";
id_modal_div - div with tab content.
*/
(function( $ ){

	var methods = {
		init: function() {
			$("head").append(
				"<link href='styles_plugin_tab_control.css' type='text/css' rel='stylesheet' />");
		},

		show: function( ul_selector ) {  

		  	this.after('<div id="tab_content_tabcontrol_plugin"></div>');

			this.attr('id', 'ul_nav_tabcontrol_plugin');

			var widthDivTabContent = this.width();
			$('#tab_content_tabcontrol_plugin').css('width', 
				widthDivTabContent + 'px');

			var listItems = this.children();
			var aTags = listItems.map(function (i, item, arr) {
				return $(item).children()[0];
			});

			aTags.each(function () {
				$(this).css('text-decoration', 'none');
				var idDiv = $(this).attr('href');

				$('#' + idDiv).css('display', 'none');

				$(this).on('click', function () {
					console.log(idDiv);
					var htmlCurrentDiv = $('#' + idDiv).html();
					$('#tab_content_tabcontrol_plugin').html(htmlCurrentDiv);
					return false;
				});
			});

			return listItems;

		}

	};

	$.fn.tabcontrol = function( method ) {

		// логика вызова метода
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Метод с именем ' +  method + ' не существует для jQuery.tabcontrol' );
		} 
	};

})( jQuery );