function start(){

navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ilVH0ndPr3/model.json", modelReady);

}

function modelReady(){

    console.log("Model Ready")
    classifier.classify(gotResults);

}

function gotResults(error, results){

if(error){

console.error(error);

}
else{

console.log(results)

randomNumberR = Math.floor(Math.random()*255) + 1;
randomNumberG = Math.floor(Math.random()*255) + 1;
randomNumberB = Math.floor(Math.random()*255) + 1;

document.getElementById("voiceResult").innerHTML = results[0].label;
document.getElementById("voiceAccuracy").innerHTML = (results[0].confidence*100).toFixed(2) + "%";

document.getElementById("voiceResult").style.color = "rgb( "+randomNumberR+","+randomNumberG+", "+randomNumberB+")";
document.getElementById("voiceAccuracy").style.color = "rgb( "+randomNumberR+","+randomNumberG+", "+randomNumberB+")";



}


img1 = document.getElementById('alien1');
img2 = document.getElementById('alien2');
img3 = document.getElementById('alien3');
img4 = document.getElementById('alien4');

if(results[0].label == "Thanos Snap"){

    img1.src = "aliens-01.gif";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";

}
else if(results[0].label == "The Butler Clap"){

    img1.src = "aliens-01.png";
    img2.src = "aliens-02.gif";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.png";

}
else if(results[0].label == "The Godly Bell"){

    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.gif";
    img4.src = "aliens-04.png";

}
else{

    img1.src = "aliens-01.png";
    img2.src = "aliens-02.png";
    img3.src = "aliens-03.png";
    img4.src = "aliens-04.gif";

}

}

