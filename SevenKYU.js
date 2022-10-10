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
  return l.filter((e) => e == -1).length < l.filter((e) => e == 1).length;
}
/* ------------------------------------------------------ */
function removeUrlAnchor(url) {
  return url.split("#")[0];
}
/* ------------------------------------------------------ */
function removeSmallest(numbers) {
  return numbers.filter(
    (_, i, a) => i !== numbers.indexOf(Math.min(...numbers))
  );
}
/* ------------------------------------------------------ */
function highAndLow(numbers) {
  return `${Math.max(...numbers.split(" ").map((e) => +e))} ${Math.min(
    ...numbers.split(" ").map((e) => +e)
  )}`;
}
/* ------------------------------------------------------ */
function hammingDistance(a, b) {
  let t = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) t++;
  }
  return t;
}
/* ------------------------------------------------------ */
var number = function (busStops) {
  return busStops.map((e) => e[0] - e[1]).reduce((a, b) => a + b);
};
/* ------------------------------------------------------ */

function giveChange(amount) {
  let arr = [0, 0, 0, 0, 0, 0];
  while (amount >= 0) {
    console.log(amount);
    if (amount >= 100) {
      amount -= 100;
      arr[5]++;
    } else if (amount >= 50 && amount < 100) {
      amount -= 50;
      arr[4]++;
    } else if (amount >= 20 && amount < 50) {
      amount -= 20;
      arr[3]++;
    } else if (amount >= 10 && amount < 20) {
      amount -= 10;
      arr[2]++;
    } else if (amount >= 5 && amount < 10) {
      amount -= 5;
      arr[1]++;
    } else if (amount >= 1 && amount < 5) {
      amount -= 1;
      arr[0]++;
    } else {
      return arr;
    }
  }
}
/* ------------------------------------------------------ */
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(
    Math.sqrt(
      [age1, age2, age3, age4, age5, age6, age7, age8]
        .map((e) => e * e)
        .reduce((a, b) => a + b)
    ) / 2
  );
}
/* ------------------------------------------------------ */
function sc(apple) {
  for (let i = 0; i < apple.length; i++) {
    for (let j = 0; j < apple[i].length; j++) {
      if (apple[i][j] === "B") {
        return [i, j];
      }
    }
  }
}
/* ------------------------------------------------------ 
Really?
*/
function reverseList(arr) {
  return arr.reverse();
}
/* ------------------------------------------------------ */

function dontGiveMeFive(start, end) {
  return Array.from({ length: end - start + 1 }, (e) => (e = start++)).filter(
    (e) => !e.toString().includes(5)
  ).length;
}
/* ------------------------------------------------------ */

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
/* ------------------------------------------------------ */

function findMultiples(int, limit) {
  let arr = [];
  for (let i = 1; i <= limit; i++) if (i % int == 0) arr.push(i);
  return arr;
}

/*------------------------------------------------------*/

function minValue(values) {
  return +[...new Set([...values])].sort().join("");
}
/*------------------------------------------------------*/

function isSameLanguage(list) {
  let t = [];
  for (b of list) {
    t.push(b.language);
  }
  return t.every((e, i, a) => e == a[0]);
}
/*------------------------------------------------------*/

function maxMultiple(divisor, bound) {
  let a = [];
  for (let i = 0; i <= bound; i += divisor) a.push(i);
  return a[a.length - 1];
}
/*------------------------------------------------------*/

function sortByArea(a) {
  let v = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] === "number") v.push([a[i] * a[i] * Math.PI, i]);
    else v.push([a[i][0] * a[i][1], i]);
  }
  return v.sort((a, b) => a[0] - b[0]).map((e) => a[e[1]]);
}
/*------------------------------------------------------*/
function filter_list(l) {
  return l.filter((e) => typeof e === "number");
}
/*------------------------------------------------------*/
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
/*------------------------------------------------------*/
function noOdds(values) {
  return values.filter((e) => e % 2 == 0);
}
/*------------------------------------------------------*/
function equalize(array) {
  return array.map((e) =>
    e - array[0] === 0
      ? "+0"
      : e - array[0] > 0
      ? `+${e - array[0]}`
      : `${e - array[0]}`
  );
}
/*------------------------------------------------------*/
function numberJoy(n) {
  let b  = n.toString().split('').reduce((a,b)=>+a + +b)
  return  b * b.toString().split('').reverse().join('') == n  
}
/*------------------------------------------------------*/
function spacify(str) {
  return str.split('').join(' ')
}
/*------------------------------------------------------*/
function getNewNotes(salary,bills){
  return (salary - bills?.reduce((a,b)=>a+b,0)) > 0 
    ? Math.floor((salary - bills.reduce((a,b) => a+b,0)) / 5) 
    : 0
}
/*------------------------------------------------------*/
function tea42(input) {
return input.toString().replace(/2/gi,'t')
};
/*------------------------------------------------------*/
function partlist(arr) {
  let b = []
  for(let i = 0; i <arr.length-1; i++) 
  b.push([arr.slice(0,i+1).join(' '),arr.slice(i+1).join(' ')])
  return b
}
/*------------------------------------------------------*/
function isLeapYear(duration, year) {
  return duration * year % 1 === 0
}
