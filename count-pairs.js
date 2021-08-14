// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let count = 0;
    let p1 = 0;
    let p2 = arr.length-1;

    let sorted = arr.sort((a,b)=>a-b)

    while(p1 < p2){
      let sum = sorted[p1] + sorted[p2];
      if(sum === target){
        count++
        p1++
        p2--
      } else if(sum < target){
        p1++
      }else{
        p2--
      }
  
    }
    return count;
}

module.exports = { countPairs }
