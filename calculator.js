let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue='';
for(items of buttons){
    items.addEventListener('click',(e)=>{
       buttontext = e.target.innerText;
        console.log(buttontext)
        if(buttontext == 'X'){
            buttontext ="*";
            screenValue += buttontext
            screen.value = screenValue
        }
        else  if(buttontext == 'C'){
            screenValue="";
            screen.value = screenValue
        }
        else  if(buttontext == '='){
            screen.value = eval(screenValue)
        }
        else{
            screenValue += buttontext;
            screen.value = screenValue;
        }
    })
}