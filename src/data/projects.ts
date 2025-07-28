export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  overview: {
    en: string;
    bg: string;
  };
  features: {
    en: string[];
    bg: string[];
  };
  challenges: {
    en: string;
    bg: string;
  };
  results: {
    en: string;
    bg: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern online shopping platform with advanced features',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fullstack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A comprehensive e-commerce platform built with modern web technologies, featuring a responsive design, secure payment processing, and advanced inventory management. The platform supports multiple vendors and provides a seamless shopping experience across all devices.',
      bg: 'Цялостна e-commerce платформа, създадена с модерни уеб технологии, включваща отзивчив дизайн, сигурно обработване на плащания и усъвършенствано управление на инвентара. Платформата поддържа множество продавачи и предоставя безпроблемно пазаруване на всички устройства.'
    },
    features: {
      en: [
        'Multi-vendor marketplace support',
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Mobile-responsive design',
        'Admin dashboard with analytics'
      ],
      bg: [
        'Поддръжка на пазар с множество продавачи',
        'Сигурно обработване на плащания със Stripe',
        'Управление на инвентара в реално време',
        'Усъвършенствано търсене и филтриране',
        'Мобилно-отзивчив дизайн',
        'Административен панел с аналитика'
      ]
    },
    challenges: {
      en: 'The main challenge was implementing a scalable architecture that could handle multiple vendors while maintaining fast performance and ensuring secure transactions. We solved this by implementing microservices architecture and optimizing database queries.',
      bg: 'Основното предизвикателство беше внедряването на мащабируема архитектура, която може да обработва множество продавачи, като същевременно поддържа бърза производителност и осигурява сигурни транзакции. Решихме това чрез внедряване на микросервисна архитектура и оптимизиране на заявките към базата данни.'
    },
    results: {
      en: 'The platform successfully launched with over 100 vendors and processed $500K+ in transactions within the first 6 months. Customer satisfaction increased by 40% compared to the previous system.',
      bg: 'Платформата успешно стартира с над 100 продавача и обработи над $500K транзакции в първите 6 месеца. Удовлетворението на клиентите се увеличи с 40% в сравнение с предишната система.'
    }
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking solution with biometric authentication',
    image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A secure mobile banking application featuring biometric authentication, real-time transaction monitoring, and comprehensive financial management tools. Built with React Native for cross-platform compatibility.',
      bg: 'Сигурно мобилно банково приложение с биометрична автентификация, наблюдение на транзакции в реално време и цялостни инструменти за финансово управление. Създадено с React Native за кроссплатформена съвместимост.'
    },
    features: {
      en: [
        'Biometric authentication (fingerprint/face)',
        'Real-time transaction notifications',
        'Account balance and history',
        'Money transfer and bill payments',
        'Investment portfolio tracking',
        'Expense categorization and budgeting'
      ],
      bg: [
        'Биометрична автентификация (пръстов отпечатък/лице)',
        'Известия за транзакции в реalno време',
        'Баланс по сметка и история',
        'Превод на пари и плащане на сметки',
        'Проследяване на инвестиционно портфолио',
        'Категоризиране на разходи и бюджетиране'
      ]
    },
    challenges: {
      en: 'Ensuring bank-level security while maintaining user-friendly experience was crucial. We implemented end-to-end encryption, multi-factor authentication, and followed strict compliance standards.',
      bg: 'Осигуряването на сигурност на банково ниво при запазване на удобен потребителски опит беше от решаващо значение. Внедрихме end-to-end криптиране, многофакторна автентификация и следвахме строги стандарти за съответствие.'
    },
    results: {
      en: 'The app achieved 4.8/5 rating on app stores with over 50,000 downloads in the first quarter. Transaction processing time reduced by 60% compared to web platform.',
      bg: 'Приложението постигна рейтинг 4.8/5 в app store-овете с над 50,000 изтегляния в първото тримесечие. Времето за обработка на транзакции се намали с 60% в сравнение с уеб платформата.'
    }
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and reporting system',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=800',
    category: 'uiux',
    technologies: ['React', 'D3.js', 'Material-UI'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'An advanced analytics dashboard providing real-time data visualization, custom reporting, and interactive charts. Designed with user experience in mind, featuring intuitive navigation and customizable widgets.',
      bg: 'Усъвършенстван аналитичен панел, предоставящ визуализация на данни в реално време, персонализирани отчети и интерактивни графики. Проектиран с мисъл за потребителския опит, включващ интуитивна навигация и персонализируеми джаджи.'
    },
    features: {
      en: [
        'Real-time data visualization',
        'Customizable dashboard widgets',
        'Interactive charts and graphs',
        'Export functionality (PDF, Excel)',
        'Role-based access control',
        'Mobile-responsive design'
      ],
      bg: [
        'Визуализация на данни в реално време',
        'Персонализируеми джаджи за панела',
        'Интерактивни графики и диаграми',
        'Функционалност за експорт (PDF, Excel)',
        'Контрол на достъпа базиран на роли',
        'Мобилно-отзивчив дизайн'
      ]
    },
    challenges: {
      en: 'Processing and visualizing large datasets in real-time while maintaining smooth user experience required careful optimization of data queries and implementation of efficient caching strategies.',
      bg: 'Обработката и визуализацията на големи набори от данни в реално време при запазване на плавен потребителски опит изискваше внимателна оптимизация на заявките за данни и внедряване на ефективни стратегии за кеширане.'
    },
    results: {
      en: 'The dashboard improved decision-making speed by 45% and reduced report generation time from hours to minutes. User engagement increased by 70% with the new interactive features.',
      bg: 'Панелът подобри скоростта на вземане на решения с 45% и намали времето за генериране на отчети от часове до минути. Ангажираността на потребителите се увеличи с 70% с новите интерактивни функции.'
    }
  },
  {
    id: 4,
    title: 'Corporate Website',
    description: 'Professional corporate website with CMS integration',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'frontend',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A modern corporate website built with Next.js, featuring server-side rendering, SEO optimization, and content management system integration. The site showcases company services and maintains high performance scores.',
      bg: 'Модерен корпоративен уебсайт, създаден с Next.js, включващ server-side rendering, SEO оптимизация и интеграция със система за управление на съдържание. Сайтът представя услугите на компанията и поддържа високи резултати за производителност.'
    },
    features: {
      en: [
        'Server-side rendering with Next.js',
        'SEO optimized pages',
        'Content Management System',
        'Multi-language support',
        'Contact form integration',
        'Performance optimized'
      ],
      bg: [
        'Server-side rendering с Next.js',
        'SEO оптимизирани страници',
        'Система за управление на съдържание',
        'Поддръжка на множество езици',
        'Интеграция на контактна форма',
        'Оптимизирана производителност'
      ]
    },
    challenges: {
      en: 'Achieving perfect Lighthouse scores while maintaining rich content and interactive features required careful optimization of images, fonts, and JavaScript bundles.',
      bg: 'Постигането на перфектни Lighthouse резултати при запазване на богато съдържание и интерактивни функции изискваше внимателна оптимизация на изображения, шрифтове и JavaScript пакети.'
    },
    results: {
      en: 'The website achieved 98+ Lighthouse performance score and increased organic traffic by 150% within 3 months. Lead generation improved by 80% through optimized contact forms.',
      bg: 'Уебсайтът постигна 98+ Lighthouse резултат за производителност и увеличи органичния трафик с 150% в рамките на 3 месеца. Генерирането на потенциални клиенти се подобри с 80% чрез оптимизирани контактни форми.'
    }
  },
  {
    id: 5,
    title: 'API Gateway',
    description: 'Scalable microservices API gateway with authentication',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'backend',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A robust API gateway solution designed to handle microservices architecture, featuring authentication, rate limiting, request routing, and comprehensive monitoring capabilities.',
      bg: 'Стабилно решение за API gateway, проектирано да обработва микросервисна архитектура, включващо автентификация, ограничаване на заявки, маршрутизиране на заявки и цялостни възможности за наблюдение.'
    },
    features: {
      en: [
        'Microservices routing and load balancing',
        'JWT authentication and authorization',
        'Rate limiting and throttling',
        'Request/response transformation',
        'Comprehensive logging and monitoring',
        'Health checks and circuit breakers'
      ],
      bg: [
        'Маршрутизиране на микросервиси и балансиране на натоварването',
        'JWT автентификация и оторизация',
        'Ограничаване и регулиране на заявки',
        'Трансформация на заявки/отговори',
        'Цялостно логиране и наблюдение',
        'Проверки за здраве и circuit breaker-и'
      ]
    },
    challenges: {
      en: 'Building a high-performance gateway that could handle thousands of requests per second while maintaining low latency required careful architecture design and performance optimization.',
      bg: 'Създаването на високопроизводителен gateway, който може да обработва хиляди заявки в секунда при запазване на ниска латентност, изискваше внимателен дизайн на архитектурата и оптимизация на производителността.'
    },
    results: {
      en: 'The API gateway successfully handles 10,000+ requests per second with 99.9% uptime. Response time improved by 40% compared to direct service calls.',
      bg: 'API gateway-ят успешно обработва 10,000+ заявки в секунда с 99.9% време на работа. Времето за отговор се подобри с 40% в сравнение с директни извиквания на услуги.'
    }
  },
  {
    id: 6,
    title: 'Cloud Infrastructure',
    description: 'Automated deployment and monitoring solution',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'devops',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A comprehensive cloud infrastructure solution featuring automated deployment pipelines, container orchestration, and monitoring systems. Built with Infrastructure as Code principles using Terraform and Kubernetes.',
      bg: 'Цялостно решение за облачна инфраструктура, включващо автоматизирани pipeline-и за внедряване, оркестрация на контейнери и системи за наблюдение. Създадено с принципи на Infrastructure as Code, използвайки Terraform и Kubernetes.'
    },
    features: {
      en: [
        'Infrastructure as Code with Terraform',
        'Container orchestration with Kubernetes',
        'CI/CD pipeline automation',
        'Auto-scaling and load balancing',
        'Comprehensive monitoring and alerting',
        'Disaster recovery and backup systems'
      ],
      bg: [
        'Infrastructure as Code с Terraform',
        'Оркестрация на контейнери с Kubernetes',
        'Автоматизация на CI/CD pipeline',
        'Автоматично мащабиране и балансиране на натоварването',
        'Цялостно наблюдение и предупреждения',
        'Системи за възстановяване при бедствие и резервни копия'
      ]
    },
    challenges: {
      en: 'Designing a resilient infrastructure that could automatically scale based on demand while maintaining cost efficiency required careful planning of resource allocation and monitoring strategies.',
      bg: 'Проектирането на устойчива инфраструктура, която може автоматично да се мащабира въз основа на търсенето, като същевременно поддържа ефективност на разходите, изискваше внимателно планиране на разпределението на ресурси и стратегии за наблюдение.'
    },
    results: {
      en: 'The infrastructure reduced deployment time by 80% and operational costs by 35%. System reliability improved to 99.95% uptime with automated failover capabilities.',
      bg: 'Инфраструктурата намали времето за внедряване с 80% и оперативните разходи с 35%. Надеждността на системата се подобри до 99.95% време на работа с автоматизирани възможности за failover.'
    }
  },
  {
    id: 7,
    title: 'Task Management App',
    description: 'Collaborative project management and team coordination tool',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'fullstack',
    technologies: ['Vue.js', 'Laravel', 'MySQL'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A comprehensive task management application designed for team collaboration, featuring project tracking, time management, and real-time communication tools.',
      bg: 'Цялостно приложение за управление на задачи, проектирано за екипно сътрудничество, включващо проследяване на проекти, управление на време и инструменти за комуникация в реално време.'
    },
    features: {
      en: [
        'Project and task management',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Real-time notifications',
        'File sharing and comments',
        'Gantt charts and calendars'
      ],
      bg: [
        'Управление на проекти и задачи',
        'Инструменти за екипно сътрудничество',
        'Проследяване на време и отчетност',
        'Известия в реално време',
        'Споделяне на файлове и коментари',
        'Gantt диаграми и календари'
      ]
    },
    challenges: {
      en: 'Creating an intuitive interface that could handle complex project hierarchies while maintaining real-time synchronization across multiple users required careful state management and WebSocket implementation.',
      bg: 'Създаването на интуитивен интерфейс, който може да обработва сложни йерархии на проекти, като същевременно поддържа синхронизация в реално време между множество потребители, изискваше внимателно управление на състоянието и внедряване на WebSocket.'
    },
    results: {
      en: 'The application improved team productivity by 55% and reduced project completion time by 30%. User adoption rate reached 95% within the organization.',
      bg: 'Приложението подобри продуктивността на екипа с 55% и намали времето за завършване на проекти с 30%. Процентът на приемане от потребителите достигна 95% в организацията.'
    }
  },
  {
    id: 8,
    title: 'Healthcare App',
    description: 'Patient management system for healthcare providers',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A comprehensive healthcare management application designed for both patients and healthcare providers, featuring appointment scheduling, medical records management, and telemedicine capabilities.',
      bg: 'Цялостно приложение за управление на здравеопазване, проектирано както за пациенти, така и за здравни специалисти, включващо планиране на срещи, управление на медицински досиета и възможности за телемедицина.'
    },
    features: {
      en: [
        'Appointment scheduling and management',
        'Electronic health records',
        'Telemedicine video consultations',
        'Prescription management',
        'Health monitoring and reminders',
        'HIPAA compliant security'
      ],
      bg: [
        'Планиране и управление на срещи',
        'Електронни здравни досиета',
        'Видео консултации за телемедицина',
        'Управление на рецепти',
        'Наблюдение на здравето и напомняния',
        'HIPAA съвместима сигурност'
      ]
    },
    challenges: {
      en: 'Ensuring HIPAA compliance while creating a user-friendly interface for both tech-savvy and elderly patients required extensive security measures and accessibility considerations.',
      bg: 'Осигуряването на HIPAA съответствие при създаване на удобен за потребителя интерфейс както за технически грамотни, така и за възрастни пациенти, изискваше обширни мерки за сигурност и съображения за достъпност.'
    },
    results: {
      en: 'The app reduced appointment no-shows by 40% and improved patient satisfaction scores by 60%. Healthcare providers reported 50% time savings in administrative tasks.',
      bg: 'Приложението намали неявяванията на срещи с 40% и подобри резултатите за удовлетвореност на пациентите с 60%. Здравните специалисти съобщиха за 50% спестяване на време в административни задачи.'
    }
  },
  {
    id: 9,
    title: 'Design System',
    description: 'Comprehensive UI component library and design guidelines',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'uiux',
    technologies: ['Figma', 'Storybook', 'React'],
    demoUrl: '#',
    githubUrl: '#',
    overview: {
      en: 'A comprehensive design system featuring reusable UI components, design tokens, and documentation. Built to ensure consistency across multiple products and teams.',
      bg: 'Цялостна дизайн система, включваща преизползваеми UI компоненти, дизайн токени и документация. Създадена за осигуряване на последователност в множество продукти и екипи.'
    },
    features: {
      en: [
        'Reusable UI component library',
        'Design tokens and theming',
        'Interactive documentation',
        'Accessibility guidelines',
        'Multi-platform support',
        'Version control and updates'
      ],
      bg: [
        'Библиотека с преизползваеми UI компоненти',
        'Дизайн токени и тематизиране',
        'Интерактивна документация',
        'Насоки за достъпност',
        'Поддръжка на множество платформи',
        'Контрол на версии и актуализации'
      ]
    },
    challenges: {
      en: 'Creating a flexible system that could accommodate different brand requirements while maintaining consistency across web, mobile, and desktop applications required careful planning and extensive testing.',
      bg: 'Създаването на гъвкава система, която може да отговори на различни изисквания за брандиране, като същевременно поддържа последователност в уеб, мобилни и десктоп приложения, изискваше внимателно планиране и обширно тестване.'
    },
    results: {
      en: 'The design system reduced development time by 60% and improved design consistency across 15+ products. Designer-developer handoff time decreased by 70%.',
      bg: 'Дизайн системата намали времето за разработка с 60% и подобри последователността на дизайна в 15+ продукта. Времето за предаване между дизайнери и разработчици се намали с 70%.'
    }
  }
];