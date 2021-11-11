$(document).ready(function(){
    //introduction to javascript
    $("#intro-click").click(function(){
        $("#js-click").hide();
        $("#js-intro").show()

       } )
    $("#intro-hide").click(function(){
        $("#js-intro").hide();
        $("#js-click").show();
    })
})