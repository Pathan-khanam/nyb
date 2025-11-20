function sqr(n){
    return n* n;
}
console.log(sqr(5))
console.log(sqr(6))

function number(num){
    function double(){
        return num * 2;
    }
    function triple(){
        return num *4
    }
    function show(){
        console.log("Double:",double());
        console.log("Triple:", triple())
    }
    show();
}
number(10)


//function currying 
const buildURL = protocol => domain => path => `${protocol}://${domain}/${path}`;

const httpsBuilder = buildURL("https");
const googleBuilder = httpsBuilder("google.com");

console.log(googleBuilder("search")); // https://google.com/search
console.log(googleBuilder("maps"));   // https://google.com/maps


const discount = rate => price => price - price * rate;

const tenPercentOff = discount(0.10);
const twentyPercentOff = discount(0.20);

console.log(tenPercentOff(200));   // 180
console.log(twentyPercentOff(150)); // 120


const logger = level => message => console.log(`[${level.toUpperCase()}] ${message}`);

const infoLogger = logger("info");
const errorLogger = logger("error");

infoLogger("Application started");   // [INFO] Application started
errorLogger("Unexpected error");     // [ERROR] Unexpected error


const setStyle = property => value => element => element.style[property] = value;

const setColor = setStyle("color");
const setBackground = setStyle("backgroundColor");

const heading = document.createElement("h1");
heading.textContent = "Hello Currying!";
setColor("blue")(heading);
setBackground("yellow")(heading);

document.body.appendChild(heading);


