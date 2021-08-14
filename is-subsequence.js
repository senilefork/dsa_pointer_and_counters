// add whatever parameters you deem necessary
function isSubsequence(string1, string2) {
    let pointer1 = 0;
    let pointer2 = 0;
    let count = 0;

    while(pointer1 < string1.length && pointer2 < string2.length){
        if(string1[pointer1] === string2[pointer2]){
            pointer1++;
            pointer2++;
            count++
        } else {
            pointer2++
        }
    }

    if(count === string1.length) return true

    return false
    
}

module.exports = { isSubsequence }
