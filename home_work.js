// Bai 1: Tinh tien luong nhan vien

var luongMotNgay, n;
var luong;
luongMotNgay = 100000;
n = 26;
luong = luongMotNgay * n;
console.log("Tiền lương của nhân viên: " + luong);

// var luongMotNgay = 100000;
// document.getElementById('luongMotNgay').innerHTML = luongMotNgay + "VND";
// document.getElementById('tinhLuong').onclick = function (event) {
//     event.preventDefault();
//     var soNgayLamViec = document.getElementById('soNgayLamViec').value;
//     var tienLuong = soNgayLamViec * luongMotNgay;
//     document.getElementById('tienLuong').innerHTML = tienLuong + "VND";
// }



// Bai 2: Tinh gia tri trung binh cua 5 so

var number1 = 25;
var number2 = 7;
var number3 = 93;
var number4 = 12;
var number5 = 10;
var sum, average;
sum = number1 + number2 + number3 + number4 + number5;
average = sum / 5;
console.log("Giá trị trung bình của 5 số là: " + average);

// document.getElementById('average').onclick = function () {
//     var number1 = parseInt(document.getElementById('number1').value);
//     var number2 = parseInt(document.getElementById('number2').value);
//     var number3 = parseInt(document.getElementById('number3').value);
//     var number4 = parseInt(document.getElementById('number4').value);
//     var number5 = parseInt(document.getElementById('number5').value);
//     var sum = 0;
//     sum = number1 + number2 + number3 + number4 + number5;
//     var average = sum / 5;
//     document.getElementById('giaTriTrungBinh').innerHTML = average;
// }


// Bai 3: Quy doi tien tu USD >>> VND

var tiGia = 23500;
var luongTienUsd = 50;
var luongTienVnd = luongTienUsd * tiGia;
console.log("Số tiền VND được quy đổi: " + luongTienVnd);


// document.getElementById('doiTien').onclick = function () {
//     var tiGia = 23500;
//     var soTienUsd = document.getElementById('soTienUsd').value;
//     var tien = soTienUsd * tiGia;
//     document.getElementById('tien').innerHTML = tien;
// }

// Bai 4: Tinh dien tich, chu vi hinh chu nhat

var chieuDai = 25;
var chieuRong = 7;
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
console.log("Chu vi hình chữ nhật là: " + chuVi);
console.log("Diện tích hình chữ nhật là: " + dienTich);

// document.getElementById('tinhChuVi').onclick = function () {
//     var chieuDai = parseInt(document.getElementById('chieuDai').value);
//     var chieuRong = parseInt(document.getElementById('chieuRong').value);
//     var chuVi = (chieuDai + chieuRong) * 2;
//     document.getElementById('chuVi').innerHTML = chuVi;
// }
// document.getElementById('tinhDienTich').onclick = function () {
//     var chieuDai = parseInt(document.getElementById('chieuDai').value);
//     var chieuRong = parseInt(document.getElementById('chieuRong').value);
//     var dienTich = chieuDai * chieuRong;
//     document.getElementById('dienTich').innerHTML = dienTich;
// }

// Bai 5: Tinh tong 2 ky so

var n = 12;
var tongKySo = 0;
var hangChuc = Math.floor(n / 10);
var hangDonVi = n % 10;
tongKySo = hangChuc + hangDonVi;
console.log("Tổng ký số của n là: " + tongKySo);

// document.getElementById('tinhTongSoCacChuSo').onclick = function () {
//     var number = document.getElementById('so').value;
//     var hangChuc, hangDonVi, tongKySo;
//     hangChuc = Math.floor(number / 10);
//     hangDonVi = number % 10;
//     tongKySo = hangChuc + hangDonVi;
//     document.getElementById('tongSoCacChuSo').innerHTML = tongKySo;
// }


