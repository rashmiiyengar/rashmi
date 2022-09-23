var removeElement = function(nums, val) {
    
    let pointer1= 0;
    
    for (pointer2=0;pointer2<nums.length;pointer2++){
        if(nums[pointer2]!=val){
            nums[pointer1] =nums[pointer2];
            pointer1++
        }
    }
    return pointer1
};

removeElement([1,2,2,3,4,4],2);