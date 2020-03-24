/*
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

*/
/*
Input: n number of socks
ar space-separated integers representing the colors of the socks
Output: 3
Constraints:
1 <= n <= 100
1 <= ar[i] <= 100 where 0 <= i < n
Examples/EdgeCases:
ex. 1) n <= 1, return 0
ex. 2)
n = 9
ar = 10 20 20 10 10 30 50 10 20

count = 0
10 20 20 10 10 30 50 10 20
^

obj = {
  10: 1
}

10 20 20 10 10 30 50 10 20
    ^

obj = {
  10: 1,
  20: 1
}

10 20 20 10 10 30 50 10 20
      ^

obj = {
  10: 1,
  20: 2
}

count += 1
count = 1
delete obj.20

10 20 20 10 10 30 50 10 20
         ^

obj = {
  10: 2,
}

count += 1
count = 2
delete obj.10

10 20 20 10 10 30 50 10 20
            ^

obj = {
  10: 1
}

10 20 20 10 10 30 50 10 20
               ^

obj = {
  10: 1,
  30: 1,
}

10 20 20 10 10 30 50 10 20
                  ^

obj = {
  10: 1,
  30: 1,
  50: 1,
}

10 20 20 10 10 30 50 10 20
                     ^

obj = {
  10: 2,
  30: 1,
  50: 1,
}

count += 1
count = 3
delete obj.10

10 20 20 10 10 30 50 10 20
                        ^

obj = {
  30: 1,
  50: 1,
  20: 1,
}

return count
*/

function sockMerchant(n, ar) {
  if (n <= 1) return 0;

  var count = 0;

  var obj = {};

  for (let i = 0; i < ar.length; i++) {
    var item = ar[i];
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      count += 1;
      delete obj[item];
    }
  }

  return count;
}

var inputN = 9
var inputAR = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(inputN, inputAR))




