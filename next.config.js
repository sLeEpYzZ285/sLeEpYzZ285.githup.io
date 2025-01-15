/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // ปรับ basePath ตาม repository ที่ใช้
  // basePath: '/sleepyzz285.github.io',
  // assetPrefix: '/sLeEpYzZ285.githup.io/',
  images: {
    domains: [], // ปล่อยให้เป็น array ว่างๆ เพื่ออนุญาตทุกโดเมน
    unoptimized: true, // ปิดการปรับแต่งรูปภาพเพื่อไม่จำกัดแหล่งที่มา
  },

}

module.exports = nextConfig
