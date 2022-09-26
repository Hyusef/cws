function collatz(n) {
  let arr = [];
  let i = n;
  while (i > 1) {
    if (i % 2 === 0) {
      i = i / 2;
    } else {
      i = 3 * i + 1;
    }
    arr.push(i);
  }
  return arr.length + 1;
}

/* ------------------------------------------------------- */
function inAscOrder(arr) {
  return arr.toString() === arr.sort((a, b) => a - b).toString();
}

/* ------------------------------------------------------- */

function isIsogram(str) {
  let uniq = [...new Set(str.toLowerCase())];
  return str.length === uniq.length;
}
/* ------------------------------------------------------- */

function findUniq(arr) {
  const dupl = arr.filter((e) => e !== arr[0]);
  return dupl.length == 1 ? +dupl.join("") : arr[0];
}
/* ------------------------------------------------------- */

function findShort(s) {
  return s
    .split(" ")
    .map((e) => e.length)
    .sort((a, b) => a - b)
    .shift();
}

/* ------------------------------------------------------- */

const last = (xs) => (xs.length ? xs.pop() : null);

/* ------------------------------------------------------- */

function maskify(cc) {
  return cc.substr(0, cc.length - 4).replace(/\w/g, "#") + cc.slice(-4);
}

/* ------------------------------------------------------ */
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((e) => !values_list.includes(e));
};
/* ------------------------------------------------------ */
function longest(s1, s2) {
  return Array.from(new Set((s1 + s2).split("")))
    .sort()
    .join("");
}
/* ------------------------------------------------------ */
function min(arr, toReturn) {
  return toReturn === "index"
    ? arr.indexOf(Math.min(...arr))
    : Math.min(...arr);
}

/* ------------------------------------------------------ */
function switcheroo(x) {
  return x
    .split("")
    .map((e) => (e == "a" ? "b" : e == "b" ? "a" : "c"))
    .join("");
}

/* ------------------------------------------------------ */
function gordon(a) {
  return (
    a
      .split(" ")
      .join("!!!! ")
      .replace(/[aA]/g, "@")
      .replace(/[aeiou]/g, "*")
      .toUpperCase() + "!!!!"
  );
}

/* ------------------------------------------------------ */

function generateShape(integer) {
  let str = "";
  for (let x = 0; x < integer; x++) {
    for (let y = 0; y < integer; y++) {
      str += "+";
    }
    str += "\n";
  }
  return str.trim();
}
/* ------------------------------------------------------ */
function toAcronym(inp) {
  return inp
    .split(" ")
    .map((e) => e[0])
    .join("")
    .toUpperCase();
}

/* ------------------------------------------------------ */

function stantonMeasure(arr) {
  return arr.filter((x) => x === arr.filter((x) => x == 1).length).length;
}

/* ------------------------------------------------------ */

function XO(str) {
  const s = str.toLowerCase().split("");
  return s.filter((x) => x == "x").length === s.filter((x) => x == "o").length;
}

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

/* ------------------------------------------------------ */

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();

  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}
/* ------------------------------------------------------ */

function tidyNumber(n) {
  return !n
    .toString()
    .split("")
    .some((e, i, a) => e < a[i - 1]);
}
/* ------------------------------------------------------ */

function fireFight(s) {
  return s.replace(/Fire/g, "~~");
}
/* ------------------------------------------------------ */
function hasUniqueChars(str) {
  return str == [...new Set(str.split(""))].join("");
}

/* ------------------------------------------------------ */
function getCount(str) {
  let s = str.match(/[AEIOUaeiou]/g);
  return s ? s.length : 0;
}
/* ------------------------------------------------------ */
function consecutive(arr, a, b) {
  return (
    arr.indexOf(a) === arr.indexOf(b) - 1 ||
    arr.indexOf(a) === arr.indexOf(b) + 1
  );
}
/* ------------------------------------------------------ */

function triangular(n) {
  let s = 0;
  let b = n;
  while (b > 0) {
    s += b;
    b--;
  }
  return n <= 0 ? 0 : s;
}

/* ------------------------------------------------------ */

function nbDig(n, d) {
  return Array.from({ length: n + 1 }, (_, i) => i * i)
    .join("")
    .match(new RegExp(d, "g")).length;
}

/* ------------------------------------------------------ */

function digits(n) {
  return n.toString().length;
}

/* ------------------------------------------------------ */
function evenNumbers(arr, n) {
  return arr.filter((e) => e % 2 === 0).slice(-n);
}
/* ------------------------------------------------------ */
function divisibleByThree(str) {
  //No modulus allowed
  return Number.isInteger(str.split("").reduce((a, b) => +a + +b) / 3);
}

function collatz(n) {
  let arr = [];
  let i = n;
  while (i > 1) {
    if (i % 2 === 0) {
      i = i / 2;
    } else {
      i = 3 * i + 1;
    }
    arr.push(i);
  }
  return arr.length + 1;
}

/* ------------------------------------------------------- */
function inAscOrder(arr) {
  return arr.toString() === arr.sort((a, b) => a - b).toString();
}

/* ------------------------------------------------------- */

function isIsogram(str) {
  let uniq = [...new Set(str.toLowerCase())];
  return str.length === uniq.length;
}
/* ------------------------------------------------------- */

function findUniq(arr) {
  const dupl = arr.filter((e) => e !== arr[0]);
  return dupl.length == 1 ? +dupl.join("") : arr[0];
}
/* ------------------------------------------------------- */

function findShort(s) {
  return s
    .split(" ")
    .map((e) => e.length)
    .sort((a, b) => a - b)
    .shift();
}

/* ------------------------------------------------------- */

const last = (xs) => (xs.length ? xs.pop() : null);

/* ------------------------------------------------------- */

function maskify(cc) {
  return cc.substr(0, cc.length - 4).replace(/\w/g, "#") + cc.slice(-4);
}

/* ------------------------------------------------------ */
Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((e) => !values_list.includes(e));
};
/* ------------------------------------------------------ */
function longest(s1, s2) {
  return Array.from(new Set((s1 + s2).split("")))
    .sort()
    .join("");
}
/* ------------------------------------------------------ */
function min(arr, toReturn) {
  return toReturn === "index"
    ? arr.indexOf(Math.min(...arr))
    : Math.min(...arr);
}

/* ------------------------------------------------------ */
function switcheroo(x) {
  return x
    .split("")
    .map((e) => (e == "a" ? "b" : e == "b" ? "a" : "c"))
    .join("");
}

/* ------------------------------------------------------ */
function gordon(a) {
  return (
    a
      .split(" ")
      .join("!!!! ")
      .replace(/[aA]/g, "@")
      .replace(/[aeiou]/g, "*")
      .toUpperCase() + "!!!!"
  );
}

/* ------------------------------------------------------ */

function generateShape(integer) {
  let str = "";
  for (let x = 0; x < integer; x++) {
    for (let y = 0; y < integer; y++) {
      str += "+";
    }
    str += "\n";
  }
  return str.trim();
}
/* ------------------------------------------------------ */
function toAcronym(inp) {
  return inp
    .split(" ")
    .map((e) => e[0])
    .join("")
    .toUpperCase();
}

/* ------------------------------------------------------ */

function stantonMeasure(arr) {
  return arr.filter((x) => x === arr.filter((x) => x == 1).length).length;
}

/* ------------------------------------------------------ */

function XO(str) {
  const s = str.toLowerCase().split("");
  return s.filter((x) => x == "x").length === s.filter((x) => x == "o").length;
}

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

/* ------------------------------------------------------ */

function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();

  for (var ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}
/* ------------------------------------------------------ */

function tidyNumber(n) {
  return !n
    .toString()
    .split("")
    .some((e, i, a) => e < a[i - 1]);
}
/* ------------------------------------------------------ */

function fireFight(s) {
  return s.replace(/Fire/g, "~~");
}
/* ------------------------------------------------------ */
function hasUniqueChars(str) {
  return str == [...new Set(str.split(""))].join("");
}

/* ------------------------------------------------------ */
function getCount(str) {
  let s = str.match(/[AEIOUaeiou]/g);
  return s ? s.length : 0;
}
/* ------------------------------------------------------ */
function consecutive(arr, a, b) {
  return (
    arr.indexOf(a) === arr.indexOf(b) - 1 ||
    arr.indexOf(a) === arr.indexOf(b) + 1
  );
}
/* ------------------------------------------------------ */

function triangular(n) {
  let s = 0;
  let b = n;
  while (b > 0) {
    s += b;
    b--;
  }
  return n <= 0 ? 0 : s;
}

/* ------------------------------------------------------ */

function nbDig(n, d) {
  return Array.from({ length: n + 1 }, (_, i) => i * i)
    .join("")
    .match(new RegExp(d, "g")).length;
}

/* ------------------------------------------------------ */

function digits(n) {
  return n.toString().length;
}

/* ------------------------------------------------------ */
function evenNumbers(arr, n) {
  return arr.filter((e) => e % 2 === 0).slice(-n);
}
/* ------------------------------------------------------ */
function divisibleByThree(str) {
  //No modulus allowed
  return Number.isInteger(str.split("").reduce((a, b) => +a + +b) / 3);
}
/* ------------------------------------------------------ */
function lastDigit(n, d) {
  return d <= 0
    ? []
    : n
        .toString()
        .slice(-d)
        .split("")
        .map((e) => +e);
}
/* ------------------------------------------------------ */
function overTheRoad(address, n) {
  return address % 2 === 0 ? 2 * n - (address - 1) : 2 * n - (address - 1);
}
/* ------------------------------------------------------ */

function modifyMultiply(str, loc, num) {
  const f = str.split(" ")[loc] + "-";
  return f.repeat(num).slice(0, -1);
}

/* ------------------------------------------------------ */

function stantonMeasure(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      total++;
    }
  }
  return arr.filter((e) => e == total).length;
}
/* ------------------------------------------------------ */
function likes(names) {
  let l = names.length;
  return l == 0
    ? "no one likes this"
    : l == 1
    ? `${names[0]} likes this`
    : l == 2
    ? `${names[0]} and ${names[1]} like this`
    : l == 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : `${names[0]}, ${names[1]} and ${l - 2} others like this`;
}
/* ------------------------------------------------------ */

function dotCalculator(equation) {
  let eq = equation.split(" ");
  let o = eq[1] == "//" ? "/" : eq[1];
  let tot = eval(eq[0].length + o + eq[2].length);
  return Array.from({ length: tot }, () => ".").join("");
}

/* ------------------------------------------------------ */
function sum() {
  let t = 0;
  for (var i in arguments) {
    t += +arguments[i];
  }
  return t;
}
/* ------------------------------------------------------ */

function onePunch(i) {
  return typeof i === "string" && i !== ""
    ? i
        .split(" ")
        .sort()
        .join(" ")
        .replace(/[eaAE]/g, "")
    : "Broken!";
}
/* ------------------------------------------------------ */
function inviteMoreWomen(l) {
  return l.filter(e=>e==-1).length < l.filter(e=>e==1).length 
}
/* ------------------------------------------------------ */
function removeUrlAnchor(url){
  return url.split('#')[0]
}
/* ------------------------------------------------------ */
function removeSmallest(numbers) {
  return numbers.filter((_,i,a)=>i !== numbers.indexOf( Math.min(...numbers)) ) 
}
/* ------------------------------------------------------ */
function highAndLow(numbers){
return `${Math.max(...numbers.split(' ').map(e=>+e))} ${Math.min(...numbers.split(' ').map(e=>+e))}`
}
/* ------------------------------------------------------ */
function hammingDistance (a, b) {
  let t = 0;
  for(let i = 0 ; i < a.length; i++){
   if(a[i] !== b[i]) t++;
  }
	return t;
}
/* ------------------------------------------------------ */
var number = function(busStops){
 return busStops.map(e=>e[0] - e[1]).reduce((a,b)=>a+b)
}

