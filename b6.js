let arr = ["", false, 0, 5, 10, "Hello world!"];
let arrNew = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        arrNew.push(arr[i]);
    }
}

console.log(arrNew);