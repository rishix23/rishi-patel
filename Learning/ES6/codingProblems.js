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

// IS PALINDROME // BETTER EFFCIENCY?
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

// LONGEST CONSECUTIVE O(n)
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

// LONGEST CONSECUTIVE O(n log n) // original solution
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

// longestConsecutive(nums);

// 167. Two Sum II - Input Array Is Sorted
// nums = [2, 3, 4];
// var twoSum = function (numbers, target) {
//   l = 0;
//   r = numbers.length - 1;
//   finalArr = [];

//   while (l < r) {
//     if (numbers[l] + numbers[r] == target) {
//       finalArr.push(l + 1);
//       finalArr.push(r + 1);
//     }
//     if (numbers[l] + numbers[r] > target) {
//       r--;
//     } else {
//       l++;
//     }
//   }
//   return finalArr;
// };
// twoSum(nums, 6);

// -4 + 2 + (target - L+R) == target

// THREE SUM - COMPLETTION REQUIRED
// nums = [-2,-1,-1,0,1,2,3,4]
// function threeSum(nums) {
// 	const results = []

// 	if (nums.length < 3) return results
// 	nums = nums.sort((a, b) => a - b)

// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {

// 		if (nums[i] > target) break

// 		// we don't want repeats, so skip numbers we've already seen
// 		if (i > 0 && nums[i] === nums[i - 1]) continue

// 		// `j` represents the "middle" element between `i` and `k`.
// 		// we will increment this up through the array while `i` and `k`
// 		// are anchored to their positions. we will decrement `k` for
// 		// for each pass through the array, and finally increment `i`
// 		// once `j` and `k` meet.
// 		let j = i + 1

// 		// `k` represents the "right" most element
// 		let k = nums.length - 1

// 		// to summarize our setup, we have `i` that starts at the beginning,
// 		// `k` that starts at the end, and `j` that races in between the two.
// 		//
// 		// note that `i` is controlled by our outer for-loop and will move the slowest.
// 		// in the meantime, `j` and `k` will take turns inching towards each other depending
// 		// on some logic we'll set up below. once they collide, `i` will be incremented up
// 		// and we'll repeat the process.

// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			// if we find the target sum, increment `j` and decrement `k` for
// 			// other potential combos where `i` is the anchor
// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				// this is important! we need to continue to increment `j` and decrement `k`
// 				// as long as those values are duplicated. in other words, we wanna skip values
// 				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
// 				// [[-2,0,2], [-2,0,2]].
// 				//
// 				// (i'm not a fan of this part because we're doing a while loop as we're
// 				// already inside of another while loop...)
// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--

// 				// finally, we need to actually move `j` forward and `k` backward to the
// 				// next unique elements. the previous while loops will not handle this.
// 				j++
// 				k--

// 			// if the sum is too small, increment `j` to get closer to the target
// 			} else if (sum < target) {
// 				j++

// 			// if the sum is too large, decrement `k` to get closer to the target
// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}
// 	return result

// CONATIANER WITH MOST WATER - TIME: o(n) SPACE: o(1)
// height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// var maxArea = function (height) {
//   // need to check if the array has a length greater than else return 0 - done
//   // need to set pointers to left and right - done
//   // increment and decrement pointers based on which pointer is lower - done
//   // get the minimum between the two pointers then calculate the distance between the left and right pointers - done
//   // set a max area variable for each 2 sets of points - done
//   // update max area var whenever a new max area is calculated - done

//   if (height.length < 2) {
//     return 0;
//   }

//   L = 0;
//   R = height.length - 1;
//   maximumArea = 0;

//   while (L < R) {
//     minHeight = Math.min(height[L], height[R]);
//     distanceBetween = R - L;
//     currentMaxArea = minHeight * distanceBetween;
//     maximumArea = Math.max(maximumArea, currentMaxArea);
//     if (height[L] < height[R]) {
//       L++;
//     } else {
//       R--;
//     }
//   }
//   return maximumArea;
// };

// console.log(maxArea(height));

// VALID PARENTHESES - TIME: o(n) SPACE: o(1)
// s = "([}}])";
// var isValid = function (s) {
//   s = s.split("");
//   stack = [];

//   hashMap = new Map();

//   hashMap.set(")", "(");
//   hashMap.set("]", "[");
//   hashMap.set("}", "{");

//   if (s.length % 2 != 0) {
//     return false;
//   }

//   for (i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       stack.push(s[i]);
//     } else if (hashMap.get(s[i]) == stack[stack.length - 1]) {
//       stack.pop();
//     } else {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };

// isValid(s);

// DAILY TEMPERATURES - NEEDS REVIEW
// temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

// var dailyTemperatures = function (temperatures) {
//   result = Array(temperatures.length).fill(0);
//   stack = [];
//   for (i = temperatures.length - 1; i >= 0; i--) {
//     while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
//       stack.pop();
//     }

//     result[i] = stack[stack.length - 1] - i || 0;
//     console.log(result);

//     stack.push(i);
//   }
// };

// dailyTemperatures(temperatures);

// stack = [1, 2, 6];
// result = [1, 1, 4, 2, 1, 1, 0, 0];
// REVERSE POLISH NOTATION - TIME: o(n) SPACE: o(n) - MORE CONCISE?
// tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
// var evalRPN = function (tokens) {
//   stack = [];

//   for (i = 0; i < tokens.length; i++) {
//     if (tokens[i] === "+") {
//       secondElement = stack.pop();
//       firstElement = stack.pop();
//       value = +firstElement + +secondElement;
//       stack.push(value);
//       continue;
//     }
//     if (tokens[i] === "*") {
//       secondElement = stack.pop();
//       firstElement = stack.pop();
//       value = +firstElement * +secondElement;
//       stack.push(value);
//       continue;
//     }
//     if (tokens[i] === "/") {
//       secondElement = stack.pop();
//       firstElement = stack.pop();
//       value = +firstElement / +secondElement;
//       value = Math.trunc(value);
//       stack.push(value);
//       continue;
//     }
//     if (tokens[i] === "-") {
//       secondElement = stack.pop();
//       firstElement = stack.pop();
//       value = +firstElement - +secondElement;
//       stack.push(value);
//       continue;
//     }
//     stack.push(tokens[i]);
//   }

//   return stack[stack.length - 1];
// };

// console.log(evalRPN(tokens));

// BASEBALLGAME - TIME: o(n) SPACE: o(n) - DOUBLE CHECK THIS
// operations = ["5", "-2", "4", "C", "D", "9", "+", "+"];
// var calPoints = function (operations) {
//   stack = [];
//   sum = 0;

//   for (i = 0; i < operations.length; i++) {
//     if (operations[i] === "+") {
//       stack.push(+stack[stack.length - 2] + +stack[stack.length - 1]);
//       continue;
//     }
//     if (operations[i] === "D") {
//       stack.push(stack[stack.length - 1] * 2);
//       continue;
//     }
//     if (operations[i] === "C") {
//       stack.pop();
//       continue;
//     }
//     stack.push(operations[i]);
//   }
//   console.log(stack);
//   for (i = 0; i < stack.length; i++) {
//     sum += +stack[i];
//   }

//   return sum;
// };

// calPoints(operations);

// IS VALID SODUKU - NEEDS TO FINISH

// board = [
//   [".", ".", ".", ".", "5", ".", ".", "1", "."],
//   [".", "4", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//   ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//   [".", ".", "2", ".", "7", ".", ".", ".", "."],
//   [".", "1", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "2", ".", "9", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."],
// ];
// var isValidSudoku = function (board) {
//   // row
//   for (i = 0; i < board.length; i++) {
//     map = new Map();
//     for (j = 0; j < board[i].length; j++) {
//       if (board[i][j] != "." && map.get(board[i][j]) === undefined) {
//         map.set(board[i][j], 1);
//       } else {
//         if (board[i][j] != "." && map.get(board[i][j]) == 1) {
//           console.log("Duplicate found in row: " + board[i][j]);
//         }
//       }
//     }
//   }

//   // column
//   for (j = 0; j < board[0].length; j++) {
//     map = new Map();
//     for (i = 0; i < board.length; i++) {
//       if (board[i][j] != "." && map.get(board[i][j]) === undefined) {
//         map.set(board[i][j], 1);
//       } else {
//         if (board[i][j] != "." && map.get(board[i][j]) == 1) {
//           console.log("Duplicate found in column: " + board[i][j]);
//         }
//       }
//     }
//   }

//   // 3x3 matrix

// };

// isValidSudoku(board);

// BINARY SEARCH - DONE
// var search = function (nums, target) {
//   (L = 0), (R = nums.length - 1), (M = (L + R) / 2);

//   while (L <= R) {
//     M = Math.floor((L + R) / 2);

//     if (target > nums[M]) {
//       L = M + 1;
//     } else if (target < nums[M]) {
//       R = M - 1;
//     } else {
//       return M;
//     }
//   }
//   return -1;
// };

// SEARCH 2D Matrix - UNDERSTOOD, BUT NEED TO RETRY
// (matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ]),
//   (target = 3);
// var searchMatrix = function (matrix, target) {
//   T = 0;
//   B = matrix.length - 1;

//   while (T <= B) {
//     M = Math.floor((T + B) / 2);
//     if (target < matrix[M][0]) {
//       B = M - 1;
//     } else if (target > matrix[M][matrix[M].length - 1]) {
//       T = M + 1;
//     } else {
//       break;
//     }
//   }
//   if (!(T <= B)) {
//     return false;
//   } else {
//     L = 0;
//     R = matrix[0].length - 1;
//     while (L <= R) {
//       rowM = Math.floor((L + R) / 2);
//       if (target < matrix[M][rowM]) {
//         R = rowM - 1;
//       } else if (target > matrix[M][rowM]) {
//         L = rowM + 1;
//       } else {
//         return true;
//       }
//     }
//   }
//   return false
// };

// searchMatrix(matrix, target);

// GUESS NUMBER BINARY SEARCH - Time: - Space:
// var guessNumber = function (n) {
//   L = 1;
//   R = n;

//   while (L <= R) {
//     M = (L + R) / 2;
//     if (guess(M) == -1) {
//       R = M - 1;
//     } else if (guess(M) == 1) {
//       L = M + 1;
//     } else {
//       return M;
//     }
//   }
// };

// FIND MINIMUM NUMBER IN ROTATED ARRAY - logn - DOUBLE CHECK
// nums = [3, 4, 5, 1, 2];
// // nums = [1,2,3,4,5]

// var findMin = function (nums) {
//   L = 0;
//   R = nums.length - 1;

//   while (L < R) {
//     M = Math.floor((L + R) / 2);

//     if (nums[M] > nums[R]) {
//       L = M + 1;
//     } else {
//       R = M;
//     }
//   }

//   return nums[L];
// };

// target = 7;
// nums = [3, 4, 5, 6, 7, 1, 2];
// var search = function (nums, target) {

//   L = 0
//   R = nums.length - 1

// };
