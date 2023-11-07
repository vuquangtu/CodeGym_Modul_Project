
let cell01 = parseInt(document.getElementById("cell01").value) ;
let cell02 = parseInt(document.getElementById("cell02").value) ;
let A = cell01 + cell02 ;
let S = cell01 - cell02 ;
let M = cell01 * cell02 ;
let D = cell01 / cell02 ;

function addiFunc() {
    document.getElementById("kq").textContent = "Result Division : " + A
    
};
function subtFunc() {
    document.getElementById("kq").textContent = "Result Division : " + S
    
};
function mulFunc() {
    document.getElementById("kq").textContent = "Result Division : " + M
    
};
function diviFunc() {
    document.getElementById("kq").textContent = "Result Division : " + D
    
};