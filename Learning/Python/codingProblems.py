nums = [1, 2, 3, 4, 5, 6]
target = 4


def searchInRotatedArray(nums, target):
    L = 0
    R = len(nums) - 1
    M = (L + R) // 2

    print(nums[L], nums[M], nums[R])

    if target == nums[M]:
        return M

    if nums[M] >= nums[R] and target <= nums[R]:
        print("right side looking")
        L = M + 1

        while L <= R:
            M = (L + R) // 2
            if target > nums[M]:
                L = M + 1
            elif target < nums[M]:
                R = M - 1
            else:
                return M

    elif nums[M] >= nums[L] and target >= nums[L]:
        print("left side looking")
        R = M - 1
        while L <= R:
            M = (L + R) // 2
            if target > nums[M]:
                L = M + 1
            elif target < nums[M]:
                R = M - 1
            else:
                return M

    if target == nums[M]:
        return M
    else:
        return -1


print(searchInRotatedArray(nums, target))
