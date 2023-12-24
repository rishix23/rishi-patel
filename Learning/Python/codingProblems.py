def topKFrequent(self, nums, k):
    map = {1: "test"}
    for num in nums:
        if num in map:
            print("exists")
        else:
            map[num] = num


nums = [1, 1, 1, 2, 2, 3]
topKFrequent("", nums, 2)

nums = [1,2,3,4]
def twoSum(nums, target):


