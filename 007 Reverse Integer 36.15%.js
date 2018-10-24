/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var arr=[];
    var res=0;
    abs_x=Math.abs(x);
    while(abs_x>=10)
        {
            arr.unshift(abs_x%10);
            abs_x=parseInt(abs_x/10);
        }
    arr.unshift(abs_x);
    for(var i=0;i<arr.length;i++)
        {
            res += Math.pow(10,i)*arr[i]
        }
    if(x>0&&res<=Math.pow(2,31)-1)
              return res;
    else if(x<0&&res<=Math.pow(2,31))
              return -res;
    else
        return 0;
};