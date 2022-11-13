let num = prompt("Введите число:");
let check = typeof(+num);

if (check == "number") {
  if (isNaN(+num)) {
    console.log("Упс, кажется, вы ошиблись");
  } else {
    if (+num % 2 == 0) {
      console.log("Число четное");
    } else {
      console.log("Число нечетное");
    }
  }
} else {
  console.log("Упс, кажется, вы ошиблись");
}