$(document).ready(function() {
	"use strict";

	console.log("%c Hi there! \\o/", "color: #bada55; font-weight: bold; background-color: #222; padding: 5px; line-height: 2;");

	// COOKIE
	var cookieAccept = function (){

		var usingCookies = ( typeof $.cookie != 'undefined' );
		var $cookies = $('.cookies');

		if (usingCookies && $.cookie('acceptedCookiesPolicy') == null) {
			var distance = $cookies.outerHeight();
			$cookies.css('bottom', - distance - 60);

			setTimeout(function () {
				$cookies.css('bottom', 0);
			}, 500);

			$.cookie('acceptedCookiesPolicy', true, { expires: 365 });
		}

		$('.close-cookie', $cookies).on('click', function () {
			$cookies.css('bottom', - distance - 60);
		});
	};
	// cookieAccept();
	
	// Init Functions
	// FastClick.attach(document.body);

});