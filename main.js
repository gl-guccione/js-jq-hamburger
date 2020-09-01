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

// JS vanilla 2

// document.getElementsByClassName("fas fa-bars")[0].addEventListener("click",
//   function() {
//     document.getElementsByClassName("hamburger-menu")[0].classList.add("active");
//   }
// );
//
// document.getElementsByClassName("fas fa-times")[0].addEventListener("click",
//   function() {
//     document.getElementsByClassName("hamburger-menu")[0].classList.remove("active");
//   }
// );


// jQuery

$(".header-right i.fas.fa-bars").click(
  function() {
    $(".hamburger-menu").addClass("active");
  }
);

$(".hamburger-menu i.fas.fa-times").click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);
