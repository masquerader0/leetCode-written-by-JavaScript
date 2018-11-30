function findMedianSortedArrays(nums1, nums2) {
    var m=nums1.length;
	var n=nums2.length;
	var count=0;
	var i=0,j=0,mid;
	while(count<Math.ceil((m+n)/2))
	{
		if(i<m&&j<n)
		{
			if(nums1[i]<=nums2[j])
				mid=nums1[i++];
			else
				mid=nums2[j++];
		}
		else
		{
			if(i<m)
				mid=nums1[i++];
			else
				mid=nums2[j++];
		}
		count++;
	}
	if((m+n)%2!=0)
		return mid;
	else
	{
		if(i<m&&j<n)
			return (mid+Math.min(nums1[i],nums2[j]))/2;
		else
		{
			if(i<m)
				return (mid+nums1[i])/2;
			else
				return (mid+nums2[j])/2;
		}
	}
};
