function generateHashtag (str) {
return str.replace(/[ ]{1,}/,'').length== 0 || str.replace(/[ ]{1,}/,'').length >=140   ?false:
'#'+str.split(/[ ]{1,}/).map(e=>e[0]?.toUpperCase() + e.slice(1)).join('');
}
