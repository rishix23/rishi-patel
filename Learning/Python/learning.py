
class Person:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight


person = Person("Rishi", "24", "140")

print(person.name, person.age, person.weight)
    
# Big O

# Array
nums = [1, 2, 3]
nums.append(4)    # push to end
nums.pop()        # pop from end
nums[0]           # lookup
nums[1]
nums[2]


# HashMap / Set
hashMap = {}
hashMap["key"] = 10     # insert
print("key" in hashMap) # lookup
print(hashMap["key"])   # lookup
hashMap.pop("key")      # remove
