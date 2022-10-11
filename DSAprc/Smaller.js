var smallerNumbersThanCurrent = function (nums) {
    let newarr = [];
    for (let current = 0; current < nums.length; current++) {
        let count = 0
        for (let small = 0; small < nums.length; small++) {
            if (nums[current] > nums[small]) {
                count++
            }
        }
        newarr.push(count)
    }
    return newarr
};
console.log(smallerNumbersThanCurrent([6, 1, 7, 2, 3]));

// [4, 0 ,1 ,1, 2]