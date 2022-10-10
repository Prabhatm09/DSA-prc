//question -1
let searchInsertion  = function(nums , target){
    for(let i=0; i<nums.length; i++){
        if(nums[i] == target){ 
            return i
        }
    }
            return 1

}
console.log(searchInsertion([2,3,4,5,6] , 5));
