// Check if 2 elements in given array, sums to the targetSum. 

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a-b)
      let left = 0
      let right = array.length-1
      while(left < right){
          if(array[left] + array[right] == targetSum){
              return [array[left], array[right]]
          }else if(array[left] + array[right] < targetSum){
              left+=1
          }else if(array[left] + array[right] > targetSum){
              right-=1
          }
      }
      return []
  }