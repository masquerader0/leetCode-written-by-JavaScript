/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var len=nums.length;
	var i=0;
    if(len===0)
        return [];
    for(var j=1;j<len;j++)
        {
            if(nums[j]!=nums[i])
                {
                    i++;
                    nums[i]=nums[j];
                }
        }
    return i+1;
};