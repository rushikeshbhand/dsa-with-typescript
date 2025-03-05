function votingSystem() {
  let age = Number(prompt("Enter your age: "));
  if (age >= 40) {
    console.log(`You are allowed to vote because your 00age is ${age}`);
  } else if (age >= 18) {
    console.log(`You are allowed to vote because your99 age is ${age}`);
  } else {
    console.log(`You are not allowed to vote because your age is not 18`);
  }
}
// votingSystem()

function discount() {
  let amount = prompt("Enter your amount");
  let discount = 0;
  if (amount >= 0 && amount <= 5000) {
    discount = 0;
  } else if (amount >= 5001 && amount <= 7000) {
    discount = 5;
  } else if (amount >= 7001 && amount <= 9000) {
    discount = 10;
  } else {
    discount = 20;
  }
  console.log(
    `For your amount ${amount} discount is ${(amount * discount) / 100} ruppe`
  );
}

// discount()

function switchCase() {
  //   let day = 6;
  switch (true) {
    case 1 > 1:
      console.log("monday");
      break;

    case 21:
      console.log("tuesday");
      break;

    case 3:
      console.log("wednesday");
      break;

    case 4:
      console.log("thursday");
      break;

    case 5:
      console.log("friday");
      break;

    case 6:
      console.log("saturday");
      break;

    default:
      console.log("sunday");
  }
}

// switchCase();

function days() {
  switch ("wednesday") {
    case "monday":
      console.log("case is monday");
      break;

    case "tuesday":
      console.log("case is tuesday");
      break;

    case "wednesday":
      console.log("case is wednesday");
      break;

    default:
      console.log("case is sunday");
  }
}
// days();

function start() {
  // outer loop
  for (let i = 1; i <= 5; i++) {
    let stars = "";
    // inner loop
    for (let j = 1; j <= i; j++) {
      stars = stars + "*";
    }
    console.log(stars);
  }
}
// start();

function square(row) {
  for (let i = 1; i <= 4; i++) {
    console.log("****" + [i]);
  }
}
// square(4);

function starsRepeat() {
  for (let i = 1; i <= 5; i++) {
    let str = "*";
    console.log(str.repeat(i));
  }
}
// starsRepeat();

function reverseTraingle() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let space = " ";
    let stars = "* ";
    console.log(space.repeat(n - i) + stars.repeat(i));
  }
}
// reverseTraingle();

function topTraingle() {
  let n = 5;
  for (let i = n; i >= 1; i--) {
    let stars = "*";
    let space = " ";
    console.log(space.repeat(n - i) + stars.repeat([i]));
  }
}
// topTraingle();

function leftTraingle() {
  for (let index = 5; index >= 1; index--) {
    let stars = "*";
    console.log(stars.repeat(index));
  }
}

// leftTraingle();

function leftTrainglee() {
  let stars = "*****";
  for (let index = 1; index <= 5; index++) {
    // console.log(index);
    for (let j = 5; j >= index; j--) {
      stars = "*";
    }
    console.log(stars);
  }
}
// leftTrainglee()

function leftTriangle() {
  for (let i = 5; i >= 1; i--) {
    let stars = ""; // Initialize an empty string
    for (let j = 1; j <= i; j++) {
      stars += "*"; // Append '*' to stars string
    }
    console.log(stars); // Print the constructed string
  }
}

// leftTriangle();

function factorial() {
  let fact = 0;
  let j = 1;
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    j = j * i;
  }
  console.log(`Factorial is: ${j}`);
}
// factorial()

function calculate() {
  let reply;
  while (reply !== "rushi") {
    // reply = prompt("Enter name:")
    console.log(reply);
  }
}
// calculate()

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let lastdigit = num % 10;
    reversed = reversed * 10 + lastdigit;
    num = Math.trunc(num / 10);
    console.log(reversed);
  }
  console.log(reversed);
}

// console.log(reverseNumber(12345));

function basics() {
  // console.log("hey i am", "rushi");
  // console.log(45 - 1 * 2 + 5);
  // let date = new Date();
  // console.log(date.getMonth());
  // a = 20;
  // console.log(a);
  // var a;
  // let sqr = Math.pow(12 , 2)
  // console.log(sqr);
  // var net = "maksa";
  // console.log(typeof(net));
  // let age = 33;
  // console.log((age < 18) ? "age is less than 18" : "age is more than 18");
  // let num = "vian";
  //  for (const element of num) {
  //   console.log(element);

  //  }
  // for (const key in num) {
  //   console.log(key);
  // }
  // for (let i = 0; i <= 20; i++) {
  //   (i % 2 === 0) ? console.log(`These are even no : ${i}`) : console.log(`These are not even no : ${i}`);
  // }
  // let a = 5;
  // do {
  //   --a
  //   console.log(a);
  // } while (a>= 1);
  // let fact = 1;
  // for (let i = 1; i <= 5; i++) {
  //   fact = fact * i;

  // }
  // console.log('factorial is' + fact);
  // for (let i = 1; i <= 3; i++) {
  //   let str = "";
  //   for (let j = 1; j <= 3; j++) {
  //     str = str + j;
  //     console.log(str);
  //   }
  // }
  // let arr = [1, 2, 3, 4, 5, 6];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   const element = arr[i];
  //   console.log(element);
  // }

  // function numbers(){
  //   for (let i = 1; i <= 100; i++) {
  //     if((i % 5 )== 0) console.log(i);

  //   }
  // }
  // numbers()

  // function maxNum(arr) {
  //   let maxN = 0;
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (maxN < arr[i]) maxN = arr[i];
  //   }
  //   console.log(`Maximum number is: ${maxN}`);
  // }
  // maxNum([1, 3, 5, 66, 4234, 5639, 33]);
}
basics();
