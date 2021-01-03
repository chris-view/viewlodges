// function mutateTheArray(n, a) {
//     let b;
//     let result = []
//     for(let i=0; i<n; i++){
//          a =[...a,0]
//         if(i===0){
//             b = 0 + a[i] + a[i+1]
//          }else{
            
//             b = a[i-1]+a[i]+a[i+1]
//         }
//         result.push(b)
//     }
//  return result
// }
// console.log(mutateTheArray(5,[4,0,1,-2,3]))

//===> 2nd test question <===

// function sortingArray(a){
//     let b = []
//     let x=a
//     for(i=0; i<a.length; i++ ){
        

//         // if(i===0)
//         // b.push(a[0])
//         // else if (i%2===0) b.push(a[i-1])
//         // else 
//         // b.push(a.slice(-i)[0]) 
//     }
//     return b
// }
// console.log(sortingArray([1,2,3,4,5,6,7,8]))

// function addBorder(a){
//     let len = a[0].length + 2;
//     wall = "";
//     for(i=0; i<len; i++){
//         wall = wall.concat("*");
//     }
//     a.unshift(wall);
//     a.push(wall);
//     for(i =1; i<len-1; i++){
//         a[i] = "*".concat(a[i], "*")
//     }
//     return a
// }

// A= ["abc", 
//     "adc"]
// function addBorder(a){
//     let wallSize = a.length + 2;
//     let wall = "";
    
//     for(let i = 0; i < wallSize; i++){
//         wall = wall.concat("*");
//     }
//     a = a.map(item => `*${item}*`)

//     a.unshift(wall);
//     a.push(wall)
//     return a;
    
// }
// b = [1,2,4,3]
// console.log(addBorder(["abc","adf"]))

// function longestString(a){
//     let longest = 0;
//     a.forEach(item => item.length > longest ? longest = item.length : "")
//     a = a.filter(item => item.length === longest)

//     return a
// }
// console.log(longestString(["ab"]))




// function almostIncreasingSequence(a){
//     const temp = [];
//     a.forEach(item=>temp.push(item))
//     let sorted = a.sort();
//     let count = 0;
//     console.log("original ", temp);
//     console.log("sorted ", sorted)
//     for(let i =0; i < a.length; i++){
//         if(sorted[i] !== temp[i]){
//             count += 1
//         }
//     }
//     console.log("count is ", count)
//     if(count <=2 ){
//         let flag = true;
//         for(let i = 0; i < sorted.length-1; i++){
//             if(sorted[i] === sorted[i+1]){
//                 flag = false;
//             }
//         }
//         return flag
//     }else{
//         return false;
//     }
//     // return count <= 2 ? true : false;
// } 

// console.log(almostIncreasingSequence([1,2,3,5,4,3]))



// function areSimilar(a,b){
    
//     if(a.toString() == b.toString()){
//         console.log("passed from day 1 so return")
//         return true;
//     }
//     a.sort();
//     b.sort();
    
//     for(let i = 0; i < a.length; i++){
//         if(a[i] !== b[i]){
//             return false
//         }
//     }

//     // for(let i = 0; i < a.length - 1; i++){
//     //     if(a[i] === a[i+1]){
//     //         return false
//     //     }
//     // }
//     return true
// }

// console.log(areSimilar([1,2,2],[2,1,1]))


// function checkPal(inputString){
//     console.log("inputString is ", inputString);
//     console.log("modified string is ", inputString.split("").reverse().join(""))
//     return inputString === inputString.split("").reverse().join("")
// }

// console.log(checkPal("abcd"));


// function commonCount(s1,s2){
//     s1 = s1.split("");
//     s2 = s2.split("");

//     let s1Object = {};
//     let s2Object = {};

//     for(let i = 0; i<s1.length; i++){
//         if(s1Object.hasOwnProperty(s1[i]) === false){
//             s1Object[s1[i]] = 1;
//         }else(
//             s1Object[s1[i]]++
//         )
//     }
//     for(let i = 0; i<s2.length; i++){
//         if(s2Object.hasOwnProperty(s2[i]) === false){
//             s2Object[s2[i]] = 1;
//         }else(
//             s2Object[s2[i]]++
//         )
//     }

//     let total = 0;
//      for(let item in s1Object){
//         if(s2Object.hasOwnProperty(item) === true){
//             if(s1Object[item] > s2Object[item]){
//                 total += s2Object[item];
//             }else{
//                 total += s1Object[item];
//             }  
//         } 
//     }

//     return total;
// }

// console.log(commonCount("aaabcc","aadcaa"))
// s = ab(cd)ef === abdcef


// //
// function reversePunctuationMark(s){
//     s = s.split("(");
//     firstPart = s[0];
//     s.shift();
//     s = s.join("").split(")");
//     lastPart = s[1];
//     middlePart = s[0];
//     middlePart = middlePart.split("").reverse().join("");
    
//     return firstPart.concat(middlePart, lastPart);
// }

// console.log(reversePunctuationMark("ab(cd)ef(hg)"))

// recursive

// function reverseParentasis(s){
//     if(s.includes('(')){
//         return reverseParentasis(identifyParentRecur(s));
//     }
//     return s;
// }

// function identifyParentRecur(s){
//     let regx = /\(([^()]*)\)/i;
//     substr = regx.exec(s)[1];
//     console.log(substr);
//     substr = substr.split("").reverse().join("");
//     return s.replace(regx, substr);
    
// }

// console.log(reverseParentasis("ab(cd(gh))ef"));
// s = ["abc", "efr"] === ["*****","*abc*","*efr*","*****"]
// function borderAdd(s){
//     wallLen = s[0].length + 2;
//     wall = "";
//     for(let i = 0; i<wallLen; i++){
//         wall+="*"
//     }
//     newArray = s.map(item => `*${item}*`);
//     newArray.unshift(wall);
//     newArray.push(wall);
//     console.log(newArray);
//     return newArray;
// }
// borderAdd(["abc", "efr"]);

// s= ["ab", "abc", "bc", "bdg"] = ["abc","bdg"]

// function allLongest(s){
//     let longest = 1;
//     s.forEach(item => item.length > longest ? longest = item.length : "")
//     newArray = s.filter(item => item.length === longest)
//     return newArray;
// }

// console.log(allLongest(["ab", "abc", "bc", "bdg"]))
// 1 3 2 1 == false
// function almostIncreasingSequence(s){
//     let prev = s[0];
//     let count = 0;
//     for(let i = 1; i < s.length; i++){
//         (prev > s[i] || prev == s[i]) ? count++ : "";
//         prev = s[i];
//     }
//     return count < 2
// }

// console.log(almostIncreasingSequence([1,3,5,2,7,9,3]))

// function canSwap(a,b){
//     if(a.join("") === b.join("")){
//         return true;
//     }
//     console.log(`a = ${a} b = ${b.sort()}`);
//     return a.join("") === b.sort().join("");
// }

// console.log(canSwap([1,2,2], [2,1,1]));

// function commomCount(s1, s2){
//     s1 = s1.split("");
//     s2 = s2.split("");

//     let s1Obj = {};
//     let s2Obj = {};

//     for(let i = 0; i < s1.length; i++){
//         if(s1Obj.hasOwnProperty(s1[i])){
//             s1Obj[s1[i]]++
//         }else{
//             s1Obj[s1[i]] = 1;
//         }
//     }
//     for(let i = 0; i < s2.length; i++){
//         if(s2Obj.hasOwnProperty(s2[i])){
//             s2Obj[s2[i]]++
//         }else{
//             s2Obj[s2[i]] = 1;
//         }
//     }
    
//     let count = 0;
//     for(let item in s1Obj){

//         if(s2Obj.hasOwnProperty(item)){
//             // if(s2Obj[item] > s1Obj[item]){
//             //     count += s1Obj[item];
//             // }else count += s2Obj[item]
            
//             s2Obj[item] > s1Obj[item] ? count = count + s1Obj[item] : count = count + s2Obj[item];
//             2 > 5 ? console.log("2<5 true") : console.log("2<5 false")
//             5 > 2 ? console.log("5>2 true") : console.log("5>2 false")
//             1 > 1 ? console.log("1>1 true") : console.log("1>1 false")
//             console.log("")
//         }
//     }
//    console.log(count)
//    return count;
// }

// console.log(commomCount("aaabc","aabbc"))

// function matrix(m){
//     let row = m.length;
//     let col = m[0].length;
//     let costSum = 0;
//     for(let i = 0; i < row; i++){
//         for(let j = 0; j<col; j++){
//             if(m[i][j] === 0){
//                 for(let k = i; k < row; k++){
//                     m[k][j] = 0;
//                 }
//             }
//             costSum += m[i][j];
//         }
//     }
    
//     return costSum;
// }

// m = [[0,1,1,2],
//      [0,5,0,0],
//      [2,0,3,3]]

// console.log(matrix(m));

// function isPal(s){
//     let charArray = s.split("");
//     let charObj = {};
//     charArray.forEach(item => {
//         if(charObj.hasOwnProperty(item)){
//             charObj[item]++;
//         }else charObj[item] = 1;
//     })
//     let count = 0;
//     for(item in charObj){
//         if(charObj[item] % 2 != 0){
//             count++
//         }
//     }
//     return count < 2;
// }

// console.log(isPal("aabb"))
// console.log(`is 3>2 ? ${3>2}`)


// function mutateArr(a){
//     let b = [2];
//     b[0] = a[0];
//     for(let i = 0; i < a.length; i++){
//       if(i % 2 === 1){
         
//       }
//     }
// }

// console.log(`size is ${1 % 2

// HashTable

// class Table{

//   table = new Array(27);
//   getHash(value, size){
//     let hash = 17;
//     for(let i = 0; i < value.length; i++){
//       hash = (13 +  hash * value.charCodeAt(i)) % size;
//     }
//     return hash;
//   }
//   setItem(key, value){
//     const idx = this.getHash(key, this.table.length);
//     this.table[idx] = value;
//     }
//   getItem(key){
//     const idx = this.getHash(key, this.table.length);
//     return this.table[idx];
//   }
// }

// const myTable = new Table();
// myTable.setItem("firstname","Chris");
// myTable.setItem("surname","Samuel");
// myTable.setItem("age",26);
// myTable.setItem("stack","Development");
// myTable.setItem(3,"3 is the key");

// console.log(myTable.getItem("firstname"));
// console.log(myTable.getItem("surname"));
// console.log(myTable.getItem("age"));
// console.log(myTable.getItem("stack"));
// console.log(myTable.getItem(3));

// class HashClass{
//   table = []
//   count = 0;
//   insert(x,y){
//     this.table[x] = y;
    
//   }
//   get(x){
    
//       this.count = this.count + this.table[x];
//       return this.table[x];
//     }
    
//   addToKey(x){
//     x = x * 1; // convert string to number
//     let obj = {}
//     for(let i =0; i < this.table.length; i++){
     
//         let value = this.table[i];
//         let newKey = i + x;
//         obj[newKey] = value;
//         delete this.table[i]
        
      
//     }
//     let entries = Object.entries(obj)
//     entries.forEach(item => {
//       this.table[item[0]*1] = item[1]
//     })

//   }
//   addToValue(y){
//     y = y * 1;
//     for(let i= 0; i < 7; i++ ){
//       if(this.table[i]){
//       this.table[i] += y;
//       }
//     }
    
//   }
// }
// function hasmap(query, string){
//   myTable = new HashClass();
//   for(let i = 0; i<query.length; i++){
//     if(query[i] === "insert"){
//       myTable.insert(string[i][0], string[i][1])
//     }
//     if(query[i] === "get"){
//       myTable.get(string[i])
//     }
//     if(query[i] === "addToKey"){
//       myTable.addToKey(string[i])
//     }
//     if(query[i] === "addToValue"){
//       myTable.addToValue(string[i])
//     }
    

//   }
//   console.log(myTable.table);
//   console.log(`get count sum is ${myTable.count}`)
// }

// hasmap(["insert","addToValue","addToKey","insert","get","get"],[[1,200],[2],[3],[5,100],[4],[5]])


/// Mutate array solution
// let a = [1,2,3,4,5,6,7,8];
// len = a.length;
// let b= [];
// b.push(a.shift())
// for(let i = 0; i<len -1; i++){
//   if(i%2 === 0){
//     b.push(a.pop())
//   }else(
//     b.push(a.shift())
//   )
// }
// console.log(`b = ${b}`)





// function rotateImage(a) {
//     flipDiagonal(a);
//     reverseRow(a);
//     console.log(`rotated ${a}`)
//     return a
// }
// function flipDiagonal(a){
//     for(let i = 0; i m< a.length; i++){
//         for(let j = i; j < a[0].length; j++){
//            let temp = a[i][j];
//             a[i][j] = a[j][i];
//             a[j][i] = temp;
//         }
//     }
    
//     return a;
// }
// function reverseRow(a){
//     for(let i = 0; i<a.length; i++){
//         a[i].reverse();
//     }
//     return a;
// }

