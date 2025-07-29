# 📁 Структура на проекта - Подробно описание на файловете

Този документ описва всеки файл в проекта и неговата функция, за да може лесно да се правят промени.

## 🏗️ Главни конфигурационни файлове

### `index.html`
**Локация**: `/index.html`
**Описание**: Главният HTML файл на приложението
**Съдържание**:
- Meta tags за SEO оптимизация
- Title на сайта
- Favicon конфигурация
- Root div за React приложението
- Script за зареждане на main.tsx

**Промени**:
- За промяна на заглавието: редактирайте `<title>` тага
- За промяна на favicon: променете `href` в `<link rel="icon">`
- За SEO: редактирайте meta tags секцията

### `package.json`
**Локация**: `/package.json`
**Описание**: Конфигурация на проекта и зависимости
**Съдържание**:
- Име и версия на проекта
- Списък на всички зависимости
- Script команди (dev, build, preview, lint)
- Конфигурация на TypeScript

**Промени**:
- За добавяне на нови пакети: `npm install package-name`
- За промяна на скриптове: редактирайте "scripts" секцията

### `vite.config.ts`
**Локация**: `/vite.config.ts`
**Описание**: Конфигурация на Vite build tool
**Съдържание**:
- Настройки за React plugin
- Конфигурация за TypeScript
- Build настройки

**Промени**:
- За промяна на build настройките
- За добавяне на plugins

### `tailwind.config.js`
**Локация**: `/tailwind.config.js`
**Описание**: Конфигурация на Tailwind CSS
**Съдържание**:
- Цветова схема (primary, secondary, accent)
- Custom CSS класове
- Dark mode настройки
- Responsive breakpoints

**Промени**:
- За промяна на цветовете: редактирайте "colors" секцията
- За добавяне на custom класове: "extend" секцията

### `tsconfig.json`
**Локация**: `/tsconfig.json`
**Описание**: TypeScript конфигурация
**Съдържание**:
- Compiler опции
- Include/exclude файлове
- Strict mode настройки

## 🎨 Стилове и асети

### `src/index.css`
**Локация**: `/src/index.css`
**Описание**: Главни CSS стилове
**Съдържание**:
- Tailwind CSS imports
- Global стилове
- Custom CSS класове

**Промени**:
- За добавяне на global стилове
- За custom CSS класове

### `public/color_normal.svg`
**Локация**: `/public/color_normal.svg`
**Описание**: Лого на компанията (светла версия)
**Използване**: Favicon и в светлата тема

### `public/color_dark_background.svg`
**Локация**: `/public/color_dark_background.svg`
**Описание**: Лого на компанията (тъмна версия)
**Използване**: В тъмната тема

## 🧩 React компоненти

### `src/main.tsx`
**Локация**: `/src/main.tsx`
**Описание**: Точка на влизане в React приложението
**Съдържание**:
- ReactDOM.render
- Provider компоненти (LanguageProvider, ThemeProvider)
- CSS imports

**Промени**:
- За добавяне на нови providers
- За промяна на root елемента

### `src/App.tsx`
**Локация**: `/src/App.tsx`
**Описание**: Главният App компонент
**Съдържание**:
- Router конфигурация
- Навигация между страници
- Layout структура

**Промени**:
- За добавяне на нови страници: добавете нов Route
- За промяна на layout-а: редактирайте JSX структурата

## 🎭 Contexts (Контексти)

### `src/contexts/LanguageContext.tsx`
**Локация**: `/src/contexts/LanguageContext.tsx`
**Описание**: Контекст за управление на езиците
**Съдържание**:
- Преводи за английски и български
- Функции за смяна на език
- useLanguage hook

**Промени**:
- За добавяне на нови преводи: редактирайте "translations" обекта
- За добавяне на нов език: добавете нов ключ в translations
- За промяна на съществуващи преводи: редактирайте съответните стойности

**Ключови преводи**:
- `aboutDescription`: Описание на компанията
- `companyName`: Име на компанията
- `contactInfo`: Контактна информация
- `heroTitle`: Главно заглавие
- `heroSubtitle`: Подзаглавие

### `src/contexts/ThemeContext.tsx`
**Локация**: `/src/contexts/ThemeContext.tsx`
**Описание**: Контекст за управление на темата (светла/тъмна)
**Съдържание**:
- Текуща тема (light/dark)
- Функции за смяна на тема
- useTheme hook

**Промени**:
- За добавяне на нови теми: разширете Theme type
- За промяна на default темата: редактирайте useState

## 🧩 Компоненти

### `src/components/Navbar.tsx`
**Локация**: `/src/components/Navbar.tsx`
**Описание**: Навигационна лента
**Съдържание**:
- Лого на компанията
- Навигационни линкове
- Language switcher
- Theme switcher
- Mobile menu

**Промени**:
- За промяна на навигацията: редактирайте navigation масива
- За промяна на логото: променете img src
- За добавяне на нови елементи: редактирайте JSX

### `src/components/Footer.tsx`
**Локация**: `/src/components/Footer.tsx`
**Описание**: Footer секция
**Съдържание**:
- Описание на компанията
- Контактна информация
- Списък с услуги
- Copyright информация
- Линк към разработчика

**Промени**:
- За промяна на контактна информация: редактирайте директно в JSX
- За промяна на услугите: редактирайте services масива
- За промяна на copyright: редактирайте copyright текста

## 📄 Страници

### `src/pages/Home.tsx`
**Локация**: `/src/pages/Home.tsx`
**Описание**: Начална страница
**Съдържание**:
- Hero секция с заглавие и подзаглавие
- Секция с услуги (Web Development, Mobile Apps, UI/UX, Backend)
- Секция с избрани проекти
- Call-to-action бутони

**Промени**:
- За промяна на hero текста: редактирайте t('heroTitle') и t('heroSubtitle')
- За промяна на услугите: редактирайте services масива
- За промяна на проектите: редактирайте featuredProjects масива

### `src/pages/About.tsx`
**Локация**: `/src/pages/About.tsx`
**Описание**: Страница "За нас"
**Съдържание**:
- Hero секция с заглавие
- Статистика (проекти, години опит, клиенти, технологии)
- Подробно описание на компанията
- Секция с експертиза (RESTful APIs, Full-stack, DevOps)

**Промени**:
- За промяна на статистиката: редактирайте stats масива
- За промяна на описанието: редактирайте companyDescription обекта
- За промяна на експертизата: редактирайте expertise секцията

### `src/pages/Contact.tsx`
**Локация**: `/src/pages/Contact.tsx`
**Описание**: Контактна страница
**Съдържание**:
- Hero секция
- Контактна информация (email, телефон, адрес)
- Контактна форма
- Работно време

**Промени**:
- За промяна на контактна информация: редактирайте директно в JSX
- За промяна на формата: редактирайте onSubmit функцията
- За промяна на работното време: редактирайте businessHours секцията

### `src/pages/Portfolio.tsx`
**Локация**: `/src/pages/Portfolio.tsx`
**Описание**: Портфолио страница
**Съдържание**:
- Hero секция
- Филтри за категории
- Списък с проекти
- Модален прозорец за детайли

**Промени**:
- За добавяне на нови проекти: редактирайте projects.ts файла
- За промяна на категориите: редактирайте categories масива
- За промяна на филтрите: редактирайте filter логиката

### `src/pages/ProjectDetail.tsx`
**Локация**: `/src/pages/ProjectDetail.tsx`
**Описание**: Детайлна страница за проект
**Съдържание**:
- Заглавие и описание на проекта
- Използвани технологии
- Ключови функции
- Предизвикателства и решения
- Резултати
- Линкове към live demo и source code

**Промени**:
- За промяна на layout-а: редактирайте JSX структурата
- За добавяне на нови секции: разширете компонента

## 📊 Данни

### `src/data/projects.ts`
**Локация**: `/src/data/projects.ts`
**Описание**: Данни за проектите в портфолио
**Съдържание**:
- Масив с обекти за всеки проект
- Заглавие, описание, технологии
- Категории, изображения
- Линкове към demo и source code

**Структура на проект обект**:
```typescript
{
  id: string;
  title: string;
  description: string;
  category: string[];
  technologies: string[];
  image: string;
  liveDemo?: string;
  sourceCode?: string;
  features: string[];
  challenges: string[];
  results: string[];
}
```

**Промени**:
- За добавяне на нов проект: добавете нов обект в масива
- За промяна на съществуващ проект: редактирайте съответния обект
- За промяна на категориите: редактирайте category масива

## 🔧 TypeScript конфигурации

### `tsconfig.json`
**Локация**: `/tsconfig.json`
**Описание**: Главна TypeScript конфигурация

### `tsconfig.app.json`
**Локация**: `/tsconfig.app.json`
**Описание**: TypeScript конфигурация за приложението

### `tsconfig.node.json`
**Локация**: `/tsconfig.node.json`
**Описание**: TypeScript конфигурация за Node.js инструменти

## 🛠️ Build и Development

### `eslint.config.js`
**Локация**: `/eslint.config.js`
**Описание**: ESLint конфигурация за code quality

### `postcss.config.js`
**Локация**: `/postcss.config.js`
**Описание**: PostCSS конфигурация за Tailwind CSS

## 📝 Документация

### `README.md`
**Локация**: `/README.md`
**Описание**: Основна документация за проекта
**Съдържание**:
- Описание на проекта
- Инструкции за инсталация
- Деплойване на cPanel
- Build команди

### `INFO.md`
**Локация**: `/INFO.md`
**Описание**: Този файл - подробно описание на структурата

### `.htaccess`
**Локация**: `/.htaccess`
**Описание**: Apache конфигурация за cPanel
**Съдържание**:
- URL rewriting за React Router
- Security headers
- Compression настройки
- Cache контрол

## 🚀 Команди за разработка

```bash
# Стартиране на development сървъра
npm run dev

# Build за production
npm run build

# Preview на build
npm run preview

# Lint проверка
npm run lint
```

## 📞 Контактна информация за промени

За въпроси относно промените в проекта:
- **Email**: office@frogsmile.com
- **Phone**: +359 886 096 477
- **Website**: https://frogsmile.bg

---

**Създадено от [PVidev-Design](https://pvidev-design.com)** 