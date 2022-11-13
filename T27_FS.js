const btnClick = document.querySelector("#id_btn")
const btnChangeMe = document.querySelector("#btn_changeMe")
let timeON = 0;

btnClick.addEventListener("click", ()  =>  {
    
    let userInput = document.querySelector("#id_input").value    
  if(!timeON){    
    if(!(isNaN(userInput))  && userInput !="") {
    document.querySelector("#id_span").innerHTML =userInput;
    document.querySelector("#id_input").value = Number(userInput)+10;
    document.querySelector("#id_span").style.color= "rgb(57, 157, 65)";   
    }else{
        timeON = 1;
        document.querySelector("#id_input").value = "";        
        myInterval = setInterval(blinkMsg ,250);        
        stopTime= setTimeout(stopSetTime,1500)        
    }
  }  
})

btnChangeMe.addEventListener("click", ()  =>  {     
    document.querySelector("#id_h1").innerHTML = "Have a nice day.";
})

function blinkMsg(){     
    let blink = document.querySelector("#id_input");   
    document.querySelector("#id_input").placeholder = "Enter Only Number.";
    blink.style.background = blink.style.background == "white" ? "rgb(145, 240, 145)" : "white";     
}
function stopSetTime(){
    clearInterval(myInterval);
    document.querySelector("#id_input").placeholder = ""; 
    document.querySelector("#id_input").style.background = "white";  
    timeON = 0;   
}