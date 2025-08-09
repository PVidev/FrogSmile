import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const content = {
    en: {
      title: 'Key Projects Delivered for Balkan Gas Hub EAD',
      items: [
        {
          heading: '1. Website www.balkangashub.bg',
          bullets: [
            'Public web portal providing access to market data, registers, news, and documentation',
            'Dedicated client area with news and regulatory updates',
            'Built-in functionality for announcements by suppliers and market participants'
          ],
          link: 'https://www.balkangashub.bg'
        },
        {
          heading: '2. Information System and Website for BGH',
          intro: 'Development and implementation of the core platform for transaction management:',
          bullets: [
            'Client module with trading history, access to services such as trade records, marketing information, contract management, and more',
            'Automated reference and analytical functionality',
            'Subscription-based support model with the option for custom upgrades'
          ]
        },
        {
          heading: '3. Real-Time Communication Systems (REST API) with Trayport, TSO and market participants',
          bullets: [
            'Integration with the international trading platform Trayport',
            'Bidirectional communication for real-time access to company, order, and trade data',
            'Communication systems for exchange clients and the gas transmission operator, including delivery of market offers, tradable products, system balancing and market balancing data'
          ]
        },
        {
          heading: '4. Risk Management System (RMS), Communication Channel, and IT Clearing Infrastructure',
          bullets: [
            'Precision RMS system for pre-order validation during clearing, integrated with KELER CCP',
            'Real-time risk assessment and validation of buy orders',
            'Built-in REST API connectivity between BGH, Trayport, and KELER CCP for clearing and settlement processes'
          ]
        },
        {
          heading: '5. Regulatory Reporting Platforms for REMIT',
          intro: 'Development of:',
          bullets: [
            'Automated REMIT trade reporting system and integration with ACER reports',
            'IIP platform for publishing inside information to ACER',
            'Full compliance with ACER requirements, including encrypted communication and high reliability',
            'Guaranteed continuity of regulatory services'
          ]
        }
      ],
      techTitle: 'Technologies & Approach',
      techBullets: [
        'REST API-first architecture for seamless external system integrations',
        'Emphasis on security and regulatory compliance',
        'Scalable and adaptable to evolving market needs',
        'Long-term commitment through subscription-based support (including SLA and optional custom development)'
      ]
    },
    bg: {
      title: 'Изпълнени ключови проекти за „Газов Хъб Балкан“ ЕАД',
      items: [
        {
          heading: '1. Уебсайт www.balkangashub.bg',
          bullets: [
            'Публичен уеб портал с достъп до пазарна информация, регистри, новини и документи',
            'Обособена зона за клиенти, новинарски и регулаторни съобщения',
            'Вградена функционалност за обявления от доставчици и пазарни участници'
          ],
          link: 'https://www.balkangashub.bg'
        },
        {
          heading: '2. Информационна система и уебсайт на ГХБ',
          intro: 'Разработка и внедряване на основната платформа за управление на сделките.',
          bullets: [
            'Модул за клиентски профили с история на търговията, услуги като история на сделките, маркетингова информация, управление на договори и др.',
            'Автоматизирана справочна и аналитична функционалност',
            'Поддръжка на абонаментен принцип с възможност за надграждане по заявка'
          ]
        },
        {
          heading: '3. Системи за комуникация в реално време (REST API) с Trayport, ОПС и пазарните участници',
          bullets: [
            'Интеграция с международната търговска платформа Trayport',
            'Двупосочна комуникация за получаване на данните за компании, оферти и сделки в реално време',
            'Системи за комуникация с клиентите на борсата и оператора на газопреносна система – пазарни данни, търгуеми продукти, балансиране на системата и пазара'
          ]
        },
        {
          heading: '4. Risk Management System (RMS), комуникационен канал и ИТ борсова система за клиринг',
          bullets: [
            'Прецизна RMS система за pre-order validation, интегрирана с KELER CCP',
            'Оценка на риска в реално време и валидиране на оферти за покупка',
            'REST API свързаност между ГХБ, Trayport и KELER CCP за клиринг и сетълмент'
          ]
        },
        {
          heading: '5. Платформи за регулаторно докладване по REMIT',
          intro: 'Разработка на:',
          bullets: [
            'Автоматизирана система за докладване на сделки по REMIT и интеграция с докладите към ACER',
            'IIP платформа за публикуване на вътрешна информация към ACER',
            'Пълна съвместимост с изискванията на ACER, криптирана комуникация и висока надеждност',
            'Гарантирано ниво на непрекъсваемост на регулаторните услуги'
          ]
        }
      ],
      techTitle: 'Технологии и подход',
      techBullets: [
        'REST API-first архитектура за интеграции с външни системи',
        'Фокус върху сигурността и регулаторната съвместимост',
        'Възможност за мащабируемост и адаптация към промените в пазара',
        'Дългосрочна ангажираност чрез абонаментна поддръжка (SLA и допълнителна разработка)'
      ]
    }
  } as const;

  const isEn = language === 'en';

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('portfolioTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {t('portfolioSubtitle')}
          </p>
        </div>
      </section>

      {/* Portfolio Content (Static, Energy-focused) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {isEn ? content.en.title : content.bg.title}
            </h2>

            {(isEn ? content.en.items : content.bg.items).map((item: any, idx: number) => (
              <div key={idx} className="mb-10 p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.heading}</h3>
                {item.intro && (
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{item.intro}</p>
                )}
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  {item.bullets.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                {item.link && (
                  <div className="mt-3">
                    <a href={item.link} className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </a>
                  </div>
                )}
              </div>
            ))}

            <div className="mt-14 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {isEn ? content.en.techTitle : content.bg.techTitle}
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                {(isEn ? content.en.techBullets : content.bg.techBullets).map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;