$(document).ready(function () {
    //    затемнення екрану 
    $('.shadow').css({
        height: innerHeight
    });

 
    $('.create').click(function () {
        $('.createTeam').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        })
        $('body').css({
            overflowY:'hidden'
        })
    });
      $('.add').click(function () {
        $('.createTeam').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        })
        $('body').css({
            overflowY:'hidden'
        })
    });
    $('.createTeam .ngdialog-close').click(function () {
        $('.createTeam').css({
            top: '-60%'
        , });
        $('.shadow').css({
            display: 'none'
        });
         $('body').css({
            overflowY:'auto'
        })
    
    });
     $('.assignLead').click(function () {
        $('.assignTeamLead').css({
            display: 'block'
            , top: '25%'
        });
        $('.shadow').css({
            display: 'block'
        })
        $('body').css({
            overflowY:'hidden'
        })
    });
     
    $('.assign-close').click(function () {
        $('.assignTeamLead').css({
            top: '-60%'
        , });
        $('.shadow').css({
            display: 'none'
        });
         $('body').css({
            overflowY:'auto'
        })
    
    });

});