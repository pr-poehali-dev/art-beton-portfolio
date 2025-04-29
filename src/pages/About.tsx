import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Clock, Tool } from 'lucide-react';

const About = () => {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-concrete-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О нас</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем уникальные решения из декоративного бетона, воплощая ваши идеи в жизнь.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1521783593447-5702b9bfd267?q=80&w=1942" 
                alt="Наша история" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="section-heading">Наша история</h2>
              <p className="text-gray-600 mb-4">
                Компания "Арт Бетон" была основана в 2015 году группой энтузиастов, увлеченных идеей создания уникальных 
                изделий из декоративного бетона. Начав с небольшой мастерской, мы постепенно расширили производство и 
                сформировали команду профессионалов своего дела.
              </p>
              <p className="text-gray-600 mb-4">
                За годы работы мы реализовали сотни проектов различной сложности — от небольших предметов интерьера 
                до масштабных архитектурных композиций. Каждый наш проект уникален и создается с учетом индивидуальных 
                пожеланий заказчика.
              </p>
              <p className="text-gray-600">
                Сегодня "Арт Бетон" — это современное производство, оснащенное необходимым оборудованием, и команда 
                высококвалифицированных специалистов, готовых воплотить в жизнь самые смелые идеи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-concrete-light">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Качество</h3>
              <p className="text-gray-600">
                Мы не идем на компромисс, когда речь идет о качестве. Используем только лучшие материалы и тщательно 
                контролируем каждый этап производства.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Клиентоориентированность</h3>
              <p className="text-gray-600">
                Мы внимательно слушаем пожелания клиентов и предлагаем решения, которые превосходят их ожидания.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Пунктуальность</h3>
              <p className="text-gray-600">
                Мы ценим время наших клиентов и всегда соблюдаем сроки выполнения проектов.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                <Tool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Инновации</h3>
              <p className="text-gray-600">
                Мы постоянно совершенствуем наши технологии и внедряем новые методы работы с декоративным бетоном.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" 
                alt="Алексей Петров" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Алексей Петров</h3>
              <p className="text-gray-600 mb-2">Основатель, руководитель</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Более 15 лет опыта в сфере строительства и декоративных работ.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" 
                alt="Елена Соколова" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Елена Соколова</h3>
              <p className="text-gray-600 mb-2">Дизайнер-архитектор</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Разрабатывает уникальные дизайн-проекты с учетом всех пожеланий клиентов.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1970" 
                alt="Михаил Иванов" 
                className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Михаил Иванов</h3>
              <p className="text-gray-600 mb-2">Главный технолог</p>
              <p className="text-gray-600 text-sm max-w-xs mx-auto">
                Отвечает за разработку составов и контроль качества продукции.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-concrete-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы к сотрудничеству?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Давайте вместе создадим что-то особенное для вашего дома или бизнеса.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+79991234567" 
              className="bg-white text-primary hover:bg-concrete-light px-6 py-3 rounded-md font-medium transition-colors"
            >
              Позвонить нам
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-md font-medium transition-colors"
            >
              Написать нам
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
