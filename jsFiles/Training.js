$(document).ready(function(){
	$.getJSON("JsonFiles/EyeCareStaff.json", function(data){
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#EyeCareStaff").append(
				"<tr>" +
				"<td>" + value.NAME + "<br>" + "</td>" +
				"<td>" + value.TITLE + "<br>" + "</td>" +
				"<td>" + value.DEPARTMENT + "<br>" + "</td>" +
				"<td>" + value.BIO + "<br><br>" + "</td>" + "</tr>"
				);
			});
		});
	});
});