// /// sum an array

// const arr = [1, 2, 3, 4, 5];
// function simpleSumArray(array) {
//   let sumValue = 0;
//   array.forEach((item) => {
//     sumValue = sumValue + item;
//   });
//   return sumValue;
// }

// finalSum = simpleSumArray(arr);
// console.log(finalSum);

// /// award points for person who's number is higher at same index in array

// a = [5,6,7]
// b = [3,6,10]
// output [1,1]
// function compareTriplets(a, b) {
//     let alicePoints = 0
//     let bobPoints = 0
//     a.forEach((item, i) => {
//         if(item > b[i]) {
//             alicePoints = alicePoints + 1
//         } else if (item < b[i]) {
//             bobPoints = bobPoints +1
//         } else {
//             console.log("No points awarded")
//         }
//     })
//     const finalPoints = [alicePoints, bobPoints]
//     return finalPoints
// }

// /// diagonal difference returning absolute value as int

// function diagonalDifference(arr) {
//     let leftToRight = 0
//     let rightToLeft = 0
//     for (let i=0; i < arr.length; i++) {
//         for(let j = 0; j < arr[i].length; j++) {
//             if ((i == 0 && j == 0) || (i == 2 && j == 2)) {
//                 leftToRight = leftToRight + arr[i][j]
//             } else if (i == 1 && j == 1){
//                 leftToRight = leftToRight + arr[i][j]
//                 rightToLeft = rightToLeft + arr[i][j]
//             } else if ((i == 0 && j == 2) || (i == 2 && j == 0)) {
//                 rightToLeft = rightToLeft + arr[i][j]
//         }
//     }
//     }

//     let finalInt = 0
//     if(leftToRight > rightToLeft) {
//         finalInt = leftToRight - rightToLeft
//     } else {
//         finalInt = rightToLeft - leftToRight
//     }
//     return finalInt
// }

// /// reverse a string
// var string = "Hello";

// function reverseString(string) {
//     const reversedChars = []
//     var reversedString = "";
//     for(let i = string.length - 1; i >=0; i--){
//         reversedChars.push(string[i])
//     }
//     reversedString = reversedChars.join("")

//     return reversedString
// }

// console.log(reverseString(string))

// /// find vowels

// function findVowels(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   var count = 0;

//   for (i = 0; i < string.length; i++) {
//     for (j = 0; j < vowels.length; j++) {
//       if (string[i] == vowels[j]) {
//         count++
//       }
//     }
//   }
//   return count
// }

// console.log(findVowels("hello"))

// check for anagrams

// const str1 = "listen";
// const str2 = "silent";

// // Sort the strings and compare them
// const sortedStr1 = str1.split("").sort().join("");
// const sortedStr2 = str2.split("").sort().join("");

// if (sortedStr1 === sortedStr2) {
//   console.log("The strings are anagrams");
// } else {
//   console.log("The strings are not anagrams");
// }

// const splitString = str1.split("")

// console.log(splitString.sort().join(""))

// ///convert string to int vice versa

// const intString = "123"
// const intNumber = 4543142

// const convertedStringtoInt = parseInt(intString)
// console.log(convertedStringtoInt)

// const convertedIntToString = intNumber.toString()
// console.log(convertedIntToString)

// ///reverse words in a sentence

// const reverseWords = (string) => {
//   words = string.split(" ");
//   let reversedArr = [];

//   for (let i = words.length - 1; i >= 0; i--) {
//     reversedArr.push(words[i]);
//   }

//   return reversedArr.join(" ");
// };

// console.log(reverseWords("hi, my name is rishi"));

// /// count words in string
// function countWords(str) {
//   // Remove leading/trailing spaces and split the string into an array of words
//   var words = str.trim().split(" ");

//   // Count the number of words
//   return words.length;
// }

// console.log(countWords("Hello, how are you?"));

///capitalize first letter

// function capitalizeFirstLetter(string) {
//   var wordsArr = string.split(" ");
//   var finalStringArr = [];
//   var updatedWord = "";

//   for (let i = 0; i < wordsArr.length; i++) {
//     let word = wordsArr[i];
//     for (let j = 0; j < word.length; j++) {
//       if (j == 0) {
//         updatedWord += word[j].toUpperCase();
//       } else {
//         updatedWord += word[j].toLowerCase();
//       }
//     }
//     finalStringArr.push(updatedWord);
//     updatedWord = "";
//   }
//   return finalStringArr.join(" ");
// }

// console.log(capitalizeFirstLetter("I love you friend"));

// //remove duplicates

// const removeDuplicates = (string) => {
//   let string1 = string.split(" ");
//   console.log(string1);
//   result = [];

//   for (i = 0; i < string1.length; i++) {
//     if (!result.includes(string1[i])) {
//       //result += string1[i];
//       result.push(string1[i]);
//     }
//   }
//   return result.join(" ");
// };

// console.log(removeDuplicates("Test Test Te"));

// removeDuplicateChars(string)

/////// Interview Questions ///////
// const users = [
//   {
//     id: 1,
//     name: "Rishi",
//     isActive: true,
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "John",
//     isActive: true,
//     age: 30,
//   },
//   {
//     id: 3,
//     name: "Tim",
//     isActive: false,
//     age: 22,
//   },
// ];

// // get names
// const userNames = users.map((user) => user.name);
// console.log(userNames);

// // get only active users
// const activeUsers = users.filter((user) => user.isActive).map((user) => user.name);
// console.log(activeUsers);

// // check user exists in array of objects
// const checkUserExists = (arr, name) => arr.some((user) => user.name === name);
// console.log(checkUserExists(users, "Rishi"));

// // remove duplicate value from array
// let array1 = [1, 1, 3];
// const removeDuplicates = (arr) => new Set(arr);
// console.log(removeDuplicates(array1));
// console.log(array1);

// // sort array
// array = [4, 2, 5, 3, 1];
// const sortedArray = (arr) => arr.sort((a, b) => b - a);
// console.log(sortedArray(array));

// // /// sort array of objects by authors last name
// const books = [
//   {
//     name: "Gym Book",
//     author: "Rishi Patel",
//   },
//   {
//     name: "Cooking Book",
//     author: "John Anderson Jackson",
//   },
//   {
//     name: "Fun Book",
//     author: "Joe Rogan",
//   },
// ];

// const sortBooks = (bookList) => {
//   bookList.sort((bookAuthor1, bookAuthor2) => {
//     authorName1 = bookAuthor1.author.split(" ").pop();
//     authorName2 = bookAuthor2.author.split(" ").pop();
//     return authorName1 < authorName2 ? -1 : 1;
//   });
// };

// console.log(books);
// sortBooks(books);
// console.log(books);

// // hoisting
// var foo;
// console.log(foo);
// foo = 1;

// // closures
// const privateSecret = () => {
//   let secret = "This is a closure value";

//   return () => secret;
// };

// const accessSecret = privateSecret();

// console.log(accessSecret());

// remove duplicate number from an array

// const numArr = [1, 2, 3, 1];

// const removeDuplicateNum = (numArr) => {
//   let count = 0;
//   var currentItem
//   for(i=0; i < numArr.length; i++) {
//     if
//   }
// };

// CONTAINS DUPLICATE
// arr = [1,2,2,3,4]
// var containsDuplicate = function(nums) {
//     hashMap = {}
//     for(i=0; i < nums.length; i++) {
//         if(hashMap[nums[i]]) {
//             return true
//         }
//         else
//         {
//             hashMap[nums[i]] = true
//         }
//     }
//     return false
// }
// containsDuplicate(arr);

// VALID ANAGRAM
// var isAnagram = function (s, t) {
//   s = s.split("").sort().join("");
//   t = t.split("").sort().join("");
//   if (s === t) {
//     return true;
//   } else {
//     return false;
//   }
// };
// isAnagram("acb", "bdca");

// TWO SUM O(n^2)
// nums = [3243, 4, 123123, 123123, 4, 300, 90, 5];
// target = 8;
// var twoSum = function (nums, target) {
//   sumArr = [];
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         sumArr.push([i], [j]);
//         return sumArr;
//       }
//     }
//   }
//   return false;
// };
// twoSum(nums, target)

// TWO SUM USING HASHMAP O(n)
// arr = [12, 4, 8, 5];
// target = 9;
// var twoSum = function (arr, target) {
//   finalArr = [];
//   hashMap = new Map();
//   for (i = 0; i < arr.length; i++) {
//     if (hashMap.get(target - arr[i]) == undefined) {
//       hashMap.set(arr[i], i);
//     } else {
//       finalArr.push(hashMap.get(target - arr[i]), i);
//       console.log(finalArr);
//     }
//   }
// };
// twoSum(arr, target);

// GROUP ANAGRAM
// strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var groupAnagrams = function (strs) {
//   hashMap = new Map();
//   finalArr = [];
//   newStrs = strs.map((x) => x.split("").sort().join(""));
//   for (i = 0; i < newStrs.length; i++) {
//     if (hashMap.get(newStrs[i]) == undefined) {
//       hashMap.set(newStrs[i], [strs[i]]);
//     } else {
//       hashMap.get(newStrs[i]).push(strs[i]);
//     }
//   }
//   for (let [key, value] of hashMap.entries()) {
//     finalArr.push(value);
//   }
//   console.log(finalArr);
// };
// groupAnagrams(strs);

// TOP K FREQUENT ELEMENTS (REWORK TO ACHIEVE BETTER THAN NlogN)
// nums = [3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1];
// k = 2;
// var topKFrequent = function (nums, k) {
//   hashMap = new Map();
//   for (i = 0; i < nums.length; i++) {
//     if (hashMap.get(nums[i]) == undefined) {
//       hashMap.set(nums[i], 1);
//     } else {
//       hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
//     }
//   }
//   sortedArr = Array.from(hashMap).sort((a, b) => b[1] - a[1]);
//   finalArr = [];
//   for (i = 0; i < k; i++) {
//     finalArr.push(sortedArr[i][0]);
//   }
//   console.log(finalArr);
//   return finalArr;
// };
// topKFrequent(nums, k);

// PREFIX SUM CALCULATION
// arr = [1, 3, -5, 1, -2, 3, -4];

// prefixSumArr = [];
// currentSum = 0;
// for (i = 0; i < arr.length; i++) {
//   currentSum += arr[i];
//   prefixSumArr.push(currentSum);
// }

// console.log(prefixSumArr);
// var calculatePrefixSum = function (l, r) {
//   prefixRight = prefixSumArr[r];
//   prefixLeft = l = 0 ? 0 : prefixSumArr[l - 1];

//   return prefixRight - prefixLeft;
// };
// console.log(calculatePrefixSum(3, 4));

// PRODUCT EXCECPT SELF
// nums = [1, 2, 3, 4];
// var productExceptSelf = function (nums) {
//   leftArr = [];
//   rightArr = [];
//   finalArr = [];
//   let currentProduct = 1;

//   for (let i = 0; i < nums.length; i++) {
//     leftArr[i] = currentProduct;
//     currentProduct *= nums[i];
//   }
//   console.log(leftArr);

//   currentProduct = 1;

//   for (let j = nums.length - 1; j >= 0; j--) {
//     rightArr[j] = currentProduct;
//     currentProduct *= nums[j];
//   }
//   console.log(rightArr);

//   for (i = 0; i < leftArr.length; i++) {
//     finalArr[i] = leftArr[i] * rightArr[i];
//   }
//   return finalArr;
// };
// productExceptSelf(nums);

// IS PALINDROME //BETTER EFFCIENCY?
// var isPalindrome = function (s) {
//   arr = s
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .replaceAll(" ", "")
//     .toLowerCase()
//     .split("");
//   console.log(arr);

//   l = 0;
//   r = arr.length - 1;

//   while (l < r) {
//     if (arr[l] == arr[r]) {
//       l += 1;
//       r -= 1;
//     } else {
//       console.log(arr[l] + " doesnt equal " + arr[r]);
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPalindrome("a"));

// LONGEST CONSECUTIVE o(n)
// nums = [50, 5, 23, 6743, 234, 6345, -1, 4, 3, -2, 434, -4, 2, 1, 9, 800, -5];

// var longestConsecutive = function (nums) {
//   if (nums == null || nums.length === 0) return 0;

//   nums = new Set(nums);
//   console.log(nums);
//   max = 0;

//   for (num of nums) {
//     if (nums.has(num - 1)) continue; // make sure starting from the beginning of sequence

//     currentNumber = num;
//     currentMax = 1;

//     while (nums.has(currentNumber + 1)) {
//       currentNumber++;
//       currentMax++;
//     }
//     max = Math.max(max, currentMax);
//   }

//   return max;
// };

// var longestConsecutive = function (nums) {
//   set = new Set(nums);
//   nums = Array.from(set);
//   nums = nums.sort((a, b) => a - b);

//   consecutiveArr = [];
//   maxSize = 0;
//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] - 1 == nums[i - 1] || i == 0) {
//       consecutiveArr.push(nums[i]);
//       if (i == nums.length - 1 && consecutiveArr.length > maxSize) {
//         maxSize = consecutiveArr.length;
//       }
//     } else {
//       if (consecutiveArr.length > maxSize) {
//         maxSize = consecutiveArr.length;
//       }
//       consecutiveArr = [];
//       consecutiveArr.push(nums[i]);
//     }
//   }
//   return maxSize;
// };

longestConsecutive(nums);

// // Creating a hash set using objects
// const hashSet = {};

// // Adding elements to the hash set
// hashSet["apple"] = true;
// hashSet["banana"] = true;
// hashSet["orange"] = true;
// hashSet["test"] = "hello";

// delete hashSet["banana"];
// // Checking for membership
// console.log(hashSet); // true

// Creating a hash set using Maps
// let hashSetNew = new Map();

// // // Adding elements to the hash set
// hashSetNew.set(0, 2);
// hashSetNew.set(1, 1);
// hashSetNew.set(2, 5);

// hashSetNew.get("array").push(2);

// console.log(hashSetNew.get("array"));

// console.log(hashSetNew.get("array"));

// console.log(hashSetNew.get("apple"));