/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var str=s.split("");
    var trans={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    var sum=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==="I"&&(str[i+1]==="V"||str[i+1]==="X"))
            sum += -1;
        else if(str[i]==="X"&&(str[i+1]==="L"||str[i+1]==="C"))
            sum += -10;
        else if(str[i]==="C"&&(str[i+1]==="D"||str[i+1]==="M"))
            sum += -100;
        else
            sum += trans[str[i]];
    }
    return sum;
};