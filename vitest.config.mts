import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const serverOnlyStub = fileURLToPath(new URL("./tests/server-only-stub.ts", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    // tsconfig.json の "@/*" をそのまま使う
    tsconfigPaths: true,
    alias: { "server-only": serverOnlyStub },
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          // 画面の部品のテストは、ファイルの先頭に // @vitest-environment jsdom を書く
          environment: "node",
          include: ["src/**/*.test.{ts,tsx}"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          environment: "node",
          include: ["tests/integration/**/*.test.ts"],
          setupFiles: ["tests/integration/setup.ts"],
          // テスト用ブランチのデータを共有するので、ファイルを1つずつ順に実行する
          fileParallelism: false,
          testTimeout: 30_000,
        },
      },
    ],
  },
});
