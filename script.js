function ROLL (){
    const num = Math.floor(Math.random()*6)+1;
    document.getElementById("dice").innerText = num;
}

document.getElementById("dice").addEventListener("click",()=>{
    ROLL();
})