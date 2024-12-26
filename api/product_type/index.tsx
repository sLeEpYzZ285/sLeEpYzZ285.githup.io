export type MonitorType = {
  display: string;
  panelType: string;
  maximumResolution: string;
  brightness: string;
  contrastRatio: string;
  responseTime: string;
  refreshRate: string;
  aspectRatio: string;
  hdmi: string;
  dsubVGA: string;
  dimension: string;
  weight: string;
  warranty: string;
};

export type DexktopType = {
  display: string;
  panelType: string;
  maximumResolution: string;
  brightness: string;
  contrastRatio: string;
  responseTime: string;
  refreshRate: string;
  aspectRatio: string;
  hdmi: string;
  dsubVGA: string;
  dimension: string;
  weight: string;
  warranty: string;
};

export type productTypeListType = [
  {
    id: string;
    type: string;
    name:string
    caption: string;
    imageUrl: string;
  }
];

export  const productTypeListType = [
    {
      id: '1111',
      type: "notebook",
      name: "Notebook",
      caption: "เร็วแรง ทันสมัย ประสิทธิภาพสูงสุด",
      imageUrl: 'https://assets-prd.ignimgs.com/2022/07/18/lenovolegion5pro-1658155480534.jpg'
    },
    {
      id: '2222',
      type: "printer",
      name: "ปริ้นเตอร์",
      caption: "คมชัด ลื่นไหล ไม่มีสะดุด",
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61c4b817005143.56344c02a158c.jpg'
    },
    {
      id: '33333',
      type: "monitor",
      name: "จอคอมพิวเตอร์",
      caption: " ภาพสวย คมชัด สีสันสดใส",
      imageUrl: 'https://image.benq.com/is/image/benqco/Gaming-Slider-M?$ResponsivePreset$'
    },
    {
      id: '44444',
      type: "computer",
      name: "Computer",
      caption: " เร็วแรง ทันสมัย ประสิทธิภาพสูงสุด",
      imageUrl: 'https://www.hardwarezone.com.sg/thumbs/685089/og.jpg?9348'
    },
    {
      id: '555555',
      type: "all_in_one",
      name: "all in one",
      caption: " ครบจบ พร้อมใช้ ไร้กังวล",
      imageUrl: 'https://m.media-amazon.com/images/I/81wLYpb0INL._AC_SL1500_.jpg'
    },
  ];

const product = {
  id: "011111",
  image:
    "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/asus-tuf-f17-fx707zc4-hx080w-gaming-notebook-front-view.jpg",
  name: "โน๊ตบุ๊ค Asus TUF F17 FX707ZC4-HX080W Gaming Notebook",
  type: "notebook",
  properties: {
    display: "23.8 นิ้ว",
    panelType: "IPS",
    maximumResolution: "1920×1080",
    brightness: "250 cd/m2",
    contrastRatio: "3,000 : 1",
    responseTime: "1 ms",
    refreshRate: "100 Hz",
    aspectRatio: "16:9",
    hdmi: "1 Port",
    dsubVGA: "1 Port",
    dimension: "(W x D x H) : 53.88 x 41.1 x 19.2 cm",
    weight: "3.8 kg",
    warranty: "3 Years",
  },
  keyword: ["gaming", "เล่นเกม", "จอ120hz"],
  price: 39000,
  stock: 40,
};
