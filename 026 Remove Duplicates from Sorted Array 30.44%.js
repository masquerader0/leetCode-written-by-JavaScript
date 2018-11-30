/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	var len=nums.length;
	for(let i=0;i<len-1;i++)
	{
		if(nums[i+1]==nums[i])
		{
			for(let j=i+1;j<len-1;j++)
			{
				nums[j]=nums[j+1];
			}
			len--;
			i=i-1;
		}
	}
	nums.length=len;
	return len;
};
var nums=[0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));