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
# def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
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


# MINIMUM SUB ARRAY - Time - o(n) - Space -
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
