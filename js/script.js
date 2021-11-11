$(document).ready(function(){
    //introduction to javascript
    $("#intro-click").click(function(){
        $("#js-click").hide();
        $("#js-intro").show()

       } )
    $("#intro-hide").click(function(){
        $("#js-intro").hide();
        $("#js-click").show();
    });
    //Functions
    $("#func-show").click(function(){
        $("#function").hide();
        $("#function-def").show();
    })
    $("#func-hide").click(function(){
        $("#function-def").hide();
        $("#function").show();
    })
    //Variables
    $("#var-show").click(function(){
        $("#variable").hide();
        $("#var-sec").show();
    })
    $("#var-hide").click(function(){
        $("#var-sec").hide();
        $("#variable").show();
    })
})