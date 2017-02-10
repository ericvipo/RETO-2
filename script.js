$(document).ready(function(){
  $("#btn").click(function(){
    $("#panel").slideToggle("slow");
  });
  $("section").mouseenter(function(){
    $(this).fadeTo("fast",0.9);
  });
  $("section").mouseleave(function(){
    $(this).fadeTo("fast",0.45);
  });
  $("#a").click(function(){
    $("img").animate({left: "-=10px"},50);
  });
  $("#d").click(function(){
    $("img").animate({left: "+=10px"},50);
  });
  $("#w").click(function(){
    $("img").animate({top: "-=10px"},50);
  });
  $("#s").click(function(){
    $("img").animate({top: "+=10px"},50);
  });
});
