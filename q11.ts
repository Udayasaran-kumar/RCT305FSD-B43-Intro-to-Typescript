let age:number=25;
let greeting:string="Hello,World!";
let isLoggedon:boolean=true;
let colors:[string,string,string]=["red","green","blue"];
function displayDetails(age:number,greeting:string,isLoggedon:boolean,colors:[string,string,string]){
    console.log(`Age:${age}\nGreeting:${greeting}\nLogged in:${isLoggedon}\nColors:${colors.join(",")}`);
}
displayDetails(age,greeting,isLoggedon,colors);