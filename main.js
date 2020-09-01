// JS vanilla

/*
document.getElementsByClassName("fas fa-bars")[0].addEventListener("click",
  function() {
    document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
  }
);

document.getElementsByClassName("fas fa-times")[0].addEventListener("click",
  function() {
    document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
  }
);
*/


// jQuery

$("i.fas.fa-bars").click(
  function() {
    $(".hamburger-menu").show();
  }
);

$("i.fas.fa-times").click(
  function() {
    $(".hamburger-menu").hide();
  }
);
