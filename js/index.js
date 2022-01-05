console.log("Your index.js file is loaded correctly!");

$("#download").click(function() {
    $('html,body').animate({
        scrollTop: $("#myWorkSection").offset().top},
        'slow');
});

