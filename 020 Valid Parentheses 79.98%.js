/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var res=[];
    var str=s.split("");
    for(var i=0;i<str.length;i++)
        {
            if(str[i]===")"&&res[res.length-1]==="(")
               res.pop();
            else if(str[i]==="]"&&res[res.length-1]==="[")
               res.pop();
            else if(str[i]==="}"&&res[res.length-1]==="{")
               res.pop();
            else
                res.push(str[i]);
        }
    if(res.length===0)
        return true;
    else
        return false;
};