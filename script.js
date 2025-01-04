function threeSum(arr, target) {
  //your code here
  let closest;
  let sum;
  let minDiff = Infinity;
  for(let i=0; i<arr.length; i++) {
	for(let j=i+1; j<arr.length; j++) {
	  for(let k=j+1; k<arr.length; k++) {
		sum = arr[i]+arr[j]+arr[k];
		if(Math.abs(sum-target)<minDiff) {
			closest = sum;
			minDiff = sum-target;
		}
	  }
	}
  }

  return closest;
}

module.exports = threeSum;
