export interface PhoneColor {
  name: string;
  hex: string;
  imageUrl: string;
}

export interface StorageOption {
  capacity: '128GB' | '256GB' | '512GB' | '1TB';
  price: number; // VNĐ
  oldPrice?: number; // VNĐ
}

export interface PhoneProduct {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Xiaomi' | 'OPPO' | 'ASUS' | 'Google' | 'Vivo' | 'Sony';
  tagline: string;
  category: 'iPhone' | 'Samsung Galaxy' | 'Android Flagship' | 'Gaming Phone' | 'Tablet & Phụ Kiện';
  screen: string;
  chipset: string;
  ram: string;
  camera: string;
  battery: string;
  tradeInBonus: number; // VNĐ
  discountTag?: string;
  giftDesc?: string;
  description: string;
  imageUrl: string;
  officialUrl: string;
  colors: PhoneColor[];
  storages: StorageOption[];
  features: string[];
  isHot?: boolean;
  isNew?: boolean;
}

export interface TradeInDevice {
  id: string;
  name: string;
  brand: string;
  estimatedValueType1: number;
  estimatedValueType2: number;
  estimatedValueType3: number;
}

export interface StoreBranch {
  id: string;
  city: string;
  name: string;
  address: string;
  stockStatus: 'Còn hàng sẵn' | 'Giao nhanh 1 giờ';
}

export const STORE_BRANCHES: StoreBranch[] = [
  { id: 'sb-1', city: 'Hà Nội', name: 'Showroom Flagship Công Nghệ - Hà Nội', address: 'Khu Công Nghệ Cao - Hà Nội', stockStatus: 'Còn hàng sẵn' },
  { id: 'sb-2', city: 'TP. Hồ Chí Minh', name: 'Showroom Flagship Công Nghệ - TP.HCM', address: 'Trung Tâm Quận 1 - TP. Hồ Chí Minh', stockStatus: 'Còn hàng sẵn' },
  { id: 'sb-3', city: 'Đà Nẵng', name: 'Showroom Flagship Công Nghệ - Đà Nẵng', address: 'Quận Hải Châu - Đà Nẵng', stockStatus: 'Còn hàng sẵn' }
];

export const TRADE_IN_DEVICES: TradeInDevice[] = [
  { id: 'ti-15pm', name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', estimatedValueType1: 23500000, estimatedValueType2: 22000000, estimatedValueType3: 20000000 },
  { id: 'ti-14pm', name: 'iPhone 14 Pro Max 128GB', brand: 'Apple', estimatedValueType1: 18500000, estimatedValueType2: 17000000, estimatedValueType3: 15000000 },
  { id: 'ti-13pm', name: 'iPhone 13 Pro Max 128GB', brand: 'Apple', estimatedValueType1: 14500000, estimatedValueType2: 13000000, estimatedValueType3: 11500000 },
  { id: 'ti-s24u', name: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 20500000, estimatedValueType2: 19000000, estimatedValueType3: 17000000 },
  { id: 'ti-s23u', name: 'Samsung Galaxy S23 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 13500000, estimatedValueType2: 12000000, estimatedValueType3: 10500000 }
];

export const PHONE_PRODUCTS: PhoneProduct[] = [
  // ---  APPLE IPHONE SERIES ---
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max 256GB',
    brand: 'Apple',
    tagline: 'Màn hình 6.9 inch viền siêu mỏng, Chip A18 Pro, Nút Camera Control',
    category: 'iPhone',
    screen: 'OLED 6.9" Super Retina XDR 120Hz ProMotion 2000 nits',
    chipset: 'Apple A18 Pro 6 nhân 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP & Góc rộng 48MP & Tele 5x 12MP',
    battery: '4.685 mAh, Sạc nhanh MagSafe 25W',
    tradeInBonus: 5000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng củ sạc Apple 25W chính hãng + Trả góp 0%',
    description: 'Khung Titan Sa Mạc thời thượng. Viền màn hình mỏng nhất lịch sử iPhone, hỗ trợ trí tuệ nhân tạo Apple Intelligence việt hóa.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Titan Sa Mạc (Desert Titanium)', hex: '#C7B299', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Tự Nhiên (Natural Titanium)', hex: '#8E8D8A', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Đen (Black Titanium)', hex: '#28282B', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Trắng (White Titanium)', hex: '#F5F5F7', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 34990000, oldPrice: 36990000 },
      { capacity: '512GB', price: 40990000, oldPrice: 42990000 },
      { capacity: '1TB', price: 46990000, oldPrice: 48990000 }
    ],
    features: ['Khung Titan Cấp Độ Vũ Trụ', 'Chip Apple A18 Pro Siêu Khủng', 'Phím Cảm Ứng Camera Control', 'Quay Phim 4K 120fps Dolby Vision'],
    isHot: true,
    isNew: true
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro 128GB',
    brand: 'Apple',
    tagline: 'Sức mạnh Pro trong kích thước 6.3 inch vừa vặn',
    category: 'iPhone',
    screen: 'OLED 6.3" Super Retina XDR 120Hz ProMotion',
    chipset: 'Apple A18 Pro 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP & Góc rộng 48MP & Tele 5x 12MP',
    battery: '3.582 mAh, Sạc MagSafe 25W',
    tradeInBonus: 4000000,
    discountTag: 'Giảm 1.000.000đ',
    giftDesc: 'Tặng phiếu mua hàng 500.000đ + Giảm 30% AirPods',
    description: 'Sở hữu trọn vẹn ống kính Tele Zoom 5x cao cấp. Phím bấm Action Button đa năng cùng viền màn hình 6.3 inch tinh tế.',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Titan Sa Mạc', hex: '#C7B299', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Tự Nhiên', hex: '#8E8D8A', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Đen', hex: '#28282B', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 28990000, oldPrice: 29990000 },
      { capacity: '256GB', price: 31990000, oldPrice: 33990000 },
      { capacity: '512GB', price: 37990000, oldPrice: 39990000 }
    ],
    features: ['Camera Tele Zoom Quang 5x', 'Màn Hình 6.3" Viền Mỏng', 'Phím Action Button Cảm Ứng Lực', 'Wifi 7 Tốc Độ Siêu Nhanh'],
    isHot: true
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 Plus 128GB',
    brand: 'Apple',
    tagline: 'Màn hình lớn 6.7 inch, Thời lượng pin trâu nhất lịch sử iPhone',
    category: 'iPhone',
    screen: 'OLED 6.7" Super Retina XDR Dynamic Island',
    chipset: 'Apple A18 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP Fusion & Góc siêu rộng 12MP',
    battery: '4.674 mAh, Pin trâu xem video 27 giờ',
    tradeInBonus: 3500000,
    discountTag: 'Giảm 1.500.000đ',
    giftDesc: 'Tặng ốp lưng MagSafe + Trả góp 0%',
    description: 'Trải nghiệm không gian hiển thị rộng rãi 6.7 inch sắc nét với viên pin kỷ lục kéo dài trọn ngày đêm.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Xanh Lưu Ly (Teal)', hex: '#008080', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Ngọc (Pink)', hex: '#E0A96D', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 25990000, oldPrice: 27990000 },
      { capacity: '256GB', price: 28990000, oldPrice: 30990000 }
    ],
    features: ['Pin Trâu Kỷ Lục 27 Giờ', 'Màn Hình 6.7 inch Rực Rỡ', 'Camera Control Đa Năng', 'Chipset Apple A18 3nm']
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16 128GB',
    brand: 'Apple',
    tagline: 'Camera dọc thời thượng, Chip Apple A18 & Nút Camera Control',
    category: 'iPhone',
    screen: 'OLED 6.1" Super Retina XDR Dynamic Island 2000 nits',
    chipset: 'Apple A18 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP Fusion & Góc siêu rộng 12MP',
    battery: '3.561 mAh, Sạc nhanh 25W',
    tradeInBonus: 3000000,
    discountTag: 'Giảm 1.000.000đ',
    giftDesc: 'Ưu đãi sinh viên giảm 500k + Trả góp 0%',
    description: 'Màu sắc trẻ trung nổi bật: Xanh Lưu Ly, Hồng Ngọc và Xanh Đại Dương. Hỗ trợ quay video Spatial Video.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Xanh Lưu Ly (Teal)', hex: '#008080', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Ngọc (Pink)', hex: '#E0A96D', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Mờ (Black)', hex: '#1C1C1E', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 22990000, oldPrice: 23990000 },
      { capacity: '256GB', price: 25990000, oldPrice: 26990000 },
      { capacity: '512GB', price: 31990000, oldPrice: 32990000 }
    ],
    features: ['Dynamic Island Đa Năng', 'Camera 48MP Fusion 2 trong 1', 'Phím Camera Control Cảm Ứng Lực', 'Mặt Kính Ceramic Shield Thế Hệ Mới']
  },
  {
    id: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max 256GB',
    brand: 'Apple',
    tagline: 'Khung Titan đầu tiên, Chip A17 Pro 3nm, Cổng Type-C Thunderbolt',
    category: 'iPhone',
    screen: 'OLED 6.7" Super Retina XDR 120Hz ProMotion',
    chipset: 'Apple A17 Pro 3nm',
    ram: '8 GB',
    camera: 'Chính 48MP & Góc siêu rộng 12MP & Tele 5x Prism 12MP',
    battery: '4.422 mAh, Cổng USB-C 3.0',
    tradeInBonus: 4500000,
    discountTag: 'Giảm 3.500.000đ',
    giftDesc: 'Giá cực hot + Trả góp 0%',
    description: 'Siêu phẩm Titan 2023 vẫn cực hot với cổng kết nối USB Type-C tốc độ cao và chip A17 Pro cân mượt game AAA.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Titan Tự Nhiên', hex: '#8E8D8A', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Titan Xanh (Blue)', hex: '#2B3E50', imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 29490000, oldPrice: 32990000 },
      { capacity: '512GB', price: 35990000, oldPrice: 38990000 }
    ],
    features: ['Cổng USB Type-C Tiện Lợi', 'Chip A17 Pro Đồ Họa Ray Tracing', 'Khung Titan Siêu Nhẹ', 'Camera Zoom Quang 5x']
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13 128GB',
    brand: 'Apple',
    tagline: 'Mẫu iPhone quốc dân bán chạy số 1 phân khúc',
    category: 'iPhone',
    screen: 'OLED 6.1" Super Retina XDR',
    chipset: 'Apple A15 Bionic 6 nhân',
    ram: '4 GB',
    camera: '2 camera 12MP OIS chống rung quang học',
    battery: '3.240 mAh, Sạc nhanh 20W',
    tradeInBonus: 2000000,
    discountTag: 'Giảm 3.300.000đ',
    giftDesc: 'Giá tốt nhất phân khúc + Trả góp 0% lãi suất',
    description: 'Giữ vững ngôi vương doanh số nhờ mức giá hấp dẫn, hiệu năng mượt mà ổn định và camera chụp ảnh chân thực.',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Đen Midnight', hex: '#1C1C1E', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Starlight', hex: '#F5F5F7', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Pink', hex: '#E0A96D', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 13690000, oldPrice: 16990000 },
      { capacity: '256GB', price: 16990000, oldPrice: 19990000 }
    ],
    features: ['Chipset Apple A15 Bionic Mượt Mà', 'Camera Chống Rung Sensor-Shift', 'Màn Hình Super Retina XDR Sắc Nét', 'Thời Lượng Pin Bền Bỉ']
  },

  // --- 🌌 SAMSUNG GALAXY SERIES ---
  {
    id: 'galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G 256GB',
    brand: 'Samsung',
    tagline: 'Quyền năng Galaxy AI, Chip Snapdragon 8 Elite, S Pen tích hợp',
    category: 'Samsung Galaxy',
    screen: 'Dynamic AMOLED 2X 6.9" Quad HD+ 120Hz 2600 nits',
    chipset: 'Snapdragon 8 Elite for Galaxy 3nm',
    ram: '12 GB',
    camera: 'Chính 200MP & Siêu rộng 50MP & Tele 50MP 5x & Tele 10MP 3x',
    battery: '5.000 mAh, Sạc siêu nhanh 45W',
    tradeInBonus: 5000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng Voucher 2 triệu + Gói bảo hành VIP Care 1 năm',
    description: 'Kiệt tác Flagship gọt giũa khung Titan góc bo nhẹ nhàng sang trọng. Tích hợp trọn bộ Galaxy AI tiếng Việt khoanh vùng tìm kiếm.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://samsung.com',
    colors: [
      { name: 'Xám Titan (Titanium Gray)', hex: '#4A4B4D', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Titan (Titanium Black)', hex: '#1F2022', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Titan (Titanium Blue)', hex: '#2B3E50', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 33990000, oldPrice: 35990000 },
      { capacity: '512GB', price: 37990000, oldPrice: 39990000 },
      { capacity: '1TB', price: 44990000, oldPrice: 47990000 }
    ],
    features: ['Camera 200MP Zoom 100x Đêm', 'Galaxy AI Thông Dịch Trực Tiếp', 'Bút S Pen Thông Minh', 'Khung Titan Cực Siêu Bền'],
    isHot: true,
    isNew: true
  },
  {
    id: 'galaxy-s25-plus',
    name: 'Samsung Galaxy S25+ 5G 256GB',
    brand: 'Samsung',
    tagline: 'Màn hình 6.7 inch QHD+ 120Hz, Galaxy AI & Pin 4.900 mAh',
    category: 'Samsung Galaxy',
    screen: 'Dynamic AMOLED 2X 6.7" Quad HD+ 120Hz 2600 nits',
    chipset: 'Snapdragon 8 Elite for Galaxy 3nm',
    ram: '12 GB',
    camera: 'Chính 50MP OIS & Siêu rộng 12MP & Tele 10MP 3x',
    battery: '4.900 mAh, Sạc siêu nhanh 45W',
    tradeInBonus: 3500000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng tai nghe Galaxy Buds FE + Trả góp 0%',
    description: 'Sự kết hợp tuyệt vời giữa màn hình lớn QHD+ siêu nét và dung lượng pin 4900 mAh trong thiết kế mỏng nhẹ đẳng cấp.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://samsung.com',
    colors: [
      { name: 'Xám Titan', hex: '#4A4B4D', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Navy', hex: '#1E293B', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 26990000, oldPrice: 28990000 },
      { capacity: '512GB', price: 30990000, oldPrice: 32990000 }
    ],
    features: ['Màn Hình QHD+ Siêu Nét', 'Trợ Lý Galaxy AI Tiếng Việt', 'Sạc Siêu Nhanh 45W', 'RAM 12GB Đa Nhiệm Mượt']
  },
  {
    id: 'galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold6 5G 256GB',
    brand: 'Samsung',
    tagline: 'Màn hình gập mỏng nhẹ vượt trội, Đa nhiệm AI doanh nhân',
    category: 'Samsung Galaxy',
    screen: 'Chính 7.6" QXGA+ & Phụ 6.3" Dynamic AMOLED 2X 120Hz',
    chipset: 'Snapdragon 8 Gen 3 for Galaxy',
    ram: '12 GB',
    camera: 'Chính 50MP OIS & Siêu rộng 12MP & Tele 10MP 3x',
    battery: '4.400 mAh, Sạc nhanh 25W',
    tradeInBonus: 6000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng ốp lưng S Pen chính hãng + Gói bảo hành VIP Care 12 tháng',
    description: 'Thiết kế gập vuông vức sang trọng, viền nhôm Armor Aluminum nâng cấp độ bền. Hỗ trợ tính năng phác thảo thành tranh AI Sketch to Image.',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://samsung.com',
    colors: [
      { name: 'Xám Metal (Silver Shadow)', hex: '#A8A9AD', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Navy (Navy Blue)', hex: '#1E293B', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 41990000, oldPrice: 43990000 },
      { capacity: '512GB', price: 45990000, oldPrice: 47990000 }
    ],
    features: ['Màn Hình Gập Lớn 7.6 inch', 'Phác Thảo Tranh AI Sketch to Image', 'Bản Lề Flex Hinge Phẳng', 'Khung Armor Aluminum Đáng Tin Cậy'],
    isHot: true
  },
  {
    id: 'galaxy-z-flip-6',
    name: 'Samsung Galaxy Z Flip6 5G 256GB',
    brand: 'Samsung',
    tagline: 'Thiết kế gập vỏ sò thời trang, Camera 50MP & Flex Window',
    category: 'Samsung Galaxy',
    screen: 'Chính 6.7" Dynamic AMOLED 2X & Phụ 3.4" Flex Window 120Hz',
    chipset: 'Snapdragon 8 Gen 3 for Galaxy',
    ram: '12 GB',
    camera: 'Chính 50MP OIS & Siêu rộng 12MP',
    battery: '4.000 mAh, Sạc nhanh 25W',
    tradeInBonus: 4000000,
    discountTag: 'Giảm 3.000.000đ',
    giftDesc: 'Tặng bao da thời trang + Trả góp 0%',
    description: 'Kiểu dáng gập vỏ sò vô cùng nhỏ gọn tinh tế. Màn hình ngoài Flex Window 3.4 inch hỗ trợ phản hồi tin nhắn và chụp hình selfie đỉnh cao.',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://samsung.com',
    colors: [
      { name: 'Vàng Solar', hex: '#EAB308', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Xanh Mint Cool', hex: '#10B981', imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 25990000, oldPrice: 28990000 },
      { capacity: '512GB', price: 29990000, oldPrice: 32990000 }
    ],
    features: ['Gập Vỏ Sò Nhỏ Gọn Thời Trang', 'Camera 50MP Nâng Cấp Sắc Nét', 'Màn Phụ Flex Window Đa Năng', 'Hệ Thống Tản Nhiệt Buồng Hơi']
  },
  {
    id: 'galaxy-a55',
    name: 'Samsung Galaxy A55 5G 128GB',
    brand: 'Samsung',
    tagline: 'Vua doanh số phân khúc tầm trung với khung kim loại IP67',
    category: 'Samsung Galaxy',
    screen: 'Super AMOLED 6.6" Full HD+ 120Hz 1000 nits',
    chipset: 'Exynos 1480 8 nhân',
    ram: '8 GB',
    camera: 'Chính 50MP OIS & Siêu rộng 12MP & Macro 5MP',
    battery: '5.000 mAh, Sạc nhanh 25W',
    tradeInBonus: 1500000,
    discountTag: 'Giảm 1.000.000đ',
    giftDesc: 'Ưu đãi trả góp 0% + Tặng bảo hành mở rộng',
    description: 'Thiết kế khung kim loại cao cấp chống nước IP67. Camera chụp đêm Nightography ấn tượng và viên pin 5000 mAh sử dụng 2 ngày.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://samsung.com',
    colors: [
      { name: 'Xanh Xăng (Iceblue)', hex: '#93C5FD', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Tím Lilac', hex: '#C084FC', imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 9990000, oldPrice: 10990000 },
      { capacity: '256GB', price: 10990000, oldPrice: 11990000 }
    ],
    features: ['Khung Kim Loại Sang Trọng', 'Kháng Nước Chống Bụi IP67', 'Pin 5000 mAh Sử Dụng 2 Ngày', 'Bảo Mật Knox Vault Đẳng Cấp']
  },

  // --- 🔴 XIAOMI, OPPO, VIVO & GAMING PHONE ---
  {
    id: 'xiaomi-15-ultra',
    name: 'Xiaomi 15 Ultra 5G 512GB',
    brand: 'Xiaomi',
    tagline: 'Ống kính Leica 1 inch, Chip Snapdragon 8 Elite, Sạc 90W',
    category: 'Android Flagship',
    screen: 'LTPO AMOLED 6.73" 2K+ 120Hz 3000 nits',
    chipset: 'Snapdragon 8 Elite 3nm',
    ram: '16 GB',
    camera: 'Quad Leica 50MP Cảm Biến 1" & Tele Periscope 200MP',
    battery: '5.500 mAh, Sạc siêu tốc 90W HyperCharge',
    tradeInBonus: 4000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng Bộ Photography Kit Leica + Bảo hành Premium 24 tháng',
    description: 'Đỉnh cao nhiếp ảnh di động chuyên nghiệp hợp tác cùng hãng ống kính huyền thoại Leica Đức. Kèm bộ Photography Kit chụp hình tay cầm độc đáo.',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://mi.com',
    colors: [
      { name: 'Đen Da Thuộc (Black Leather)', hex: '#18181B', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Gốm (White Ceramic)', hex: '#FAFAFA', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 29990000, oldPrice: 31990000 },
      { capacity: '1TB', price: 34990000, oldPrice: 36990000 }
    ],
    features: ['Ống Kính Leica Huyền Thoại', 'Camera Periscope 200MP', 'Sạc Nhanh 90W HyperCharge', 'Mặt Lưng Gốm / Da Đẳng Cấp'],
    isHot: true
  },
  {
    id: 'rog-phone-9-pro',
    name: 'ASUS ROG Phone 9 Pro 512GB',
    brand: 'ASUS',
    tagline: 'Quái vật Gaming Phone màn hình AniMe Vision, Tần số quét 185Hz',
    category: 'Gaming Phone',
    screen: 'E6 AMOLED 6.78" FHD+ 185Hz siêu mượt 2500 nits',
    chipset: 'Snapdragon 8 Elite Gaming Tuned 3nm',
    ram: '16 GB LPDDR5X',
    camera: '50MP Gimbal Stabilizer & 32MP Tele & 13MP UltraWide',
    battery: '5.800 mAh, Sạc siêu tốc 65W HyperCharge',
    tradeInBonus: 3500000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng quạt tản nhiệt AeroActive Cooler X Pro',
    description: 'Gaming Phone số 1 thế giới sở hữu màn hình 185Hz siêu mượt và đèn LED AniMe Vision mặt lưng biến hình cá tính.',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://asus.com',
    colors: [
      { name: 'Phantom Black (Đen Huyền Ảo)', hex: '#0F172A', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 31990000, oldPrice: 33990000 },
      { capacity: '1TB', price: 38990000, oldPrice: 40990000 }
    ],
    features: ['Màn Hình 185Hz Đỉnh Cao Chơi Game', 'Cảm Biến Siêu Âm AirTrigger', 'Tản Nhiệt Khí Động Học AeroActive', 'Mặt Lưng Đèn LED AniMe Vision']
  },
  {
    id: 'oppo-find-x8-pro',
    name: 'OPPO Find X8 Pro 5G 512GB',
    brand: 'OPPO',
    tagline: 'Camera Hasselblad 2 ống kính Periscope Tele, Pin 5910 mAh',
    category: 'Android Flagship',
    screen: 'AMOLED 6.78" 1.5K 120Hz 4500 nits',
    chipset: 'MediaTek Dimensity 9400 3nm',
    ram: '16 GB',
    camera: '4 Camera 50MP Hasselblad Kép Periscope 3x & 6x',
    battery: '5.910 mAh, Sạc siêu tốc 80W SuperVOOC',
    tradeInBonus: 4000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng Loa Bluetooth + Trả góp 0%',
    description: 'Kiệt tác camera hợp tác cùng Hasselblad Thụy Điển. Trang bị phím bấm Quick Button chụp ảnh chuyên nghiệp và viên pin 5910 mAh khổng lồ.',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://oppo.com',
    colors: [
      { name: 'Trắng Ngọc Trai (Pearl White)', hex: '#F4F4F5', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Thạch Anh (Space Black)', hex: '#18181B', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 28990000, oldPrice: 30990000 }
    ],
    features: ['Camera Hasselblad Kép Periscope 3x & 6x', 'Pin Silicon-Carbon 5910 mAh', 'Phím Chụp Ảnh Quick Button', 'Kháng Nước IP68 / IP69']
  },
  {
    id: 'vivo-x200-pro',
    name: 'Vivo X200 Pro Zeiss 5G 512GB',
    brand: 'Vivo',
    tagline: 'Ống kính Zeiss 200MP Tele APO, Chip Dimensity 9400',
    category: 'Android Flagship',
    screen: 'AMOLED 6.78" 1.5K 120Hz 4500 nits',
    chipset: 'MediaTek Dimensity 9400 3nm',
    ram: '16 GB',
    camera: 'Zeiss 200MP APO Tele & 50MP Main 1/1.28" & 50MP Ultrawide',
    battery: '6.000 mAh, Sạc siêu tốc 90W FlashCharge',
    tradeInBonus: 3500000,
    discountTag: 'Giảm 1.500.000đ',
    giftDesc: 'Tặng VIP Care 24 tháng + Trả góp 0%',
    description: 'Chuyên gia nhiếp ảnh chân dung và thiên văn học với ống kính Zeiss APO 200MP Telephoto đỉnh cao số 1 thế giới.',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://vivo.com',
    colors: [
      { name: 'Xanh Titan (Titanium Blue)', hex: '#2B3E50', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Carbon', hex: '#18181B', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 29990000, oldPrice: 31990000 }
    ],
    features: ['Camera Zeiss APO 200MP Đỉnh Cao', 'Viên Pin Khổng Lồ 6000 mAh', 'Chip Dimensity 9400 3nm', 'Chống Nước Chuẩn IP68 / IP69']
  },
  {
    id: 'google-pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL 256GB',
    brand: 'Google',
    tagline: 'Thuần khiết Android, AI Gemini đỉnh cao nhiếp ảnh',
    category: 'Android Flagship',
    screen: 'Super Actua OLED 6.8" 120Hz 3000 nits',
    chipset: 'Google Tensor G4 4nm + Titan M2 Security',
    ram: '16 GB',
    camera: '50MP OIS & 48MP Tele 5x & 48MP Ultrawide',
    battery: '5.060 mAh, Sạc nhanh 37W',
    tradeInBonus: 3000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Cập nhật hệ điều hành 7 năm + Google One AI Premium',
    description: 'Trải nghiệm Android thuần khiết mượt mà nhất cùng khả năng xử lý ảnh AI Gemini đột phá: Add Me, Best Take & Magic Editor.',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://store.google.com',
    colors: [
      { name: 'Hazel (Xám Rêu)', hex: '#5B685D', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Obsidian (Đen Đá)', hex: '#1A1A1A', imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 27990000, oldPrice: 29990000 },
      { capacity: '512GB', price: 32990000, oldPrice: 34990000 }
    ],
    features: ['Mô Hình AI Google Gemini Trực Tiếp', 'Cập Nhật Android Liên Tục 7 Năm', 'Camera Chụp Ảnh Đêm Best Take', 'Màn Hình Super Actua 3000 nits']
  },

  // --- 📱 TABLETS & PHỤ KIỆN ---
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro 13 inch M4 Wifi 256GB',
    brand: 'Apple',
    tagline: 'Màn hình Ultra Retina XDR Tandem OLED siêu mỏng 5.1mm',
    category: 'Tablet & Phụ Kiện',
    screen: 'Ultra Retina XDR Tandem OLED 13" 120Hz 1600 nits',
    chipset: 'Apple M4 (9-core CPU, 10-core GPU)',
    ram: '8 GB',
    camera: 'Chính 12MP 4K & Cảm biến LiDAR Scanner',
    battery: '38.99 Wh, Sạc Type-C Thunderbolt 4',
    tradeInBonus: 3000000,
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Giảm 10% khi mua kèm Apple Pencil Pro',
    description: 'Chiếc máy tính bảng mỏng nhất từ trước tới nay của Apple với độ mỏng chỉ 5.1mm. Màn hình Tandem OLED rực rỡ và sức mạnh chip M4 đột phá.',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://apple.com',
    colors: [
      { name: 'Đen Thần Không (Space Black)', hex: '#1D1D1F', imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Bạc Khí Chất (Silver)', hex: '#E3E4E6', imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '256GB', price: 37990000, oldPrice: 39990000 },
      { capacity: '512GB', price: 43990000, oldPrice: 45990000 },
      { capacity: '1TB', price: 55990000, oldPrice: 57990000 }
    ],
    features: ['Màn Hình Tandem OLED Rực Rỡ', 'Chip Apple M4 Đồ Họa Ray Tracing', 'Thiết Kế Siêu Mỏng 5.1mm', 'Cổng Kết Nối Thunderbolt 4']
  }
];
