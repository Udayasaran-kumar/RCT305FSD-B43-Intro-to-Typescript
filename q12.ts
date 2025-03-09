
function getIdentifierInfo(Identifier:string|number){
    console.log(`Identifier is a ${typeof(Identifier)}.Value:${Identifier}`);
    
    }
    getIdentifierInfo("ABC123"); // Output: Identifier is a string. Value: ABC123
    getIdentifierInfo(101);      // Output: Identifier is a number. Value: 101