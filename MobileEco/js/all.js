// JavaScript Document

var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

$(document).ready(function(e) {
	$("#main-nav > li").each(function(index, element) {
		$href = $(element).find("a").attr("href");
		if (filename === $href.substring($href.lastIndexOf('/')+1)) {
			$(element).addClass("active");
			return false;
		}
	});
});
