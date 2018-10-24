/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var str=s.split("");
    var len=str.length;
    var temp=new Array(len);
    var start=0;
    var end=0;
    for(let i=0;i<len;i++)
    {
        temp[i]=new Array(len);
        for(let j=0;j<len;j++)
        {
            temp[i][j]=0;
            if(j-i===0)
            {
                temp[i][j]=1;
            }
            if(j-i===1&&str[i]===str[j])
            {
                temp[i][j]=1;
            }
        }
    }
    var max=0;
    for(var i=2;i<len;i++)
    {
        for(var j=0;i+j<len;j++)
        {
            if(temp[j+1][i+j-1]&&(str[j]===str[i+j]))
            {
                temp[j][i+j]=1;
            }
        }

    }
    for(var i=0;i<len-1;i++)
    {
        for(var j=i;j<len;j++)
        {
            if(temp[i][j]===1&&j-i>max)
            {
                max=j-i;
                start=i;
                end=j;

            }
        }

    }

    return str.slice(start,end+1).join("");
};