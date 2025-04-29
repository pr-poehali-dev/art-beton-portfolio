import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Определяем категории для фильтрации
type Category = 'all' | 'interior' | 'exterior' | 'commercial';

// Данные проектов
const projects = [
  {
    id: 1,
    title: 'Столешница для кухни',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e9699e2b?q=80&w=2070',
    description: 'Минималистичная столешница из полированного бетона с интегрированной раковиной.'
  },
  {
    id: 2,
    title: 'Фасадные панели',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1582913130063-8318329a244c?q=80&w=1964',
    description: 'Декоративные панели для оформления фасада частного дома.'
  },
  {
    id: 3,
    title: 'Ресепшн для офиса',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1604073456922-8820b38e724c?q=80&w=1970',
    description: 'Стойка ресепшн из текстурированного бетона для современного офиса.'
  },
  {
    id: 4,
    title: 'Бетонная ванна',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1630479703579-11d27ac3a67a?q=80&w=1974',
    description: 'Отдельностоящая ванна из декоративного бетона с гидрофобным покрытием.'
  },
  {
    id: 5,
    title: 'Садовая скульптура',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1517178312051-a9fc46f542e3?q=80&w=1974',
    description: 'Абстрактная скульптура для ландшафтного дизайна.'
  },
  {
    id: 6,
    title: 'Барная стойка',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1974',
    description: 'Барная стойка из декоративного бетона для ресторана.'
  },
  {
    id: 7,
    title: 'Декоративные панели',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=1964',
    description: 'Текстурированные панели для акцентной стены в гостиной.'
  },
  {
    id: 8,
    title: 'Уличная мебель',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1600607687126-8a3414349a51?q=80&w=1974',
    description: 'Комплект садовой мебели из армированного бетона.'
  },
  {
    id: 9,
    title: 'Стойка для магазина',
    category: 'commercial',
    image: 'https://images.unsplash.com/photo-1531488154479-8c17fe77a887?q=80&w=1964',
    description: 'Торговое оборудование из декоративного бетона для магазина одежды.'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-concrete-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Портфолио</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ознакомьтесь с нашими работами и оцените качество исполнения проектов из декоративного бетона.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-concrete-light text-primary hover:bg-concrete-light/80'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              Все проекты
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === 'interior' 
                  ? 'bg-primary text-white' 
                  : 'bg-concrete-light text-primary hover:bg-concrete-light/80'
              }`}
              onClick={() => setActiveCategory('interior')}
            >
              Интерьер
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === 'exterior' 
                  ? 'bg-primary text-white' 
                  : 'bg-concrete-light text-primary hover:bg-concrete-light/80'
              }`}
              onClick={() => setActiveCategory('exterior')}
            >
              Экстерьер
            </button>
            <button
              className={`px-6 py-2 rounded-md transition-colors ${
                activeCategory === 'commercial' 
                  ? 'bg-primary text-white' 
                  : 'bg-concrete-light text-primary hover:bg-concrete-light/80'
              }`}
              onClick={() => setActiveCategory('commercial')}
            >
              Коммерческие
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id}
                className="rounded-lg overflow-hidden shadow-md hover-scale cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-lg font-medium">Подробнее</span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Проекты в данной категории не найдены.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-primary rounded-full p-2"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex justify-end">
                <button 
                  className="bg-primary text-white hover:bg-concrete px-6 py-2 rounded-md transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call To Action */}
      <section className="py-16 bg-concrete-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Хотите подобный проект?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Мы готовы воплотить в жизнь ваши идеи. Свяжитесь с нами для обсуждения деталей.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-primary hover:bg-concrete-light px-8 py-3 rounded-md font-medium transition-colors"
          >
            Обсудить проект
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
