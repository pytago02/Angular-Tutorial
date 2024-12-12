import { Component } from '@angular/core';
// import { NgIf, NgFor, NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewpipePipe } from '../../pipes/newpipe.pipe';

@Component({
  selector: 'app-home',
  // standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // imports: [NgIf, FormsModule, NgFor, NgClass],
  imports: [CommonModule, FormsModule, NewpipePipe],
})
export class HomeComponent {
  public selectedDistricts: string[] = [];

  // Hàm xử lí sự kiện khi người dùng chọn
  public changeCity(event: any): void {
    // tạo biến selectedCity lưu thông tin lựa chọn tỉnh
    const selectedCity = event.target.value;
    // duyệt qua từng data của vietNamData tìm dữ liệu có data.tinh == selectedCity
    const cityData = this.vietNamData.find(
      (data) => data.tinh === selectedCity
    );
    // Nếu cityData khác null ghi dữ liệu cityData.huyen vào selectedDistricts ngược lại trả về mảng rỗng vào selectedDistricts
    this.selectedDistricts = cityData ? cityData.huyen : [];

    // Gộp code 3 dòng code lại
    this.selectedDistricts =
      this.vietNamData.find((data) => data.tinh === selectedCity)?.huyen || [];
  }

  public vietNamData = [
    {
      tinh: 'Thái Nguyên',
      huyen: [
        'Thành phố Thái Nguyên',
        'Sông Công',
        'Định Hoá',
        'Đại Từ',
        'Phú Lương',
        'Phú Bình',
        'Đồng Hỷ',
        'Võ Nhai',
      ],
    },
    {
      tinh: 'Hà Nội',
      huyen: [
        'Hoàn Kiếm',
        'Hai Bà Trưng',
        'Đống Đa',
        'Ba Đình',
        'Tây Hồ',
        'Cầu Giấy',
        'Thanh Xuân',
        'Hà Đông',
        'Long Biên',
        'Từ Liêm',
        'Hoàng Mai',
        'Thanh Trì',
        'Gia Lâm',
        'Đông Anh',
        'Sóc Sơn',
        'Mê Linh',
      ],
    },
    {
      tinh: 'Thái Nguyên 02',
      huyen: [
        'Thành phố Thái Nguyên 02',
        'Sông Công 02',
        'Định Hoá 02',
        'Đại Từ 02',
        'Phú Lương 02',
        'Phú Bình 02',
        'Đồng Hỷ 02',
        'Võ Nhai 02',
      ],
    },
  ];

  public diemTrungBinh = 0;
  public hocLuc: string = '';
  public xepLoaiHocLuc(): void {
    if (this.diemTrungBinh >= 8) this.hocLuc = 'gioi';
    else if (this.diemTrungBinh >= 6.5) this.hocLuc = 'kha';
    else if (this.diemTrungBinh >= 5) this.hocLuc = 'trung binh';
    else this.hocLuc = 'yeu';
  }
}
