/**
Get in options ul-list. where each list item
include <a = href="id_modal_div";
id_modal_div - div with tab content.
*/
(function( $ ){

  $.fn.tabcontrol = function( ul_selector ) {  

  	// использование Math.round() даст неравномерное распределение!
	// function getRandomInt(min, max){
	//   return Math.floor(Math.random() * (max - min + 1)) + min;
	// }

	// var randomTabContentClassName = "tab-content" + getRandomInt(1, 1000);

  	this.after('<div id="tab_content"></div>');

	var listItems = this.children();
	var aTags = listItems.map(function (i, item, arr) {
		return $(item).children()[0];
	});

	aTags.each(function () {
		$(this).css('text-decoration', 'none');

		$(this).on('click', function () {
			//a.stopPropagation();
			var idDiv = $(this).attr('href');
			console.log(idDiv);
			var htmlCurrentDiv = $('#' + idDiv).html();
			$('#tab_content').html(htmlCurrentDiv);
			return false;
		});
	});

	return listItems;

  };
})( jQuery );