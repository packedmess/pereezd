var feedbackOpen = document.querySelectorAll(".modal--feedback-open");
var requestOpen = document.querySelectorAll(".modal--request-open");
var feedbackPopup = document.querySelector(".modal--feedback");
var requestPopup = document.querySelector(".modal--request");
var feedbackClose = feedbackPopup.querySelectorAll(".modal-close");
var requestClose = requestPopup.querySelectorAll(".modal-close");

for(let i = 0; i < feedbackOpen.length; i++) {
feedbackOpen[i].addEventListener("click", function (evt) {
evt.preventDefault();
feedbackPopup.classList.add("modal-show");
});
};

for(let i = 0; i < requestOpen.length; i++) {
requestOpen[i].addEventListener("click", function (evt) {
evt.preventDefault();
requestPopup.classList.add("modal-show");
});
};

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (feedbackPopup.classList.contains("modal-show")) {
feedbackPopup.classList.remove("modal-show");
}
}
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
evt.preventDefault();
if (requestPopup.classList.contains("modal-show")) {
requestPopup.classList.remove("modal-show");
}
}
});

for(let i = 0; i < feedbackClose.length; i++) {
feedbackClose[i].addEventListener("click", function (evt) {
evt.preventDefault();
feedbackPopup.classList.remove("modal-show");
});
};

for(let i = 0; i < requestClose.length; i++) {
requestClose[i].addEventListener("click", function (evt) {
evt.preventDefault();
requestPopup.classList.remove("modal-show");
});
};