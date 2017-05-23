
$(document).ready(function(){
    $('.button-collapse').sideNav();
    $('.slider').slider();
    $('#table1').on('click', changeTableClass);


    $( "input[name=group1]" ).on("click", function() {
        $('#table2').removeClass().addClass($( "input:checked" ).val());
    });

    // через checked
    // $( "input[type=checkbox]" ).on("change", function() {
    //     if(this.checked){
    //         $('#table3').addClass($(this).val());
    //     }
    //     else{
    //         $('#table3').removeClass($(this).val());
    //     }
    // });


    // через toggleClass
    $( "input[type=checkbox]" ).on("click", function() {
        $('#table3').toggleClass($(this).val());
    });

});

var i = 0;
function changeTableClass(){
    i++;
    if( i==1 ){
    $('#table1').removeClass('highlight').addClass('bordered');
    }
    else if( i==2 ){
        $('#table1').removeClass('bordered').addClass('striped');
    }
    else if( i==3 ){
        $('#table1').removeClass('striped').addClass('highlight');
        i=0;
    }
};

