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

    if (matchPin=='') {
        let success =  document.getElementById('success');
        success.style.display='none'
        let fail = document.getElementById('fail');
        fail.style.display='none'
    }
    if (matchPin==typePin) {
        let success =  document.getElementById('success');
        success.style.display='block'
     
    }else {
        let fail = document.getElementById('fail');
        fail.style.display='block'
    }

})