const countTime  = function(){
    const output = document.getElementById("timer");

    if (output.textContent >= 1){
        output.textContent --;
    }	else if(output.textContent = '0'){
        alert("Время кончилось!");
    }
}

setInterval(countTime,1000);