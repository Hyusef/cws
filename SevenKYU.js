function collatz(n) {
    let arr = []
    let i = n;
     while(i>1)
       {
         if(i%2===0)
         {
            i = i/2;
         }
         else
         {
            i = (3*i)+1
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

function isIsogram(str){  
  let uniq = [...new Set(str.toLowerCase())]
  return str.length===uniq.length;
  }
/* ------------------------------------------------------- */

  function findUniq(arr) {
    const dupl = (arr.filter((e)=>(e!==arr[0])))
    return dupl.length==1?+dupl.join(''):arr[0]
    }