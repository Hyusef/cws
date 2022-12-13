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

const lasts = (xs) => (xs.length ? xs.pop() : null);

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

const binaryArrayToNumbers = (arr) => {
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
    let b = n
        .toString()
        .split("")
        .reduce((a, b) => +a + +b);
    return b * b.toString().split("").reverse().join("") == n;
}
/*------------------------------------------------------*/
function spacify(str) {
    return str.split("").join(" ");
}
/*------------------------------------------------------*/
function getNewNotes(salary, bills) {
    return salary - bills?.reduce((a, b) => a + b, 0) > 0
        ? Math.floor((salary - bills.reduce((a, b) => a + b, 0)) / 5)
        : 0;
}
/*------------------------------------------------------*/
function tea42(input) {
    return input.toString().replace(/2/gi, "t");
}
/*------------------------------------------------------*/
function partlist(arr) {
    let b = [];
    for (let i = 0; i < arr.length - 1; i++)
        b.push([arr.slice(0, i + 1).join(" "), arr.slice(i + 1).join(" ")]);
    return b;
}
/*------------------------------------------------------*/
function isLeapYear(duration, year) {
    return (duration * year) % 1 === 0;
}
/*------------------------------------------------------*/
function isFlush(cards) {
    return cards.map((e) => e[e.length - 1]).every((e, _, a) => e == a[0]);
}
/*------------------------------------------------------*/
function search(budget, prices) {
    return prices.filter(e => e <= budget).sort((a, b) => a - b).toString()
}
/*------------------------------------------------------*/
function missingNo(nums) {
    return nums.sort((a, b) => a - b).filter((e, i, a) => a[i] + 1 != a[i + 1])[0] + 1
}
/*------------------------------------------------------*/
function bump(x) {
    return x.split("").filter(e => e == "n").length <= 15 ? "Woohoo!" : "Car Dead";
}
/*------------------------------------------------------*/
function hexHash(code) {
    return code.split('').
        map(e => e.charCodeAt().
            toString(16)).join('').replace(/[a-z]/gi, '').split('').reduce((a, b) => +a + +b, 0)
}
/*------------------------------------------------------*/
function reverse(string) {
    return string.split(' ').reverse().join(' ')
}
/*------------------------------------------------------*/
function stringMerge(string1, string2, letter) {
    return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter))
}
/*------------------------------------------------------*/
function squares(x, n) {
    let a = [x]
    for (let i = 1; i < n; i++) {
        a[i] = Math.pow(a[i - 1], 2);
        console.log(a);
    }
    return n > 0 ? a : []
}
/*------------------------------------------------------*/
var isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}
/*------------------------------------------------------*/
var isAnagram = function (test, original) {
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
};
/*------------------------------------------------------*/
function eqSumPowdig(hMax, exp) {
    let a = [];
    for (let i = 2; i <= hMax; i++) {
        let digit = i;
        let sameDigit = digit.toString().split('').map(e => Math.pow(e, exp)).reduce((a, b) => a + +b)
        if (sameDigit == digit) a.push(digit);
    }
    return a;
}
/*------------------------------------------------------*/
function nextPal(val) {
    for (let i = val + 1; i < val + 100; i++) {
        const digit = i;
        if (digit.toString().split('').reverse().join('') == digit) return digit;
    }
    return val;
}
/*------------------------------------------------------*/
function derDieDas(wort) {
    let count = 0;
    wort.split('').forEach(e => e.match(/[aeiouäöü]/gi) ? count++ : 0);
    return count < 2 ? 'das ' + wort : count == 2 || count == 3 ? 'die ' + wort : 'der ' + wort;
}
/*------------------------------------------------------*/
function unscrambleEggs(word) {
    return word.split(/egg/).join('')
}
/*------------------------------------------------------*/
function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}
/*------------------------------------------------------*/
function angle(n) {
    return (n - 2) * 180
}
/*------------------------------------------------------*/
function solution(start, finish) {
    const total = finish - start;
    return total % 3 == 0 ? Math.round(finish - start) / 3 : Math.round((finish - start) / 3) + 1
}
/*------------------------------------------------------*/
function spoonerize(words) {
    [first, second] = words.split(' ');
    return second[0] + first.slice(1) + ' ' + first[0] + second.slice(1)
}
/*------------------------------------------------------*/
function isValidChess960(pieces) {
    const firstBishop = pieces.indexOf('B')
    const secondBishop = pieces.indexOf('B', firstBishop + 1);
    const firstRook = pieces.indexOf('R')
    const secondRook = pieces.indexOf('R', firstRook + 1);
    const KingIndex = pieces.indexOf('K');
    console.log(firstBishop, secondBishop);
    if ((firstBishop % 2 == 0 && secondBishop % 2 == 1) || (firstBishop % 2 == 1 && secondBishop % 2 == 0)) {
        if (firstRook < KingIndex && secondRook > KingIndex) {
            return true;
        }
    }
    return false;
}
/*------------------------------------------------------*/
function openOrSenior(data) {
    return data.map(e => e[0] >= 55 && e[1] > 7 ? 'Senior' : 'Open');
}

/*------------------------------------------------------*/
function londonCityHacker(journey) {
    return '£' + (journey.reduce((price, ride, i, a) => {
        if (typeof ride == 'string') price += 2.40
        if (typeof ride == 'number' && typeof a[i + 1] == 'number') {
            journey.splice(i, 1)
            price += 1.50;
        } else if (typeof ride == 'number') {
            price += 1.50
        }
        return price;
    }, 0)).toFixed(2)
}
/*------------------------------------------------------*/

function fizzbuzz(n) {
    return Array.from({ length: n }, (e, idx) => idx + 1).map(e => e % 5 == 0 && e % 3 == 0 ? 'FizzBuzz' : e % 3 == 0 ? 'Fizz' : e % 5 == 0 ? 'Buzz' : e);
}
/*------------------------------------------------------*/
function vowelOne(s) {
    return s.replace(/[\s\S]/gi, (match) => {
        return 'aeiou'.includes(match.toLowerCase()) ? 1 : 0
    })
}
/*------------------------------------------------------*/
function largest(n, xs) {
    return n > 0 ? xs.sort((a, b) => a - b).slice(-n) : []
}
/*------------------------------------------------------*/
function args_count() {
return arguments.length
}
/*------------------------------------------------------*/
function shorter_reverse_longer(a, b) {
    let short = '';
    let long = '';
    a.length < b.length ? (short = a, long = b) : (short = b, long = a);
    return short + long.split('').reverse('').join('') + short;
  }
/*------------------------------------------------------*/
  var filterString = function(value) {
    let numbers = '';
    value.split('').filter(e=> (/\d/.test(e)?numbers+=e:0));
    return +numbers;
    }

/*------------------------------------------------------*/
var isSquare = function(arr){
    return arr.length ?  arr.every(e=> Math.sqrt(e) % 1 == 0) : undefined;
      }
/*------------------------------------------------------*/
      function swap (string) {
    return string.split('').map(e=>'aeiou'.includes(e)?e.toUpperCase(): e).join('');
  }

  /*------------------------------------------------------*/
  function cupAndBalls(b, arr) {
    return arr.reduce((_, c) => {
        if (c.includes(b)) b = c.find(e => e != b) || b;
        return b;
    }, b)
};

/*------------------------------------------------------*/
function DNAStrand(dna){
    let b = {
        'A' : 'T',
        'C' : 'G',
        'T' : 'A',
        'G' : 'C'
    }
return (dna.replace(/[ATCG]/g,(a,i)=>b[a]))
}
/*------------------------------------------------------*/
const prevMultOfThree = n => {
    if (n % 3 == 0) return n;
    const arr = Array.from(String(n), Number);
    while (arr.length != 0) {
        if (Number(arr.join('')) % 3 == 0) {
            return Number(arr.join(''));
        } else {
            arr.pop();
        }
    }
    return null;
}






    


    
    
    
  
  













