/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len=1,i=0;
    for(let j=1;j<s.length;j++)
        {
            for(var p1=i;p1<j;p1++)
                {
                    if(s.charAt(p1)==s.charAt(j))
                        break;
                }
            if(p1==j)
                len=Math.max(len,j-i+1);
            else
                i=p1+1;
        }
    return s?len:0
};