// screen 1 to screen 2
$(".startBtn p").on("click",()=>{
    $(".first-screen").css("opacity","0");
    $(".first-screen").css("z-index","-2");
});


// sidebar 1 functions call
$(".sidebar1 .color").on("click",leftSideColorPressed);

$(".coverLeftSide").on("mouseleave",()=>{
    resetLeftSideBar();

});

$(".sidebar1").on("mouseenter",()=>{
    $(".sidebar1").css("opacity","1");
})



// sidebar 2 function call

$(".sidebar2 .color").on("click",rightSideColorPressed);

$(".coverRightSide").on("mouseleave",()=>{
    resetRightSideBar();

});

$(".sidebar2").on("mouseenter",()=>{
    $(".sidebar2").css("opacity","1");
})


function leftSideColorPressed(){
    $(".sidebar1").addClass("removeRightSideBorderRadius");
    $(".sidebar1").css("opacity","1");
    $(".left-drop-down").css("opacity","1");    
    $(".left-drop-down").css("z-index","2");
    $(".left-drop-down").addClass("removeLeftSideBorderRadius");
}

function resetLeftSideBar(){
    $(".sidebar1").removeClass("removeRightSideBorderRadius");
    $(".sidebar1").css("opacity","0");
    $(".left-drop-down").css("opacity","0");
    $(".left-drop-down").css("z-index","-2");

    
}


function rightSideColorPressed(){
    $(".sidebar2").addClass("removeLeftSideBorderRadius");
    $(".sidebar2").css("opacity","1");
    $(".right-drop-down").css("opacity","1");    
    $(".right-drop-down").css("z-index","2");
    $(".right-drop-down").addClass("removeRightSideBorderRadius");
}

function resetRightSideBar(){
    $(".sidebar2").removeClass("removeLeftSideBorderRadius");
    $(".sidebar2").css("opacity","0");
    $(".right-drop-down").css("opacity","0");
    $(".right-drop-down").css("z-index","-2");


    $(".purple-song iframe").css("opacity","0");
    $(".purple-song iframe").css("z-index","-5");
    $(".blue-song iframe").css("opacity","0");
    $(".blue-song iframe").css("z-index","-5");
    $(".orange-song iframe").css("opacity","0");
    $(".orange-song iframe").css("z-index","-5");
    
}


$(".red").on("click",()=>{

    $(".green-song iframe").css("opacity","0");
    $(".green-song iframe").css("z-index","-5");
    $(".yellow-song iframe").css("opacity","0");
    $(".yellow-song iframe").css("z-index","-5");

    $(".red-song iframe").css("opacity","1");
    $(".red-song iframe").css("z-index","5");
});

$(".green").on("click",()=>{

    $(".yellow-song iframe").css("opacity","0");
    $(".yellow-song iframe").css("z-index","-5");
    $(".red-song iframe").css("opacity","0");
    $(".red-song iframe").css("z-index","-5");

    $(".green-song iframe").css("opacity","1");
    $(".green-song iframe").css("z-index","5");
});

$(".yellow").on("click",()=>{

    $(".red-song iframe").css("opacity","0");
    $(".red-song iframe").css("z-index","-5");
    $(".green-song iframe").css("opacity","0");
    $(".green-song iframe").css("z-index","-5");

    $(".yellow-song iframe").css("opacity","1");
    $(".yellow-song iframe").css("z-index","5");
});


$(".orange").on("click",()=>{
   
    $(".purple-song iframe").css("opacity","0");
    $(".purple-song iframe").css("z-index","-5");
    $(".blue-song iframe").css("opacity","0");
    $(".blue-song iframe").css("z-index","-5");

    $(".orange-song iframe").css("opacity","1");
    $(".orange-song iframe").css("z-index","5");
    
});

$(".blue").on("click",()=>{
    
    $(".orange-song iframe").css("opacity","0");
    $(".orange-song iframe").css("z-index","-5");
    $(".purple-song iframe").css("opacity","0");
    $(".purple-song iframe").css("z-index","-5");

    $(".blue-song iframe").css("opacity","1");
    $(".blue-song iframe").css("z-index","5");
});

$(".purple").on("click",()=>{
    
    $(".orange-song iframe").css("opacity","0");
    $(".orange-song iframe").css("z-index","-5");
    $(".blue-song iframe").css("opacity","0");
    $(".blue-song iframe").css("z-index","-5");
    
    $(".purple-song iframe").css("opacity","1");
    $(".purple-song iframe").css("z-index","5");
});



// to start the animation of color circle

$(".color").on("click",()=>{
    
    $(".sound-animate img").css("opacity","1");


})