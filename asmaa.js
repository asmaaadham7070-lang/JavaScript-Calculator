const calculator=document.getElementById("calculator")
const display=document.getElementById("display")

calculator.addEventListener('click',(e)=>{
if (e.target.nodeName === "BUTTON") {
switch(e.target.textContent){
    case'C':
    clear()
    break;

    case'DEL':
    deleteOnValue()
    break;

    case'=':
evaluate()
break;
default:
    addToDisplayArea(e.target.textContent)
}
}
}
)
function deleteOnValue(){
let currentContent=display.textContent
display.textContent=currentContent.substring(0,
    currentContent.length-1
)
}

function evaluate(){
    display.textContent=eval( display.textContent)

}


function clear(){
    display.textContent ="";
}
function addToDisplayArea(value){
    display.textContent = display.textContent + value
}


    
 

    
