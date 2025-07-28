import React from 'react';
import { Users, Target, Eye, Award, ArrowRight, Code, Database, Cloud, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { number: '50+', label: t('projectsCompleted') },
    { number: '5+', label: t('yearsExperience') },
    { number: '30+', label: t('happyClients') },
    { number: '10+', label: t('technologies') }
  ];

  const companyDescription = {
    en: {
      title: "Our Expertise & Approach",
      subtitle: "Building the Foundation of Digital Excellence",
      paragraphs: [
        "At the core of our company stands a dedicated team of experienced developers, architects, and technology enthusiasts with a strong foundation in building modern, scalable, and secure web infrastructures. With years of hands-on experience across various industries, our team specializes in designing and implementing robust RESTful API communications that power high-performance web and mobile applications.",
        "We believe that a well-architected API is the backbone of any digital product. That's why we adhere to best practices in RESTful design, ensuring clean, consistent, and well-documented interfaces that enable seamless integration between front-end systems, back-end services, and third-party platforms. Our APIs are not just functional — they're built with scalability, performance, and future-proofing in mind.",
        "Our development process follows industry-leading standards, including secure authentication protocols, efficient data structuring, and optimal request handling. We place a strong emphasis on maintainability, versioning strategies, and comprehensive testing to ensure our solutions remain stable as they evolve.",
        "Beyond RESTful APIs, our team brings deep expertise in full-stack development, microservices architecture, cloud deployment, and DevOps automation. We don't just build software — we engineer solutions that grow with your business and adapt to your users' needs.",
        "Whether you're a startup looking to launch your first MVP or an enterprise seeking to modernize legacy systems, we're here to help you achieve your goals with reliable technology, strategic thinking, and a collaborative spirit.",
        "Let us bring your vision to life through clean code, thoughtful design, and a partnership grounded in trust and technical excellence."
      ]
    },
    bg: {
      title: "Нашата Експертиза и Подход",
      subtitle: "Изграждане на Основата на Дигитално Превъзходство",
      paragraphs: [
        "В основата на нашата компания стои екип от опитни разработчици, системни архитекти и технологични експерти с дългогодишен опит в изграждането на стабилни, мащабируеми и сигурни уеб инфраструктури. Специализираме в проектирането и реализацията на надеждни RESTful API комуникации, които стоят в основата на съвременните уеб и мобилни приложения.",
        "Вярваме, че добре изграденото API е гръбнакът на всяка успешна дигитална платформа. Затова се придържаме към най-добрите практики в RESTful архитектурата – яснота, последователност и отлична документация, които улесняват безпроблемната интеграция между фронт-енд интерфейси, бек-енд услуги и външни системи. Нашите API решения са не просто функционални – те са изградени с мисъл за бъдещето, производителността и сигурността.",
        "Процесът ни на разработка е базиран на водещи стандарти в индустрията – сигурна автентикация, ефективно структуриране на данни, оптимизирано управление на заявки, тестване и мониторинг. Поставяме силен акцент върху поддръжката, версионирането и лесната адаптация на решенията във времето.",
        "Освен експертиза в RESTful API, нашият екип разполага с богат опит във фронт-енд и бек-енд разработка, микросървисна архитектура, облачно разгръщане (cloud deployment), CI/CD процеси и DevOps автоматизация. Не просто създаваме софтуер – ние разработваме устойчиви технологични решения, които растат заедно с Вашия бизнес.",
        "Независимо дали сте стартираща компания с визия за иновация или утвърден бизнес, търсещ модернизация на съществуващи системи – ние сме тук, за да Ви подкрепим. С професионализъм, стратегическо мислене и отдаденост на резултата.",
        "Доверете се на партньор, който комбинира опит, визия и технологична прецизност, за да превърне идеите Ви в реалност."
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