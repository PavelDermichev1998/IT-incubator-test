let searchInput = document.getElementById("search");
let button = document.getElementById("button");

button.addEventListener("click", search); 
function search(){
  if (searchInput.value === "google") {
    setTimeout (function () {
      alert("Yandex круче. Но это не точно");
    }, 3000);
  } else {
    setTimeout(function () {
      alert(searchInput.value + " " + array[0].name);
  }, 3000);
  }
}


let array = [

object0 = {
  name: "Andrey",
  age: 20
},

object1 = {
  name: "Kirill",
  age: 21
},

object2 = {
  name: "Dima",
  age: 22
}
];



function superSum (a, b) {
  a = Number(a);
  b = Number(b);
  console.log(a + b);
}

let array1 = [11, 4, 22, -4, 7, -10];
let min = array1[0];
let max = array1[0];
 
for (let i = 1; i < array1.length; i++) {
    if(array1[i] < min){
        min = array1[i];
    }
    if(array1[i] > max){
        max = array1[i];
    } 
}
 
console.log(min);
console.log(max);



let a = "XXX"; 
let b = "YYY";

let c = a;
a = b;
b = c;

console.log(a); // то что было изначально в b
console.log(b); // то что было изначально в a


function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(array1));



