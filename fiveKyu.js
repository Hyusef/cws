function generateHashtag(str) {
    return str.replace(/[ ]{1,}/, '').length == 0 || str.replace(/[ ]{1,}/, '').length >= 140 ? false :
        '#' + str.split(/[ ]{1,}/).map(e => e[0]?.toUpperCase() + e.slice(1)).join('');
}
/*------------------------------------------------------*/
var solution = function (f, s) {
    let a = [];
    for (i in f) { a.push(Math.abs(f[i] - s[i]) ** 2); }
    return a.reduce((a, b) => a + b) / f.length
}
/*------------------------------------------------------*/
function alphanumeric(string){
    let reg = /[a-zA-Z0-9]/g;
    return string.match(reg)?.length == string.length;
    }
    