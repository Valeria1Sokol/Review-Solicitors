$(document).ready(function () {
    var cl = $('.teamAll');
    cl.each(function(){
        var spoiler = $(this);
        spoiler.find('.clickInfo').click(function(){
            
            $(this).find('.activeImg').slideToggle("slow")
           $( ".showHide" ).slideToggle("slow");

        })
    })


});
