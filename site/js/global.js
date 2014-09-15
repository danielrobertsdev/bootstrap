if (!window.console) console = { log: function() {} };

$(document).ready(function() {

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
	cookieAccept();
	
	// Init Functions
	FastClick.attach(document.body);

	var prepareCode = function() {
		var $html = $(".html code pre"),
			code;

		$.each($html, function(e){
			var $this = $(this);

			code = $this.html().replace(/[<]/g,"&lt;");

			console.log($this);
			$this.append(code);//code;
		});
		

		
		// $html.html() = code;
	};
	prepareCode();

});