var nhapSoEl = document.getElementById("nhapSo");
var numberArr = [];

function themSo() {
  var value = nhapSoEl.value.trim() * 1;
  numberArr.push(value);
  nhapSoEl.value = "";
  console.log(numberArr);
}

function tongSoDuong() {
  var tongSoDuong = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      tongSoDuong += numberArr[i];
    }
  }
  alert("Tổng Các Số Dương Là: " + tongSoDuong);
}

function demSoDuong() {
  var demSoDuong = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      demSoDuong++;
    }
  }
  alert("Có " + demSoDuong + " Số Dương Trong Mảng");
}

function timSoNhoNhat() {
  var soNhoNhat = numberArr[0];
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] < soNhoNhat) {
      soNhoNhat = numberArr[i];
    }
  }
  alert("Số Nhỏ Nhất Là " + soNhoNhat);
}

function timSoDuongNhoNhat() {
  var soDuongNhoNhat = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      soDuongNhoNhat = numberArr[i];
      break;
    }
  }
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0 && numberArr[i] < soDuongNhoNhat) {
      soDuongNhoNhat = numberArr[i];
    }
  }
  alert("Số Dương Nhỏ Nhất Là: " + soDuongNhoNhat);
}

function timSoChanCuoiCung() {
  var timSoChanCuoiCung = 0;
  for (let i = numberArr.length - 1; i >= 0; i--) {
    if (numberArr[i] % 2 == 0) {
      timSoChanCuoiCung = numberArr[i];
      break;
    } else {
      timSoChanCuoiCung = -1;
    }
  }
  alert("Số Chẵn Cuối Cùng Là: " + timSoChanCuoiCung);
}

function sapXep() {
  numberArr.sort(function (a, b) {
    return a - b;
  });
  alert("Thứ Tự Tăng Dần: " + numberArr);
}

function timSoNguyenTo() {
  var timSoNguyenTo = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] == 2) {
      timSoNguyenTo = numberArr[i];
      break;
    } else if (
      numberArr[i] > 2 &&
      numberArr[i] % 2 == 1 &&
      Math.floor(Math.sqrt(numberArr[i])) < Math.sqrt(numberArr[i]) &&
      (Math.floor(numberArr[i] / 3) < numberArr[i] / 3 || numberArr[i] == 3) &&
      (Math.floor(numberArr[i] / 5) < numberArr[i] / 5 || numberArr[i] == 5)
    ) {
      timSoNguyenTo = numberArr[i];
      break;
    } else {
      timSoNguyenTo = -1;
    }
  }
  alert("Số Nguyên Tố Đầu Tiên Trong Mảng Là: " + timSoNguyenTo);
}

function demSoNguyen() {
  var demSoNguyen = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] == Math.floor(numberArr[i])) {
      demSoNguyen++;
    }
  }
  alert("Có " + demSoNguyen + " Số Nguyên Trong Mảng");
}

function soSanhSoAmDuong() {
  var tongSoAm = 0;
  var tongSoDuong = 0;
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] >= 0) {
      tongSoDuong++;
    }
    if (numberArr[i] < 0) {
      tongSoAm++;
    }
  }
  if (tongSoDuong > tongSoAm) {
    alert("Tổng Số Dương: " + tongSoDuong + " > " + "Tổng Số Âm: " + tongSoAm);
  } else if (tongSoDuong < tongSoAm) {
    alert("Tổng Số Dương: " + tongSoDuong + " < " + "Tổng Số Âm: " + tongSoAm);
  } else {
    alert("Tổng Số Dương: " + tongSoDuong + " = " + "Tổng Số Âm: " + tongSoAm);
  }
}

function doiViTri() {
  var viTriMotEl = document.getElementById("viTriMot").value.trim() * 1;
  var viTriHaiEl = document.getElementById("viTriHai").value.trim() * 1;
  alert("Mảng Trước Khi Đổi Là: " + numberArr.join(","));
  console.log("Mảng Trước Khi Đổi Là: ", numberArr.join(","));
  var temp = numberArr[viTriMotEl];
  numberArr[viTriMotEl] = numberArr[viTriHaiEl];
  numberArr[viTriHaiEl] = temp;
  alert("Mảng Đã Đổi Là: " + numberArr.join(","));
  console.log("Mảng Đã Đổi Là: ", numberArr.join(","));
}
