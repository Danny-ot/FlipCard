$(document).ready(function(){
    //introduction to javascript
    $("#intro-click").click(function(){
        $("#js-click").slideUp(1000).delay(1000);
        $("#js-intro").slideDown(1000)

       } )
    $("#intro-hide").click(function(){
        $("#js-intro").slideUp(1000);
        $("#js-click").slideDown(1000);
    });
    //Functions
    $("#func-show").click(function(){
        $("#function").hide(1000);
        $("#function-def").show(1000);
    })
    $("#func-hide").click(function(){
        $("#function-def").hide(1000);
        $("#function").show(1000);
    })
    //Variables
    $("#var-show").click(function(){
        $("#variable").hide(300);
        $("#var-sec").show(300);
    })
    $("#var-hide").click(function(){
        $("#var-sec").hide(300);
        $("#variable").show(300);
    })
    //Methods
    $("#meth-show").click(function(){
        $("#method").hide(300);
        $("#meth-sec").show(300);
    })
    $("#meth-hide").click(function(){
        $("#meth-sec").hide(300);
        $("#method").show(300);
    })
})
