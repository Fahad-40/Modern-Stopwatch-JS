let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let resetBtn = document.querySelector("#reset");

let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

startBtn.addEventListener("click" , () => {
timer = true;
stopWatch();
})

stopBtn.addEventListener("click" , () => {
timer = false;
});

 let displayHr = document.querySelector("#hr");
 let displayMin = document.querySelector("#min");
 let displaySec = document.querySelector("#sec");
 let displayCount = document.querySelector("#count");

resetBtn.addEventListener("click" , () => {
    let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

displayHr.innerHTML = "00";
displayMin.innerHTML = "00";
displaySec.innerHTML = "00";
displayCount.innerHTML = "00";
})


























// let hour = 0;
// let min = 0;
// let sec = 0;
// let count = 0;

// let Timer = false;

// startBtn.addEventListener("click",() => {
//     Timer = true;
//     stopWatch();
// });

// stopBtn.addEventListener("click", () => {
//     Timer = false;
// });

// let displayHr = document.querySelector("#hr");
// let displayMin = document.querySelector("#min");
// let displaySec = document.querySelector("#sec");
// let displayCount = document.querySelector("#count");

// resetBtn.addEventListener("click", function () {
//     Timer = false;
//     hour = 0;
//     min = 0;
//     sec = 0;
//     count = 0;

//     displayHr.innerHTML = "00";
//     displayMin.innerHTML = "00";
//     displaySec.innerHTML = "00";
//     displayCount.innerHTML = "00";
// });

// function stopWatch() {

//     if (Timer) {
//         count++;

//         if (count == 100) {
//             sec++;
//             count = 0;
//         }
//         if (sec == 60) {
//             min++;
//             sec = 0;
//         }
//         if (min == 60) {
//             hour++;
//             min = 0;
//             sec = 0;
//         }

//         let hrString = hour;
//         let secString = sec;
//         let minString = min;
//         let countString = count;
        
//         if (hrString < 10) {
//             hrString = "0" + hrString;
//         }
//         if (minString < 10) {
//             minString = "0" + minString;
//         }
//         if (secString < 10) {
//             secString = "0" + secString;
//         }
//         if (countString < 10) {
//             countString = "0" + countString;
//         }

//         displayHr.innerHTML = hrString;
//         displayMin.innerHTML = minString;
//         displaySec.innerHTML = secString;
//         displayCount.innerHTML = countString;

//         setTimeout(stopWatch, 10);

//     }
// }



