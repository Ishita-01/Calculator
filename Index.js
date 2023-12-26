var input = document.getElementById('input');
buttons = document.querySelectorAll('button');
var inputValue='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
     buttonText = e.target.innerText;
     console.log('button text is', buttonText);

     if(buttonText =='x'){
        buttonText = '*';
        inputValue += buttonText;
        input.value= inputValue;
     }
     else if(buttonText=='AC'){
       inputValue = "";
       input.value= inputValue;
     }
     else if(buttonText=='='){
        
        input.value= eval(inputValue);
     }
     else{
        inputValue += buttonText;
        input.value = inputValue;
     }
    })
}