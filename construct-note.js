// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    let msgObj = {};
    let lettersObj = {};

    for(let i = 0; i < msg.length; i++){
        if(!msgObj[msg[i]]){
            msgObj[msg[i]] = 1;
        } else {
            msgObj[msg[i]]++;
        }
    }

    for(let i = 0; i < letters.length; i++){
        if(!lettersObj[letters[i]]){
            lettersObj[letters[i]] = 1;
        } else {
            lettersObj[letters[i]]++;
        }
    }
   
    for(let key in msgObj){
        if(!lettersObj[key]){
            return false;
        } else if(!(lettersObj[key] >= msgObj[key])){
            
            return false
        }
    }
    return true;
}

module.exports = { constructNote }
