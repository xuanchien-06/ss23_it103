let arr = [];
let n = +prompt("Nhập số phần tử của mảng: ");
if (n < 0 || isNaN(n) || !Number.isInteger(n)) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập vào ký tự: ");
        arr.push(input);
    }
    let result="";
    let test = false;
    for (let i = 0; i < n; i++) {
        if (!isNaN(arr[i]) && arr[i] !== '' && arr[i].length === 1) {
            result += arr[i] + " ";
            test = true;
        }
    }
    if (!test) {
        console.log("Không có ký tự số");
    } else {
        console.log(`Ký tự số: ${result}`);
    }
}