import React from 'react';
import { Users, Target, Eye, Award, ArrowRight, Code, Database, Cloud, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { number: '50+', label: t('projectsCompleted') },
    { number: '7+', label: t('yearsExperience') },
    { number: '30+', label: t('happyClients') },
    { number: '10+', label: t('technologies') }
  ];

  const companyDescription = {
    en: {
      title: "Energy Sector Expertise & Approach",
      subtitle: "Secure, compliant and scalable platforms for market operations",
      paragraphs: [
        "FrogSmile Ltd. specializes in the development of secure, sustainable and regulatory‑compliant information systems, including platforms for energy market operations and reporting.",
        "Since 2019 we have been the technology partner of Balkan Gas Hub EAD, delivering end‑to‑end digital solutions for the organized market of the Bulgarian gas exchange.",
        "Key deliveries include: public website and client area, core information system for transaction management with analytics and reporting, and real‑time integrations via REST APIs with Trayport, the Transmission System Operator (TSO) and market participants.",
        "We engineered a Risk Management System (RMS) for pre‑order validation integrated with KELER CCP, enabling real‑time risk assessment and automated validation flows for clearing and settlement.",
        "We built regulatory reporting platforms aligned with ACER and REMIT requirements: automated trade reporting and an IIP platform for publishing inside information, featuring encrypted communication and high reliability.",
        "Our API‑first architecture, strong security posture and commitment to long‑term subscription support (with SLAs and on‑demand enhancements) ensure scalability, compliance and operational continuity."
      ]
    },
    bg: {
      title: "Експертиза в Енергийния Сектор",
      subtitle: "Сигурни, регулаторно съвместими и мащабируеми платформи",
      paragraphs: [
        "„ФрогСмайл“ ЕООД е специализирана в разработката на сигурни, устойчиви и регулаторно съвместими информационни системи, включително платформи за управление на пазарни процеси и регулаторно докладване в енергетиката.",
        "От 2019 г. сме технологичен партньор на „Газов Хъб Балкан“ ЕАД и доставяме цялостни дигитални решения за организирания пазар на българската газова борса.",
        "Ключови реализации: публичен уебсайт и зона за клиенти, основна информационна система за управление на сделки с аналитични и справочни модули, интеграции в реално време чрез REST API с Trayport, ОПС и пазарните участници.",
        "Създадохме система за управление на риска (RMS) за pre‑order validation, интегрирана с международната клирингова компания KELER CCP – с оценка на риска в реално време и автоматизирана валидация за клиринг и сетълмент.",
        "Разработихме платформи за регулаторно докладване по REMIT, включително автоматизирано докладване на сделки и IIP платформа за вътрешна информация към ACER, с криптирана комуникация и висока надеждност.",
        "Нашият API‑first подход, силен фокус върху сигурността и абонаментната поддръжка със SLA гарантират мащабируемост, съвместимост и оперативна непрекъсваемост."
      ]
    }
  };

  const currentContent = companyDescription[language as keyof typeof companyDescription];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            {t('aboutDescription')}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentContent.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {currentContent.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'RESTful APIs' : 'RESTful API'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? 'Clean, scalable, and well-documented interfaces' 
                  : 'Чисти, мащабируеми и добре документирани интерфейси'}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent-100 dark:bg-accent-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Full-Stack Development' : 'Пълноценна Разработка'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? 'End-to-end solutions with modern technologies' 
                  : 'Комплексни решения с модерни технологии'}
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-secondary-100 dark:bg-secondary-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cloud className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Cloud & DevOps' : 'Облак и DevOps'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'en' 
                  ? 'Scalable deployment and automation' 
                  : 'Мащабируемо разгръщане и автоматизация'}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-400 leading-relaxed">
            {currentContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/20 px-6 py-3 rounded-full">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="text-primary-600 font-semibold">
                {language === 'en' ? 'Trusted by Industry Leaders' : 'Доверяват ни Лидери в Индустрията'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('ourMission')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t('missionText')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-secondary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('ourVision')}</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('ourValues')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: t('collaboration'),
                description: t('collaborationDescription')
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: t('quality'),
                description: t('qualityDescription')
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: t('innovation'),
                description: t('innovationDescription')
              },
              {
                icon: <Eye className="h-8 w-8" />,
                title: t('transparency'),
                description: t('transparencyDescription')
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary-600 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;