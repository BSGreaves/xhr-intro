function execute (){
	console.log("It worked")
};

function fail (){
	console.log("It failed")
};

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", execute);
myRequest.addEventListener("error", fail);
myRequest.open("GET", "dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);
