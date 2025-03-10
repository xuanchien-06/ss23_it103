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
            let phanTuChan=[];
            for (let i = 0; i < n; i++) {
                if(arr[i]%2===0){
                    phanTuChan.push(arr[i]);
                    sum += arr[i];
                }
            }
            if(phanTuChan.length>0){
                console.log(`Các phần tử chẵn là: ${phanTuChan}`);
                console.log(`Tổng các phần tử chẵn là: ${sum}`);
                phanTuChan.sort()
            }
            break;
            
    }
}

