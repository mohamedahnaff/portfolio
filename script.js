/** @format */

function pageIndicator(event) {
  var pageId = event.target.id;
  var indicator = document.getElementById("indicator");
  //   console.log(pageId);

  switch (pageId) {
    case "home-id":
      indicator.style.right = "383px";
      break;
    case "about-id":
      indicator.style.right = "303px";
      break;
    case "project-id":
      indicator.style.right = "215px";
      break;
    case "resume-id":
      indicator.style.right = "135px";
      break;
    case "contact-id":
      indicator.style.right = "56px";
      break;

    default:
      break;
  }
}

window.onload = function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
};

// Game

var overlay = document.querySelector(".overlay");
var popup = document.getElementById("popup");
var popupBtn = document.getElementById("popup-btn");

popupBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  popup.style.display = "block";
});

function game(event) {
  var inputNum = document.getElementById("input-num").value;
  var status = document.getElementById("status");
  //   console.log(inputNum);

  var randomNum = Math.floor(Math.random() * 10) + 1;

  if (inputNum == randomNum) {
    status.textContent = "Yeah you have successfully found the random number!";
    alert("Yeah it's correct, you guessed it!");
  } else {
    status.textContent = "Sorry, wrong number";
  }
}

var closeBtn = document.getElementById("close-btn-id");

// Popup Box Close Function
closeBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  popup.style.display = "none";
});
