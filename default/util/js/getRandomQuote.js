function getRandomQuote(callback) {
	$.ajax({
		type    : "GET",
		dataType: "xml",
		url     : ("/util/js/quotesdb.xml"),
		success : function(xml) {
			var count = $(xml).find("quotes>quote").size();
			var pick = Math.floor((Math.random() * count) + 1);
			var quote = $(xml).find("quotes>quote[id="+pick+"]");
			var text   = $(quote).find("text").text();
			var author = $(quote).find("author").text();
			callback(text,author);

		},
		cache   : false,
		error: function() {
			$(quoteElement).hide();
			$(footerElement).hide();
		}
	}); //ajax
}