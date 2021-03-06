# Jumping on the Clouds

[Challenge Link](https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen)

There is a string, s, of lowercase English letters that is repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of the infinite string.


### Example
``
s = 'abcac'
n = 10
``
The substring we consider is 'abcacabcac, the first 10 characters of the infinite string. There are 4 occurrences of a in the substring.

### Function Description

repeatedString has the following parameter(s):

* s: a string to repeat
* n: the number of characters to consider


### Returns
* int: the frequency of a in the substring


### Sample Input
`` 
aba
10
``

### Sample Output
``
7
``

### Explanation
The first n = 10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we return 7.


