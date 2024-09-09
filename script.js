let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() =>{
    let currtym = new Date();

    hrs.innerHTML = (currtym.getHours()<10?"0":"") + currtym.getHours();
    min.innerHTML = (currtym.getMinutes()<10?"0":"") + currtym.getMinutes();
    sec.innerHTML = (currtym.getSeconds()<10?"0":"") + currtym.getSeconds();
},1000); 

