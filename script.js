var bodyDiv = document.getElementById("body-wrapper");

function addDiv() {
    var newDiv = document.createElement("div");
    newDiv.classList.add('body-entry');
    var newUl = document.createElement("ul");
    var link = document.createElement("li");
    var linkText = document.createTextNode(document.getElementById("linkName").value);
    var desc = document.createElement("li");
    var descText = document.createTextNode(document.getElementById("desc").value);
}