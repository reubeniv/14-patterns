/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxArea = 0;
    
    // start at beginning and end
    let lPtr = 0;
    let rPtr = height.length - 1;
    
    let min = 0;
    let width = 0;
    let area = 0;
    
    // while pointers don't intersect
    while(lPtr < rPtr){
        // find min height, width, and area
        min = height[lPtr] < height[rPtr] ? height[lPtr] : height[rPtr];
        width = rPtr - lPtr;
        area = min * width;

        // check if max
        if (area > maxArea) {
            maxArea = area;
        }
        
        // move the smallest pointer inwards
        if(height[lPtr] < height[rPtr]) {
            lPtr++;
        } else {
            rPtr--;
        }
    }
    
    return maxArea;
};