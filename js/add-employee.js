/*eslint-env browser*/

// HANDLE THE LOAD EVENT OF THE WINDOW

window.document.addEventListener("DOMContentLoaded", () => {
    
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    
    var width = 800;
    var height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT

    window.resizeTo(width, height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

    window.moveTo(((window.screen.width-width)/2), ((window.screen.height-height)/2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

var myButtonCancel = window.document.getElementById("cancel");
    myButtonCancel.addEventListener("click", function() {
        "use strict";

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

        window.close();   
    })
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

let form = document.getElementById('empForm');
form.addEventListener('submit', (evt) => {
    /*const $ = selector => document.querySelector(selector);
    const id = $("#id").value;
    const name = $("#name").value;
    const ext = $("#extension").value;
    const email = $("#email").value;
    const department = $("#department").value;*/

evt.preventDefault();

var id = window.document.getElementById('id').value;
var name = window.document.getElementById('name').value;
var ext = window.document.getElementById('extension').value;
var email = window.document.getElementById('email').value;
var dep = window.document.getElementById('department').value;

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

let myOutput = window.opener.document.getElementById('loginDetails');

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

myOutput.innerHTML = "ID: " + id +'<br>' + 
"Name: " + name + '<br>' +
"Extension: " + ext + '<br>' + 
"Email: " + email + '<br>' +
"Department: " + dep;

// CLOSE THE POPUP

window.close();

});

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE

});