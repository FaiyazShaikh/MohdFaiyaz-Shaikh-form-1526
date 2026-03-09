// JavaScript Guide-lines
// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors


    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


      // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
    
// Register your form to "click" event.

// Variables for form elements
const submitBtn = document.getElementById('submit-button');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Regular expression for email validation
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

// Function to validate form data
function validateForm(event) {

    // Empty buckets for storing data and errors
    let data = {};
    let errors = {};

    // Full name validation
    if (fullName.value.trim() !== "") {
        data.fn = fullName.value;
    } else {
        errors.fn = "Full name is missing";
    }

    // Email validation
    if (email.value.trim() !== "") {
        if (emailRegEx.test(email.value)) {
            data.em = email.value;
        } else {
            errors.em = "Email is invalid";
        }
    } else {
        errors.em = "Email is missing";
    }

    // Message validation
    if (message.value.trim() !== "") {
        data.msg = message.value;
    } else {
        errors.msg = "Message is missing";
    }

    // Feedback/Errors output in the console
    if (Object.keys(errors).length > 0) {
        console.log("ERRORS");
        console.log(errors);
    } else {
        console.log("FORM DATA COLLECTED");
        console.log(data);

        // Clear text-fields after successful "submission"
        fullName.value = "";
        email.value = "";
        message.value = "";
    }
}

// Register the "click" event
submitBtn.addEventListener('click', validateForm);