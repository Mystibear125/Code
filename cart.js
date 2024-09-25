let mainPic = document.getElementById("mpic");
let firstPic = document.getElementById("fpic");
let secondPic = document.getElementById("spic");
let thirdPic = document.getElementById("tpic");
let fourthPic = document.getElementById("ftpic");
let mainPrice = document.getElementById("mainprice");
let oldPrice = document.getElementById("oldprice");

// The Picture Section

firstPic.addEventListener("click", () => {
  mainPic.style.backgroundImage = "url(shoe1.png)";
  let shoeprice = ["$50.00", "$100.00"];
  mainPrice.innerHTML = shoeprice[0];
  oldPrice.innerHTML = shoeprice[1];
});

secondPic.addEventListener("click", () => {
  mainPic.style.backgroundImage = "url(shoe2.png)";
  let shoeprice = ["$200.00", "$400.00"];
  mainPrice.innerHTML = shoeprice[0];
  oldPrice.innerHTML = shoeprice[1];
});

thirdPic.addEventListener("click", () => {
  mainPic.style.backgroundImage = "url(shoe3.png)";
  let shoeprice = ["$400.00", "$800.00"];
  mainPrice.innerHTML = shoeprice[0];
  oldPrice.innerHTML = shoeprice[1];
});

fourthPic.addEventListener("click", () => {
  mainPic.style.backgroundImage = "url(shoe4.png)";
  let shoeprice = ["$500.00", "$1000.00"];
  mainPrice.innerHTML = shoeprice[0];
  oldPrice.innerHTML = shoeprice[1];
});

// The Cart Section

let pNumber = document.getElementById("number");
let cartNo = document.getElementById("cartno");
let add2cart = document.getElementsByClassName(".add2cart");

function decrease() {
  pNumber.textContent = pNumber.textContent - 1;
}

function increase() {
  pNumber.textContent = Number(pNumber.textContent) + 1;
}

function addtocart() {
  cartNo.innerHTML = pNumber.innerHTML;
}

// AJAX

// console.log('You placed your order');

// setTimeout(()=>{
//     console.log('Your order is being processed');
// },5000)

// setTimeout(()=>{
//     console.log('Your food is being packed');
// },5000)

// setTimeout(()=>{
//     console.log('Your food is ready');
// },1000)



// function sendOrder(callback) {
//   setTimeout(() => {
//     console.log("You placed your order");
//   }, 1000);
//   setTimeout(() => {
//     callback();
//   }, 7000);
// }

// function deliverFood() {
//   console.log("You for food is ready");
// }

// sendOrder(deliverFood);

// const myPromise = new Promise((resolve, reject) => {
//   let order = prompt("place your order");

//   setTimeout(() => {
//     if (order) {
//       resolve(console.log("your order has been taken!"))
//     } else {
//       reject(console.log("no order was made"));
//     }
//   }, 1000);
// });


// let numberArr = []


// numberArr.pop()
// for(let i = 1; i <= 100; i++){
//     //   numberArr.push(i)  
//     if(i % 3 == 0){
//         numberArr.push('Fizz')
//     }else if(i % 5 == 0){
//         numberArr.push('Buzz')
//     }else if(i % 3 || 5 == 0){
//       numberArr.push('FuzzBuzz')
//     }
//     else{
//         numberArr.push(i)
//     }
// }

// console.log(numberArr);


let greeting = document.getElementById("greeting")
let greet = prompt("What is your name?")
greet = greet.trim();

const date = new Date();
let hour = date.getHours();

if (hour >= 0 && hour < 12) {
  greeting.textContent = `Good morning, ${greet}!`;
}
else{
  greeting.textContent = `Good afternoon, ${greet}!`;
}

greet = greet.slice(0,1).toUpperCase() + greet.slice(1).toLowerCase();


