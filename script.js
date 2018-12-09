document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id ="helloText">Click Enter to start</div>');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/pig.png" id="pig">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src="img/orange.png" id="orange">');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="timerObj"></div>');
document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="scoreObj"></div>');
var helloText = document.getElementById('helloText');
var mouseListener = function(event){mouseMoveFunc(event)};
var orange = document.getElementById('orange');
var scoreObj = document.getElementById('scoreObj');
var score = 0 ;
var pig = document.getElementById('pig');
var minY = 192;
var maxY = 750;
var intervalid;
var timerObj = document.getElementById('timerObj');
timerObj.style.display = 'none';

helloText.style.display = 'block';
helloText.style.textAlign = 'center';
helloText.style.fontSize = 72 + 'pt';
pig.style.position = 'fixed';
orange.style.position = 'fixed';
scoreObj.style.display = 'none';
orange.style.display = 'none';
pig.style.display = 'none';
spawnOrange();
setScore(0);


function enterListener(event){
	startGame(event);
}

function startGame(event){
	if(event.keyCode == 13){
		score = 0;
		setScore(0);
		helloText.style.display = 'none';
		scoreObj.style.display = 'inline-block';
		orange.style.display = 'block';
		pig.style.display = 'block';
		document.removeEventListener('keydown',enterListener);
		document.addEventListener('mousemove',mouseListener);
		spawnOrange();
		timerObj.style.display = 'inline-block'
		timer = 15;
		setTimer(timer);
	}
}

intervalid=setInterval(function(){
	cntdwn();},1000
);

function cntdwn(){
	timer-=1;
	setTimer(timer);
	if(timer==0){
		clearInterval(intervalid);
		document.removeEventListener('mousemove',mouseListener);
		helloText.innerHTML="The end, score:"+score+ ". <br> Click Enter to restart.";
		helloText.style.display = 'block';
		pig.style.display = 'none';
		orange.style.display = 'none';
		scoreObj.style.display = 'none';
		timerObj.style.display = 'none';
		document.addEventListener('keydown',enterListener);
	}
}

function setTimer(timeToSet){
	console.log(timer);
	timerObj.innerHTML = "Timer: "+ timeToSet;
}

function spawnOrange(){
	orange.style.left=Math.random()*(window.innerWidth-128)+'px';
	orange.style.top=Math.random()*(window.innerHeight-128)+'px';
}


function setScore(scoreToSet){
	scoreObj.innerHTML = "Score: " + scoreToSet;
}

function checkCollision(){
	if (Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2)+Math.pow(pig.offsetTop-orange.offsetTop,2)) <128){
		spawnOrange();
		score++;
		setScore(score);
	}
}

 function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + 'px';
	pig.style.top=event.clientY - 64 + 'px';
	console.log(event.clientY);
	if(event.clientY < minY){
		pig.style.top=minY + 'px';	
	}
	if(event.clientY > maxY){
		pig.style.top=maxY + 'px';	
	}
	checkCollision();
}

// document.addEventListener("mousemove", mouseListener);
document.addEventListener("keydown",enterListener);
