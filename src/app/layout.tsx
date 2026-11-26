import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { getCurrentUser } from "@/lib/session";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "（アプリの名前）",
  description: "（アプリの説明）",
};

// すべての画面に共通の枠。上にアプリの名前と、ログインしている人の名前・ログアウトを出す
export default async function RootLayout({ children }: LayoutProps<"/">) {
  const user = await getCurrentUser();

  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
            <Link href="/" className="flex min-w-0 items-center gap-2 font-bold text-slate-900">
              <span
                aria-hidden
                className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary text-sm text-white"
              >
                ア
              </span>
              <span className="truncate">（アプリの名前）</span>
            </Link>
            {user && (
              <div className="flex shrink-0 items-center gap-2 text-sm text-slate-600">
                <span className="hidden sm:inline">{user.name} さん</span>
                <LogoutButton />
              </div>
            )}
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6">{children}</main>
      </body>
    </html>
  );
}
