var readline = require('readline');

const retrieveValueFromObject = function(jsonObjectInput, jsonKey) {

    let jsonObjectValue = {}
    if(jsonObjectInput.hasOwnProperty(jsonKey)){
        jsonObjectValue = jsonObjectInput[jsonKey];
        console.log("Value for the key is::::",jsonObjectValue)
    } else {
        console.log("Key doesnt exist. Enter a valid key");
    }

    return jsonObjectValue;
}

async function readInput(){
    
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let jsonString = {};
    let jsonObjectRetrieve = "";
    try{
        rl.question("Enter the JSON string: ", function(inputJsonString) {      
            jsonString = JSON.parse(inputJsonString);
            rl.question("Enter key for to retrieve value: ", function(inputJsonObjectRetrieve) {
                jsonObjectRetrieve = inputJsonObjectRetrieve;
                rl.close();
            });        
        });
    } catch (error) {
        console.log("Error----", error);
    }

   rl.on("close", function(){retrieveValueFromObject(jsonString,jsonObjectRetrieve)});
}


readInput();