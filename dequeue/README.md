# Deques Data Structure

A **deque**, also known as a double-ended queue, is an ordered collection of items similar to the queue. It has two ends, a front and a rear, and the items remain positioned in the collection. What makes a deque different is the unrestrictive nature of adding and removing items. New items can be added at either the front or the rear. Likewise, existing items can be removed from either end. In a sense, this hybrid linear structure provides all the capabilities of stacks and queues in a single data structure.

### Deque - Abstract Data Type
The deque abstract data type is defined by the following structure and operations. A deque is structured, as described above, as an ordered collection of items where items are added and removed from either end, either front or rear. The deque operations are given below.

1. `Deque()` creates a new deque that is empty. It needs no parameters and returns an empty deque.
2. `add_front(item)` adds a new item to the front of the deque. It needs the item and returns nothing.
3. `add_rear(item)` adds a new item to the rear of the deque. It needs the item and returns nothing.
4. `remove_front()` removes the front item from the deque. It needs no parameters and returns the item. The deque is modified.
5. `remove_rear()` removes the rear item from the deque. It needs no parameters and returns the item. The deque is modified.
6. `is_empty()` tests to see whether the deque is empty. It needs no parameters and returns a boolean value.
7. `size()` returns the number of items in the deque. It needs no parameters and returns an integer.

As an example, if we assume that d is a deque that has been created and is currently empty, the table below shows the results of a sequence of deque operations.

Deque Operation |	Deque Contents|	Return Value
------|-------------|--------
d.is_empty()|	[]	|True
d.add_rear(4)|	[4]	|
d.add_rear('dog')|	['dog', 4]|
d.add_front('cat')|	['dog', 4, 'cat']|	
d.add_front(True)|	['dog', 4,'cat', True]|
d.size()|	['dog', 4, 'cat', True]	|4
d.is_empty()|	['dog', 4, 'cat', True]|	False
d.add_rear(8.4)|	[8.4, 'dog', 4, 'cat',True]|	
d.remove_rear()|	['dog', 4, 'cat', True]|	8.4
d.remove_front()|	`['dog', 4, 'cat']|	True


#### Applications of Deueue:
Since Deque supports both stack and queue operations, it can be used as both. The Deque data structure supports clockwise and anticlockwise rotations in O(1) time which can be useful in certain applications.

### Learning Resources
#### Articles:
1. [Implementation of Dequeue](https://cppsecrets.com/users/143511597102105107104971105048484864103109971051084699111109/C00-Program-to-Implement-Dequeue.php).
2. [Dequeue GFG tutorial](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/)

#### Video Tutorials:
1. [Dequeue - Concept](https://www.youtube.com/watch?v=pqg0SOPRlJ4)
2. [Dequeue - Data Structure by Gaurav Sen](https://www.youtube.com/watch?v=5VDQxLAlfu0)
3. [Introduction to Double Ended Queues](https://www.youtube.com/watch?v=j3rvizohd0I)

### Learn by Implementing
Try to implement these things:
1. **Implement Dequeue**
   1. [Solution in C++](https://www.geeksforgeeks.org/deque-cpp-stl/)
   2. [Solution in Java](https://www.geeksforgeeks.org/deque-interface-java-example/)
   3. [Solution in Python](https://www.geeksforgeeks.org/deque-in-python/)
2. **Implement Dequeu using circular array** => [Solution](https://www.geeksforgeeks.org/implementation-deque-using-circular-array/)


### Challenge Questions
Try it on your own first:
1. [Valeriy and Deque](https://codeforces.com/problemset/problem/1179/A)
2. [Denethor's Decryption of Dequeue permutations](https://www.codechef.com/problems/DQPERMS)
