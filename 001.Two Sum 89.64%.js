/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash={};
    for(var i=0;i<nums.length;i++)
        {
            if(target-nums[i] in hash)
                return [hash[target-nums[i]],i];
            else
                hash[nums[i]]=i;
               
        }
};