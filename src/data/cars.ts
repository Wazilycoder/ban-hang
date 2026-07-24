export interface CarColor {
  name: string;
  hex: string;
  image: string;
}

export interface VinFastCar {
  id: string;
  name: string;
  tagline: string;
  segment: 'SUV A' | 'SUV B' | 'SUV C' | 'SUV D' | 'SUV E' | 'PICKUP';
  priceBase: number; // Đơn vị: triệu VNĐ
  batteryDeposit: number;
  rangeWLTP: number; // km
  powerHp: number; // HP
  acceleration: string; // 0-100km/h
  drivetrain: string;
  description: string;
  colors: CarColor[];
  features: string[];
  isHot?: boolean;
}

export const VINFAST_CARS: VinFastCar[] = [
  {
    id: 'vf-3',
    name: 'VinFast VF 3',
    tagline: 'Mẫu xe SUV đô thị điện thông minh & cá tính',
    segment: 'SUV A',
    priceBase: 240,
    batteryDeposit: 0,
    rangeWLTP: 210,
    powerHp: 43,
    acceleration: '5.3s (0-50km/h)',
    drivetrain: 'RWD (Cầu sau)',
    description: 'Thiết kế vuông vắn cá tính, tối ưu không gian đô thị Việt Nam. Phù hợp cho di chuyển hàng ngày với chi phí vận hành siêu tiết kiệm.',
    isHot: true,
    colors: [
      { name: 'Đỏ Crimson', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Electric', hex: '#0284C7', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Pearl', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Vàng Solar', hex: '#EAB308', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Màn hình 10 inch', 'La-zăng 16 inch', 'Trợ lý ảo ViVi tiếng Việt', 'Sạc nhanh 10-70% trong 36 phút']
  },
  {
    id: 'vf-7',
    name: 'VinFast VF 7',
    tagline: 'Triết lý thiết kế Vũ Trụ Phi Thuyền đột phá',
    segment: 'SUV C',
    priceBase: 850,
    batteryDeposit: 150,
    rangeWLTP: 496,
    powerHp: 349,
    acceleration: '5.8s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Đỉnh cao thiết kế từ Torino Design. Cảm giác lái thể thao, công suất vượt trội cùng hệ thống trợ lái thông minh ADAS cấp độ 2.',
    isHot: true,
    colors: [
      { name: 'Đen Jet Black', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đỏ Passion Red', hex: '#B91C1C', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xám Neptune', hex: '#475569', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Màn hình giải trí 12.9 inch', 'Cửa sổ trời toàn cảnh tráng bạc', 'HUD hiển thị thông tin kính lái', 'Hệ thống 8 túi khí toàn diện']
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
    description: 'Dòng xe Chủ Tịch sang trọng bậc nhất VinFast. Ghế thương gia tích hợp massage/sưởi/làm mát, không gian siêu rộng rãi đỉnh cao.',
    isHot: true,
    colors: [
      { name: 'Xanh VinFast Blue', hex: '#1D4ED8', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Executive', hex: '#020617', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Luxury', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Ghế cơ trưởng massage VIP', 'Màn hình 15.6 inch 4K', 'Trợ lý AI Vivi thế hệ mới', 'Hệ thống tự lái đường cao tốc Highway Assist']
  },
  {
    id: 'vf-5',
    name: 'VinFast VF 5 Plus',
    tagline: 'Lựa chọn thông minh cho gia đình trẻ',
    segment: 'SUV A',
    priceBase: 468,
    batteryDeposit: 80,
    rangeWLTP: 326,
    powerHp: 134,
    acceleration: '9.5s (0-100km/h)',
    drivetrain: 'FWD (Cầu trước)',
    description: 'Thiết kế hiện đại năng động, đa dạng màu sắc phối 2 tông thời trang. Chi phí sở hữu cực hợp lý.',
    colors: [
      { name: 'Cam VinFast Orange', hex: '#EA580C', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Mint', hex: '#10B981', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Cảnh báo điểm mù', 'Cảnh báo luồng giao thông cắt ngang', 'Giám sát áp suất lốp', 'Màn hình đa thông tin 7 inch']
  }
];
