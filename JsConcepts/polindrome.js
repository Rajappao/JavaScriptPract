// var inputstring = "likil" 
// var lowString = inputstring.toLowerCase();
// var stringArr=lowString.split(""); 

// var len = stringArr.length-1;

// var polindrome = true;

// for(let i = 0; i < stringArr.length/2; i++){
//     if(stringArr[i] !== (stringArr[len--])){
//         polindrome = false;
//         break;
//     }
// }

// if(polindrome){
//  console.log(" polidrome ");
// }else{
//     console.log(" Not polidrome ");
// }


let alien = {
    name : 'rajappa',
    tech : 'js',
    laptop :{
        cpu : 'i7',
        ram : 4,
        brand : 'Asus'
    }
}

// // console.log(alien.laptop.cpu);
// for(let key in alien){
//     console.log(key,alien[key]);

//     for(let lap in alien.laptop){
//         console.log("laptop values "+ lap,  alien.laptop.lap);
//     }
// }

// for(let key in alien.laptop){
//     console.log("Laptop values "+ key, alien.laptop[key])
// }

let arr = [23,4,43,6544,34,456]

arr.forEach((va)=>{
    console.log(va,alien.name);
},alien)