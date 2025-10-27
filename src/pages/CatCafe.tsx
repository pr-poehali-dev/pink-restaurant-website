import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import Gallery from '@/components/ui/gallery';

const CatCafe = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      name: 'Котлетки-котята',
      description: 'Нежные куриные котлеты в форме милых котиков с картофельным пюре',
      price: '450 ₽',
      emoji: '🐱',
    },
    {
      name: 'Рыбка для кота',
      description: 'Стейк из лосося с овощами, украшенный кошачьими ушками из лимона',
      price: '850 ₽',
      emoji: '🐟',
    },
    {
      name: 'Мяу-карон',
      description: 'Макаронс с кремом в форме кошачьих мордочек, 6 штук',
      price: '380 ₽',
      emoji: '🎂',
    },
    {
      name: 'Кот-капучино',
      description: 'Капучино с рисунком котика из молочной пенки',
      price: '280 ₽',
      emoji: '☕',
    },
    {
      name: 'Пушистый омлет',
      description: 'Воздушный омлет с сыром в виде спящего котенка',
      price: '320 ₽',
      emoji: '🍳',
    },
    {
      name: 'Кошачий хвостик',
      description: 'Круассан изогнутый как хвост кота с шоколадным кремом',
      price: '250 ₽',
      emoji: '🥐',
    },
  ];

  const testimonials = [
    {
      name: 'Мария Котова',
      text: 'Это самое милое кафе в городе! Еда не только красивая, но и невероятно вкусная. Мой сын не может оторваться от котлеток-котят!',
      rating: 5,
    },
    {
      name: 'Алексей Мурзик',
      text: 'Отличное место для семейного ужина. Дети в восторге от блюд в виде котиков, а взрослые ценят качество кухни. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Дарья Пушистая',
      text: 'Приходим сюда каждые выходные! Атмосфера просто волшебная, а кот-капучино — это искусство. Персонал очень дружелюбный.',
      rating: 5,
    },
  ];

  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/5e20d9ba-5318-4dea-b487-968e080daca3.jpg',
      title: 'Котлетки-котята',
      description: 'Милые котлетки в форме котиков с гарниром - хит среди детей',
    },
    {
      url: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/703d69cc-5602-4e16-8017-09ddca04d552.jpg',
      title: 'Десерты-котики',
      description: 'Мяу-каронс и печенье в виде кошачьих мордочек',
    },
    {
      url: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/62d60f3e-d254-4676-ac94-d9c44b6139de.jpg',
      title: 'Кот-капучино',
      description: 'Авторские рисунки котиков на каждом капучино',
    },
    {
      url: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/055ca96f-aa60-47d2-be08-9c27772f258e.jpg',
      title: 'Пушистый омлет',
      description: 'Воздушный омлет в форме спящего котенка',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in border-b-4 border-blue-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl">😺</span>
              <h1 className="text-3xl font-bold text-blue-600">Котокафе Мурр</h1>
            </Link>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Меню', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block bg-blue-500 hover:bg-blue-600">
              Забронировать
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-700 leading-tight">
                Еда в виде котиков! 😻
              </h2>
              <p className="text-lg text-gray-600">
                Добро пожаловать в самое милое кафе города! Здесь каждое блюдо — это маленький
                котик, созданный с любовью и заботой. Идеальное место для семейного отдыха и
                инстаграмных фото!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg bg-blue-500 hover:bg-blue-600">
                  Посмотреть меню 🐾
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  Забронировать стол
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-2xl shadow-2xl p-8 flex items-center justify-center h-[500px]">
                <div className="text-center">
                  <div className="text-9xl mb-4">🐱</div>
                  <p className="text-2xl font-bold text-white">Котики + Еда = ❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-16 px-4 bg-blue-100">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700">О кафе 🐾</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Котокафе "Мурр" — это уникальное место, где вся еда подается в виде милых котиков!
              Наши талантливые повара превращают обычные блюда в произведения кулинарного искусства,
              которые не только вкусны, но и невероятно милы.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы используем только свежие и качественные продукты, чтобы каждый котик на вашей
              тарелке приносил радость и удовольствие. Уютный интерьер в голубых тонах создаёт
              атмосферу спокойствия и уюта.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-5xl">🎨</div>
                <h3 className="text-3xl font-bold text-blue-600">100+</h3>
                <p className="text-gray-600">блюд-котиков</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl">😊</div>
                <h3 className="text-3xl font-bold text-blue-600">3000+</h3>
                <p className="text-gray-600">счастливых гостей</p>
              </div>
              <div className="space-y-2">
                <div className="text-5xl">⭐</div>
                <h3 className="text-3xl font-bold text-blue-600">5.0</h3>
                <p className="text-gray-600">средний рейтинг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="меню" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12 animate-fade-in">
            Наше меню 🍽️
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 border-blue-200 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                  <div className="text-8xl">{item.emoji}</div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-blue-700">{item.name}</h3>
                    <span className="text-xl font-semibold text-blue-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              Полное меню с котиками
            </Button>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-16 px-4 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12 animate-fade-in">
            Отзывы гостей 💬
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white border-2 border-blue-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-2xl">
                      😺
                    </div>
                    <p className="font-semibold text-blue-700">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-100">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12 animate-fade-in">
            Галерея котиков 📸
          </h2>
          <Gallery images={galleryImages} theme="blue" />
        </div>
      </section>

      <section id="контакты" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12 animate-fade-in">
              Контакты и бронирование 📞
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in border-2 border-blue-200">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-blue-700">Адрес</h3>
                      <p className="text-gray-600">
                        Москва, ул. Кошачья, 7
                        <br />
                        Ежедневно с 10:00 до 22:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-blue-700">Телефон</h3>
                      <p className="text-gray-600">+7 (495) МУР-МУР-МУР</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-blue-600 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-blue-700">Email</h3>
                      <p className="text-gray-600">meow@catcafe.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in bg-blue-50 border-2 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6">Забронировать стол 🪑</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-lg border-2 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="w-full bg-blue-500 hover:bg-blue-600" size="lg">
                      Забронировать 🐾
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 py-8 px-4 text-white">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-2">😺</div>
          <h2 className="text-2xl font-bold mb-2">Котокафе Мурр</h2>
          <p className="text-blue-100">© 2024 Все права защищены • Сделано с любовью к котикам</p>
        </div>
      </footer>
    </div>
  );
};

export default CatCafe;