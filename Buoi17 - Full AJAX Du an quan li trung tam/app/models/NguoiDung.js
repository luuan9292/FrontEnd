function NguoiDung(taiKhoan, matKhau, hoTen, email, soDT) {
    this.taiKhoan = taiKhoan;
    this.matKhau = matKhau;
    this.hoTen = hoTen;
    this.email = email;
    this.soDT = soDT;
    this.MaLoaiNguoiDung = 'HV';
    this.TenLoaiNguoiDung = '';
    this.Diem = Math.floor((Math.random() * 10) + 1 );
} 