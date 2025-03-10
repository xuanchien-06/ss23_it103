let arr = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    let use = +prompt("Nhập và một số nguyên: ");
    arr.push(use);
}
console.log(arr);
for (let i = 0; i < 10; i++) {
    if (arr[i] >= 10) {
        console.log(arr[i]);
        count++;
    }
}
if (count === 0) {
    console.log(`Không có số nào lớn hơn 10`);
}

