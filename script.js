let num;

$(".output-wrapper").bind("click", ()=>{
  $(".shield").css("display","none");
	$("#poem"+poemNum).css("color","linen");
  return false;
});

$("#poem"+num).bind("click", function() {
  console.log("button clicked!");
  poemNum = 1;
  $.get("/generate"+num, function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $("#poem"+num).css("color","GoldenRod");
  });
  return false;
});

$("#poem2").bind("click", function() {
  console.log("button clicked!");
  poemNum = 2;
  $.get("/generate2", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem2").css("color","IndianRed");
  });
  return false;
});

$("#poem3").bind("click", function() {
  console.log("button clicked!");
  poemNum = 3;
  $.get("/generate3", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem3").css("color","SkyBlue");
  });
  return false;
});

$("#poem4").bind("click", function() {
  console.log("button clicked!");
  poemNum = 4;
  $.get("/generate4", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem4").css("color","#c2e184");

  });
  return false;
});

$("#poem5").bind("click", function() {
  console.log("button clicked!");
  poemNum = 5;
  $.get("/generate5", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem5").css("color","Salmon");

  });
  return false;
});

$("#poem6").bind("click", function() {
  console.log("button clicked!");
  poemNum = 6;
  $.get("/generate6", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem6").css("color","DarkKhaki");

  });
  return false;
});

$("#poem7").bind("click", function() {
  console.log("button clicked!");
  poemNum = 7;
  $.get("/generate7", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem7").css("color","Maroon");

  });
  return false;
});


$("#poem8").bind("click", function() {
  console.log("button clicked!");
  poemNum = 8;
  $.get("/generate8", function(response) {
    console.log(response);
    $(".output-wrapper").html(response);
    $(".shield").css("display","block");
    $(".output-wrapper").css("display","inline");
    $("#poem8").css("color","Tomato");

  });
  return false;
});