console.log("First:", Date.now());
var outputDiv = document.getElementById("dinoContainer");


function makeDOM(xhrData) {
	var dinosaurString = "";
	console.log("buildingDom:", Date.now());
	for (let i = 0; i < xhrData.dinosaurs.length; i++) {
		currDino = xhrData.dinosaurs[i];
		dinosaurString += `
			<div class="col-sm-6 col-md-4">
    			<div class="thumbnail">
      				<img src="${currDino.url}" alt="...">
      				<div class="caption">
        				<h3>${currDino.name}</h3>
        				<p>The ${currDino.type} who eats ${currDino.food}</p>
      				</div>
   				</div>
  			</div>`;
	}
	outputDiv.innerHTML = dinosaurString;
}

function execute() {
	console.log("Executing:", Date.now());
    var data = JSON.parse(this.responseText);
    makeDOM(data);
};

function fail() {
    console.log("It failed");
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", execute);
myRequest.addEventListener("error", fail);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();

console.log("Last:", Date.now());
