export interface CarColor {
  name: string;
  hex: string;
}

export interface VinFastCar {
  id: string;
  name: string;
  tagline: string;
  segment: 'SUV A' | 'SUV B' | 'SUV C' | 'SUV D' | 'SUV E';
  priceBase: number; // Đơn vị: triệu VNĐ
  batteryDeposit: number;
  rangeWLTP: number; // km
  powerHp: number; // HP
  acceleration: string;
  drivetrain: string;
  description: string;
  colors: CarColor[];
  features: string[];
  svgPath: string; // SVG path phác họa chuẩn kiểu dáng từng dòng xe VinFast
  isHot?: boolean;
}

export const VINFAST_CARS: VinFastCar[] = [
  {
    id: 'vf-3',
    name: 'VinFast VF 3',
    tagline: 'SUV đô thị điện cá tính & vuông vắn thông minh',
    segment: 'SUV A',
    priceBase: 240,
    batteryDeposit: 0,
    rangeWLTP: 210,
    powerHp: 43,
    acceleration: '5.3s (0-50km/h)',
    drivetrain: 'RWD (Cầu sau)',
    description: 'Thiết kế góc cạnh vuông vắn độc đáo, tối ưu cho việc di chuyển linh hoạt trong đô thị Việt Nam. Chi phí vận hành siêu tiết kiệm.',
    isHot: true,
    colors: [
      { name: 'Đỏ VinFast', hex: '#DC2626' },
      { name: 'Xanh Electric', hex: '#0284C7' },
      { name: 'Vàng Solar', hex: '#EAB308' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC' }
    ],
    features: ['Màn hình giải trí 10 inch', 'La-zăng thể thao 16 inch', 'Trợ lý ảo ViVi tiếng Việt', 'Sạc siêu nhanh 10-70% trong 36 phút'],
    svgPath: 'M 160 260 L 160 210 C 160 180, 200 160, 260 160 L 520 160 C 580 160, 620 180, 640 210 L 640 260 Z'
  },
  {
    id: 'vf-5',
    name: 'VinFast VF 5 Plus',
    tagline: 'Mẫu xe A-SUV điện quốc dân cho gia đình Việt',
    segment: 'SUV A',
    priceBase: 468,
    batteryDeposit: 80,
    rangeWLTP: 326,
    powerHp: 134,
    acceleration: '9.5s (0-100km/h)',
    drivetrain: 'FWD (Cầu trước)',
    description: 'Phong cách thiết kế hiện đại, phối 2 màu thời trang. Đạt tiêu chuẩn an toàn ASEAN NCAP 3 sao.',
    isHot: true,
    colors: [
      { name: 'Cam VinFast', hex: '#EA580C' },
      { name: 'Xanh Mint', hex: '#10B981' },
      { name: 'Trắng Luxury', hex: '#FFFFFF' }
    ],
    features: ['Cảnh báo điểm mù BSM', 'Cảnh báo luồng giao thông cắt ngang RCTA', 'Giám sát áp suất lốp iTPMS', 'Hệ thống 6 túi khí an toàn'],
    svgPath: 'M 140 270 C 160 270, 200 240, 260 200 C 320 160, 420 150, 540 150 C 620 150, 660 190, 680 230 L 680 270 Z'
  },
  {
    id: 'vf-7',
    name: 'VinFast VF 7',
    tagline: 'Triết lý thiết kế Vũ trụ phi thuyền thể thao',
    segment: 'SUV C',
    priceBase: 850,
    batteryDeposit: 150,
    rangeWLTP: 496,
    powerHp: 349,
    acceleration: '5.8s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Hợp tác thiết kế cùng Torino Design (Ý). Đường nét vuốt dốc phi thuyền cá tính, tăng tốc thể thao đầy phấn khích.',
    isHot: true,
    colors: [
      { name: 'Đen Jet Black', hex: '#0F172A' },
      { name: 'Đỏ Passion', hex: '#B91C1C' },
      { name: 'Xám Neptune', hex: '#475569' }
    ],
    features: ['Màn hình 12.9 inch xoay hướng tài xế', 'Cửa sổ trời toàn cảnh tráng bạc', 'Hiển thị kính lái HUD', 'Hệ thống trợ lái ADAS Level 2'],
    svgPath: 'M 120 280 C 140 280, 180 250, 240 210 C 320 150, 440 120, 560 130 C 640 140, 680 180, 700 220 L 720 280 Z'
  },
  {
    id: 'vf-9',
    name: 'VinFast VF 9',
    tagline: 'SUV 7 chỗ hạng sang đỉnh cao công nghệ',
    segment: 'SUV E',
    priceBase: 1580,
    batteryDeposit: 250,
    rangeWLTP: 626,
    powerHp: 402,
    acceleration: '6.5s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Bản xe Chủ Tịch sang trọng vượt trội. Ghế cơ trưởng massage/sưởi/thông gió, màn hình 15.6 inch 4K và trợ lý AI ViVi.',
    isHot: true,
    colors: [
      { name: 'Xanh VinFast Blue', hex: '#1D4ED8' },
      { name: 'Đen Executive', hex: '#020617' },
      { name: 'Trắng Ngọc Trai', hex: '#FFFFFF' }
    ],
    features: ['Ghế thương gia sưởi & massage 8 chế độ', 'Màn hình trung tâm 15.6 inch 4K', 'Trợ lý ảo AI ViVi đa thông minh', 'Tự lái thông minh Highway Assist'],
    svgPath: 'M 100 280 C 120 280, 160 260, 220 220 C 300 160, 420 110, 560 115 C 660 120, 720 160, 750 210 L 760 280 Z'
  }
];
