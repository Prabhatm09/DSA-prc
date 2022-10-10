var smallerNumbersThanCurrent = function(nums) {
    let count = 0
    for(let current=0; current<nums.length; current++){
        for(let small=current+1; small<nums.length; small++){
            if(nums[current] > nums[small]){
                console.log(count++)

        }
    }
    // return count++
    }
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));