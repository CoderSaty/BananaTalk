const transalateButton = document.querySelector("#transalateButton");
const userMessage = document.querySelector("#userMessage");
const translatedMessage = document.querySelector("#translatedMessage");
// function errorHandler(error) {
//     console.log("Error Occured", error);
// }
transalateButton.addEventListener("click", () => {
    // translatedMessage.innerText = userMessage.value;
    var url = "https://api.funtranslations.com/translate/minion.json";
    // var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

    url = url + "?text=" + userMessage.value;
    fetch(url).then(res => res.json()).then(j => translatedMessage.innerText = j.contents.translated
    ).catch(error => {
        console.log(error);
        alert("Server Down Try after some time.")
    });
    // fetch(url).then(function response(res) { return res.json() }).then(function ouput(j) { console.log(j) });
});

// function output() {
//     console.log("Hello World");
// }
// transalateButton.addEventListener("click", output);


// transalateButton.addEventListener("click",
//     function output() {
//         console.log("Hello World");
//         document.body.style.backgroundColor = "#000";
//     });