//Task#1//
const value = 8;
function convert (usd){
    const convert=usd*value;
    return `при курсі 8-- ${usd} дол= ${convert} грн`;
}
console.log(convert(25));

//Task#2
function reverse(str) {
    const result =str.split(``).reverse().join(``);
    return `Rezult: ${result}`;
}
console.log(reverse("Pasha"));

//Task#3
function printStairs(n) {
    let  icon= "";
    for(let i =0; i < n; i++){
    console.log(icon+=':)');
    }
 }
 printStairs(8);

 //task#4
 function sumRange(start,end){
    let sumRange=0;
    for (let i=start; i<=end;i++){
        sumRange+=i;
         console.log(sumRange);}
        return console.log('Rezult:'+sumRange);
 }
 sumRange (2,4);
 sumRange (-1,3);
 //task#5
 function min(a,b,c){
    if ((a==b)&&(b==c)){
         console.log(`Введені значення рівні:)`);}
    else if ((a<=b)&&(a<c)) {
         console.log(`min число ${a}`);}
    else if ((b<=a)&&(b<c)){
        console.log(`min число ${b}`);}
    else if ((c<a)&&(c<b)){
        console.log(`min число ${c}`);}
    else {console.log(`Невірний формат введених даних :(`);}
 }
 min(10,5,11);
 min(3,8,4);
 //task#6
 function printPiramid(n) {
    let  icon= "";
    for(let i =0; i < n; i++){
     let x=((n*2)-(i*2))/2;
    //let a="";                 //Інший метод вирішення завдання;
    // for (let c=0;c<x;c++){
    //    a+=" ";
   //  }
   let a=' ';
    console.log(a.repeat(x),icon+=':)');
    }
 }
 printPiramid(3);
//task#7
function firstAndLastToUpper(str){
    let a = str.length - 1;
    let Rezult = str[0].toUpperCase() + str.slice(1,a)+str[a].toUpperCase();
    console.log(Rezult);
}
firstAndLastToUpper(`abc`);
//task#8
function cursorCheck(str) {
   // let a = str;
    for( let i =0; i < str.length; i++){
    if(~str.toLowerCase().indexOf("ironman") || ~str.toLowerCase().indexOf("cursor") || ~str.toLowerCase().indexOf("ostap")){
        return true;
    } else {
        return false;
    }
    }
}
console.log(cursorCheck("Hello I am OstaP"));
console.log(cursorCheck("Superman is here"));
//task9
function toUpperCase(str){
    let toUpperChar='';
    for( let i =0; i < str.length; i++){
    let toUpperChar1 = String.fromCharCode(str.charCodeAt(i)-32);
    toUpperChar += toUpperChar1;
    }
    console.log(toUpperChar);
}
toUpperCase('abc');
//task10
function removeDuplicationLetters(str){
        let noDublicate='';
        for(let i=0; i<str.length; i++){
            if((noDublicate.toUpperCase().indexOf(str[i])==-1)&&(noDublicate.toLowerCase().indexOf(str[i])==-1)){
                noDublicate += str[i];
            }   
        }
            return noDublicate;
    }
//#task11
function fibonacci(n){
    let a = 1;
    let b = 1;
    for(let i=3;i<=n;i++) {
        let c = a + b;
        a=b;
        b=c;
        //console.log(b);
    }
    console.log(n+" "+ "позиція в числі фібоначчі-->"+" " + b);
    return `${n} позиція в числі фібоначчі--> ${b}`;
}
fibonacci(3);
fibonacci(5);
fibonacci(7);
