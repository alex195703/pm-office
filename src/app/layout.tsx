import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Проєктний офіс відновлення громади — ситуаційний тренажер",
  description:
    "Ситуаційний тренажер проєктної діяльності з дисципліни «Проєктна діяльність органів публічної влади» (КНЕУ): кар’єра службовця у вигаданому місті Соснівка, 15 семінарів — 15 сценарних кейсів, індикатори громади, бейджі. Прогрес зберігається у браузері. Двомовна версія: українська та англійська.",
  keywords: [
    "ситуаційний тренажер",
    "проєктне управління",
    "публічне управління",
    "відбудова",
    "гейміфікація",
    "project activity simulation",
    "project management",
    "public administration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4F1E9] text-stone-800`}>
        {children}
      </body>
    </html>
  );
}
