import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы на сервер
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Сбросить форму после отправки
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-concrete-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами для консультации или оставьте заявку на расчет стоимости проекта.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="section-heading">Наши контакты</h2>
              <div className="space-y-6 mt-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@artbeton.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-gray-600">Сб: 10:00 - 15:00</p>
                    <p className="text-gray-600">Вс: Выходной</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3 bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Оставьте заявку</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  <p>Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Опишите ваш проект или задайте вопрос..."
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white hover:bg-concrete-dark px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Отправить заявку
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mx-auto mb-12">Как нас найти</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5803061951474!2d37.6173443!3d55.7550066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1720042042177!5m2!1sru!2sru"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта местоположения"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
