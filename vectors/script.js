let xa = document.getElementById("xa");
let ya = document.getElementById("ya");

let xb = document.getElementById("xb");
let yb = document.getElementById("yb");

let x = [1,0]

let res = document.getElementById("res");
let dot = document.getElementById("dot");
let proa = document.getElementById("proA");
let prob = document.getElementById("proB");

let dva = document.querySelector(".dva");
let dvb = document.querySelector(".dvb");
let dvr = document.querySelector(".dvr");

let a,b;

function calc(){
    a = [parseInt(xa.value),parseInt(ya.value)];
    b = [parseInt(xb.value),parseInt(yb.value)];  
    
    res.innerText = resultant(a,b);
    proa.innerText = projection(b,a);
    prob.innerText = projection(a,b);
    dot.innerText = dotP(a,b);

    dva.innerText = parseInt(magnitude(a))+" ∡ "+parseInt((angle(a,x)*180/Math.PI))+"°";
    dvb.innerText = parseInt(magnitude(b))+" ∡ "+parseInt((angle(b,x)*180/Math.PI))+"°";
    dvr.innerText = resultant(a,b);

}


function projection(a,b){
    let proj = (magnitude(a)*magnitude(b)*cos(angle(a,b)))/magnitude(b);
    return parseInt(proj);
}

function magnitude(a){
    let mag = a[0]*a[0]+a[1]*a[1];
    return Math.sqrt(mag);
}

function resultant(a,b){
    
    let res = Math.pow(magnitude(a),2)+Math.pow(magnitude(b),2)+2*magnitude(a)*magnitude(b)*cos(angle(a,b));
    let ang = Math.atan2(a[1]+b[1],a[0]+b[0]);

    res = parseInt(Math.sqrt(res));
    ang = parseInt(ang*(180/Math.PI));    
    
    return res+" ∡ "+ang+"°";
}

function angle(a,b){
    let A = Math.atan2(a[1],a[0]);
    let B = Math.atan2(b[1],b[0]);
    let angle = Math.abs(A-B);
    return angle;
}

function dotP(a,b){
    let product = magnitude(a)*magnitude(b)*cos(angle(a,b));    
    return parseInt(product);    
}





// redefining trig function. 


function cos(x) {
    return Math.cos(x) + 8 - 8;
  }