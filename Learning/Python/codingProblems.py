## FINISH PROBLEM - BINARY SEARCH
# def searchInRotatedArray(nums, target):
#     L = 0
#     R = len(nums) - 1
#     M = (L + R) // 2

#     print(nums[L], nums[M], nums[R])

#     if target == nums[M]:
#         return M

#     if nums[M] >= nums[R] and target <= nums[R]:
#         print("right side looking")
#         L = M + 1

#         while L <= R:
#             M = (L + R) // 2
#             if target > nums[M]:
#                 L = M + 1
#             elif target < nums[M]:
#                 R = M - 1
#             else:
#                 return M

#     elif nums[M] >= nums[L] and target >= nums[L]:
#         print("left side looking")
#         R = M - 1
#         while L <= R:
#             M = (L + R) // 2
#             if target > nums[M]:
#                 L = M + 1
#             elif target < nums[M]:
#                 R = M - 1
#             else:
#                 return M

#     if target == nums[M]:
#         return M
#     else:
#         return -1
# nums = [1, 2, 3, 4, 5, 6]
# target = 4

# print(searchInRotatedArray(nums, target))


# CONTAINS NEARBY DUPLICATE SLIDING WINDOW - Time o(n) - Space o(n)
# def containsNearbyDuplicate(nums, k):
#     k = k + 1
#     L = 0

#     window = set()

#     for R in range(len(nums)):
#         if R - L + 1 > k:
#             window.remove(nums[L])
#             L += 1
#         if nums[R] in window:
#             return True
#         else:
#             window.add(nums[R])
# # 19:45
# # 19:55
# nums = [1, 2, 4, 2]
# k = 2
# containsNearbyDuplicate(nums, k)


# MINIMUM SUB ARRAY - Time: o(n) Space: COMPLETE SPACE ANALYSIS
# def minSubArrayLen(self, target: int, nums: List[int]) -> int:
#     L = 0
#     length = float(inf)
#     totalSum = 0

#     for R in range(len(nums)):
#         totalSum += nums[R]
#         while totalSum >= target:
#             currentLength = R - L + 1
#             length = min(length, currentLength)
#             totalSum -= nums[L]
#             L += 1
#     if length == float(inf):
#         return 0
#     else:
#         return length

# 23:48
# 12:01
# target = 7
# nums = [2,3,1,2,4,3]
# minSubArrayLen(target, nums)

# prices = [7, 1, 5, 3, 6, 4]

## BEST TIME TO BUY AND SELL STOCK - Time: o(n) Space: o(1)
# def maxProfit(prices):
#     L = 0
#     R = 1
#     maxProfit = 0

#     while R < len(prices):
#         if prices[L] < prices[R]:
#             currentProfit = prices[R] - prices[L]
#             maxProfit = (maxProfit, currentProfit)
#         else:
#             L = R
#         R += 1
#     return maxProfit


# maxProfit(prices)

## LENGTH OF LONGEST SUBSTRING (Sliding Window) - Time: o(n) Space: o(min(n, m))
# def lengthOfLongestSubstring(s):
#     s = list(s)

#     hashMap = {}
#     maxLength = 0
#     L = 0

#     for R in range(len(s)):
#         if s[R] not in hashMap:
#             hashMap[s[R]] = R
#             maxLength = max(maxLength, (R - L) + 1)
#         else:  # duplicate found (check if the duplicate letter is in front of L - update L to this new spot)
#             if hashMap[s[R]] >= L:
#                 L = hashMap[s[R]] + 1
#             else:  # the duplicate found is behind L, so just get the max length
#                 maxLength = max(maxLength, (R - L) + 1)
#             hashMap[s[R]] = R
#     return maxLength


# lengthOfLongestSubstring(s)

## CHECK INCLUSION - NEEDS COMPLETING
# s1 = "ccc"
# s2 = "cbac"

# def checkInclusion(s1, s2):
#     s1 = list(s1)
#     target_length = len(s1)
#     hashMap = {}

#     L = 0
#     for R in range(len(s2)):
#         if s2[R] in s1:
#             if s2[R] not in hashMap:
#                 hashMap[s2[R]] = R
#                 if (R - L) + 1 == target_length:
#                     print("true")
#             else:
#                 if L <= hashMap[s2[R]]:
#                     L = hashMap[s2[R]] + 1
#                     hashMap[s2[R]] = R
#         else:
#             L = R + 1

#     print(hashMap)


# checkInclusion(s1, s2)


# NUMBER OF SUBARRAYS (Sliding Window) - Time: o(n)  Space: o(1)
# def numOfSubarrays(arr, k, threshold):
#     count = 0
#     totalSubArrays = 0

#     L = 0

#     for R in range(len(arr)):
#         if R - L + 1 < k:
#             count += arr[R]
#         elif R - L + 1 == k:
#             count += arr[R]
#             if count / k >= threshold:
#                 totalSubArrays += 1
#             count -= arr[L]
#             L += 1

#     return totalSubArrays
# arr = [2,2,2,2,5,5,5,8]
# k = 3
# threshold = 4


# target = 2

# matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]


# def searchMatrix(matrix, target):
#     T = 0
#     B = len(matrix) - 1

#     while T <= B:
#         M = (T + B) // 2
#         if target < matrix[M][0]:
#             B = M - 1
#         elif target > matrix[M][len(matrix[M]) - 1]:
#             T = M + 1
#         break

#     L = 0
#     R = len(matrix[row]) - 1

#     while L <= R:
#         M = (L + R) // 2
#         if target < matrix[row][M]:
#             R = M - 1

#         elif target > matrix[row][M]:
#             L = M + 1

#         else:
#             return True

#     return False


# searchMatrix(matrix, target)


# def subsets(nums):
#     res = []
#     curComb = []

#     def dfs(, k):
#         if len(curComb) == k:
#             return res.append(curComb.copy())
#         if i > n:
#             return

#         for j in range(i, n+1):
#             curComb.append(nums[i])
#             dfs(j+1)
#             curComb.pop()

#         subset.pop()
#         dfs( + 1)

#     dfs(0)

#     print(res)


# import heapq

# nums = [2, 2, 4, 4]
# k = 2

# for num in nums[:k]:
#     print(num)
# distances = []
# heapq.heapify(distances)
# for num in nums:
#     second_value = num * 3
#     heapq.heappush(distances, (second_value, num))

# print(distances)
# print(distances, distances[1])

# from collections import deque

# q = deque()

# q.append((1, 2))

# item = q.popleft()

# print(item[0], item[1])


# def bestSum(targetSum, numbers, memo=None):
#     if memo is None:
#         memo = {}

#     if targetSum in memo:
#         print(f"Returning memoized result for target {targetSum}: {memo[targetSum]}")
#         return memo[targetSum]
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     print(f"Attempting to find the best sum for target {targetSum}")

#     shortest_combination = None

#     for num in numbers:
#         remainder = targetSum - num
#         print(f"Current number: {num}, Remainder: {remainder}")

#         result = bestSum(remainder, numbers, memo)

#         if result is not None:
#             combination = result.copy()  # Make a copy of the result
#             combination.append(num)
#             print(f"Combination found: {combination}")

#             if shortest_combination is None or len(combination) < len(
#                 shortest_combination
#             ):
#                 shortest_combination = combination
#                 print(
#                     f"New shortest combination for target {targetSum}: {shortest_combination}"
#                 )

#     memo[targetSum] = shortest_combination
#     print(f"Memoizing result for target {targetSum}: {shortest_combination}")
#     return memo[targetSum]


# # Example usage:
# # print(bestSum(7, [5, 3, 4, 7]))  # Output: [7] or [4, 3]
# print(bestSum(8, [1, 4, 8]))  # Output: [3, 5] or [5, 3]


# # 2,2,2,2 -> 0 ([] -> [2] -> [2,2] -> [2,2,2] -> [2,2,2,2])
# # 8 -> 0 ([] -> [8])


# def bestSum(targetSum, nums, memo):
#     if targetSum in memo:
#         return memo[targetSum]
#     if targetSum == 0:
#         return []
#     if targetSum < 0:
#         return None

#     shortestCombination = None

#     for num in nums:
#         remainder = targetSum - num
#         reamainderResult = bestSum(remainder, nums, memo)
#         if reamainderResult is not None:
#             combination = reamainderResult.copy()
#             combination.append(num)
#             if shortestCombination is None or len(combination) < len(
#                 shortestCombination
#             ):
#                 shortestCombination = combination
#                 memo[targetSum] = shortestCombination

#     return shortestCombination


# print(bestSum(100, [1, 2, 5, 25], {}))


# # List of strings
# string_list = ["abc", "def", "abcde", "f", "abcdef"]

# # Given string
# given_string = "abcdef"

# string_list = ["a", "aa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaaaaaaaaaaa"]

# # Given string
# given_string = "aa"


# def canConstruct(string, string_list, memo):
#     if string in memo:
#         return memo[string]
#     if len(string) < 1:
#         return True

#     # Iterate through the list and find the matching prefix
#     for s in string_list:
#         if string[: len(s)] == s:
#             suffix = string[len(s) :]
#             if canConstruct(suffix, string_list, memo):
#                 memo[string] = True
#                 return True

#     memo[string] = False
#     return False


# print(canConstruct(given_string, string_list, {}))


# def countConstruct(string, string_list, memo):
#     if string in memo:
#         return memo[string]
#     if len(string) < 1:
#         return 1

#     count = 0

#     # Iterate through the list and find the matching prefix
#     for s in string_list:
#         if string[: len(s)] == s:
#             suffix = string[len(s) :]
#             numOfWays = countConstruct(suffix, string_list, memo)
#             count += numOfWays

#     memo[string] = count
#     return count

# print(countConstruct(given_string, string_list, {}))


# List of strings
# string_list = ["ab", "abc", "cd", "def", "abcd", "ef", "c"]

# # Given string
# given_string = "abcdef"


# def allConstruct(string, string_list, memo):
#     if string in memo:
#         return memo[string]
#     if len(string) == 0:
#         return [[]]
#     print("string is:", string)

#     all_constructions = []
#     for s in string_list:
#         if string[: len(s)] == s:
#             suffix = string[len(s) :]
#             result = allConstruct(suffix, string_list, memo)
#             if result is not None:
#                 print("result currently is:", result)
#                 for combination in result:
#                     combination = combination.copy()
#                     combination.append(s)
#                     print("combination:", combination)
#                     all_constructions.append(combination)
#                     print("all_contructions:", all_constructions, "for string:", string)

#     memo[string] = all_constructions
#     return all_constructions


# print(allConstruct(given_string, string_list, {}))

# s = "leetcode"
# # wordDict = ["leet", "code"]

# # for string in wordDict:
# #     if s[: len(string)] == string:
# #         print("True:", s[: len(string)])
# #         print("Rest is:", s[len(string) :])

# for index, value in enumerate(s):
#     print(index)

for j in range(2, 3):
    print(j)
