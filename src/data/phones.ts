export interface PhoneColor {
  name: string;
  hex: string;
  imageUrl: string;
}

export interface StorageOption {
  capacity: '128GB' | '256GB' | '512GB' | '1TB';
  price: number; // VNĐ (Giá bán TGDD)
  oldPrice?: number; // VNĐ (Giá niêm yết)
}

export interface PhoneProduct {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Xiaomi' | 'OPPO' | 'ASUS' | 'Google' | 'Vivo';
  tagline: string;
  category: 'iPhone' | 'Samsung Galaxy' | 'Android Flagship' | 'Gaming Phone' | 'Tablet & Phụ Kiện';
  screen: string;
  chipset: string;
  ram: string;
  camera: string;
  battery: string;
  tradeInBonus: number; // VNĐ (Trợ giá thu cũ TGDD)
  discountTag?: string; // Nhãn giảm giá TGDD (VD: "Giảm 2.000.000đ", "HSSV Giảm 500k")
  giftDesc?: string; // Quà tặng kèm TGDD
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
  estimatedValueType1: number; // VNĐ (Loại 1 máy đẹp 99%)
  estimatedValueType2: number; // VNĐ (Loại 2 trầy nhẹ)
  estimatedValueType3: number; // VNĐ (Loại 3 trầy nhiều)
}

export interface StoreBranch {
  id: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  stockStatus: 'Còn hàng sẵn' | 'Giao nhanh 1 giờ';
}

export const STORE_BRANCHES: StoreBranch[] = [
  { id: 'tgdd-hn-1', city: 'Hà Nội', name: 'Thế Giới Di Động Thái Hà', address: '11A Thái Hà, P. Trung Liệt, Q. Đống Đa, Hà Nội', phone: '1800 1060', stockStatus: 'Còn hàng sẵn' },
  { id: 'tgdd-hn-2', city: 'Hà Nội', name: 'Thế Giới Di Động Cầu Giấy', address: '26B Cầu Giấy, P. Quan Hoa, Q. Cầu Giấy, Hà Nội', phone: '1800 1060', stockStatus: 'Còn hàng sẵn' },
  { id: 'tgdd-hcm-1', city: 'TP. Hồ Chí Minh', name: 'Thế Giới Di Động 3 Tháng 2', address: '136 3 Tháng 2, Phường 12, Quận 10, TP.HCM', phone: '1800 1060', stockStatus: 'Còn hàng sẵn' },
  { id: 'tgdd-hcm-2', city: 'TP. Hồ Chí Minh', name: 'Thế Giới Di Động Nguyễn Trãi', address: '155 Nguyễn Trãi, Phường 2, Quận 5, TP.HCM', phone: '1800 1060', stockStatus: 'Còn hàng sẵn' },
  { id: 'tgdd-dn-1', city: 'Đà Nẵng', name: 'Thế Giới Di Động Nguyễn Văn Linh', address: '145 Nguyễn Văn Linh, Q. Hải Châu, Đà Nẵng', phone: '1800 1060', stockStatus: 'Còn hàng sẵn' }
];

export const TRADE_IN_DEVICES: TradeInDevice[] = [
  { id: 'ti-15pm', name: 'iPhone 15 Pro Max 256GB (VN/A)', brand: 'Apple', estimatedValueType1: 23500000, estimatedValueType2: 22000000, estimatedValueType3: 20000000 },
  { id: 'ti-14pm', name: 'iPhone 14 Pro Max 128GB (VN/A)', brand: 'Apple', estimatedValueType1: 18500000, estimatedValueType2: 17000000, estimatedValueType3: 15000000 },
  { id: 'ti-13pm', name: 'iPhone 13 Pro Max 128GB (VN/A)', brand: 'Apple', estimatedValueType1: 14500000, estimatedValueType2: 13000000, estimatedValueType3: 11500000 },
  { id: 'ti-s24u', name: 'Samsung Galaxy S24 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 20500000, estimatedValueType2: 19000000, estimatedValueType3: 17000000 },
  { id: 'ti-s23u', name: 'Samsung Galaxy S23 Ultra 256GB', brand: 'Samsung', estimatedValueType1: 13500000, estimatedValueType2: 12000000, estimatedValueType3: 10500000 }
];

export const PHONE_PRODUCTS: PhoneProduct[] = [
  // --- APPLE IPHONE SERIES (CHUẨN THẾ GIỚI DI ĐỘNG) ---
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
    tradeInBonus: 5000000, // Trợ giá 5 triệu TGDD
    discountTag: 'Giảm 2.000.000đ',
    giftDesc: 'Tặng củ sạc nhanh Apple 25W chính hãng + Trả góp 0%',
    description: 'Bản nâng cấp mạnh mẽ nhất từ Apple với khung Titan Titan Sa Mạc thời thượng. Viền màn hình mỏng nhất từ trước tới nay, hỗ trợ Apple Intelligence AI việt hóa.',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/iphone-16-pro-max',
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
    giftDesc: 'Tặng phiếu mua hàng 500.000đ + Giảm 30% Tai nghe AirPods',
    description: 'Sở hữu trọn vẹn ống kính Tele Zoom 5x cao cấp của dòng Pro Max. Phím bấm Action Button đa năng cùng viền màn hình 6.3 inch tinh tế.',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/iphone-16-pro',
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
    giftDesc: 'Giảm thêm 500k cho HSSV + Trả góp 0%',
    description: 'Màu sắc trẻ trung nổi bật: Xanh Lưu Ly, Hồng Ngọc và Xanh Đại Dương. Hỗ trợ quay video Spatial Video dành cho kính Apple Vision Pro.',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/iphone-16',
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
    id: 'iphone-13',
    name: 'iPhone 13 128GB',
    brand: 'Apple',
    tagline: 'Mẫu iPhone quốc dân bán chạy số 1 Thế Giới Di Động',
    category: 'iPhone',
    screen: 'OLED 6.1" Super Retina XDR',
    chipset: 'Apple A15 Bionic 6 nhân',
    ram: '4 GB',
    camera: '2 camera 12MP OIS chống rung quang học',
    battery: '3.240 mAh, Sạc nhanh 20W',
    tradeInBonus: 2000000,
    discountTag: 'Giảm 3.300.000đ',
    giftDesc: 'Giá cực tốt tại TGDD + Trả góp 0% lãi suất',
    description: 'Chiếc iPhone giữ vững ngôi vương doanh số tại TGDD nhờ mức giá hấp dẫn, hiệu năng mượt mà ổn định và camera chụp ảnh chân thực.',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/iphone-13',
    colors: [
      { name: 'Đen Midnight', hex: '#1C1C1E', imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Trắng Starlight', hex: '#F5F5F7', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Hồng Pink', hex: '#E0A96D', imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '128GB', price: 13690000, oldPrice: 16990000 },
      { capacity: '256GB', price: 16990000, oldPrice: 19990000 }
    ],
    features: ['Chipset Apple A15 Bionic Mượt Ma', 'Camera Chống Rung Sensor-Shift', 'Màn Hình Super Retina XDR Sắc Nét', 'Thời Lượng Pin Bền Bỉ']
  },

  // --- SAMSUNG GALAXY SERIES (CHUẨN THẾ GIỚI DI ĐỘNG) ---
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
    giftDesc: 'Tặng Voucher 2 triệu + Bảo hành Samsung Care+ 1 năm',
    description: 'Kiệt tác Flagship gọt giũa khung Titan góc bo nhẹ nhàng sang trọng. Tích hợp trọn bộ Galaxy AI tiếng Việt khoanh vùng tìm kiếm Circle to Search.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/samsung-galaxy-s25-ultra',
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
    giftDesc: 'Tặng ốp lưng S Pen chính hãng + Gói bảo hành Samsung Care+ 12 tháng',
    description: 'Thiết kế gập vuông vức sang trọng, viền nhôm Armor Aluminum nâng cấp độ bền. Hỗ trợ tính năng phác thảo thành tranh AI Sketch to Image.',
    imageUrl: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/samsung-galaxy-z-fold6',
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
    id: 'galaxy-a55',
    name: 'Samsung Galaxy A55 5G 128GB',
    brand: 'Samsung',
    tagline: 'Vua doanh số phân khúc tầm trung tại Thế Giới Di Động',
    category: 'Samsung Galaxy',
    screen: 'Super AMOLED 6.6" Full HD+ 120Hz 1000 nits',
    chipset: 'Exynos 1480 8 nhân',
    ram: '8 GB',
    camera: 'Chính 50MP OIS & Siêu rộng 12MP & Macro 5MP',
    battery: '5.000 mAh, Sạc nhanh 25W',
    tradeInBonus: 1500000,
    discountTag: 'Giảm 1.000.000đ',
    giftDesc: 'Ưu đãi trả góp 0% + Tặng bảo hành 2 năm',
    description: 'Thiết kế khung kim loại cao cấp chống nước IP67. Camera chụp đêm Nightography ấn tượng và viên pin 5000 mAh sử dụng 2 ngày.',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/samsung-galaxy-a55-5g',
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

  // --- XIAOMI & OPPO FLAGSHIP (CHUẨN THẾ GIỚI DI ĐỘNG) ---
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
    officialUrl: 'https://www.thegioididong.com/dtdd/xiaomi-15-ultra',
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
    giftDesc: 'Tặng Loa Bluetooth JBL + Trả góp 0%',
    description: 'Kiệt tác camera hợp tác cùng Hasselblad Thụy Điển. Trang bị phím bấm Quick Button chụp ảnh chuyên nghiệp và viên pin 5910 mAh khổng lồ.',
    imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80',
    officialUrl: 'https://www.thegioididong.com/dtdd/oppo-find-x8-pro',
    colors: [
      { name: 'Trắng Ngọc Trai (Pearl White)', hex: '#F4F4F5', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' },
      { name: 'Đen Thạch Anh (Space Black)', hex: '#18181B', imageUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&w=1200&q=80' }
    ],
    storages: [
      { capacity: '512GB', price: 28990000, oldPrice: 30990000 }
    ],
    features: ['Camera Hasselblad Kép Periscope 3x & 6x', 'Pin Silicon-Carbon 5910 mAh', 'Phím Chụp Ảnh Quick Button', 'Kháng Nước IP68 / IP69']
  },

  // --- IPAD & TABLET (CHUẨN THẾ GIỚI DI ĐỘNG) ---
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
    officialUrl: 'https://www.thegioididong.com/may-tinh-bang/ipad-pro-13-inch-m4-cellular-256gb',
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
