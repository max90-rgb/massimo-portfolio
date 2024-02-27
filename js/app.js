const navBar = document.getElementById('nav-bar');
const navDiv = document.getElementById('nav1');
const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const modalContainer = document.getElementById("modal-container");
const projectTitles = ["Online-registration-form", "Web-style-guide", "Interactive Photo Gallery", "Wheel of Success!", "Web App Dashboard", "Startup Employee Directory"];
const projectDescription = ["In this project i built a form for a web site using the appropriate html tags and css style.", "This project was meant to utilize Sass for practice.", "With this project i could practice a little with a simple javascript functionality like a search filter for the gallery.", "In this project i made the popular game (wheel of success) with the help of javascript.", "This was the longest project ever made and i utilized all my knowledges about html,css and javascript.", "In this project i utilized the API to receive random informations regarding several employees."];
const projectLinks = ["<a href='https://max90-rgb.github.io/online-registration-form/'>Check it out</a>", "<a href=' https://max90-rgb.github.io/web-style-guide/'>Check it out</a>", "<a href=' https://max90-rgb.github.io/interactive-photo-gallery/'>Check it out</a>", "<a href=' https://max90-rgb.github.io/wheel-of-success/'>Check it out</a>", "<a href='https://max90-rgb.github.io/web-app-dashboard/'>Check it out</a>", "<a href='https://max90-rgb.github.io/startup-employee-directory/'>Check it out</a>"];
const projectImages = ["Images/project1.png", "Images/project2.png", "Images/project3.png", "Images/project4.png", "Images/project5.png", "Images/project6.png"];
const user = document.getElementById("user-field");
const message = document.getElementById("message-field");
const send = document.getElementById("send");


var indexCards = 0;
var oldData; var spanId;

function displayModal(index) {
  indexCards = index;
  const modalHTML = `
      
      <div class="text-container">
      <h2 class="project-name" id="project-name-id">`+ projectTitles[index] +`</h2>
      <img class="project-image" src=`+ projectImages[index] +`>
          <p class="project-desc">`+ projectDescription[index] +`</p>
          <hr />
          <p class="project-link">`+ projectLinks[index] +`</p>
      </div>
      `;
      
      overlay.classList.remove("hidden");
      modalContent.innerHTML = modalHTML;
  }

  modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
});

const varNext = document.querySelector(".modal-forward");
const varBack = document.querySelector(".modal-back");

function projNext() {
    if (indexCards == projectTitles.length-1)
    indexCards = 0;
    else
    indexCards++;
    setTimeout(function(){ displayModal(indexCards); }, 500);
}

function projBack() {
    if (indexCards == 0)
    indexCards = projectTitles.length-1;
    else 
    indexCards--;
    setTimeout(function(){ displayModal(indexCards); }, 500);
}
varNext.addEventListener('click', () => {
  projNext();
});

varBack.addEventListener('click', () => {
  projBack();
  });

function createBurger() {
 var span = document.createElement("span");
    span.setAttribute("id", "icon-burger");
    span.innerHTML = '<svg viewBox="0 0 100 80" width="40" height="40"><rect width="100" height="20"></rect><rect y="30" width="100" height="20"></rect><rect y="60" width="100" height="20"></rect></svg>';
    span.onclick = function () {
        showHideMenu();
      }
      spanId = document.getElementById("icon-burger");
        if (window.matchMedia("(max-width: 768px)").matches) {
          if (spanId == null || typeof(spanId) == 'undefined')
            navDiv.appendChild(span);
        } else if (window.matchMedia("(min-width: 768px)").matches) {
          if (spanId != null && typeof(spanId) != 'undefined')
          {
            oldData = document.getElementById("nav1").lastChild;
            document.getElementById("nav1").removeChild(oldData);
          }
        }
}

function slideUp() {
  navBar.style.transition = "all 0.7s ease-in-out";
  navBar.style.height = "0px";
}
function slideDown() {
  navBar.style.transition = "all 0.7s ease-in-out";
  navBar.style.height = "200px";
}

function showHideMenu() {
  if (navBar.style.height === "0px")  
  slideDown();
  else 
  slideUp();
}

function showHideNav() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    navBar.style.height = "0px";
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    navBar.style.height = "auto";
  }
}

send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
       alert("Please fill out user and message fields");
   } else if (user.value === "") {
       alert("Please fill out user field before sending");
   } else if (message.value === "") {
       alert("Please fill out message field before sending");
   } else {
        alert(`Message successfully sent to: ${user.value}`);
   }
});

window.addEventListener("resize", createBurger);
window.addEventListener("load", createBurger);
window.addEventListener("load", showHideNav);
window.addEventListener("resize", showHideNav);



