//colors to choose from

//returns an amount of random colors to array
function markerChallenge(num){
let markerColors = ["red","blue","yellow","cyan","purple","pink","orange","green",                        "black","brown","gray"]
let markers = []  
for (i=0; i < num; i++){
  let color = Math.floor(Math.random() * markerColors.length);
  //retries the process if undefined is selected in the array
  if (markerColors[color] == undefined){
    i--
    continue;
  }
  //adds the colors to the array
  markers.push(markerColors[color]);
  //removes a color chosen
  delete markerColors[color];

}
//returns an array of colors
return markers;
}

//display the colors chosen
function displayColors(markers){
  let i = 1;
  for (colors of markers){
    console.log(i, colors);
    i++
  }
}

//how many markers and colors
let markerTotal = 3;
let yourColors = markerChallenge(markerTotal);

//display output
console.log("You have chosen", markerTotal, "markers");
console.log("The colors are:");
displayColors(yourColors);
