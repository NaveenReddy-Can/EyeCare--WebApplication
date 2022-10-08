$(document).ready(function(){
	$.getJSON("JsonFiles/Products.json", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#Products").append(
				"<tr>" +
				"<td>" + value.ProductName + "<br>" + "</td>" +
				"<td>" + value.Stock+ "<br>" + "</td>" +
				"<td>" + value.QuantityOnHand + "<br>" + "</td>" +
				"<td>" + value.Size + "<br><br>" + "</td>" + 
                "<td>" + value.Colour + "<br>" + "</td>" +
                "</tr>"
				);
			});
		});
	});
});