let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
if (n < 0 || isNaN(n) || !Number.isInteger(n)) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập vào một số nguyên: ");
        arr.push(input);
    }
    let test = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            test++;
        }
    }
    if (test > 0) {
        console.log(test);
    } else {
        console.log("Mảng không có phần tử âm");
    }
    console.log(arr);
}
