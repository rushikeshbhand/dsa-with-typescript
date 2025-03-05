function problems() {
  // let intro : string = 'i am rushi , mechanical engineer from ahmednagar';
  // let array = intro.split(',');
  // console.log(array);
  // console.log('Selected character is : ' + intro.charAt(2));
  let newString = "";
  let name: string = "rushi";
  //   for (let i: number = 4; i >= 0; i--) {
  //     newString = newString + name.charAt(i);
  //   }
  let nameArray: string[] = name.split("");
  nameArray.reverse();
  console.log(nameArray);
}

// problems();

function filterEvenNumbers() {
  let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(`Length of numbers is: ${numbers.length}`);
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
      //   console.log(`Even numbers are: ${numbers[i]}`);
    } else {
      oddNumbers.push(numbers[i]);
      //   console.log(`Non even numbers are: ${numbers[i]}`);
    }
  }
  console.log(
    `Even numbers are ${evenNumbers} and odd numbers are ${oddNumbers}`
  );
}
// filterEvenNumbers();

let ages: number[] = [11, 22, 33, 44, 55, 55, 66, 66, 77, 88];
function filterFunction() {
  let evenAges = ages.filter((age) => age % 2 === 0);
  console.log(`Even ages are : ${evenAges}`);
}

// filterFunction();

function firstNegativeNumber() {
  let nagativeNumbers: number[] = [3, 6, -2, 8, -9];
  let firstNegativeNumber = nagativeNumbers.find((number) => number < 0);
  console.log(`Negative number is : ${firstNegativeNumber}`);
}

// firstNegativeNumber();

let serialNumbers: number[] = [1, 2, 3];
function doubleNumber(): void {
  const result = serialNumbers.map((num) => num * 2);
  console.log(`Double numbers are ${result}`);
}
// doubleNumber();

let existsNumbers: number[] = [3, 6, 7, 8];
function ifExists(): void {
  let number: number = existsNumbers.indexOf(3);
  if (number === -1) {
    console.log(`Number not exits`);
  } else {
    console.log(`Number is existing on index ${number}`);
  }
}
// ifExists();

function sumOfNumbers() {
  let allNumbers: number[] = [1, 2, 3, 4];
  let sum = allNumbers.reduce((accumulator, num) => accumulator + num, 0);
  console.log(sum);
}
// sumOfNumbers();

function maximumNumber() {
  let allNums: number[] = [45, 645, 656, 6, 22, 23];
  allNums.sort((a, b) => a - b);
  let maximumNumber = allNums.pop();
  console.log(allNums);
  console.log(maximumNumber);
}

// maximumNumber();

function maxNumber() {
  let nums: number[] = [44, 55, 662, 22, 66];
  let maxNum : number = 0;
  for (let i: number = 1; i <= nums.length - 1; i++) {
    if(nums[i]> maxNum){
        maxNum = nums[i]
    }
  }
  console.log(maxNum);
}
// maxNumber();

// function groupOfStudents(): void{
//     const students = [{name: "Alice", age: 22}, {name: "Bob", age: 20}, {name: "Charlie", age: 22}];
//     const age : number[] = []
//     for(let i: number = 1; i<= students.length; i++){

//     }
// }
// groupOfStudents();


