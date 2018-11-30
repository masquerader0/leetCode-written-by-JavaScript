/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var tel={
        "2":["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"]
    };
    var res=[];
    if(digits.length==0)
        return [];
    if(digits.length==1)
        return tel[digits];
    var temp1=letterCombinations(digits.substr(0,1));
    var temp2=letterCombinations(digits.substr(1));
    for(let i=0;i<temp1.length;i++)
    {
        for(let j=0;j<temp2.length;j++)
        {
            res.push(temp1[i]+temp2[j]);
        }
    }
    return res;
};

console.log(letterCombinations("234"));