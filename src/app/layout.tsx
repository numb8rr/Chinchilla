import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const SITE_URL = "https://chinchilla763.ru";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Шиншилла — Автомойка и детейлинг в Самаре | Рейтинг 5.0",
    template: "%s | Шиншилла Самара",
  },
  description:
    "Профессиональная автомойка, химчистка и детейлинг в Самаре на Кабельной ул., 5Б. Рейтинг 5.0 на Яндекс Картах (48 оценок). Комплексная мойка от 500 ₽, полировка, устранение сколов. Запись через Telegram.",
  keywords: [
    "автомойка Самара",
    "химчистка салона Самара",
    "детейлинг Самара",
    "полировка кузова Самара",
    "устранение сколов Самара",
    "Шиншилла автомойка",
    "мойка авто Кабельная",
    "ручная мойка Самара",
    "бесконтактная мойка Самара",
    "предпродажная подготовка Самара",
    "чистка потолка салона",
  ],
  authors: [{ name: "Шиншилла" }],
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Шиншилла — Автомойка и детейлинг в Самаре",
    description:
      "Профессиональная автомойка с рейтингом 5.0 на Яндекс Картах. Комплексная мойка, химчистка, полировка, устранение сколов. Кабельная ул., 5Б, Самара.",
    url: SITE_URL,
    siteName: "Шиншилла",
    type: "website",
    images: [
      {
        url: "/logo.jpeg",
        width: 2176,
        height: 1920,
        alt: "Автомойка Шиншилла — логотип",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Шиншилла — Автомойка и детейлинг в Самаре",
    description:
      "Рейтинг 5.0. Комплексная мойка, химчистка, полировка. Кабельная ул., 5Б.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─── Schema.org: LocalBusiness (AutoWash) ─── */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Шиншилла",
  description:
    "Профессиональная автомойка, химчистка и детейлинг в Самаре. Ручная и бесконтактная мойка, полировка кузова, устранение сколов и царапин, предпродажная подготовка.",
  url: SITE_URL,
  image: [`${SITE_URL}/logo.jpeg`],
  logo: `${SITE_URL}/logo.jpeg`,
  telephone: "+79276957443",
  email: "chinchilla763@yandex.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Кабельная ул., 5Б",
    addressLocality: "Самара",
    addressRegion: "Самарская область",
    postalCode: "443022",
    addressCountry: "RU",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.198419,
      longitude: 50.267738,
    },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.198419,
    longitude: 50.267738,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "48",
    bestRating: "5",
    worstRating: "1",
  },
  award: "Хорошее место 2026 — Yandex Maps Awards",
  priceRange: "250–4500 ₽",
  paymentAccepted: "Наличные, Карта, СБП, QR-код, Онлайн, Безнал",
  currenciesAccepted: "RUB",
  sameAs: [
    "https://t.me/chinchilla763",
    "https://vk.ru/chinchilla763",
    "https://yandex.ru/maps/org/shinshilla/202317434182/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги автомойки Шиншилла",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Комплексная мойка",
          description: "Кузов + шампунь 1 фаза + протирка + пылесос + влажная уборка салона + мойка стёкол изнутри + натирка пластика",
          category: "Автомойка",
        },
        price: "1700",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Наружная мойка",
          description: "Удаление грязи, битумов, насекомых с кузова",
          category: "Автомойка",
        },
        price: "500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Удаление сложных пятен",
          description: "Краска, кровь, кофе, молочные продукты и другие стойкие загрязнения",
          category: "Химчистка",
        },
        price: "500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Полировка кузова",
          category: "Детейлинг",
        },
        price: "3500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Устранение сколов и царапин",
          category: "Детейлинг",
        },
        price: "2500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Предпродажная подготовка",
          category: "Детейлинг",
        },
        price: "4500",
        priceCurrency: "RUB",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Чистка потолка салона",
          category: "Химчистка",
        },
        price: "1200",
        priceCurrency: "RUB",
      },
    ],
  },
};

/* ─── Schema.org: Reviews ─── */
const reviews = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: "Шиншилла",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Алексей К." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Записываюсь через Max — очень удобно, не нужно звонить. Машина после комплексной мойки выглядит как из салона. Мастера вежливые, всё объясняют.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Марина В." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Зона ожидания комфортная, кофе предложили. Результат превзошёл ожидания — салон очищен до идеала, даже потолок. Теперь только сюда.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Дмитрий С." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Приезжал со сложными пятнами на сиденьях — кофе и краска от детей. Убрали всё! Подробно рассказали, какую химию используют. Рекомендую.",
    },
  ],
};

/* ─── Schema.org: FAQPage ─── */
const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько времени занимает комплексная мойка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "В среднем 40–60 минут в зависимости от типа автомобиля и степени загрязнения. Химчистка салона может занять от 1 до 2 часов. Точное время сообщим при записи.",
      },
    },
    {
      "@type": "Question",
      name: "Как можно оплатить?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Наличные, банковские карты (в том числе оплата прямо из машины), СБП, QR-код, онлайн-оплата и безналичный расчёт.",
      },
    },
    {
      "@type": "Question",
      name: "Доступна ли парковка для людей с инвалидностью?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, у нас есть специальная парковка и полная доступность для маломобильных групп. Обязательно напишите об этом при записи.",
      },
    },
    {
      "@type": "Question",
      name: "Что входит в комплексную мойку за 1 700 ₽?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Кузов + шампунь 1 фаза + протирка + пылесос + влажная уборка салона + мойка стёкол изнутри + натирка пластика. Полный набор для идеальной чистоты.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли бонусы за первое посещение?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, новым клиентам предоставляются специальные условия. Уточняйте при записи через мессенджеры или по телефону.",
      },
    },
    {
      "@type": "Question",
      name: "Работаете ли вы с грузовиками и мотоциклами?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, моем легковые автомобили, кроссоверы, минивэны, фургоны, грузовики и мотоциклы. Стоимость зависит от типа и размера транспорта.",
      },
    },
  ],
};

/* ─── Schema.org: ImageObject (галерея) ─── */
const imageGallery = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Фото автомойки Шиншилла",
  description: "Боксы мойки, зона ожидания и сертификат Detail Seminar",
  image: [
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/wet-box-1.png`,
      name: "Мокрый бокс — основная зона мойки",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/dry-box.png`,
      name: "Сухой бокс",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/waiting-area.jpeg`,
      name: "Комфортная зона ожидания",
    },
    {
      "@type": "ImageObject",
      contentUrl: `${SITE_URL}/certificate.png`,
      name: "Сертификат Detail Seminar",
    },
  ],
};

/* ─── Schema.org: BreadcrumbList ─── */
const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Услуги",
      item: `${SITE_URL}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Отзывы",
      item: `${SITE_URL}/#reviews`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Контакты",
      item: `${SITE_URL}/#contacts`,
    },
  ],
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <JsonLd data={localBusiness} />
        <JsonLd data={reviews} />
        <JsonLd data={faqPage} />
        <JsonLd data={imageGallery} />
        <JsonLd data={breadcrumb} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
