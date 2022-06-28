/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let slow = 0, fast = 0;
    
    while( true ) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        
        if(fast == slow) {
            let pointer = 0;
            
            while(pointer !== slow) {
                pointer = nums[pointer];
                slow = nums[slow];
            }
            
            return pointer;
        }
    }
};