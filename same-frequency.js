// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let string1 = String(num1);
    let string2 = String(num2);

    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < string1.length; i++){
        if(!obj1[string1[i]]){
            obj1[string1[i]] = 1;
        } else {
            obj1[string1[i]]++;
        }
    }

    for(let i = 0; i < string2.length; i++){
        if(!obj2[string2[i]]){
            obj2[string2[i]] = 1;
        } else {
            obj2[string2[i]]++;
        }
    }

    for(let key in obj1){
        if(!obj2[key]){
            return false;
        }else if (obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true
}

module.exports = { sameFrequency }
