function findTwoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
        const diff = target - nums[index];
        const diffIndex = nums.indexOf(diff);
        if (diffIndex !== -1 && diffIndex !== index) {
            console.timeEnd("findTwoSum");
            return [index, diffIndex];
        }
    }
    
    // for(let indx=0; indx < nums.length;indx++)
    // {
    //   for(let iIndx=indx + 1; iIndx < nums.length; iIndx++)
    //     {
    //       if(nums[indx] + nums[iIndx] === target)
    //         {
    //             console.timeEnd("findTwoSum");
    //             return [indx, iIndx];
              
    //         }
    //     }
    // }
}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);
