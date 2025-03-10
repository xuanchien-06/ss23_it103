let arr = [];
let n = +prompt("Nhập số lượng phần tử của mảng: ");
if (n < 0 || isNaN(n) || !Number.isInteger(n)) {
    console.log("Số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập vào ký tự: ");
        arr.push(input);
    }
    if (arr.length < 2) {
        console.log("Không thể tìm được phần tử lớn thứ 2.");
    } else {
        let max = arr[0];
        let secondMax = arr[1];
        for (let i = 1; i < n; i++) {
            if (arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (arr[i] > secondMax && arr[i] !== max) {
                secondMax = arr[i];
            }
        }
        
        console.log(`Số lớn thứ 2 trong mảng là: ${secondMax}`);
    }
}
