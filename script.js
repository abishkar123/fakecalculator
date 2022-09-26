///grap all the bottom as in array
/// loop tha array and add event listener to each button
/// when the button is clicked, get the butoon's value and store in global variable
// grap the display element
// add the value to the display element 


// grap the all buttons
const buttons = document.querySelectorAll(".btn");

const displayElm= document.querySelector(".display");
const buttonArray = Array.from(buttons);
let strToDisplay="";
const operators =["%", "/", "*", "-", "+"]
let lastOperato="";
const audio = new Audio ("aa.wav")
buttonArray.map((btn)=>{
     btn.addEventListener('click', ()=> {
        const val= btn.innerText;

        displayElm.style.background = "";
        displayElm.style.color="black";
        displayElm.classList.remove("prank");

        if (val === "AC"){
            strToDisplay ="";
            display();
            return;

        }
         
        if (val=== "C"){
            strToDisplay =strToDisplay.slice(0, -1);
            return display (strToDisplay);
        }
        
        if (val === '='){
            const lastChar = strToDisplay [strToDisplay.length-1];

            if (operators.includes(lastChar)) {
                strToDisplay=strToDisplay.slice (0, -1);
            }
            console.log(lastChar, "sja");
            return total();
        }

        if (operators.includes(val)){
            if(!strToDisplay){
                return;
            }
        }
        if (operators.includes(val)) {  //overwrites the last character if last value is operator
            const lastChar = strToDisplay [strToDisplay.length-1];

            if (operators.includes(lastChar)) {
                strToDisplay=strToDisplay.slice (0, -1);
            }
            lastOperato = val;
        }

        if (val=== ".") {
            if (lastOperato){
                const operatorIndex = strToDisplay.lastIndexOf(lastOperato);
                const lastNumberSet = strToDisplay.slice(operatorIndex + 1);

                if (lastNumberSet.includes(".")) {
                    return;
                }
                console.log(operatorIndex);
            }
        }

        if(!lastOperato && strToDisplay.includes(".")){
            return;
        }
       

    //    strToDisplay = strToDisplay + val
    strToDisplay += val;
    display(strToDisplay);
    });
});

const display =(str)=> {
    displayElm.innerText= str || "0.00";

};

const total =()=> {
const extra = randomNumber();
if (extra > 0){
    displayElm.style.background="red";
    displayElm.style.color="white";
    displayElm.classList.add("prank")
    audio.play();

}
const ttl = eval(strToDisplay) + extra; //eval operates the operators for you
display(ttl);
strToDisplay= ttl;
strToDisplay= ttl.toString();
};

const randomNumber = () =>{
    const num = Math.round(Math.random()* 10);
    return num < 4 ? num: 0 ;
};
