/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let i=0,j=height.length-1;
	let contain,max=0;
	while(i<j)
	{
		contain=(j-i)*Math.min(height[i],height[j]);
		if(contain>max)
			max=contain;
		if(height[i]<height[j])
			i++;
		else
			j--;
	}
	return max;
};
let height=[1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));