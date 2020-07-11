

//geting container.
let  Result= document.getElementById("Result");

let  playerChoices= document.getElementById("playerChoices");

let  choices= document.getElementById("choices");

let endResult = document.getElementById("endResult");


//creat element 

playerChoices.innerHTML=`<div id="PlayersChoice">you</div>
                        <div id="Result"></div>
                        <div id="ComputerChoice">com</div>`;


choices.innerHTML=`<i class="far fa-hand-paper fa-2x" id="Paper"></i>
                    <i class="far fa-hand-rock fa-2x" id="Rock"></i>
                    <i class="far fa-hand-scissors fa-2x" id="Scissors"></i>`;
                    
endResult.innerHTML=`<i class="fas fa-redo-alt fa-2x" id="reload" onclick="nocReload()"></i>`;
//this is Numerical result
let result = document.getElementById("result")

//this array choices.
let myArr = ["Paper","Rock","Scissors"];



// this function creating icon choices. 
function creatResult(choices){
    if(choices ==="Paper"){
        return`<i class="far fa-hand-paper fa-2x" id="Paper"></i>`
    }else if (choices ==="Rock"){
        return `<i class="far fa-hand-rock fa-2x" id="Rock"></i>`
    }else{
        return `<i class="far fa-hand-scissors fa-2x" id="Scissors"></i>`
    }
}

// this function creating random choices.
function comChoies(arr){
    let randomNum=parseInt(Math.random()*3)
    return arr[randomNum];
}

//this function works to compare options and announce who is the winner.
let comResult = 0;
let youResult = 0;
function CheckWinner(you,com){
    if(you==="Paper" && com==="Rock"){
        youResult++;
        return "You are a winner"
        
    }else if(you==="Paper" && com==="Scissors"){
        comResult++;
        return "You lose, sucker!"
        
    }else if(you==="Rock" && com==="Paper"){
        comResult++;
        return "You lose, sucker!"
        
    }else if(you==="Rock" && com==="Scissors"){
        youResult++;
        return "You are a winner"
        
    }else if(you==="Scissors" && com==="Paper"){
        youResult++;
        return "You are a winner"
        
    }else if(you==="Scissors" && com==="Rock"){
        comResult++;
        return "You lose, sucker!"
        
    }else if(you==="Rock" && com==="Paper"){
        comResult++;
        return "You lose, sucker!"
        
    }else if(you==="Paper" && com==="Rock"){
        youResult++;
        return "You are a winner"
        
    }else{
        return "You are equal"
    }
}

//this code to adding event to icon.
document.getElementById("Paper").addEventListener("click",function(){
    let a =creatResult("Paper");
    let b =comChoies(myArr);
    let c= creatResult(b);
    let res = CheckWinner("Paper",b)
    result.innerHTML=a +`<h3>${res}</h3>`+ c;
    document.getElementById("Result").innerHTML = comResult + " - "+youResult;
    if(comResult ===5 ||youResult === 5){
        playerChoices.style.display ="none";
        choices.style.display = "none";
        result.style.display = "none";
        if(youResult ===5){
            endResult.innerHTML += `<h1>You are a winner</h1>`;
        }else if (comResult === 5){
            endResult.innerHTML += `<h1>You lose, sucker!</h1>`;
        }else{
            endResult.innerHTML += `<h1>You are equal</h1>`;
        }
        endResult.style.display ="flex"
    }
})
document.getElementById("Rock").addEventListener("click",function(){
    let a =creatResult("Rock");
    let b =comChoies(myArr);
    let c= creatResult(b);
    let res = CheckWinner("Rock",b)
    result.innerHTML=a +`<h3>${res}</h3>`+ c;
    document.getElementById("Result").innerHTML = comResult + " - "+youResult;
    if(comResult ===5 ||youResult === 5){
        playerChoices.style.display ="none";
        choices.style.display = "none";
        result.style.display = "none";
        if(youResult ===5){
            endResult.innerHTML += `<h1>You are a winner</h1>`;
        }else if (comResult === 5){
            endResult.innerHTML += `<h1>You lose, sucker!</h1>`;
        }else{
            endResult.innerHTML += `<h1>You are equal</h1>`;
        }
        endResult.style.display ="flex"
    }
})
document.getElementById("Scissors").addEventListener("click",function(){
    let a =creatResult("Scissors");
    let b =comChoies(myArr);
    let c= creatResult(b);
    let res = CheckWinner("Scissors",b)
    result.innerHTML=a +`<h3>${res}</h3>`+ c;
    document.getElementById("Result").innerHTML = comResult + " - "+youResult;
    if(comResult ===5 ||youResult === 5){
        playerChoices.style.display ="none";
        choices.style.display = "none";
        result.style.display = "none";
        if(youResult ===5){
            endResult.innerHTML += `<h1>You are a winner</h1>`;
        }else if (comResult === 5){
            endResult.innerHTML += `<h1>You lose, sucker!</h1>`;
        }else{
            endResult.innerHTML += `<h1>You are equal</h1>`;
        }
        endResult.style.display ="flex"
    }
})
function nocReload(){
    comResult =0;youResult =0 ;
    document.getElementById("Result").innerHTML = comResult + " - "+youResult;
    endResult.style.display ="none";
    playerChoices.style.display ="flex";
    choices.style.display = "flex";
    result.style.display = "flex";
    endResult.innerHTML =`<i class="fas fa-redo-alt fa-2x" onclick="nocReload()"></i>`
    result.innerHTML ="";
}

