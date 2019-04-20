"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: 
   Date:   
   
   Filename: mpl_links.js

*/
//Adds an event listener to the window that runs a function when the page loads, The funciton creates a variable that is linked to the form govLinks. A for loop is run for the variable and when the variable is changed, another anonymous function is ran that targets the value of the event
window.addEventListener("load", function () {
    var allSelect = document.forms.govLinks
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].onchange = function (e) {
            document.location.href = e.target.value;
        }
    }
})