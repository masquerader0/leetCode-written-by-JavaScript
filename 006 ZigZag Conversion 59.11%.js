/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var arr=new Array(numRows);
    if(numRows==1)
        return s;
    for(let i=0;i<numRows;i++)
    {
    	arr[i]=new Array();
    }
    var direct=1;
    var row=0;
    for(let i=0;i<s.length;i++,row += direct)
    {
    	if(direct==1&&row==numRows-1)
    		direct=-1;
    	if(direct==-1&&row==0)
    		direct=1;
    	arr[row].push(s.charAt(i));
    }
    var res="";
    for(var i=0;i<numRows;i++)
    {
    	res+=arr[i].join("")
    }
    return res;
};
