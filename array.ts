export function traverseArray() {
    let cart: string[] = ["Laptop", "Mouse", "Keyboard"];
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i]);
    }
  }
//   traverseArray();

  export function traverseNumbers(){
      let age: number[] = [10, 20, 30, 40, 50];
      for ( let i = 0; i < age.length; i++){
          console.log(age[i]);
      }
  }
//   traverseNumbers();

  export function traverseForEach(){
      let age: number[] = [1, 2, 3, 4, 5, 6, 7];
      // console.log(age.length)

      age.forEach(ages =>{
        console.log(ages*4);
      })
    //  let xxAges = age.map(ages => ages*2);
    //  console.log(xxAges);
     
  }
  // traverseForEach();


function ArrayCrud(){
  let names: any[] = ['rushi', 'mahesh', 'mihal', 'juliyat', 'nivant', 99];
  let ages: number[] = [33, 44, 55, 66, 11, 33, 55, 66];
  let products = [
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 },
    { name: "Laptop", price: 1200 },
    { name: "Tablet", price: 900 },
    { name: "Tablet", price: 300 }
  ];
  const finalProducts = products.find(product => product.price > 500);
  console.log(finalProducts);
  
  // names.unshift('ronit');
  // names.pop();
  // names.push('tanvi');
  // names.splice(4, 1, 'lawish', 'mayur');
  // console.log(names);
  // const changeArray =  names.slice(0, 3)
  // console.log(changeArray);
  // let names2 = ['list'];
  // let concatedName = names.concat(names2);
  // console.log(concatedName);
  // let string = names.join(" ")
  // console.log(string);
  // let index = names.indexOf(99);
  // console.log(index);
  // let oldAges = ages.filter(ages => ages>41);
  // console.log(oldAges);
  // ages.sort((a, b) => a - b)
  // console.log(ages);
  
}
ArrayCrud();
  
  