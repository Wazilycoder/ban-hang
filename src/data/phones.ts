export interface PhoneColor {
  name: string;
  hex: string;
  imageUrl: string;
}

export interface StorageOption {
  capacity: '128GB' | '256GB' | '512GB' | '1TB';
  price: number; // Đơn vị: Triệu VNĐ
  oldPrice?: number;
}

export interface PhoneProduct {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Xiaomi' | 'OPPO';
  tagline: string;
  category: 'iPhone' | 'Samsung Galaxy' | 'Android Flagship' | 'Tablet & Phụ Kiện';
  screen: string;
  chipset: string;
  ram: string;
  camera: string;
  battery: string;
  tradeInBonus: number; // Trợ giá thu cũ đổi mới (Triệu VNĐ)
  description: string;
  imageUrl: string;
  officialUrl: string;
  colors: PhoneColor[];
  storages: StorageOption[];
  features: string[];
  isHot?: boolean;
}

export interface TradeInDevice {
  id: string;
  name: string;
  brand: string;
  estimatedValueType1: number; // Loại 1 (Đẹp như mới, full chức năng)
  estimatedValueType2: number; // Loại 2 (Trầy xước nhẹ)
  estimatedValueType3: number; // Loại 3 (Cũ trầy xước)
}

export interface StoreBranch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  stockStatus: 'Còn hàng sẵn' | 'Đặt trước 24h';
}

export const STORE_BRANCHES: StoreBranch[] = [
  { id: 'sb-hn-1', city: 'Hà Nội', name: 'PHONEHUB Thái Hà Flagship', address: '128 Thái Hà, Đống Đa, Hà Nội', phone: '024.7300.8888', stockStatus: 'Còn hàng sẵn' },
  { id: 'sb-hn-2', city: 'Hà Nội', name: 'PHONEHUB Cầu Giấy', address: '26B Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội', phone: '024.7300.9999', stockStatus: 'Còn hàng sẵn' },
  { id: 'sb-hcm-1', city: 'TP. Hồ Chí Minh', name: 'PHONEHUB Ba Tháng Hai MegaStore', address: '136 Ba Tháng Hai, Phường 12, Quận 10, TP.HCM', phone: '028.7300.6666', stockStatus: 'Còn hàng sẵn' },
  { id: 'sr-hcm-2', city: 'TP. Hồ Chí Minh', name: 'PHONEHUB Nguyễn Trãi', address: '55 Nguyễn Trãi, Phường Bến Thành, Quận 1, TP.HCM', phone: '028.7300.7777', stockStatus: 'Còn hàng sẵn' },
  { id: 'sb-dn-1', city: 'Đà Nẵng', name: 'PHONEHUB Nguyễn Văn Linh', address: '145 Nguyễn Văn Linh, Nam Dương, Hải Châu, Đà Nẵng', phone: '0236.7300.555', stockStatus: 'Còn hàng sẵn' }
];

export const TRADE_IN_DEVICES: TradeInDevice[] = [
  { id: 'ti-14pm', name: 'iPhone 14 Pro Max 128GB', brand: 'Apple', estimatedValueType1: 18500000, estimatedValueType2: 17000000, estimatedValueType3: 15000000 },
  { id: 'ti-13pm', name: 'iPhone 13 Pro Max 128GB', brand: 'Apple', estimatedValueType1: 14500000, estimatedValueType2: 13000000, estimatedValueType3: 11500000 },
  { id: 'ti-15pm', name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', estimatedValueType1: 23500000, estimatedValueType2: 22000000, estimatedValueType3: 20000000 },
  { id: 'ti-s24u', name: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 20500000, estimatedValueType2: 19000000, estimatedValueType3: 17000000 },
  { id: 'ti-s23u', name: 'Samsung Galaxy S23 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 13500000, estimatedValueType2: 12000000, estimatedValueType3: 10500000 }
];

export const PHONE_PRODUCTS: PhoneProduct[] = [
  // --- IPHONE SERIES ---
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    brand: 'Apple',
    tagline: 'Khung Titan cao cấp, Chip Apple A18 Pro, Nút Camera Control thế hệ mới',
    category: 'iPhone',
    screen: '6.9 inch Super Retina XDR OLED 120Hz ProMotion',
    chipset: 'Apple A18 Pro 3nm cực mạnh',
    ram: '8 GB',
    camera: 'Chính 48MP + Góc siêu rộng 48MP + Tele 5x 12MP',
    battery: '4.685 mAh, Sạc nhanh Magsafe 25W',
    tradeInBonus: 4.0,
    description: 'Thiết kế Titan viền mỏng nhất lịch sử iPhone. Trang bị hệ thống Apple Intelligence AI thông minh, màn hình 6.9 inch tuyệt đỉnh.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.apple.com/vn/iphone-16-pro/',
    colors: [
      { name: 'Titan Sa Mạc (Desert Titanium)', hex: '#C7B299', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Tự Nhiên (Natural Titanium)', hex: '#8E8D8A', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Đen (Black Titanium)', hex: '#28282B', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Trắng (White Titanium)', hex: '#F5F5F7', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 34.99, oldPrice: 36.99 },
      { capacity: '512GB', price: 40.99, oldPrice: 42.99 },
      { capacity: '1TB', price: 46.99, oldPrice: 48.99 }
    ],
    features: ['Khung Titan Đẳng Cấp', 'Chip Apple A18 Pro 3nm', 'Camera Control Phím Cảm Ứng Lực', 'Quay Video 4K 120fps Dolby Vision'],
    isHot: true
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    brand: 'Apple',
    tagline: 'Sức mạnh Pro trong kích thước 6.3 inch gọn gàng',
    category: 'iPhone',
    screen: '6.3 inch Super Retina XDR OLED 120Hz ProMotion',
    chipset: 'Apple A18 Pro 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP + Góc siêu rộng 48MP + Tele 5x 12MP',
    battery: '3.582 mAh, Sạc nhanh 25W',
    tradeInBonus: 3.5,
    description: 'Nâng cấp màn hình lên 6.3 inch viền siêu mỏng, hỗ trợ hệ thống ống kính Tele Zoom quang 5x tiêu chuẩn Pro Max.',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.apple.com/vn/iphone-16-pro/',
    colors: [
      { name: 'Titan Sa Mạc', hex: '#C7B299', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Tự Nhiên', hex: '#8E8D8A', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Đen', hex: '#28282B', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 28.99, oldPrice: 29.99 },
      { capacity: '256GB', price: 31.99, oldPrice: 33.99 },
      { capacity: '512GB', price: 37.99, oldPrice: 39.99 },
      { capacity: '1TB', price: 43.99, oldPrice: 45.99 }
    ],
    features: ['Camera Tele Zoom 5x', 'Phím Action Button Đa Năng', 'Hỗ trợ Wi-Fi 7 Tốc Độ Cao', 'Khung Titan Cực Bền'],
    isHot: true
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16 Standard',
    brand: 'Apple',
    tagline: 'Màu sắc thời thượng, Chip A18 thế hệ mới & Phím Action',
    category: 'iPhone',
    screen: '6.1 inch Super Retina XDR OLED Dynamic Island',
    chipset: 'Apple A18 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP Fusion + Góc siêu rộng 12MP',
    battery: '3.561 mAh, Sạc MagSafe',
    tradeInBonus: 2.5,
    description: 'Hệ thống camera đặt dọc hiện đại hỗ trợ quay video không gian Spatial Video cho Apple Vision Pro.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.apple.com/vn/iphone-16/',
    colors: [
      { name: 'Xanh Lưu Ly (Teal)', hex: '#008080', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Ngọc (Pink)', hex: '#E0A96D', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Mờ (Black)', hex: '#1C1C1E', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 22.99, oldPrice: 23.99 },
      { capacity: '256GB', price: 25.99, oldPrice: 26.99 },
      { capacity: '512GB', price: 31.99, oldPrice: 32.99 }
    ],
    features: ['Dynamic Island Thông Minh', 'Camera 48MP Fusion 2in1', 'Phím Camera Control Mới', 'Mặt Kính Ceramic Shield Thế Hệ 2']
  },

  // --- SAMSUNG GALAXY SERIES ---
  {
    id: 'galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'Samsung',
    tagline: 'Quyền năng Galaxy AI, Chip Snapdragon 8 Elite, S Pen tích hợp',
    category: 'Samsung Galaxy',
    screen: '6.9 inch Dynamic AMOLED 2X 120Hz 2600 nits',
    chipset: 'Snapdragon 8 Elite for Galaxy 3nm',
    ram: '12 GB / 16 GB',
    camera: '200MP + 50MP + 50MP + 10MP Zoom 100x',
    battery: '5.000 mAh, Sạc nhanh 45W',
    tradeInBonus: 4.0,
    description: 'Kiệt tác Flagship Android với khung Titan bo cong mềm mại cho cảm giác cầm nắm tuyệt vời. Tích hợp trọn bộ Galaxy AI việt hóa hoàn hảo.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.samsung.com/vn/smartphones/galaxy-s/',
    colors: [
      { name: 'Xám Titan (Titanium Gray)', hex: '#4A4B4D', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Titan (Titanium Black)', hex: '#1F2022', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Titan (Titanium Blue)', hex: '#2B3E50', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 33.99, oldPrice: 35.99 },
      { capacity: '512GB', price: 37.99, oldPrice: 39.99 },
      { capacity: '1TB', price: 44.99, oldPrice: 47.99 }
    ],
    features: ['Camera 200MP Mắt Thần Đêm', 'Quyền Năng Galaxy AI Thông Minh', 'Bút S Pen Tích Hợp', 'Khung Titan Siêu Siêu Bền'],
    isHot: true
  },
  {
    id: 'galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold6 5G',
    brand: 'Samsung',
    tagline: 'Màn hình gập cực mỏng nhẹ, Đa nhiệm đẳng cấp doanh nhân',
    category: 'Samsung Galaxy',
    screen: 'Màn chính 7.6 inch QXGA+ Dynamic AMOLED 2X 120Hz',
    chipset: 'Snapdragon 8 Gen 3 for Galaxy',
    ram: '12 GB',
    camera: '50MP Mắt Thần Bóng Đêm + 12MP + 10MP Tele 3x',
    battery: '4.400 mAh, Sạc nhanh 25W',
    tradeInBonus: 5.0,
    description: 'Thiết kế gập phẳng không khe hở Armor Aluminum cải tiến. Trải nghiệm làm việc 3 màn hình cùng lúc vô cùng mượt mà.',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.samsung.com/vn/smartphones/galaxy-z-fold6/',
    colors: [
      { name: 'Xám Metal (Silver Shadow)', hex: '#A8A9AD', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Navy (Navy Blue)', hex: '#1E293B', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Rose Gold', hex: '#E2B2B8', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 41.99, oldPrice: 43.99 },
      { capacity: '512GB', price: 45.99, oldPrice: 47.99 },
      { capacity: '1TB', price: 52.99, oldPrice: 54.99 }
    ],
    features: ['Màn Hình Gập 7.6 inch Rộng Lớn', 'Trợ Lý Galaxy AI Thông Dịch Trực Tiếp', 'Khung Nhôm Armor Aluminum Mới', 'Bản Lề Flex Hinge Gập Không Khe Hở'],
    isHot: true
  },

  // --- ANDROID FLAGSHIP & TABLET ---
  {
    id: 'xiaomi-15-ultra',
    name: 'Xiaomi 15 Ultra 5G',
    brand: 'Xiaomi',
    tagline: 'Ống kính Leica cảm biến 1 inch, Chip Snapdragon 8 Elite',
    category: 'Android Flagship',
    screen: '6.73 inch LTPO AMOLED 2K 120Hz 3000 nits',
    chipset: 'Snapdragon 8 Elite 3nm',
    ram: '16 GB',
    camera: 'Leica Quad Camera 50MP 1-inch + Tele Periscope 200MP',
    battery: '5.500 mAh, Sạc siêu tốc 90W HyperCharge',
    tradeInBonus: 3.0,
    description: 'Chuyên gia nhiếp ảnh di động đỉnh cao hợp tác cùng hãng ống kính Leica Đức. Cảm biến 1-inch ghi lại khoảnh khắc ấn tượng.',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.mi.com/vn/',
    colors: [
      { name: 'Đen Da Thuộc (Black Leather)', hex: '#18181B', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Gốm (White Ceramic)', hex: '#FAFAFA', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 29.99, oldPrice: 31.99 },
      { capacity: '1TB', price: 34.99, oldPrice: 36.99 }
    ],
    features: ['Ống Kính Leica Huyền Thoại', 'Sạc Nhanh 90W Đỉnh Cao', 'Chip Snapdragon 8 Elite', 'Mặt Lưng Gốm / Da Sang Trọng']
  },
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13 inch M4 (2024)',
    brand: 'Apple',
    tagline: 'Màn hình Ultra Retina XDR Tandem OLED siêu mỏng 5.1mm',
    category: 'Tablet & Phụ Kiện',
    screen: '13 inch Ultra Retina XDR Tandem OLED 120Hz 1600 nits',
    chipset: 'Apple M4 (9-core CPU, 10-core GPU)',
    ram: '8 GB / 16 GB',
    camera: 'Chính 12MP 4K + Cảm biến LiDAR Scanner',
    battery: '38.99 Wh, Sạc Type-C Thunderbolt 4',
    tradeInBonus: 3.0,
    description: 'Chiếc máy tính bảng mỏng nhất từ trước tới nay của Apple. Sức mạnh chip M4 vượt trội xử lý đồ họa 3D và dựng video 4K.',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.apple.com/vn/ipad-pro/',
    colors: [
      { name: 'Đen Thần Không (Space Black)', hex: '#1D1D1F', imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Bạc Khí Chất (Silver)', hex: '#E3E4E6', imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 37.99, oldPrice: 39.99 },
      { capacity: '512GB', price: 43.99, oldPrice: 45.99 },
      { capacity: '1TB', price: 55.99, oldPrice: 57.99 }
    ],
    features: ['Màn Hình Tandem OLED Rực Rỡ', 'Chip Apple M4 Xử Lý Đồ Họa 3D', 'Thiết Kế Mỏng Chỉ 5.1mm', 'Hỗ Trợ Apple Pencil Pro Mới'],
    isHot: true
  }
];
