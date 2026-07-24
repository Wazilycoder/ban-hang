export interface CarColor {
  name: string;
  hex: string;
  image: string;
}

export interface VinFastCar {
  id: string;
  name: string;
  tagline: string;
  segment: 'Ô tô điện' | 'Xe máy điện' | 'Xe đạp điện';
  priceBase: number; // Đơn vị: triệu VNĐ
  batteryDeposit: number;
  rangeWLTP: number; // km
  powerHp: number; // HP
  acceleration: string;
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
    tagline: 'Dòng xe SUV đô thị điện thông minh cá tính',
    segment: 'Ô tô điện',
    priceBase: 240,
    batteryDeposit: 0,
    rangeWLTP: 210,
    powerHp: 43,
    acceleration: '5.3s (0-50km/h)',
    drivetrain: 'RWD (Cầu sau)',
    description: 'Thiết kế cá tính, tối ưu không gian di chuyển đô thị Việt Nam. Mẫu xe làm chao đảo thị trường xe điện Việt.',
    isHot: true,
    colors: [
      { name: 'Đỏ VinFast', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Electric', hex: '#0284C7', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Vàng Solar', hex: '#EAB308', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Màn hình cảm ứng 10 inch', 'Trợ lý ảo ViVi tiếng Việt', 'La-zăng 16 inch', 'Sạc siêu nhanh 10-70% trong 36 phút']
  },
  {
    id: 'vf-5',
    name: 'VinFast VF 5 Plus',
    tagline: 'Mẫu xe A-SUV điện quốc dân cho mọi gia đình',
    segment: 'Ô tô điện',
    priceBase: 468,
    batteryDeposit: 80,
    rangeWLTP: 326,
    powerHp: 134,
    acceleration: '9.5s (0-100km/h)',
    drivetrain: 'FWD (Cầu trước)',
    description: 'Phong cách thiết kế hiện đại, phối màu 2 tông thời trang. Trang bị công nghệ an toàn hàng đầu phân khúc.',
    isHot: true,
    colors: [
      { name: 'Cam VinFast', hex: '#EA580C', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Mint', hex: '#10B981', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Cảnh báo điểm mù', 'Giám sát áp suất lốp', 'Cảnh báo giao thông cắt ngang', 'Hệ thống 6 túi khí']
  },
  {
    id: 'vf-7',
    name: 'VinFast VF 7',
    tagline: 'Tuyệt tác thiết kế Vũ trụ phi thuyền спортивная',
    segment: 'Ô tô điện',
    priceBase: 850,
    batteryDeposit: 150,
    rangeWLTP: 496,
    powerHp: 349,
    acceleration: '5.8s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Hợp tác thiết kế cùng Torino Design. Kiểu dáng phi thuyền thể thao, cảm giác lái phấn khích vượt trội.',
    isHot: true,
    colors: [
      { name: 'Đen Jet Black', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đỏ Passion', hex: '#B91C1C', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Màn hình 12.9 inch nghiêng tài xế', 'Cửa sổ trời toàn cảnh', 'Màn hình hiển thị HUD', 'Hệ thống trợ lái ADAS cấp độ 2']
  },
  {
    id: 'vf-9',
    name: 'VinFast VF 9',
    tagline: 'SUV 7 chỗ hạng sang đỉnh cao công nghệ',
    segment: 'Ô tô điện',
    priceBase: 1580,
    batteryDeposit: 250,
    rangeWLTP: 626,
    powerHp: 402,
    acceleration: '6.5s (0-100km/h)',
    drivetrain: 'AWD (2 Cầu)',
    description: 'Mẫu xe Chủ tịch sang trọng đẳng cấp thế giới. Ghế cơ trưởng massage VIP, hệ thống giải trí 15.6 inch 4K.',
    isHot: true,
    colors: [
      { name: 'Xanh VinFast Blue', hex: '#1D4ED8', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Luxury', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Ghế thương gia sưởi & massage', 'Màn hình 15.6 inch 4K', 'Trợ lý AI ViVi thế hệ mới', 'Hệ thống tự lái Highway Assist']
  },
  {
    id: 'klara-s',
    name: 'VinFast Klara S (2024)',
    tagline: 'Xe máy điện thanh lịch cho phong cách sống xanh',
    segment: 'Xe máy điện',
    priceBase: 35,
    batteryDeposit: 19,
    rangeWLTP: 194,
    powerHp: 4,
    acceleration: '78 km/h',
    drivetrain: 'Động cơ Inhub LFP',
    description: 'Thiết kế Ý thanh lịch sang trọng. Sử dụng công nghệ pin LFP siêu bền cho quãng đường di chuyển gần 200 km.',
    colors: [
      { name: 'Xanh Liền Ánh Kim', hex: '#1E3A8A', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Ngọc Trai', hex: '#F8FAFC', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Quãng đường 194km/lần sạc', 'Chuẩn chống nước IP67', 'Kết nối thông minh eSIM', 'Cốp xe rộng 23 lít']
  },
  {
    id: 'feliz-s',
    name: 'VinFast Feliz S',
    tagline: 'Xe máy điện thể thao cá tính hàng đầu Việt Nam',
    segment: 'Xe máy điện',
    priceBase: 27,
    batteryDeposit: 19,
    rangeWLTP: 198,
    powerHp: 4,
    acceleration: '78 km/h',
    drivetrain: 'Động cơ Inhub LFP',
    description: 'Thiết kế thon gọn thể thao. Vận hành êm ái, chống nước tuyệt đối phù hợp mọi địa hình mưa ngập.',
    colors: [
      { name: 'Đen Bóng', hex: '#090D16', image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đỏ Đô', hex: '#991B1B', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80' }
    ],
    features: ['Vận tốc tối đa 78km/h', 'Công nghệ Pin LFP tiên tiến', 'Giảm xóc thuỷ lực siêu êm', 'Đèn LED siêu sáng']
  }
];
