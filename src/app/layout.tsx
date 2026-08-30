import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chinchilla763.ru"),
  title: "Шиншилла — Автомойка и детейлинг в Самаре | Рейтинг 5.0",
  description:
    "Профессиональная автомойка, химчистка и детейлинг в Самаре. Рейтинг 5.0 на Яндекс Картах, 48 оценок. Запись через Telegram, VK, Max. Кабельная ул., 5Б.",
  keywords: [
    "автомойка Самара",
    "химчистка салона",
    "детейлинг",
    "полировка кузова",
    "устранение сколов",
    "Шиншилла автомойка",
    "мойка Самара Кабельная",
  ],
  authors: [{ name: "Шиншилла" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Шиншилла — Автомойка и детейлинг в Самаре",
    description:
      "Профессиональная автомойка с рейтингом 5.0. Комплексная мойка, химчистка, полировка, устранение сколов.",
    url: "https://chinchilla763.ru",
    siteName: "Шиншилла",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 2176,
        height: 1920,
        alt: "Логотип автомойки Шиншилла",
      },
    ],
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Шиншилла",
              image: "/logo.jpeg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Кабельная ул., 5Б",
                addressLocality: "Самара",
                addressRegion: "Самарская область",
                addressCountry: "RU",
              },
              telephone: "+79276957443",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                closes: "21:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "48",
                bestRating: "5",
              },
              award: "Хорошее место 2026 — Yandex Maps Awards",
              priceRange: "250–1800 ₽",
              url: "https://chinchilla763.ru",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
