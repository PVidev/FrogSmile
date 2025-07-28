import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Home
    heroTitle: 'Innovative Software Solutions',
    heroSubtitle: 'We create cutting-edge applications that transform businesses and enhance user experiences',
    featuredProjects: 'Featured Projects',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    webDevelopment: 'Web Development',
    webDevDescription: 'Custom web applications built with modern technologies',
    mobileApps: 'Mobile Apps',
    mobileAppsDescription: 'Native and cross-platform mobile applications',
    uiuxDesign: 'UI/UX Design',
    uiuxDescription: 'Beautiful and intuitive user interface designs',
    backendSystems: 'Backend Systems',
    backendDescription: 'Scalable and secure server-side solutions',
    viewAllProjects: 'View All Projects',
    
    // About
    aboutTitle: 'About Our Company',
    aboutDescription: 'FrogSmile is a dynamic software development company with over 5 years of experience in creating innovative digital solutions. We specialize in delivering high-quality applications that transform businesses and enhance user experiences.',
    ourMission: 'Our Mission',
    missionText: 'To provide exceptional software solutions that drive business growth and create meaningful user experiences through innovative technology and expert craftsmanship.',
    ourVision: 'Our Vision',
    visionText: 'To be the leading software development partner for enterprises looking to innovate and scale in the digital transformation era.',
    projectsCompleted: 'Projects Completed',
    yearsExperience: 'Years Experience',
    happyClients: 'Happy Clients',
    technologies: 'Technologies',
    ourTeam: 'Our Team',
    meetTeam: 'Meet the talented professionals behind our success',
    leadDeveloper: 'Lead Developer',
    leadDevDescription: 'Full-stack developer with expertise in modern web technologies',
    uiuxDesigner: 'UI/UX Designer',
    uiuxDesignerDescription: 'Creative designer focused on user-centered design principles',
    backendDeveloper: 'Backend Developer',
    backendDevDescription: 'Specialist in scalable backend systems and cloud architecture',
    ourValues: 'Our Values',
    collaboration: 'Collaboration',
    collaborationDescription: 'We work together to achieve exceptional results',
    quality: 'Quality',
    qualityDescription: 'We deliver only the highest quality solutions',
    innovation: 'Innovation',
    innovationDescription: 'We embrace new technologies and creative approaches',
    transparency: 'Transparency',
    transparencyDescription: 'We maintain open and honest communication',
    
    // Portfolio
    portfolioTitle: 'Our Portfolio',
    portfolioSubtitle: 'Explore our diverse range of projects across different technologies',
    allCategories: 'All',
    uiux: 'UI/UX',
    frontend: 'Front-End',
    backend: 'Back-End',
    fullstack: 'Full Stack',
    mobile: 'Mobile Development',
    devops: 'DevOps',
    noProjects: 'No projects found in this category.',
    viewProject: 'View Project',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    projectDetails: 'Project Details',
    backToPortfolio: 'Back to Portfolio',
    projectOverview: 'Project Overview',
    technologiesUsed: 'Technologies Used',
    projectFeatures: 'Key Features',
    projectChallenges: 'Challenges & Solutions',
    projectResults: 'Results & Impact',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to start your next project? Contact us today!',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    location: 'Location',
    businessHours: 'Business Hours',
    mondayFriday: 'Monday - Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    closed: 'Closed',
    sendUsMessage: 'Send us a Message',
    yourName: 'Your name',
    yourEmail: 'your.email@example.com',
    whatsThisAbout: 'What\'s this about?',
    tellUsAboutProject: 'Tell us about your project...',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    subjectRequired: 'Subject is required',
    messageRequired: 'Message is required',
    sending: 'Sending...',
    thankYouMessage: 'Thank you for your message! Your email client should open now.',
    errorMessage: 'There was an error sending your message. Please try again.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    services: 'Services',
  },
  bg: {
    // Navigation
    home: 'Начало',
    about: 'За Нас',
    portfolio: 'Портфолио',
    contact: 'Контакти',
    
    // Home
    heroTitle: 'Иновативни Софтуерни Решения',
    heroSubtitle: 'Създаваме авангардни приложения, които трансформират бизнеса и подобряват потребителския опит',
    featuredProjects: 'Избрани Проекти',
    getStarted: 'Започнете',
    learnMore: 'Научете Повече',
    webDevelopment: 'Уеб Разработка',
    webDevDescription: 'Персонализирани уеб приложения, създадени с модерни технологии',
    mobileApps: 'Мобилни Приложения',
    mobileAppsDescription: 'Нативни и кроссплатформени мобилни приложения',
    uiuxDesign: 'UI/UX Дизайн',
    uiuxDescription: 'Красиви и интуитивни дизайни на потребителски интерфейс',
    backendSystems: 'Backend Системи',
    backendDescription: 'Мащабируеми и сигурни серверни решения',
    viewAllProjects: 'Вижте Всички Проекти',
    
    // About
    aboutTitle: 'За Нашата Компания',
    aboutDescription: 'FrogSmile е динамична компания за разработка на софтуер с над 5 години опит в създаването на иновативни цифрови решения. Специализираме се в доставката на висококачествени приложения, които трансформират бизнеса и подобряват потребителския опит.',
    ourMission: 'Нашата Мисия',
    missionText: 'Да предоставяме изключителни софтуерни решения, които движат растежа на бизнеса и създават значими потребителски преживявания чрез иновативни технологии и експертно майсторство.',
    ourVision: 'Нашата Визия',
    visionText: 'Да бъдем водещ партньор за разработка на софтуер за предприятия, които искат да иновират и да растат в ерата на цифровата трансформация.',
    projectsCompleted: 'Завършени Проекти',
    yearsExperience: 'Години Опит',
    happyClients: 'Доволни Клиенти',
    technologies: 'Технологии',
    ourTeam: 'Нашият Екип',
    meetTeam: 'Запознайте се с талантливите професионалисти зад нашия успех',
    leadDeveloper: 'Главен Разработчик',
    leadDevDescription: 'Full-stack разработчик с експертиза в модерни уеб технологии',
    uiuxDesigner: 'UI/UX Дизайнер',
    uiuxDesignerDescription: 'Креативен дизайнер, фокусиран върху принципите на потребителско-центричен дизайн',
    backendDeveloper: 'Backend Разработчик',
    backendDevDescription: 'Специалист в мащабируеми backend системи и облачна архитектура',
    ourValues: 'Нашите Ценности',
    collaboration: 'Сътрудничество',
    collaborationDescription: 'Работим заедно, за да постигнем изключителни резултати',
    quality: 'Качество',
    qualityDescription: 'Доставяме само най-висококачествени решения',
    innovation: 'Иновация',
    innovationDescription: 'Приемаме нови технологии и творчески подходи',
    transparency: 'Прозрачност',
    transparencyDescription: 'Поддържаме открита и честна комуникация',
    
    // Portfolio
    portfolioTitle: 'Нашето Портфолио',
    portfolioSubtitle: 'Разгледайте нашия разнообразен набор от проекти в различни технологии',
    allCategories: 'Всички',
    uiux: 'UI/UX',
    frontend: 'Front-End',
    backend: 'Back-End',
    fullstack: 'Full Stack',
    mobile: 'Мобилна Разработка',
    devops: 'DevOps',
    noProjects: 'Няма намерени проекти в тази категория.',
    viewProject: 'Виж Проект',
    liveDemo: 'Демо',
    sourceCode: 'Изходен Код',
    projectDetails: 'Детайли за Проекта',
    backToPortfolio: 'Назад към Портфолио',
    projectOverview: 'Преглед на Проекта',
    technologiesUsed: 'Използвани Технологии',
    projectFeatures: 'Ключови Функции',
    projectChallenges: 'Предизвикателства и Решения',
    projectResults: 'Резултати и Въздействие',
    
    // Contact
    contactTitle: 'Свържете се с Нас',
    contactSubtitle: 'Готови ли сте да започнете следващия си проект? Свържете се с нас днес!',
    name: 'Име',
    email: 'Имейл',
    subject: 'Тема',
    message: 'Съобщение',
    sendMessage: 'Изпрати Съобщение',
    contactInfo: 'Информация за Контакт',
    phone: 'Телефон',
    location: 'Местоположение',
    businessHours: 'Работно Време',
    mondayFriday: 'Понеделник - Петък',
    saturday: 'Събота',
    sunday: 'Неделя',
    closed: 'Затворено',
    sendUsMessage: 'Изпратете ни Съобщение',
    yourName: 'Вашето име',
    yourEmail: 'вашия.имейл@example.com',
    whatsThisAbout: 'За какво става въпрос?',
    tellUsAboutProject: 'Разкажете ни за вашия проект...',
    nameRequired: 'Името е задължително',
    emailRequired: 'Имейлът е задължителен',
    subjectRequired: 'Темата е задължителна',
    messageRequired: 'Съобщението е задължително',
    sending: 'Изпращане...',
    thankYouMessage: 'Благодарим за съобщението! Вашият имейл клиент трябва да се отвори сега.',
    errorMessage: 'Възникна грешка при изпращането на съобщението. Моля, опитайте отново.',
    
    // Footer
    allRightsReserved: 'Всички права запазени.',
    services: 'Услуги',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};