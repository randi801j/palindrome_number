//given an integer "x", return "true" if "x" is a palindrome, and "false"
// otherwise.

// Example: 121= true 123=false


//Edge : 12321 => true

//Approach: 
//Convert integer to a string
// Reverse the string using reverse()
//compare orginal and reverse to see if they are equal
// if equal return

var isPalindrome = function(x) {
    var s = x.toString();
    var t = s.split("").reverse().join("");
    return s === t;
};

console.log(isPalindrome(123))
console.log(isPalindrome(121))
console.log(isPalindrome(12321))