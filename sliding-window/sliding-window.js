/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
 var numOfSubarrays = function(arr, k, threshold) {
    let result = 0;

    // get initial sub-array value, allowing us to start our for-loop from the end of the first sub-array
    // and subtract the first item more easily
    let total = 0;
    for(let i = 0; i < k; i++){
        total += arr[i];
    }
    
    // check if goal condition is met 
    if( (total / k) >= threshold ) {
        result ++;
    }
    
    // we slide the window by subtracting the first item in our sub array (pos j-k) from the total
    // and adding the next item.
    for(let j = k; j < arr.length; j++) {
        total -= arr[j-k];
        total += arr[j];
        if ( total / k >= threshold ){
            result++;
        }
    }
    
    return result;
};