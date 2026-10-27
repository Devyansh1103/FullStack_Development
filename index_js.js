/*let a = 5;
console.log(a,typeof a );
a = true;
console.log(a,typeof a );
a = "Hello";
console.log(a,typeof a );
a = null;
console.log(a,typeof a );
a = undefined;
console.log(a,typeof a );
a = [];
console.log(a,typeof a );
a = {};
console.log(a,typeof a );
*/

/*function isArmstrong(num){
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;
    while(temp > 0){
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    if(sum === num){
        return true;
    }
    else{
        return false;
    }
}
function check(){
    let val = document.getElementById("val").value;
    let para = document.createElement("p");
    if(isArmstrong(val)){
        para.content = "it is an Armstrong number";
    }
    else{
        para.content = "it is not an Armstrong number";
    }
    document.getElementsByTagName("body")[0].appendChild(para);
}*/

/*var counter = 0
setInterval(() => {
    counter += 1;
    console.log(counter + "Seconds have passed");
}, 1000);

*/
// WAP for 15 minutes timer
/*function check(){
    let timer = 15 * 60;
    setInterval(() => {
        timer -= 1;
        console.log(timer + "Time left");
    },1000);
}
*/
/*let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((n) => {return n*n;});
console.log(newArr);

newArr = arr.filter(n => n > 3);
console.log(newArr);

let ele = arr.find(n => n > 3);
console.log(ele);

ele = arr.reduce((sum, n) => sum + n, 0);
console.log(ele);

const add = (a, b) => {let c = a + b; return c;};
console.log(add(5, 10));
*/
function armStrong(num){
    let sum = 0;
    let temp = num;
    let digits = num.toString().length;
    while(temp > 0){
        let digit = temp % 10;
        sum += digit ** digits;
        temp = Math.floor(temp / 10);
    }
    if(sum == num){
        console.log(num + " is an Armstrong number");
    }
    else{
        console.log(num + " is not an Armstrong number");
    }
}