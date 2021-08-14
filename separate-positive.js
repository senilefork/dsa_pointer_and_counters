function separatePositive(arr) {
    let start = 0;
    let end = arr.length-1;
  
    while(start < end){
      if(arr[start] < 0 && arr[end] > 0){
        let tmp = arr[end];
        arr[end] = arr[start];
        arr[start] = tmp;
  
        start++
        end--
      } else if(arr[start] > 0){
        start++;
      }else{
        end--;
      }
    } 
    return arr
  }
  

module.exports = { separatePositive }
