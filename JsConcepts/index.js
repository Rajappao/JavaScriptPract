

// var word1 = "abc";
// var word2 = "pqr";
// var merged = "";
// var arrword1 = word1.split("");
// var arrword2 = word2.split("");

// let diff = arrword1.length > arrword2.length

// if(arrword1.length > arrword2.length){
//     for(let i = 0;i <arrword1.length;i++){
//         for(let j = 0;j <arrword1.length ;j++){
//             merged = arrword1[i]+arrword2[j]
//         }
// }
//   for(let i = arrword1.length-diff; i < diff ;i++){
//        merged = merged + arrword1[i];
//   }
// }
// else {
   
// }


// let totalCount = str.length;
// console.log(totalCount)

// let str2=[];

// for(var i=0; i< str.length; i++)
// {
//     ch = str.charAt(i); 
//     if(!str2.includes(ch)){
//         let totalCountAfterRemove = str.replace(/`${ch}`/g, "").length;
//         console.log(`${ch} character is repeated ${totalCount - totalCountAfterRemove}`);
//     }
   
// }




// let indicesArray = [];

// for(let i = 0; i <= nums.length - 1 ; i++){
//     for(let j = i+1; j <= nums.length - 1 ; j++){
//         if(nums[i]+nums[j] === target){
//             indicesArray.push(i);
//             indicesArray.push(j);
//         }
//     }
// }

// console.log(indicesArray);

var twoSum = function(nums, target) {
    for(let i = 0; i <= nums.length - 1 ; i++){
    for(let j = i+1; j <= nums.length - 1 ; j++){
        if(nums[i]+nums[j] === target){
            // indicesArray.push(i);
            // indicesArray.push(j);

            return [i,j];
        }
    }
}
};

let nums = [3,3]
let target = 6;

var indicearr = twoSum(nums,target);

console.log(indicearr);