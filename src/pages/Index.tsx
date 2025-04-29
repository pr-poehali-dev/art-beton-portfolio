import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Арт Бетон</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Искусство в каждой детали. Эксклюзивные решения из декоративного бетона для вашего интерьера и экстерьера.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link 
              to="/portfolio" 
              className="bg-white text-primary hover:bg-concrete-light px-6 py-3 rounded-md font-medium transition-colors"
            >
              Наши работы
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="section-heading">О нас</h2>
              <p className="text-gray-600 mb-6">
                Компания "Арт Бетон" специализируется на создании высокохудожественных изделий из декоративного бетона. 
                Мы предлагаем инновационные решения для интерьера и экстерьера, сочетая современные технологии и ручную работу.
              </p>
              <p className="text-gray-600 mb-6">
                Наша команда профессиональных мастеров воплотит в жизнь любые идеи — от минималистичных элементов декора 
                до сложных архитектурных композиций.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary hover:text-concrete font-medium"
              >
                Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1964" 
                alt="Декоративный бетон" 
                className="rounded-lg shadow-lg hover-scale w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-concrete-light">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1582913130063-8318329a244c?q=80&w=1964" 
                alt="Интерьерные решения" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Интерьерные решения</h3>
              <p className="text-gray-600">
                Столешницы, раковины, панели, декоративные элементы и мебель из бетона для вашего дома.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1586994085553-d73811163169?q=80&w=1964" 
                alt="Экстерьерные решения" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Экстерьерные решения</h3>
              <p className="text-gray-600">
                Фасадные элементы, малые архитектурные формы, садовая мебель и декор для ландшафта.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=1972" 
                alt="Коммерческие проекты" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Коммерческие проекты</h3>
              <p className="text-gray-600">
                Оформление магазинов, ресторанов, офисных помещений и общественных пространств.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto">Наши работы</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=1964" 
              alt="Проект 1" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover-scale"
            />
            <img 
              src="https://images.unsplash.com/photo-1604073456922-8820b38e724c?q=80&w=1970" 
              alt="Проект 2" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover-scale"
            />
            <img 
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1970" 
              alt="Проект 3" 
              className="w-full h-64 object-cover rounded-lg shadow-md hover-scale"
            />
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/portfolio" 
              className="bg-primary text-white hover:bg-concrete px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Смотреть все работы <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-concrete-light">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Индивидуальный подход</h3>
                <p className="text-gray-600">
                  Каждый проект уникален. Мы разрабатываем решения, учитывая все пожелания и особенности помещения.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Качественные материалы</h3>
                <p className="text-gray-600">
                  Используем только высококачественные компоненты, которые обеспечивают долговечность и эстетичный внешний вид.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
                <p className="text-gray-600">
                  Наша команда состоит из профессионалов с многолетним опытом работы в сфере декоративного бетона.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-gray-600">
                  Предоставляем гарантию на все выполненные работы и изготовленные изделия.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-concrete-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы воплотить свои идеи в бетоне?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации и расчета стоимости вашего проекта.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-primary hover:bg-concrete-light px-8 py-3 rounded-md font-medium transition-colors"
          >
            Оставить заявку
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
