import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Shield, FileText, Link as LinkIcon, Activity, Users, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const energyHighlights = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: language === 'en' ? 'Market Platform (BGH Website)' : 'Пазарна платформа (Сайт на ГХБ)',
      description:
        language === 'en'
          ? 'Public portal and client area with market data, registers, news and documents.'
          : 'Публичен портал и зона за клиенти с пазарни данни, регистри, новини и документи.'
    },
    {
      icon: <LinkIcon className="h-8 w-8" />,
      title: language === 'en' ? 'Real-Time Integrations (Trayport/TSO)' : 'Интеграции в реално време (Trayport/ОПС)',
      description:
        language === 'en'
          ? 'Bidirectional REST API communication with Trayport, TSO and market participants.'
          : 'Двупосочна REST API комуникация с Trayport, ОПС и пазарните участници.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: language === 'en' ? 'Risk Management System (RMS) & Clearing' : 'Система за управление на риска (RMS) и клиринг',
      description:
        language === 'en'
          ? 'Pre‑order validation with real‑time risk scoring, integrated with KELER CCP.'
          : 'Pre‑order validation с оценка на риска в реално време, интеграция с KELER CCP.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: language === 'en' ? 'REMIT Reporting & IIP' : 'REMIT докладване и IIP',
      description:
        language === 'en'
          ? 'Automated ACER reporting and Inside Information Platform with encrypted communication.'
          : 'Автоматизирани ACER доклади и IIP платформа с криптирана комуникация.'
    }
  ];

  // Нови услуги (различни от акцентите долу)
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: language === 'en' ? 'Security & Compliance' : 'Сигурност и съвместимост',
      description:
        language === 'en'
          ? 'Encryption, access control, audit trails and regulatory alignment (ACER/REMIT).'
          : 'Криптиране, контрол на достъпа, одит следи и регулаторна съвместимост (ACER/REMIT).'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: language === 'en' ? 'Monitoring & Observability' : 'Мониторинг и наблюдаемост',
      description:
        language === 'en'
          ? 'Metrics, logs, alerts and SLOs for high reliability and quick incident response.'
          : 'Метрики, логове, аларми и SLO за висока надеждност и бърза реакция при инциденти.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: language === 'en' ? 'Client Access & Contracts' : 'Клиентски достъп и договори',
      description:
        language === 'en'
          ? 'Profiles, roles, trading history, services, contract lifecycle and onboarding flows.'
          : 'Профили, роли, история на търговията, услуги, жизнен цикъл на договори и onboarding.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: language === 'en' ? 'Market Data Publishing' : 'Публикуване на пазарни данни',
      description:
        language === 'en'
          ? 'High‑performance APIs and portals for market data distribution and caching.'
          : 'Високопроизводителни API и портали за разпространение и кеширане на пазарни данни.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>{t('getStarted')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              {t('learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Highlights (icons + descriptions) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('featuredProjects')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('portfolioSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {energyHighlights.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-primary-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>{t('viewAllProjects')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;