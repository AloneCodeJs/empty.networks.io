let h2 = document.querySelector("h2");

const BNames = [
    "Element",
    "Short",
    "Shorter",
    "NewName",
    "Daniel",
];

const GNames = [
    "SecondName21",
    "Less",
    "OtherValueasd",
    "Marina",
    "Other",
];

let random1 = Math.floor(Math.random()*BNames.length)
let random2 = Math.floor(Math.random()*GNames.length)

let first = BNames[random1]
let second = GNames[random2]

let result = BNames[random1] + GNames[random2];

newresult = result.split("")
.filter((item, index, array) => array.indexOf(item) === index)
.join("");

let amount = newresult.length

let plus = Math.floor(amount / 1.8 * 10);

let newvariable = `${first} ${plus}% ${second}`;

//if (plus > 100) { h2.innerText = `${first} 100% ${second}` } else { h2.innerText = newvariable }