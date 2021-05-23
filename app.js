
// Selecting the html elements
const transalateButton = document.querySelector("#transalateButton");
const userMessage = document.querySelector("#userMessage");
const translatedMessage = document.querySelector("#translatedMessage");


// function errorHandler(error) {
//     console.log("Error Occured", error);
// }
transalateButton.addEventListener("click", () => {
    var url = "https://api.funtranslations.com/translate/minion.json";
    url = url + "?text=" + userMessage.value;
    fetch(url).then(res => res.json()).then(j => translatedMessage.innerText = j.contents.translated
    ).catch(error => {
        console.log(error);
        alert("Server Down Try after some time.")
    });
    // another way of doing the fetch call
    // fetch(url).then(function response(res) { return res.json() }).then(function ouput(j) { console.log(j) });
});

// Another way
// function output() {
//     console.log("Hello World");
// }
// transalateButton.addEventListener("click", output);

// another way
// transalateButton.addEventListener("click",
//     function output() {
//         console.log("Hello World");
//         document.body.style.backgroundColor = "#000";
//     });