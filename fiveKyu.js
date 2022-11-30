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
function luckCheck(ticket) {
    if(!/^\d+$/g.test(ticket)){
      throw 'undefined'
    }
      let sum1 = [].reduce.call(ticket.slice(0, ticket.length / 2), (num, char) => { return num + +char; }, 0)
      let sum2 = [].reduce.call(ticket.slice(Math.ceil(ticket.length/2)), (num, char) => { return num + +char; }, 0)
      return /^\d+$/g.test(ticket) ? sum1 == sum2 : false ;
  }
  

