import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-concrete-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Арт Бетон</h3>
            <p className="text-gray-300 mb-4">
              Эксклюзивные решения из декоративного бетона для интерьера и экстерьера.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-concrete-light transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-concrete-light transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@artbeton.ru</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>г. Москва, ул. Примерная, 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Арт Бетон. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
