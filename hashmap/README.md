# HashMaps Data Structure
**Other names**: hash, hash map, map, unordered map, dictionary
A **hash table** organizes data so you can quickly look up values for a given key.

### Strengths:
1. **Fast lookups**. Lookups take O(1)O(1) time on average.
2. **Flexible keys**. Most data types can be used for keys, as long as they're hashable.
### Weaknesses:
1. **Slow worst-case lookups.** Lookups take O(n)O(n) time in the worst case.
2. **Unordered.** Keys aren't stored in a special order. If you're looking for the smallest key, the largest key, or all the keys in a range, you'll need to look through every key to find it.
3. **Single-directional lookups.** While you can look up the value for a given key in O(1)O(1) time, looking up the keys for a given value requires looping through the whole dataset—O(n)O(n) time.
4. **Not cache-friendly**. Many hash table implementations use linked lists, which don't put data next to each other in memory.

### Hash maps are built on arrays
Arrays are pretty similar to hash maps already. Arrays let you quickly look up the value for a given "key" . . . except the keys are called "indices," and we don't get to pick them—they're always sequential integers (0, 1, 2, 3, etc).

Think of a hash map as a "hack" on top of an array to let us use flexible keys instead of being stuck with sequential integer "indices."

All we need is a function to convert a key into an array index (an integer). That function is called a hashing function.

To look up the value for a given key, we just run the key through our hashing function to get the index to go to in our underlying array to grab the value.

### When hash table operations cost `O(n)` time
#### Hash collisions
If all our keys caused hash collisions, we'd be at risk of having to walk through all of our values for a single lookup (in the example above, we'd have one big linked list). This is unlikely, but it could happen. That's the worst case.

#### Dynamic array resizing
Suppose we keep adding more items to our hash map. As the number of keys and values in our hash map exceeds the number of indices in the underlying array, hash collisions become inevitable.

To mitigate this, we could expand our underlying array whenever things start to get crowded. That requires allocating a larger array and rehashing all of our existing keys to figure out their new position `O(n)` time.

### Learning Resources
#### Articles:
1. [Internal Working of HashMap](https://www.geeksforgeeks.org/internal-working-of-hashmap-java/).
2. [Basics of Hash Tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
2. [Dictionaries](hhttps://en.wikibooks.org/wiki/A-level_Computing/AQA/Paper_1/Fundamentals_of_data_structures/Dictionaries#:~:text=A%20dictionary%20is%20a%20general,storing%20a%20group%20of%20objects.&text=A%20dictionary%20is%20also%20called,%3A%20a%20key%2Dvalue%20store.)

#### Video Tutorials:
1. [Data Structure: Hash Tables](https://www.youtube.com/watch?v=shs0KM3wKv8)
2. [Hashing GFG tutorial](https://www.youtube.com/watch?v=wWgIAphfn2U&list=PLqM7alHXFySGwXaessYMemAnITqlZdZVE)
3. [How to use Hashmaps in C++?](https://www.youtube.com/watch?v=oGqjEx6hrI8)

### Learn by Implementing
Try to implement these things:
1. **Problem statement**
Given an input_list and a target, return the pair of indices in the list that holds the values which sum to the target. For example,
`input_list = [1, 5, 9, 7]` and `target = 8`, the answer would be `[0, 3]`
__Note__:
    1. The best solution takes O(n) time. This means that you cannot traverse the given list more than once. Hint - Think of an additional data structure that you should use here.
    2. You can assume that the list does not have any duplicates.
=> [Solution](https://www.techiedelight.com/find-pair-with-given-sum-array/)

2. **Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.**
```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```
=> [Solution](https://leetcode.com/problems/longest-consecutive-sequence/discuss/?currentPage=1&orderBy=hot&query=)


### Challenge Questions
Try it on your own first:
1. [Ancient Problems Require Modern Solutions](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/practice-problems/algorithm/old-problems-require-modern-solutions-66fc732c/)
2. [Little Elephant and Music](https://www.codechef.com/problems/LEMUSIC)
3. [DZY Loves Hash](https://codeforces.com/problemset/problem/447/A)
