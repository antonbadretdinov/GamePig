document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/pig.png" id="pig">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/orange.png" id="orange">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="scoreObj"></div>');
var mouseListener = function(event){mouseMoveFunc(event)};
var orange = document.getElementById('orange');
var scoreObj = document.getElementById('scoreObj');
scoreObj.style.textAligh = "center";
var score = 0 ;
var pig = document.getElementById('pig');
pig.style.position = 'fixed';
orange.style.position = 'fixed';
spawnOrange();
function spawnOrange(){
	orange.style.left=Math.random()*(window.innerWidth-128)+'px';
	orange.style.top=Math.random()*(window.innerHeight-128)+'px';
}
setScore(0);
function setScore(scoreToSet){
	scoreObj.innerHTML = "Score: " + scoreToSet;
}
function checkCollision(){
	console.log("aa");
	if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+Math.pow(pig.offsetTop-orange.offsetTop,2)) <128){
		spawnOrange();
		score++;
		setScore(score);
	}
}
 function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	checkCollision();
}

document.addEventListener("mousemove", mouseListener);
