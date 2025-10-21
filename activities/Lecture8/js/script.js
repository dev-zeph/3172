// Get the current time and hour
// HINT: you will have to first get the full date and then get the time and hour of the day
// You may explore the use of JS built-in functions


let currentDate = new Date();
let currentHour = currentDate.getHours();



// Create a variable to store your greeting message 
let greetingMessage;



// Based on the hour you get, you need to set the conditions you want your script to check
// in order to render a specific message
// for now we want to say 'Good Morning' if it is earlier than 12PM

if (currentHour <12)
	{
	greetingMessage = 'Good Morning';
}
else if (currentHour <15){
	greetingMessage = 'Hey! I think we are in class!';
}
else {
	greetingMessage = 'Welcome';
}


// otherwise we want to check if it is earlier than 3PM and let the visitor know
// 'Hey! I think we are in class!'



// For any other time (i.e., later than 3PM, we just want to say 'Welcome'




// This is an example of an if statement, or a conditional statement
// the JS interpreter checks if a conditions is true, if it is then it executes the code
// If the condition is FALSE, then it skips the code and moves onto the next one (i.e., our else if conditional)
// If that second condition is also FALSE then it moves to our last conditional, our else statement
// IF statements always end in an ELSE statement, if you want to give options in-between we always use ELSE IF



// Then, we use the DOM, and calling the 'getElementById( )' method and its innerHTML property to add some HTML for us onto our webpage
// we basically want to show the return result in <h2 id="greeting"></h2>
document.getElementById('greeting').innerHTML = '<h2>' + greetingMessage + '</h2>';

// In this section of our script, we want to access the values the user entered into our form
// and add them together
// First we declare our variables for the two values
let value1;
let value2;

let sum = value1 + value2;


// Now, let's use the DOM now to access a value in our form and show it back to us in an alert( ) box
// First, we'll creatr a function to store the input values into the variables we declared
// We'll enclose that code block in a function, getNumbers( )

    // Store the values from the form into the variables we declared above
function getNumber() {
value1 = parseFloat(document.getElementById('number1').value);
value2 = parseFloat(document.getElementById('number2').value);
}





	// Call the getNumbers() function to import the values the user enteres into the form into 
	// this function
	getNumber();

	// We perform our addition on the two values

	function addition () {
		getNumber();
		let sum = value1 + value2;
		alert('The sum is: ' + sum);
	}

	function subtraction () {
		getNumber();
		let difference = value1 - value2;
		alert('The difference is: ' + difference);
	}

	function multiplication () {
		getNumber();
		let product = value1 * value2;
		alert('The result of your multiplication is: ' + product);
	}

	function division () 
	{
		getNumber();
		let quotient = value1 / value2;
		alert('The result of your division is: ' + quotient);
	}

