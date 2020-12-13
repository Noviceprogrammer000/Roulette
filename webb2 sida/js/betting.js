var ko = 1000;
var valuebetted = 0;
var logging = document.getElementById('log-sub');
var x = document.getElementById("coins");
x.innerHTML = ko;
   
function NumberFunction(){
 numberbet = document.querySelector('.Number-flex').value;
    logging.innerHTML = " You chose number " + numberbet;
    document.querySelector('.Number-flex').value = '';
   
} 



(function() {
  const wheel = document.querySelector('.resize');
  const startButton = document.querySelector('.bild');
  let deg = 0;

     
   

    
  startButton.addEventListener('click', () => {
var predict = Math.floor( Math.random() * 20);
     var result = predict * 18;
    var angle = 1800;
    deg = result + angle;
 console.log(predict);
    startButton.style.pointerEvents = 'none';
    
    wheel.style.transition = 'all 10s ease-out';
   
    wheel.style.transform = `rotate(${deg}deg)`;
 

      
      
  });
    
    

  wheel.addEventListener('transitionend', () => {

    
    wheel.classList.remove('blur');

    startButton.style.pointerEvents = 'auto';
  
    wheel.style.transition = 'none';
  
    const actualDeg = deg % 360;

    wheel.style.transform = `rotate(${actualDeg}deg)`;
    
       if(NumberFunction() == predict){
        alert("Congrats you won!");
        valuebetted = valuebetted * 2;
        x.innerHTML  = valuebetted;
        
    }
    else{
        logging.innerHTML = "you lost";
    }
     
 
  });
})();

 

/* this works */
function myFunction(){

document.getElementById('log-sub').innerHTML = " You betted " + valuebetted + " You can no longer change your bet, goodluck!";

}
function SaveFunction(){
  var set = document.querySelector('.betting-flex').value;
    if(set <= ko){
console.log("you saved " + set);
valuebetted = set;
document.querySelector('.betting-flex').value = '';
logging.innerHTML = " You betted " + valuebetted;
x.innerHTML = ko - set;
        
}
 else{
    logging.value = '';
    alert("insuffcient funds")
     
 }
return;}



 