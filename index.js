$(document).ready(function()
    {
    	getQuote();

		$("#tweetshare").on("click",function(){
    		window.open("https://twitter.com/intent/tweet?text="+$("#quote").html()+" - "+$("#author").html());
    	});

    	$("#newquote").on("click",function(){
    		getQuote();
    		couleur=get_random_color();
    		$("#quote").css("color",couleur);
    		$("#quote").css("transition","all 1s ease");
    		$("body").css("background-color",couleur);
    		$("body").css("transition","all 1s ease");
    		$("#newquote").css("background-color",couleur);
    		$("#newquote").css("transition","all 1s ease");
    		$("#tweetshare").css("background-color",couleur);
    		$("#tweetshare").css("transition","all 1s ease");
    	});
    });
    	function get_random_color() {
    	var letters = '0123456789ABC'.split('');
   		var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 12)];
   		 }
    	return color;
		}
		function getQuote()
    	{
    		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
  					$("#quote").html(data.quoteText);
  					$("#author").html(data.quoteAuthor);
			});
    	}