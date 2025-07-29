# FrogSmile - Professional Software Development Company Website

Съвременен уеб сайт за FrogSmile Ltd., създаден с React, TypeScript и Tailwind CSS.

## 🚀 Технологии

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Deployment**: cPanel

## 📋 Предварителни изисквания

- Node.js 18+ 
- npm или yarn
- cPanel достъп
- Git

## 🛠️ Локална инсталация

### 1. Клониране на проекта
```bash
git clone <repository-url>
cd <folder-name>
```

### 2. Инсталиране на зависимости
```bash
npm install
```

### 3. Стартиране на development сървъра
```bash
npm run dev
```

Сайтът ще бъде достъпен на `http://localhost:5173`

### 4. Build за production
```bash
npm run build
```

## 🌐 Деплойване на cPanel

### Вариант A: Статичен сайт (React Build)

#### Стъпка 1: Подготовка на файловете

1. **Build проекта локално:**
```bash
npm run build
```

2. **Проверете създадената `dist` папка:**
   - Тя съдържа всички оптимизирани файлове за production

#### Стъпка 2: Създаване на .htaccess файл

Създайте `.htaccess` файл в `dist` папката:

```apache
# Enable URL rewriting
RewriteEngine On

# Handle React Router (SPA)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### Стъпка 3: Качване на cPanel

##### Вариант A: Чрез File Manager

1. **Влезте в cPanel**
2. **Отворете File Manager**
3. **Навигирайте до public_html папката**
4. **Качете всички файлове от `dist` папката:**
   - Изберете всички файлове от `dist`
   - Качете ги директно в `public_html`

##### Вариант B: Чрез FTP

1. **Използвайте FTP клиент** (FileZilla, WinSCP)
2. **Свържете се с вашия сървър**
3. **Качете всички файлове от `dist` в `public_html`**

#### Стъпка 4: Конфигурация на домейна

1. **В cPanel, отидете на "Domains"**
2. **Настройте домейна да сочи към `public_html`**
3. **Активирайте SSL сертификат** (препоръчително)

#### Стъпка 5: Проверка

1. **Отворете вашия домейн в браузъра**
2. **Проверете дали сайтът се зарежда правилно**
3. **Тествайте навигацията между страниците**

### Вариант B: Node.js приложение (Express.js, API)

#### Стъпка 1: Подготовка на Node.js проекта

1. **Създайте `package.json` с start скрипт:**
```json
{
  "name": "your-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  }
}
```

2. **Създайте `server.js` файл:**
```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

#### Стъпка 2: Структура на проекта

```
your-nodejs-app/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
├── routes/
│   └── api.js
└── .htaccess
```

#### Стъпка 3: Конфигурация за cPanel

1. **В cPanel, отидете на "Setup Node.js App"**
2. **Създайте ново Node.js приложение:**
   - **Node.js version**: Изберете последната стабилна версия
   - **Application mode**: Production
   - **Application root**: /home/username/your-app-folder
   - **Application URL**: your-domain.com
   - **Application startup file**: server.js
   - **Node.js version**: 18.x или по-нова

3. **Настройте environment variables** (ако са необходими):
   - NODE_ENV=production
   - PORT=3000
   - DATABASE_URL=your-database-url

#### Стъпка 4: Качване на файлове

1. **Качете всички файлове** в папката, която сте посочили като Application root
2. **Уверете се, че `package.json` е в root директорията**
3. **Проверете дали `server.js` е правилно конфигуриран**

#### Стъпка 5: Инсталиране на зависимости

1. **В cPanel, отидете на "Terminal"**
2. **Навигирайте до вашата папка:**
```bash
cd /home/username/your-app-folder
```

3. **Инсталирайте зависимости:**
```bash
npm install
```

#### Стъпка 6: Стартиране на приложението

1. **В cPanel, отидете на "Setup Node.js App"**
2. **Намерете вашето приложение**
3. **Кликнете "Restart" или "Start"**
4. **Проверете логовете за грешки**

#### Стъпка 7: Конфигурация на домейна

1. **В cPanel, отидете на "Domains"**
2. **Настройте домейна да сочи към вашата Node.js папка**
3. **Активирайте SSL сертификат**

#### Стъпка 8: .htaccess за Node.js (ако е необходим)

Създайте `.htaccess` файл в root директорията:

```apache
RewriteEngine On

# Proxy to Node.js application
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options DENY
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### Стъпка 9: Проверка

1. **Отворете вашия домейн в браузъра**
2. **Проверете дали приложението работи**
3. **Тествайте API endpoints**
4. **Проверете логовете в cPanel**

### Вариант C: Хибриден подход (React + Node.js API)

1. **Build React приложението:**
```bash
npm run build
```

2. **Копирайте build файловете в `public` папката на Node.js проекта**

3. **Следвайте стъпките за Node.js приложение**

4. **Настройте proxy в development:**
```javascript
// vite.config.js
export default {
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}
```



## 🔧 Конфигурация

### Промяна на контактна информация

Редактирайте следните файлове:

- `src/pages/Contact.tsx` - контактна информация
- `src/components/Footer.tsx` - footer информация
- `src/contexts/LanguageContext.tsx` - преводи

### Промяна на meta tags

Редактирайте `index.html` файла за SEO оптимизация.

## 📁 Структура на проекта

```
bate-misho2/
├── public/
│   ├── color_normal.svg
│   └── color_dark_background.svg
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── contexts/
│   │   ├── LanguageContext.tsx
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   └── ProjectDetail.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## 🚀 Build команди

```bash
# Development
npm run dev

# Build за production
npm run build

# Preview на build
npm run preview

# Lint проверка
npm run lint
```

## 🔒 Безопасност

- Всички зависимости са актуални
- Използват се security headers
- SSL сертификат е препоръчителен
- Регулярни backup-и на файловете

## 📞 Поддръжка

За въпроси и поддръжка:
- **Email**: office@frogsmile.com
- **Phone**: +359 886 096 477
- **Website**: https://frogsmile.bg

---

**Създадено от [PVidev-Design](https://pvidev-design.com)** 