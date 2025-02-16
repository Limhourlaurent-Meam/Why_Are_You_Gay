let modal = document.getElementById("myModal");
let yesBtn = document.getElementById("yesButton");
let noBtn = document.querySelector(".no");
let span = document.getElementsByClassName("close")[0];

yesBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Function to toggle the position of the 'No' button
function togglePosition() {
  // This condition checks the current state and toggles the transform
  noBtn.style.transform =
    noBtn.style.transform === "translateX(100px)"
      ? "translateX(0)"
      : "translateX(100px)";
}

// Add event listener for 'click' to move on click
noBtn.addEventListener("click", togglePosition);
