var removeDuplicates = function(nums) {
    
    if(nums.length === 0){
        return 0;
    }
    
    let pointer1 = 0;
    
    for (let pointer2=1;pointer2<nums.length;pointer2++){
        
        if (nums[pointer1]!= nums[pointer2]){
            pointer1++;
            nums[pointer1] = nums[pointer2];
        } 
    }
    console.log(pointer1+1);
    return pointer1+1;
};

removeDuplicates([1,2,2,3,3,3,4,4]);
