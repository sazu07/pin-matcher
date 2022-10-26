const button = document.getElementById('sub_mit')
button.setAttribute('disabled','')
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

    button.removeAttribute('disabled')
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

document.getElementById('sub_mit').addEventListener('click', function(){

    const matchPin = document.getElementById('show-pin').value;
    console.log(matchPin)
    const typePin = document.getElementById('typed-number').value;
    console.log(typePin);

    let success =  document.getElementById('success');
    let fail =  document.getElementById('fail');
    if (matchPin==typePin) {
        success.style.display='block'
        fail.style.display='none'
     
    }else {
        
        success.style.display='none'
        fail.style.display='block'
    }

})