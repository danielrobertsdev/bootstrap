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


	// Navigation menu
	var navigation = function() {
		var $showHide = $("#show-main-nav"),
			$container = $("#main-nav-container"),
			$navList = $("#main-nav"),
			listHeight = $navList.height(),
			speed = 100,
			isHidden = false,
			animatePosition = listHeight;

		// Hide menu
		$container.css({"bottom": "-"+listHeight+"px" });
		isHidden = true;

		$showHide.on("click", function(){

			if (isHidden) {
				animatePosition = 0;
				isHidden = false;
			} else {
				animatePosition = listHeight;
				isHidden = true;
			}

			$container.animate({
				"bottom": "-"+animatePosition
			}, speed);
		});
	};
	navigation();

});