/*eslint-env browser*/
// HANDLE THE LOAD EVENT OF THE WINDOW

window.document.addEventListener("DOMContentLoaded", () => {
    
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    
var myButton = window.document.getElementById("btnAddEmployee");
    myButton.addEventListener("click", function() {
        "use strict";

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

        window.open("add-employee.html", "addEmployee", "resizeable = yes");   
    })
});



