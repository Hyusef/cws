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
