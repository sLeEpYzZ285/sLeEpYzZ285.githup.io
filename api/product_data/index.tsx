export type product_type = {
  id: string;
  image: string;
  name: string;
  type: string;
  keyword: Array<string>;
  properties: any;
  price: number;
  stock: number;
};

export const products: Array<product_type> = [
  {
    id: "011111",
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/asus-tuf-f17-fx707zc4-hx080w-gaming-notebook-front-view.jpg",
    name: "โน๊ตบุ๊ค Asus TUF F17 FX707ZC4-HX080W Gaming Notebook",
    type: "notebook",
    properties: {
      display: "17.3 นิ้ว",
      panelType: "IPS",
      maximumResolution: "1920×1080",
      brightness: "250 cd/m2",
      contrastRatio: "3,000 : 1",
      responseTime: "3 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "1 Port",
      usbPorts: "3x USB 3.2",
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16 GB",
      storage: "512 GB SSD",
      weight: "2.6 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "เล่นเกม", "จอ120hz"],
    price: 39000,
    stock: 40,
  },
  {
    id: "011112",
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/09/Product/gigabyte-aorus-16-bsf-73th654sh-gaming-notebook-front-view.jpg",
    name: "โน๊ตบุ๊ค Gigabyte AORUS 16 BSF-73TH654SH Gaming Notebook",
    type: "notebook",
    properties: {
      display: "17.3 นิ้ว",
      panelType: "IPS",
      maximumResolution: "1920×1080",
      brightness: "250 cd/m2",
      contrastRatio: "3,000 : 1",
      responseTime: "3 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "1 Port",
      usbPorts: "3x USB 3.2",
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16 GB",
      storage: "512 GB SSD",
      weight: "2.6 kg",
      warranty: "3 Years",
    },
    keyword: ["work", "ธุรกิจ", "15inch"],
    price: 28000,
    stock: 25,
  },
  {
    id: "011113",
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/09/Computer/M1504FA-NJ548WF-1.jpg",
    name: "โน๊ตบุ๊ค Asus Vivobook Go 15 M1504FA-NJ548WF Notebook",
    type: "notebook",
    properties: {
      display: "17.3 นิ้ว",
      panelType: "IPS",
      maximumResolution: "1920×1080",
      brightness: "250 cd/m2",
      contrastRatio: "3,000 : 1",
      responseTime: "3 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "1 Port",
      usbPorts: "3x USB 3.2",
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16 GB",
      storage: "512 GB SSD",
      weight: "2.6 kg",
      warranty: "3 Years",
    },
    keyword: ["work", "แล็ปท็อปบางเบา", "2-in-1"],
    price: 35000,
    stock: 30,
  },
  {
    id: "011114",
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/07/Computer/UX8406MA-PZ731WF-1.jpg",
    name: "โน๊ตบุ๊ค Asus Zenbook Duo UX8406MA-PZ731WF Notebook",
    type: "notebook",
    properties: {
      display: "17.3 นิ้ว",
      panelType: "IPS",
      maximumResolution: "1920×1080",
      brightness: "250 cd/m2",
      contrastRatio: "3,000 : 1",
      responseTime: "3 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "1 Port",
      usbPorts: "3x USB 3.2",
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16 GB",
      storage: "512 GB SSD",
      weight: "2.6 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "เล่นเกม", "คีย์บอร์ด RGB"],
    price: 45000,
    stock: 15,
  },
  {
    id: "011115",
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/08/Computer/D5406UA-PP728WF-1.jpg",
    name: "โน๊ตบุ๊ค Asus Vivobook S14 D5406UA-PP728WF Notebook Neutral Black",
    type: "notebook",
    properties: {
      display: "17.3 นิ้ว",
      panelType: "IPS",
      maximumResolution: "1920×1080",
      brightness: "250 cd/m2",
      contrastRatio: "3,000 : 1",
      responseTime: "3 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "1 Port",
      usbPorts: "3x USB 3.2",
      cpu: "Intel Core i7-12700H",
      gpu: "NVIDIA GeForce RTX 3050",
      ram: "16 GB",
      storage: "512 GB SSD",
      weight: "2.6 kg",
      warranty: "3 Years",
    },
    keyword: ["work", "business", "14inch"],
    price: 55000,
    stock: 10,
  },
  {
    id: "021111",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fmYBOZ68SvD4xYWaD8_8u4k2YiD5oSr7Qg&s",
    name: "Dell Optiplex 7080",
    type: "computer",
    properties: {
      cpu: "Intel Core i7-10700",
      gpu: "Integrated Intel UHD Graphics 630",
      ram: "16 GB",
      storage: "1 TB HDD + 256 GB SSD",
      ports: "4x USB 3.2, 2x USB 2.0, 1x HDMI, 1x DisplayPort",
      dimension: "(W x D x H): 17.4 x 27.4 x 34.5 cm",
      weight: "8.5 kg",
      warranty: "3 Years",
    },
    keyword: ["business", "desktop", "i7"],
    price: 32000,
    stock: 20,
  },
  {
    id: "021112",
    image:
      "https://addin.co.th/wp-content/uploads/2020/05/package-work-station-zebra-two-gen-four-mini-one.jpg",
    name: "HP Z2 Mini G5",
    type: "computer",
    properties: {
      cpu: "Intel Core i7-10700",
      gpu: "Integrated Intel UHD Graphics 630",
      ram: "16 GB",
      storage: "1 TB HDD + 256 GB SSD",
      ports: "4x USB 3.2, 2x USB 2.0, 1x HDMI, 1x DisplayPort",
      dimension: "(W x D x H): 17.4 x 27.4 x 34.5 cm",
      weight: "8.5 kg",
      warranty: "3 Years",
    },
    keyword: ["workstation", "mini PC", "powerful"],
    price: 48000,
    stock: 12,
  },
  {
    id: "021113",
    image:
      "https://cdn.shoplightspeed.com/shops/662820/files/59782353/650x750x2/apple-imac-24-apple-m3-8-cpu-10gpu-8-gb-256-gb-ssd.jpg",
    name: "Apple iMac 24-inch M1",
    type: "computer",
    properties: {
      cpu: "Intel Core i7-10700",
      gpu: "Integrated Intel UHD Graphics 630",
      ram: "16 GB",
      storage: "1 TB HDD + 256 GB SSD",
      ports: "4x USB 3.2, 2x USB 2.0, 1x HDMI, 1x DisplayPort",
      dimension: "(W x D x H): 17.4 x 27.4 x 34.5 cm",
      weight: "8.5 kg",
      warranty: "3 Years",
    },
    keyword: ["all-in-one", "Mac", "M1"],
    price: 56000,
    stock: 8,
  },
  {
    id: "021114",
    image:
      "https://down-th.img.susercontent.com/file/ebf6fcd1f31cde5156effb924c526a53",
    name: "Asus ROG Strix GA15",
    type: "computer",
    properties: {
      cpu: "Intel Core i7-10700",
      gpu: "Integrated Intel UHD Graphics 630",
      ram: "16 GB",
      storage: "1 TB HDD + 256 GB SSD",
      ports: "4x USB 3.2, 2x USB 2.0, 1x HDMI, 1x DisplayPort",
      dimension: "(W x D x H): 17.4 x 27.4 x 34.5 cm",
      weight: "8.5 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "desktop", "RGB"],
    price: 46000,
    stock: 18,
  },
  {
    id: "021115",
    image:
      "https://down-th.img.susercontent.com/file/dadaee9fa598e49fe4765de6e7859cb4",
    name: "Lenovo Legion T5",
    type: "computer",
    properties: {
      cpu: "Intel Core i7-10700",
      gpu: "Integrated Intel UHD Graphics 630",
      ram: "16 GB",
      storage: "1 TB HDD + 256 GB SSD",
      ports: "4x USB 3.2, 2x USB 2.0, 1x HDMI, 1x DisplayPort",
      dimension: "(W x D x H): 17.4 x 27.4 x 34.5 cm",
      weight: "8.5 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "RTX 3070", "desktop"],
    price: 62000,
    stock: 10,
  },
  {
    id: "031111",
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/th/ls28bg700eexxt/gallery/th-odyssey-g7-g70b-ls28bg700eexxt-535250548?$650_519_PNG$",
    name: "Samsung Odyssey G7",
    type: "monitor",
    properties: {
      display: "28 นิ้ว",
      panelType: "VA",
      maximumResolution: "2560×1440",
      brightness: "350 cd/m2",
      contrastRatio: "2,500:1",
      responseTime: "1 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "2 Ports",
      displayPort: "1 Port",
      dimension: "(W x D x H): 61.5 x 23.8 x 51.5 cm",
      weight: "6.5 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "จอโค้ง", "QHD"],
    price: 23000,
    stock: 25,
  },
  {
    id: "031112",
    image:
      "https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/88116e53-3697-4765-a72e-68847e26a6b6/md07000225-large01-jpg",
    name: "LG UltraFine 5K",
    type: "monitor",
    properties: {
      display: "28 นิ้ว",
      panelType: "VA",
      maximumResolution: "2560×1440",
      brightness: "350 cd/m2",
      contrastRatio: "2,500:1",
      responseTime: "1 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "2 Ports",
      displayPort: "1 Port",
      dimension: "(W x D x H): 61.5 x 23.8 x 51.5 cm",
      weight: "6.5 kg",
      warranty: "3 Years",
    },
    keyword: ["professional", "5K", "27inch"],
    price: 45000,
    stock: 7,
  },
  {
    id: "031113",
    image:
      "https://media-cdn.bnn.in.th/40476/DELL-MONITOR-UltraSharp-U2720Q-IPS-4K-60Hz-1-square_medium.jpg",
    name: "Dell UltraSharp U2720Q",
    type: "monitor",
    properties: {
      display: "28 นิ้ว",
      panelType: "VA",
      maximumResolution: "2560×1440",
      brightness: "350 cd/m2",
      contrastRatio: "2,500:1",
      responseTime: "1 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "2 Ports",
      displayPort: "1 Port",
      dimension: "(W x D x H): 61.5 x 23.8 x 51.5 cm",
      weight: "6.5 kg",
      warranty: "3 Years",
    },
    keyword: ["work", "4K", "27inch"],
    price: 29000,
    stock: 20,
  },
  {
    id: "031114",
    image:
      "https://www.jib.co.th/img_master/product/original/20230706151628_60574_287_1.jpg",
    name: "Acer Nitro VG270",
    type: "monitor",
    properties: {
      display: "28 นิ้ว",
      panelType: "VA",
      maximumResolution: "2560×1440",
      brightness: "350 cd/m2",
      contrastRatio: "2,500:1",
      responseTime: "1 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "2 Ports",
      displayPort: "1 Port",
      dimension: "(W x D x H): 61.5 x 23.8 x 51.5 cm",
      weight: "6.5 kg",
      warranty: "3 Years",
    },
    keyword: ["gaming", "FHD", "IPS"],
    price: 12000,
    stock: 30,
  },
  {
    id: "031115",
    image:
      "https://www.asus.com/media/global/gallery/fbjfzudhdbnrqjme_setting_xxx_0_90_end_800.png",
    name: "ASUS ProArt PA32UCX",
    type: "monitor",
    properties: {
      display: "28 นิ้ว",
      panelType: "VA",
      maximumResolution: "2560×1440",
      brightness: "350 cd/m2",
      contrastRatio: "2,500:1",
      responseTime: "1 ms",
      refreshRate: "144 Hz",
      aspectRatio: "16:9",
      hdmi: "2 Ports",
      displayPort: "1 Port",
      dimension: "(W x D x H): 61.5 x 23.8 x 51.5 cm",
      weight: "6.5 kg",
      warranty: "3 Years",
    },
    keyword: ["professional", "HDR", "32inch"],
    price: 76000,
    stock: 5,
  },
  {
    id: "041112",
    image:
      "https://res.cloudinary.com/itcity-production/image/upload/f_jpg,q_80,w_1000/v1682666509/products/PRD202301003846/skus/n7s4tfxmdeyxjqg284fs.jpg",
    name: "Epson EcoTank L3110",
    type: "printer",
    properties: {
      printerType: "Inkjet",
      functions: "Print, Scan, Copy",
      printSpeed: "10 ppm (black), 5 ppm (color)",
      resolution: "5760×1440 dpi",
      connectivity: "USB",
      paperSize: "A4",
      dimension: "(W x D x H): 37.5 x 34.7 x 17.9 cm",
      weight: "3.9 kg",
      warranty: "2 Years",
    },
    keyword: ["Inkjet", "A4", "All-in-One"],
    price: 4500,
    stock: 60,
  },
  {
    id: "041113",
    image:
      "https://www.jib.co.th/img_master/product/original/2020040417512837864_1.png",
    name: "HP LaserJet Pro M15w",
    type: "printer",
    properties: {
      printerType: "Inkjet",
      functions: "Print, Scan, Copy",
      printSpeed: "10 ppm (black), 5 ppm (color)",
      resolution: "5760×1440 dpi",
      connectivity: "USB",
      paperSize: "A4",
      dimension: "(W x D x H): 37.5 x 34.7 x 17.9 cm",
      weight: "3.9 kg",
      warranty: "2 Years",
    },
    keyword: ["Laser", "Wireless", "A4"],
    price: 5200,
    stock: 40,
  },
  {
    id: "041114",
    image:
      "https://img.advice.co.th/images_nas/pic_product4/A0109679/A0109679OK_BIG_1.jpg",
    name: "Brother DCP-T510W",
    type: "printer",
    properties: {
      printerType: "Inkjet",
      functions: "Print, Scan, Copy",
      printSpeed: "10 ppm (black), 5 ppm (color)",
      resolution: "5760×1440 dpi",
      connectivity: "USB",
      paperSize: "A4",
      dimension: "(W x D x H): 37.5 x 34.7 x 17.9 cm",
      weight: "3.9 kg",
      warranty: "2 Years",
    },
    keyword: ["Inkjet", "ถ่ายเอกสาร", "Wireless"],
    price: 5500,
    stock: 30,
  },
  {
    id: "041115",
    image:
      "https://www.printer-thailand.com/1078-2782-thickbox/canon-imageclass-mf445dw-4-in-1-mono-multifunction-printer-38ppm.jpg",
    name: "Canon imageCLASS MF445dw",
    type: "printer",
    properties: {
      printerType: "Inkjet",
      functions: "Print, Scan, Copy",
      printSpeed: "10 ppm (black), 5 ppm (color)",
      resolution: "5760×1440 dpi",
      connectivity: "USB",
      paperSize: "A4",
      dimension: "(W x D x H): 37.5 x 34.7 x 17.9 cm",
      weight: "3.9 kg",
      warranty: "2 Years",
    },
    keyword: ["Laser", "A4", "All-in-One"],
    price: 16000,
    stock: 15,
  },
];
