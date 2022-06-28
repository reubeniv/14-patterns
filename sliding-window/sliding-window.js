/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
 var numOfSubarrays = function(arr, k, threshold) {
    let result = 0;
    
    let total = 0;
    // get initial sub array value
    for(let i = 0; i < k; i++){
        total += arr[i];
    }
    
    if( (total / k) >= threshold ) {
        result ++;
    }
    
    // slide window
    
    for(let j = k; j < arr.length; j++) {
        total -= arr[j-k];
        total += arr[j];
        if ( total / k >= threshold ){
            result++;
        }
    }
    
    return result;
};