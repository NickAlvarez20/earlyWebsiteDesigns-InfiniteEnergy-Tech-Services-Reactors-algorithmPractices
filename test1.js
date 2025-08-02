//Sliding Window Algorithm / JavaScript

// Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

// For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

var findLength = function (s) {
  //Declare Variables and Instantiate Variables at 0
  let left = 0;
  (currentSumWindow = 0), (ans = 0);
  //iterate string and set right counter to 0
  for (let right = 0; right < s.length; right++) {
    //if the right element equals 0
    if (s[right] == "0") {
      //increase currentSumWindow to 1
      currentSumWindow += 1;
    }
    //while currentSumWindow is greater than 1
    while (currentSumWindow > 1) {
      //if condition, check for left element equal to 0
      if (s[left] == "0") {
        //decrease by the currentSum by 1
        currentSumWindow -= 1;
      }
      //shrink window and move forward to get to the state where there is only one zero left in the window
      left++;
    }
    //for each iteration, update the answer with the maximum length
    ans = Math.max(ans, right - left + 1);
  }
  return ans;
};

// node test1.js
