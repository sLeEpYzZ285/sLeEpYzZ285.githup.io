export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Rayong OA",
  description: "ระยอง โอเอ ร้านคอมระยอง ระยอง ร้านคอม",
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
      label: "เกี่ยวกับเรา",
      href: "/about",
    }
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
