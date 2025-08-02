let numberFound = [];
let pushedNumberList = []
let changeToList = [];


// Create function mathIsFun with Parameter numberString
function mathIsFun(numberString) {
  //initial checks up front for speed bumps
  if (!isNaN(numberString)) {
    //checks to see if numberString is a number, if not, ask them to enter a string
    console.log(`Please enter a string with a delimeter!`);
  } else {
    for (let i = 0; i < numberString.length; i++) {
      //starts the loop at index position 1, then goes until the end
      //if numberstring equals a delimeter and it is not at index 0 then perform the next logic block
      if (numberString[i] === "|") {
          changeToList.push(numberString.split("|"));
      }
      }
    }

  const newNew = changeToList[0].slice(0, changeToList[0].length);

  console.log(newNew);

    for (let i = 0; i < newNew.length; i++) {
        pushedNumberList.push(Number(newNew[i]));
    }

    let sortedPushedNumberList = newNew.sort((a, b) => b - a);
    let largestNumber = sortedPushedNumberList[0];
    let secondLargestNumber = sortedPushedNumberList[1];
    function totalSum(largestNumber, secondLargestNumber) {
        return Number(largestNumber) + Number(secondLargestNumber);
    }

    const sum = totalSum(largestNumber, secondLargestNumber);
    console.log(`The largest numbers are ${largestNumber} + ${secondLargestNumber} = ${sum}`);

}

mathIsFun("12|13|-4|5|15|19|25|54");

//1. loop through number string and find every |
//2. If the index is not 0 then return the values within the ||
//2. after fiding the | positions push the values of the numbers to a new list
//3. Once we find the new list then perform multiple operations on every variable
// to determine the largest number that can be created by adding the two numbers
//4. initiall we want the algorithm to be optimized to find the largest two numbers
//5. to determine the best route and time efficiency with larger input sizes
//6. therefore we can use max and max-1 to determine the largest two numbers
//7. then perform a math calculation and add the two numbers and return the largest of
//8. of the list
