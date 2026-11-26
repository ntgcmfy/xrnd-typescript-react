import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // E2E テスト用のサーバーは、開発用のサーバーと出力先のフォルダを分ける（同時に起動できるようにするため）
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
};

export default nextConfig;
