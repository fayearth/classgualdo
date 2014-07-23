$(function() {
	$('.socialbuttons').on('click', function(){
		// Load Twitter
		loadTwitter();

		// Load Facebook
		loadFacebook();

		// Load Google Plus
		loadGooglePlus();

		$('.socialbuttons-menu').fadeIn();
	});
	$('.displayTwitter').on('click', function(){
		$(this).after('<a href="https://twitter.com/share" class="twitter-share-button" data-count="horizontal"></a>');
		loadTwitter();
	});
	$('.displayGoogle').on('click', function(){
		$(this).after('<div class="g-plusone" data-annotation="bubble" data-href="#" data-size="medium"/>');
		(".g-plusone").attr("data-href","http://t-arafansindo.blogspot.com/");
		loadGooglePlus();
	});
	$('.displayFacebook').on('click', function(){
		$(this).after('<div class="fb-like" data-href="http://t-arafansindo.blogspot.com/" data-layout="button_count" data-share="false" data-show-faces="false" data-width="90"/>');
		loadFacebook();
	});
});
function loadTwitter()
{
	if (typeof (twttr) != 'undefined'){
        twttr.widgets.load();
    } else {
        $.getScript('http://platform.twitter.com/widgets.js');
    }
}
function loadFacebook()
{
	if (typeof (FB) != 'undefined') {
		loadFacebook();
    } else {
        $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function () {
            FB.init({ status: true, cookie: true, xfbml: true,appId: '526931927355788',xfbml: true,version: 'v2.0' });
        });
    }
}

function loadGooglePlus()
{
	if (typeof (gapi) != 'undefined') {
        $(".g-plusone").each(function () {
            gapi.plusone.render($(this).get(0));
        });
    } else {
        $.getScript('https://apis.google.com/js/plusone.js');
    }
}
