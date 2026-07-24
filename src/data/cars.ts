export interface CarColor {
  name: string;
  hex: string;
}

export interface VinFastProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'Ô tô điện' | 'Xe máy điện';
  segment: string;
  priceBase: number; // Đơn vị: triệu VNĐ
  batteryDeposit: number;
  rangeWLTP: number; // km
  powerHp: number; // HP
  acceleration: string;
  drivetrain: string;
  description: string;
  imageUrl: string;
  officialUrl: string;
  specsUrl: string;
  colors: CarColor[];
  features: string[];
  isHot?: boolean;
}

export const VINFAST_PRODUCTS: VinFastProduct[] = [
  // --- PHẦN 1: XE MÁY ĐIỆN VINFAST ---
  {
    id: 'evo200',
    name: 'VinFast Evo200',
    tagline: 'Xe máy điện quốc dân di chuyển 203 km/lần sạc',
    category: 'Xe máy điện',
    segment: 'Phổ thông',
    priceBase: 18,
    batteryDeposit: 19,
    rangeWLTP: 203,
    powerHp: 3.3,
    acceleration: '70 km/h',
    drivetrain: 'Động cơ Inhub LFP',
    description: 'Thiết kế thời trang, thon gọn, trang bị bộ Pin LFP thế hệ mới cho quãng đường di chuyển kỷ lục lên tới 203 km.',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-evo200',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-evo200',
    colors: [
      { name: 'Đỏ Vàng', hex: '#DC2626' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC' },
      { name: 'Xanh Điện', hex: '#0284C7' },
      { name: 'Đen Đêm', hex: '#0F172A' }
    ],
    features: ['Quãng đường 203 km/sạc', 'Chuẩn chống nước IP67', 'Đèn LED toàn phần', 'Cốp xe rộng 22 lít'],
    isHot: true
  },
  {
    id: 'feliz-s',
    name: 'VinFast Feliz S',
    tagline: 'Mẫu xe máy điện thể thao hiện đại hàng đầu Việt Nam',
    category: 'Xe máy điện',
    segment: 'Trung cấp',
    priceBase: 27,
    batteryDeposit: 19,
    rangeWLTP: 198,
    powerHp: 4.0,
    acceleration: '78 km/h',
    drivetrain: 'Động cơ Inhub LFP',
    description: 'Thiết kế thon gọn thể thao. Vận hành êm ái, chống nước tuyệt đối phù hợp mọi địa hình đường phố Việt Nam.',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-feliz-s',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-feliz-s',
    colors: [
      { name: 'Cam VinFast', hex: '#EA580C' },
      { name: 'Xanh Mint', hex: '#10B981' },
      { name: 'Đen Bóng', hex: '#090D16' }
    ],
    features: ['Vận tốc tối đa 78 km/h', 'Pin LFP độ bền cao', 'Giảm xóc thuỷ lực siêu êm', 'Kết nối thông minh eSIM']
  },
  {
    id: 'klara-s-2022',
    name: 'VinFast Klara S (Gen 2)',
    tagline: 'Biểu tượng thanh lịch thiết kế Ý cá tính',
    category: 'Xe máy điện',
    segment: 'Trung cấp cao',
    priceBase: 35,
    batteryDeposit: 19,
    rangeWLTP: 194,
    powerHp: 4.0,
    acceleration: '78 km/h',
    drivetrain: 'Động cơ Inhub LFP',
    description: 'Kiểu dáng Ý sang trọng thanh lịch. Sử dụng công nghệ pin LFP siêu bền cho quãng đường gần 200 km.',
    imageUrl: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-klara-s-2022',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-klara-s-2022',
    colors: [
      { name: 'Xanh Ánh Kim', hex: '#1E3A8A' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC' },
      { name: 'Đen Nhám', hex: '#1E293B' }
    ],
    features: ['Quãng đường 194 km/sạc', 'Chuẩn chống nước IP67', 'Ứng dụng định vị GPS', 'Cốp xe rộng 23 lít'],
    isHot: true
  },
  {
    id: 'vento-s',
    name: 'VinFast Vento S',
    tagline: 'Xe máy điện cao cấp động cơ Side Motor 5.2kW',
    category: 'Xe máy điện',
    segment: 'Cao cấp',
    priceBase: 50,
    batteryDeposit: 19,
    rangeWLTP: 160,
    powerHp: 7.0,
    acceleration: '89 km/h',
    drivetrain: 'Side Motor truyền động dây curoa',
    description: 'Động cơ đặt bên Side Motor kết hợp phanh ABS bánh trước. Tăng tốc thể thao lên tới 89 km/h.',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-vento-s',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vento-s',
    colors: [
      { name: 'Vàng Hoàng Gia', hex: '#EAB308' },
      { name: 'Đỏ Đô', hex: '#991B1B' },
      { name: 'Xanh Đen', hex: '#0F172A' }
    ],
    features: ['Phanh an toàn ABS', 'Động cơ Side Motor 5200W', 'Khoá thông minh Smartkey', 'Vận tốc 89 km/h']
  },
  {
    id: 'theon-s',
    name: 'VinFast Theon S',
    tagline: 'Flagship xe máy điện công suất đỉnh cao 7.1kW',
    category: 'Xe máy điện',
    segment: 'Flagship',
    priceBase: 63,
    batteryDeposit: 19,
    rangeWLTP: 150,
    powerHp: 9.5,
    acceleration: '99 km/h',
    drivetrain: 'Center Motor truyền động xích',
    description: 'Dòng xe máy điện mạnh mẽ nhất của VinFast. Động cơ giữa Center Motor 7100W, trang bị phanh ABS 2 kênh trước sau.',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-theon-s',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-theon-s',
    colors: [
      { name: 'Đen Nhám Executive', hex: '#020617' },
      { name: 'Đỏ Thể Thao', hex: '#B91C1C' }
    ],
    features: ['Phanh ABS 2 kênh', 'Tốc độ tối đa 99 km/h', 'Động cơ giữa Center Motor 7.1kW', 'Công nghệ PAAK khoá số điện thoại']
  },
  {
    id: 'impes-ludo',
    name: 'VinFast Impes / Ludo',
    tagline: 'Dòng xe máy điện phổ thông bền bỉ thế hệ đầu',
    category: 'Xe máy điện',
    segment: 'Học sinh / Đô thị',
    priceBase: 12,
    batteryDeposit: 10,
    rangeWLTP: 70,
    powerHp: 2.0,
    acceleration: '50 km/h',
    drivetrain: 'Động cơ Bosch Thụy Sỹ',
    description: 'Thiết kế nhỏ gọn, bền bỉ, tiết kiệm điện năng thích hợp cho học sinh và di chuyển quãng ngắn.',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast-impes',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-impes',
    colors: [
      { name: 'Đỏ Thể Thao', hex: '#DC2626' },
      { name: 'Xanh Thanh Lịch', hex: '#0284C7' }
    ],
    features: ['Động cơ Bosch Thụy Sĩ', 'Khung gầm Châu Âu', 'Kết nối ứng dụng điện thoại', 'Chi phí tiết kiệm']
  },

  // --- PHẦN 2: Ô TÔ ĐIỆN VINFAST ---
  {
    id: 'vf-3',
    name: 'VinFast VF 3',
    tagline: 'SUV đô thị điện phá cách cá tính',
    category: 'Ô tô điện',
    segment: 'SUV A',
    priceBase: 240,
    batteryDeposit: 0,
    rangeWLTP: 210,
    powerHp: 43,
    acceleration: '5.3s (0-50km/h)',
    drivetrain: 'RWD (Cầu sau)',
    description: 'Thiết kế góc cạnh vuông vắn độc đáo, tối ưu cho việc di chuyển linh hoạt trong đô thị Việt Nam. Chi phí vận hành siêu tiết kiệm.',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf3',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/xe-vinfast-vf-3',
    colors: [
      { name: 'Đỏ VinFast', hex: '#DC2626' },
      { name: 'Xanh Electric', hex: '#0284C7' },
      { name: 'Vàng Solar', hex: '#EAB308' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC' }
    ],
    features: ['Màn hình 10 inch cảm ứng', 'La-zăng 16 inch', 'Trợ lý ảo ViVi tiếng Việt', 'Sạc siêu nhanh 10-70% trong 36 phút'],
    isHot: true
  },
  {
    id: 'vf-5-plus',
    name: 'VinFast VF 5 Plus',
    tagline: 'A-SUV điện quốc dân cho gia đình Việt',
    category: 'Ô tô điện',
    segment: 'SUV A',
    priceBase: 468,
    batteryDeposit: 80,
    rangeWLTP: 326,
    powerHp: 134,
    acceleration: '9.5s (0-100km/h)',
    drivetrain: 'FWD (Cầu trước)',
    description: 'Phong cách thiết kế hiện đại, phối màu 2 tông thời trang. Trang bị công nghệ an toàn hàng đầu phân khúc A-SUV.',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf5-plus',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vf5-plus',
    colors: [
      { name: 'Cam VinFast', hex: '#EA580C' },
      { name: 'Xanh Mint', hex: '#10B981' },
      { name: 'Trắng Luxury', hex: '#FFFFFF' }
    ],
    features: ['Cảnh báo điểm mù BSM', 'Giám sát áp suất lốp iTPMS', 'Cảnh báo giao thông cắt ngang', 'Hệ thống 6 túi khí'],
    isHot: true
  },
  {
    id: 'vf-6',
    name: 'VinFast VF 6',
    tagline: 'B-SUV điện tinh tế cho hành trình gia đình hiện đại',
    category: 'Ô tô điện',
    segment: 'SUV B',
    priceBase: 675,
    batteryDeposit: 90,
    rangeWLTP: 399,
    powerHp: 201,
    acceleration: '8.9s (0-100km/h)',
    drivetrain: 'FWD (Cầu trước)',
    description: 'Thiết kế tinh tế từ Torino Design. Nội thất rộng rãi vượt trội phân khúc B, hỗ trợ trợ lý AI ViVi thông minh.',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf6',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vf6',
    colors: [
      { name: 'Xanh VinFast Blue', hex: '#1E40AF' },
      { name: 'Đen Jet Black', hex: '#0F172A' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC' }
    ],
    features: ['Màn hình giải trí 12.9 inch', 'Hệ thống trợ lái ADAS Level 2', 'Trợ lý ảo ViVi tiếng Việt', 'La-zăng 19 inch thể thao']
  },
  {
    id: 'vf-7',
    name: 'VinFast VF 7',
    tagline: 'Triết lý thiết kế Vũ trụ phi thuyền thể thao',
    category: 'Ô tô điện',
    segment: 'SUV C',
    priceBase: 850,
    batteryDeposit: 150,
    rangeWLTP: 496,
    powerHp: 349,
    acceleration: '5.8s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Hợp tác thiết kế cùng Torino Design. Đường nét vuốt dốc phi thuyền cá tính, tăng tốc thể thao đầy phấn khích.',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf7',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vf7',
    colors: [
      { name: 'Đen Jet Black', hex: '#0F172A' },
      { name: 'Đỏ Passion', hex: '#B91C1C' },
      { name: 'Xám Neptune', hex: '#475569' }
    ],
    features: ['Màn hình 12.9 inch nghiêng tài xế', 'Cửa sổ trời toàn cảnh tráng bạc', 'Hiển thị kính lái HUD', 'Hệ thống trợ lái ADAS Level 2'],
    isHot: true
  },
  {
    id: 'vf-8',
    name: 'VinFast VF 8',
    tagline: 'SUV D-Segment điện toàn cầu thông minh vượt trội',
    category: 'Ô tô điện',
    segment: 'SUV D',
    priceBase: 1090,
    batteryDeposit: 200,
    rangeWLTP: 471,
    powerHp: 402,
    acceleration: '5.5s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Mẫu xe toàn cầu xuất khẩu Mỹ & Châu Âu. Thiết kế sang trọng Pininfarina, công suất 402 HP dẫn động 2 cầu AWD.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf8',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vf8',
    colors: [
      { name: 'Đỏ Passion', hex: '#DC2626' },
      { name: 'Xanh VinFast Blue', hex: '#1D4ED8' },
      { name: 'Đen Executive', hex: '#020617' }
    ],
    features: ['Màn hình cảm ứng 15.6 inch', 'Tự lái thông minh Highway Assist', 'Ghế da thật sưởi & làm mát', 'Hệ thống 11 túi khí']
  },
  {
    id: 'vf-9',
    name: 'VinFast VF 9',
    tagline: 'SUV 7 chỗ hạng sang đỉnh cao công nghệ Chủ tịch',
    category: 'Ô tô điện',
    segment: 'SUV E',
    priceBase: 1580,
    batteryDeposit: 250,
    rangeWLTP: 626,
    powerHp: 402,
    acceleration: '6.5s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Bản xe Chủ Tịch sang trọng vượt trội. Ghế cơ trưởng massage/sưởi/thông gió, màn hình 15.6 inch 4K và trợ lý AI ViVi.',
    imageUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1000&q=80',
    officialUrl: 'https://shop.vinfastauto.com/vn_vi/s/vf9',
    specsUrl: 'https://shop.vinfastauto.com/vn_vi/thong-so-ky-thuat-vf9',
    colors: [
      { name: 'Xanh VinFast Blue', hex: '#1D4ED8' },
      { name: 'Đen Executive', hex: '#020617' },
      { name: 'Trắng Ngọc Trai', hex: '#FFFFFF' }
    ],
    features: ['Ghế thương gia sưởi & massage 8 chế độ', 'Màn hình trung tâm 15.6 inch 4K', 'Trợ lý ảo AI ViVi đa thông minh', 'Tự lái thông minh Highway Assist'],
    isHot: true
  }
];
