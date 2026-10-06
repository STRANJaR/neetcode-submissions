class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {

        let x = 0; 

        for(let i=0; i < nums.length; i++){

            if(nums[i] !== 0){
                nums[x] = nums[i];
                x++;
            }
        }

        // Replace all remaining element to zero

        for(let j=x; j < nums.length; j++){
            nums[j] = 0
        }
    }
}
