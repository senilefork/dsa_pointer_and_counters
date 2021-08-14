// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let pointer1 = 0;
    let pointer2 = arr.length-1;

    while(pointer1 < pointer2){
        let avg = (arr[pointer1] + arr[pointer2])/2;
        if(avg === target){
            return true;
        } else if(avg < target){
            pointer1++;
        } else {
            pointer2--;
        }
    }
    return false;
}

module.exports = { averagePair }