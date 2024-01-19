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
# nums = [1, 2, 1, 1]
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
