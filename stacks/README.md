# Stack Data Structure

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be **LIFO**(Last In First Out) or **FILO**(First In Last Out).

### Inserting and deleting elements

Stacks have restrictions on the insertion and deletion of elements. Elements can be inserted or deleted only from one end of the stack i.e. from the `top`. The element at the top is called the `top` element. The operations of inserting and deleting elements are called `push()` and `pop()` respectively.

When the top element of a stack is deleted, if the stack remains non-empty, then the element just below the previous top element becomes the new top element of the stack.

For example, in the stack of trays, if you take the tray on the top and do not replace it, then the second tray automatically becomes the top element (tray) of that stack.

### Features of stacks

1. Dynamic data structures
2. Do not have a fixed size
3. Do not consume a fixed amount of memory
4. Size of stack changes with each `push()` and `pop()` operation. Each `push()` and `pop()` operation increases and decreases the size of the stack by , respectively.

### Learning Resources

#### Articles:
1. [Basics of Stack](https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/tutorial/).
2. [Circular Stack](https://www.c-sharpcorner.com/UploadFile/6f0898/the-circular-stack-an-advance-in-data-structure/)


#### Video Tutorials:
1. [Aditya Verma Stacks Playlist](https://www.youtube.com/watch?v=P1bAPZg5uaE&list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd)
2. [GFG Tutorial](https://www.youtube.com/watch?v=vZEuSFXSMDI&list=PLqM7alHXFySF7Lap-wi5qlaD8OEBx9RMV)


### Learn by Implementing
Try to implement these things using stacks:
1. **Implement a stack using array.** => [Solution](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)
2. **Implement a stack using linked-list.** => [Solution](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)
3. **Reverse a stack**, If your stack initially has 1, 2, 3, 4 (4 at the top and 1 at the bottom), after reversing the order must be 4, 3, 2, 1 (4 at the bottom and 1 at the top). => [Solution](https://discuss.codechef.com/t/reverse-a-stack-using/13596)
4. **Problem: Given an input string consisting of only { and }, figure out the minimum number of reversals required to make the brackets balanced. For example:**
    1. `s = "}}}}"`, the number of reversals required is 2.
    2. `s = "}{}}"`, the number of reversals required is 1.
=> [Solution](https://www.geeksforgeeks.org/minimum-number-of-bracket-reversals-needed-to-make-an-expression-balanced/)
5. **Reverse Polish Notation**, also referred to as Polish postfix notation is a way of laying out operators and operands. When making mathematical expressions, we typically put arithmetic operators (like +, -, *, and /) between operands. For example: `5 + 7 - 3 * 8`. However, in Reverse Polish Notation, the operators come after the operands. For example: `3 1 + 4 *`. The above expression would be evaluated as `(3 + 1) * 4 = 16` The goal of this exercise is to create a function that does the following:
Given a postfix expression as input, evaluate and return the correct final answer. => [Solution](https://leetcode.com/problems/evaluate-reverse-polish-notation/discuss/)


### Challenge Questions
Try it on your own first:
1. [Largest area in histogram - classic one but important](https://www.spoj.com/problems/HISTOGRA/)
2. [Maximum Xor Secondary](https://codeforces.com/problemset/problem/281/D)
3. [Alternating Current](https://codeforces.com/contest/343/problem/B)
4. [Modified Brackets](https://codeforces.com/contest/5/problem/C)

### More Questions on Stacks
1. [Problems on HackerRank](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks)
2. [Problems On CodeChef](https://www.codechef.com/tags/problems/stack)
3. [Problems On HackerEarth](https://www.hackerearth.com/practice/data-structures/stacks/basics-of-stacks/practice-problems/)
4. [Problems On LeetCode](https://leetcode.com/tag/stack/)