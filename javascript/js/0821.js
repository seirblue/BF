let food = ["햄버거", "돈까스", "칼국수", "김치찌개", "쌀국수"];
let i = Math.floor(Math.random() * food.length);
// i를 정수로 반환, 0~4
console.log(i);
document.write(food[i]);
let bg = ["red", "blue", "green", "pink", "yellow", "gray", "black"];
let j = Math.floor(Math.random() * bg.length);
document.querySelector("body").style.backgroundColor = bg[j];
let n = Math.floor(Math.random() * 6);
document.querySelector("body").style.backgroundImage =
  "url(images/photo" + (n + 1) + ".jpg";
