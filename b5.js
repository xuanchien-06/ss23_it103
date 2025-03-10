let arr = [];
let n = +prompt("Nhập số lượng phần tử của mảng: ");

// Kiểm tra số lượng phần tử hợp lệ
if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Nhập vào ký tự: ");
        arr.push(input);
    }
    console.log(arr);  
    let result = 0;  
    let test = false; 
    for (let i = 0; i < n; i++) {
        if (arr[i].length === 1 && !isNaN(arr[i])) {
            result += Number(arr[i]);  
            test = true;
        }
    }
    if (!test) {
        console.log("Không có phần tử nào là số");
    } else {
        console.log(result); 
    }
}
