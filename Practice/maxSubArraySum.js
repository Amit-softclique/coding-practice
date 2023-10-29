// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const array1 = [4,-1,2,1,-3,-5];

function maxSubArraySum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i=1; i < nums.length; i++ ) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum;
}

const result = maxSubArraySum(array1)
console.log(result)

