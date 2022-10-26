
function checkPin(){
    let pin = Math.round(Math.random()*10000);
    
    let pinString = pin + '';
    if(pinString.length==4){
        
        return pin;
        
    }else{
        
        return checkPin();
       
    }

}
function generatePin(){
    
   let pin = checkPin();
   let pinInput= document.getElementById('show-pin').value=pin;
  
   
}

document.getElementById('calculator').addEventListener('click', function(event){
    let number = event.target.innerText;
    let calc= document.getElementById('typed-number');
     if(isNaN(number)){
        if (number=='C') {
            calc.value='';
        }
     }else{
       
        let previousClac= calc.value
        let newCalc = previousClac + number;
         calc.value=newCalc
     }

})