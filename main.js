var myImage = document.querySelector('img');
myImage.onclick = function() {
   var mySrc=myImage.getAttribute('src');
    if(mySrc === 'images/acer.jpg'){
        myImage.setAttribute('src', 'images/acerr.jpg');
    } else {
        myImage.setAttribute('src', 'images/acer.jpg');
    }
        
    
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Enter your name ');
	localStorage.setItem('name' , myName);
	myHeading.innerHTML = 'Acer Predator Helios 300 is cool, ' + myName;
	}

if(!loaclStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Acer Predator Helios 300  , ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}



