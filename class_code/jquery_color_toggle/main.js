let wasClicked = false;

$('.box').click(function(){

    if(wasClicked) {
        $('.box').css("background", "blue");
    } else {
        $('.box').css("background", "black");
    }

    wasClicked = !wasClicked;
})