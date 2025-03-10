let arr = [];
for (let i = 0; i < 10; i++) {
    let input = +prompt("Nhập vào một số nguyên: ");
    arr.push(input);
}
let max = arr[0];
let indexMax = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i;
    }
}
if (indexMax > 0) {
    console.log(`số lớn nhất: ${max}`);
    console.log(`Vị trí ${indexMax}`);
} else {
    console.log(`Không tồn tại số lớn nhất`);
}