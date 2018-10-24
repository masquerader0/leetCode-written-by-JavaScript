/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if(x<0)
        return false;
    var res=[];
    var temp=x;
    while(temp>=10)
        {
            res.push(temp%10);
            temp=parseInt(temp/10);
        }
    res.push(temp);
    
    var reverse=0;
    for(var i=0;i<res.length;i++)
        {
            reverse += res[i]*Math.pow(10,res.length-1-i);
        }
    
    if(reverse===x)
        return true;
    else
        return false;
};