$(document).ready(function () {
	//Validation for the form
	$("#contactFormValidation").validate(
		{
			//Rules for madatory fields
			rules:
			{
				//Validation for Arraival Date field
				fname:
				{
					required: true //Field is required
				},
				lname:
				{
					required: true //Field is required
				},
				email:
				{
					required: true, //Field is required
					email: true //It should be in email format
				},
				date:
				{
					required: true, //Field is required
					date: true //It should be in date format
				},
				reference:
				{
					required: true//Field is required
					
				},
				textarea:
				{
					required: true //Field is required
					
				}
			},

			//Alert Message
			messages:
			{
				//Alert Message
				fname:
				{
					//Error messages
					required: "*Please enter a valid First name."
				},
				lname:
				{
					//Error messages
					required: "*Please enter a valid Last name."
				},
				email:
				{
					//Error messages
					required: "*Please enter a valid EMAIL."
				},
				date:
				{
					//Error messages
					required: "*Please select a DATE."
				},
				reference: 
				{
					// Error message
					required: " *Please choose a product size"

				},
				textarea: {
					// Error message
					reference: "*Please enter Your meassage"
				}
			}
		})
}); // end ready