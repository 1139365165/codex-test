import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOMO 毛球研究所｜宠物洗护",
  description: "MOMO 毛球研究所：给毛孩子一个被温柔对待的洗护日常。",
};

export const viewport: Viewport = {
  themeColor: "#f7f2e9",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
