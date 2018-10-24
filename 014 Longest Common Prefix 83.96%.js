/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0)
        return "";
    var pre=strs[0];
    for(var i=1;i<strs.length;i++)
    {
        while(strs[i].indexOf(pre)!=0)
        {
            pre=pre.slice(0,-1);
            if(pre.length===0)
                return "";
        }
    }
    return pre;
};