var uname = document.getElementById("uname");
var vdo = document.getElementById("fr-vdo");
var abme = document.getElementById("dpbn");
var abhd = document.getElementById("abhd");

function nameView() {
    uname.style.visibility = "visible";
    uname.style.right = "100px"
}


function nameHide() {
    uname.style.visibility = "hidden";
    uname.style.right = "0px"
}

console.log(uname.innerHTML)

function changePlayer() {
    vdo.src = "https://www.youtube.com/embed/mnxGKKrm6Ts"
}

function changePlayer1() {
    vdo.src = "https://www.youtube.com/embed/CIgwz64YfqE"
}

function vid1() {
    vdo.src = "https://www.youtube.com/embed/bIw-mu4El1Y"
}

function vid2() {
    vdo.src = "https://www.youtube.com/embed/-kuSUGFF1EE"
}

function vid3() {
    vdo.src = "https://www.youtube.com/embed/YhkBzK6_jDc"
}

function vid4() {
    vdo.src = "https://www.youtube.com/embed/A0a5IhHnKjY"
}

function vid5() {
    vdo.src = "https://www.youtube.com/embed/P4IF6k_SOwY"
}

function vid6() {
    vdo.src = "https://www.youtube.com/embed/6sVnjMGQ5WA"
}

function aplt() {
    window.open('https://www.youtube.com/channel/UC-ZGgGUqBBdFV4o7rCOsL3g', '_blank');
}

function ch() {
    window.open('https://www.youtube.com/channel/UCgPnYaqjILRiQf8myp0QX_w', '_blank');
}


function prfl() {
    window.open('https://www.facebook.com/mj8303987/', '_blank');
}

var collapse = true;


function abDrpdn() {
    if (collapse == true) {
        abme.style.height = "450px";
        abme.style.width = "410px";
        abme.style.borderRadius = "30px";
        abme.style.right = "100px";
        abhd.style.visibility = "visible";
        collapse = false
    } else {
        abme.style.height = "50px";
        abme.style.width = "50px";
        abme.style.borderRadius = "50px";
        abme.style.right = "460px";
        abhd.style.visibility = "hidden";
        collapse = true
    }

}
(function() {
    var time = new Date(),
        second = time.getSeconds() / 60 * 360,
        minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 * 6,
        hour = time.getHours() / 12 * 360 + time.getMinutes() / 60 * 30,
        animation = [
            "@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second + 360) + "deg);}}",
            "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
            "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
        ].join("");
    document.querySelector("#clock-animate").innerHTML = animation;
})();