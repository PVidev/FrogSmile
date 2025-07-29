import React from 'react';
import { Code, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary-900 dark:bg-gray-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/color_dark_background.svg" alt="FrogSmile" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 max-w-md">
              {t('aboutDescription')}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contactInfo')}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-gray-400 dark:text-gray-500 text-sm">office@frogsmile.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-400 dark:text-gray-500 text-sm">+359 886 096 477</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-gray-400 dark:text-gray-500 text-sm">{t('companyName')}, Sofia, Bulgaria</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">{t('services')}</h3>
            <div className="space-y-2 text-gray-400 dark:text-gray-500 text-sm">
              <div>{t('webDevelopment')}</div>
              <div>{t('mobileApps')}</div>
              <div>{t('uiuxDesign')}</div>
              <div>DevOps Solutions</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 FrogSmile. {t('allRightsReserved')} | Created by <a href="https://pvidev-design.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">PVidev-Design</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;