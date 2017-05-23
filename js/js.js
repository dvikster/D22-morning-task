
$(document).ready(function(){
    $('.button-collapse').sideNav();
    $('.slider').slider();
    $('table').on('click', changeTableClass);
});

var i = 0;
function changeTableClass(){
    i++;
    if( i==1 ){
    $('table').removeClass('highlight').addClass('bordered');
    }
    else if( i==2 ){
        $('table').removeClass('bordered').addClass('striped');
    }
    else if( i==3 ){
        $('table').removeClass('striped').addClass('highlight');
        i=0;
    }
};