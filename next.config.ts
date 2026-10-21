import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/kategori/teknoloji-mobil/instagram-hesabi-gecici-ve-kalici-kapatma-adimlari',
        destination: '/kategori/teknoloji-mobil/instagram-hesap-dondurma-gecici-kapatma-linki',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
