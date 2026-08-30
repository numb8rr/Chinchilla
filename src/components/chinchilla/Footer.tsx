import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Шиншилла"
                  fill
                  className="object-cover rounded-full"
                  sizes="32px"
                />
              </div>
              <span className="text-[#0B0E1A] font-semibold text-base tracking-tight">
                Шиншилла
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed">
              Автомойка, химчистка и детейлинг в Самаре. Рейтинг 5.0 на Яндекс Картах.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm font-semibold text-[#0B0E1A] mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:+79276957443" className="hover:text-[#0B0E1A] transition-colors">
                  +7 (927) 695-74-43
                </a>
              </li>
              <li>Олег — контактное лицо</li>
              <li>Самара, Кабельная ул., 5Б</li>
              <li>Ежедневно до 21:00</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-[#0B0E1A] mb-4">Мессенджеры</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://t.me/chinchilla763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0B0E1A] transition-colors"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://vk.ru/chinchilla763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0B0E1A] transition-colors"
                >
                  VK
                </a>
              </li>
              <li>
                <a
                  href="https://max.ru/chinchilla763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0B0E1A] transition-colors"
                >
                  Max
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-sm font-semibold text-[#0B0E1A] mb-4">На карте</h4>
            <div className="rounded-2xl overflow-hidden border border-gray-100 aspect-[4/3]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=50.107%2C53.214&z=15&pt=50.107%2C53.214&org=217077843620"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Шиншилла на Яндекс Карте"
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} Шиншилла. Все права защищены.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#F5F6F8] text-[#0B0E1A] font-medium text-xs">
              Хорошее место 2026
            </span>
          </div>
        </div>

        {/* Growth credit */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <a
            href="https://t.me/buildgrowthofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 group"
          >
            <div className="relative w-4 h-4 rounded overflow-hidden">
              <Image
                src="/growth-logo.jpeg"
                alt="Growth"
                fill
                className="object-cover rounded"
                sizes="16px"
              />
            </div>
            <span className="text-[10px] text-gray-300 group-hover:text-gray-400 transition-colors">
              Сайт разработан Growth
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
