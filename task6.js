let arr = [2, 2, 2, '2', 2];

let check = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        check = false;
        break;
    } else {
        check = true;
    } 
}

console.log(check);