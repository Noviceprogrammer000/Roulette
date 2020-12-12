var ko = 1000;
var valuebetted = 0;
var logging = document.getElementById('log-sub');
var x = document.getElementById("coins");
x.innerHTML = ko;
var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

var i;
for (i = 0; i < numbers.length; i++) {
  numbers[i] * 18;
}

(function() {
  const wheel = document.querySelector('.resize');
  const startButton = document.querySelector('.bild');
  let deg = 0;

  startButton.addEventListener('click', () => {

    startButton.style.pointerEvents = 'none';
    
    deg = Math.floor(5000 + Math.random() * 5000);
    
    wheel.style.transition = 'all 10s ease-out';
   
    wheel.style.transform = `rotate(${deg}deg)`;
 
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {

    wheel.classList.remove('blur');

    startButton.style.pointerEvents = 'auto';
  
    wheel.style.transition = 'none';
  
    const actualDeg = deg % 360;

    wheel.style.transform = `rotate(${actualDeg}deg)`;
      console.log(deg);
      
      
  });
})();


/* this works */
function myFunction(){

document.getElementById('log-sub').innerHTML = " You betted " + valuebetted + " You can no longer change your bet, goodluck!";

}


/* needs work only runs once!
function SaveFunction(){
  var set = document.querySelector('.betting-flex').value;
    if(set <= ko){
console.log("you saved " + set);
valuebetted = set;
document.querySelector('.betting-flex').value = '';
logging.innerHTML = " You betted " + valuebetted;
x.innerHTML = ko - set;
        return;
}
 else{
    logging.value = '';
    alert("insuffcient funds")
     
 }
return;}


*/

 