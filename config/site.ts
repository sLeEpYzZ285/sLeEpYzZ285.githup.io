export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rayong OA",
  description: "ระยอง โอเอ ร้านคอมระยอง ร้านITระยอง ร้านคอม ศูนย์คอมพิวเตอร์ ร้านซ่อมคอม ซ่อมคอมพิวเตอร์ ศูนย์บริการปริ้นเตอร์ EPSON BROTHER Printer ปริ้นเตอร์ระยอง ร้านซ่อมปริ้นเตอร์",
  navItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "สินค้าทั้งหมด",
      href: "/products",
    },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "ผลงานของเรา",
      href: "/ourwork"
    },
    {
      label: "เกี่ยวกับเรา",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "หน้าหลัก",
      href: "/",
    },
    {
      label: "สินค้าทั้งหมด",
      href: "/products",
    },
    {
      label: "ผลงานของเรา",
      href: "/ourwork",
    },
    {
      label: "เกี่ยวกับเรา",
      href: "/about",
    }
  ],
  footer:{
    address: {
      title: "สำนักงานใหญ่",
      detail:
        "ตั้งอยู่เลขที่ 31,33,35 ซอยศูนย์การค้าสาย 4 ถนนสุขุมวิท ตำบลท่าประดู่ อำเภอเมืองระยองจังหวัดระยอง 21000",
    },
    site_map_title: "เมนู",
    contact: {
      title: "ช่องทางการติดต่อ",
      facebook: "ระยอง โอเอ แอนด์ เซอร์วิส",
      line: "@rayongoa",
      mail: "all@rayong-oa.com",
      phone: ["038-860278", "086-3276841", " 038-860279"],
    },
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
