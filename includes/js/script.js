/*

My Custom JS
============

Author:  JUNCHI CHEN
Updated: March 2017
Notes:	 Hand coded for bootstrap

*/


$(function () {

    $('#alertMe').click(function(e) {
        e.preventDefault();

        $('#successAlert').slideDown();
    })

    $('a.pop').click(function(e) {
        e.preventDefault();
    })

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();

});