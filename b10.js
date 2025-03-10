let arr = [];
let choice;
let n;
let menu = (`
=========== MENU =========== 
1. Nhập số phần tử cần nhập và giá trị các phần tử 
2. In ra giá trị các phần tử đang quản lý 
3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần 
4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng 
5. In ra các số nguyên tố trong mảng và tính tổng 
6. Nhập một số và đếm số lần xuất hiện trong mảng 
7. Thêm một phần tử vào vị trí chỉ định 
8. Xóa một phần tử theo giá trị 
9. Sắp xếp mảng theo thứ tự tăng dần 
0. Thoát 
============================ 
Lựa chọn của bạn: 
`);

while (choice !== 0) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            n = +prompt("Nhập số lượng phần tử: ");
            for (let i = 0; i < n; i++) {
                let value = +prompt(`Nhập giá trị thứ ${i + 1}: `);
                arr.push(value);
            }
            break;

        case 2:
            for (let i = 0; i < n; i++) {
                console.log(`Phần tử thứ ${i + 1}: ${arr[i]}`);
            }
            break;

        case 3:
            let sum = 0;
            let phanTuChan = [];
            for (let i = 0; i < n; i++) {
                if (arr[i] % 2 === 0) {
                    phanTuChan.push(arr[i]);
                    sum += arr[i];
                }
            }
            if (phanTuChan.length > 0) {
                console.log(`Các phần tử chẵn là: ${phanTuChan}`);
                console.log(`Tổng các phần tử chẵn là: ${sum}`);
                phanTuChan.sort((a, b) => b - a);
                console.log(`Các phần tử chẵn sắp xếp giảm dần: ${phanTuChan}`);
            } else {
                console.log("Không có phần tử chẵn trong mảng.");
            }
            break;

        case 4:
            if (arr.length > 0) {
                let max = arr[0];
                let min = arr[0];
                let maxIndex = 0;
                let minIndex = 0;
                for (let i = 1; i < n; i++) {
                    if (arr[i] > max) {
                        max = arr[i];
                        maxIndex = i;
                    }
                    if (arr[i] < min) {
                        min = arr[i];
                        minIndex = i;
                    }
                }
                console.log(`Giá trị lớn nhất là: ${max} tại vị trí ${maxIndex}`);
                console.log(`Giá trị nhỏ nhất là: ${min} tại vị trí ${minIndex}`);
            } else {
                console.log("Mảng rỗng.");
            }
            break;

        case 5:
            let primeNumbers = [];
            let primeSum = 0;
            for (let i = 0; i < n; i++) {
                let isPrime = true;
                if (arr[i] < 2) {
                    isPrime = false;
                } else {
                    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
                        if (arr[i] % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    primeNumbers.push(arr[i]);
                    primeSum += arr[i];
                }
            }
            if (primeNumbers.length > 0) {
                console.log(`Các số nguyên tố trong mảng là: ${primeNumbers}`);
                console.log(`Tổng các số nguyên tố là: ${primeSum}`);
            } else {
                console.log("Không có số nguyên tố trong mảng.");
            }
            break;

        case 6:
            let searchValue = +prompt("Nhập số cần đếm số lần xuất hiện trong mảng: ");
            let count = 0;
            for (let i = 0; i < n; i++) {
                if (arr[i] === searchValue) {
                    count++;
                }
            }
            console.log(`Số ${searchValue} xuất hiện ${count} lần trong mảng.`);
            break;

        case 7:
            let insertValue = +prompt("Nhập giá trị cần thêm vào mảng: ");
            let insertIndex = +prompt("Nhập vị trí cần chèn (chỉ số bắt đầu từ 0): ");
            if (insertIndex >= 0 && insertIndex <= n) {
                arr.splice(insertIndex, 0, insertValue);
                console.log(`Mảng sau khi thêm phần tử ${insertValue} tại vị trí ${insertIndex}: ${arr}`);
                n++;
            } else {
                console.log("Vị trí không hợp lệ.");
            }
            break;

        case 8:
            let deleteValue = +prompt("Nhập giá trị cần xóa khỏi mảng: ");
            let deleteIndex = arr.indexOf(deleteValue);
            if (deleteIndex !== -1) {
                arr.splice(deleteIndex, 1);
                console.log(`Mảng sau khi xóa phần tử ${deleteValue}: ${arr}`);
                n--;
            } else {
                console.log("Giá trị không có trong mảng.");
            }
            break;

        case 9:
            arr.sort((a, b) => a - b);
            console.log(`Mảng sau khi sắp xếp theo thứ tự tăng dần: ${arr}`);
            break;

        case 0:
            console.log("Thoát chương trình.");
            break;

        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
}
