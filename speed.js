const prompt = require("prompt-sync")({sigint:true}); 
let carSpeed = (Number(prompt("Enter card speed: ")));
let points = Math.floor((carSpeed - 70) / 5)
function detectSpeed(carSpeed, points){ 
if(carSpeed <= 70){
return input = "OK"
} else if(points > 12){
return input = "license suspended"
} else {
return input = points
}
}
console.log(detectSpeed(carSpeed, points))