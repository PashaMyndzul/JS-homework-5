//Task#1//
const value = 8;
function convert (usd) {

    const convert = usd * value;
    return `at course 8--> ${usd} usd= ${convert} uah`;
}


//Task#2
function reverse(str) {

    const result = str.split(``).reverse().join(``);
    return `Rezult: ${result}`;
}


//Task#3
function printStairs(n) {

    let  icon= "";
    for (let i = 0; i < n; i++) {

      console.log (icon += ':)' );
    }
 }
 printStairs(8);

 //task#4
 function sumRange (start, end) {

    let sumRange = 0;
    for (let i = start; i <= end; i++) {
        sumRange += i;
    }
        return sumRange;
 }

 //task#5
 function min(a, b, c) {

    let min = a;
    for (let i = 0; i < arguments.length; i++) {

        if (min > arguments[i]) {
            min = arguments[i];
       } else {}
    } 

    return min;
}      
 min(10, 5, 11);
 min(3, 8, 4);
 //task#6
 function printPiramid(n) {

    let  icon = "";
    for (let i = 0; i < n; i++){

        let x=( (n * 2) - (i * 2) ) / 2;
    //let a="";                 //Інший метод вирішення завдання;
    // for (let c=0;c<x;c++){
    //    a+=" ";
   //  }
         let a = ' ';
        console.log (a.repeat(x), icon += ':)' );
    }
 }
 printPiramid(3);
//task#7
function firstAndLastToUpper(str){

    let a = str.length - 1;
    let Rezult = str[0].toUpperCase() + str.slice(1,a)+str[a].toUpperCase();
    console.log (Rezult);
}


//task#8
function cursorCheck(str) {
    
    for( let i = 0; i < str.length; i++) {

        let strElement = str.toLowerCase();
        if (~strElement.indexOf( "ironman" ) || 
            ~strElement.indexOf( "cursor" ) ||
            ~strElement.indexOf( "ostap" ) ) {

        return true;
        } else {

        return false;
      }
    }
}


//task9
function toUpperCase(str) {

    let toUpperChar = "";
    for (let i = 0; i < str.length; i++){  

        let strElement = str.charCodeAt(i);
        if (strElement >= 97 && strElement <= 122) {   

            let toUpperChar1 = String.fromCharCode(strElement - 32);
            toUpperChar += toUpperChar1;
        } 
        else {

            toUpperChar += str[i];
            return toUpperChar;
        }
    }
}
toUpperCase('abc');
//task10
function removeDuplicationLetters(str){

        let noDublicate = ' ';

        for (let i = 0; i < str.length; i++){

           if (str[i] == ' '){
               
            noDublicate += str[i];
           }
           else if  (noDublicate.toUpperCase().indexOf(str[i]) == -1 &&
              noDublicate.toLowerCase().indexOf(str[i]) == -1) { 

                  noDublicate += str[i];
            }   
        }
            return noDublicate;
    }

//#task11
function fibonacci(n){

    let a = 1;
    let b = 1;
        for (let i = 3;i <= n; i++) {

            let c = a + b;
            a = b;
            b = c;
        }

    return `${n} position among Fibonacci numbers--> ${b}`;
}
fibonacci(3);
fibonacci(5);
fibonacci(7);
