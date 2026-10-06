class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        // [1,1,2,3,4]

        let x = 0;

        for (let i = 0; i < nums.length; i++) {

            if(nums[i] > nums[x]){
                x++;
                nums[x] = nums[i]
            }
        }

        return (x + 1)
    }
}
