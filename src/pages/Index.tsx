import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Потрясающее место! Блюда настолько изысканны, что каждый визит превращается в праздник. Особенно рекомендую десерты — просто тают во рту!',
      rating: 5,
    },
    {
      name: 'Михаил Соколов',
      text: 'Атмосфера ресторана создаёт особое настроение. Сервис на высшем уровне, персонал внимательный и дружелюбный. Обязательно вернёмся!',
      rating: 5,
    },
    {
      name: 'Елена Кузнецова',
      text: 'Отличное место для романтического ужина. Интерьер в розовых тонах создаёт невероятно уютную атмосферу. Кухня просто великолепная!',
      rating: 5,
    },
  ];

  const menuItems = [
    {
      name: 'Изысканный стейк',
      description: 'Премиальная говядина, приготовленная до совершенства',
      price: '2 500 ₽',
      image: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/fc39011e-3d9c-4156-9393-15374222b109.jpg',
    },
    {
      name: 'Нежный десерт',
      description: 'Авторский десерт от шеф-повара с ягодным соусом',
      price: '850 ₽',
      image: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/f454f6ed-9a3d-42b5-86df-825d4f5f1507.jpg',
    },
    {
      name: 'Морское наслаждение',
      description: 'Свежайшие морепродукты в авторской подаче',
      price: '3 200 ₽',
      image: 'https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/fc39011e-3d9c-4156-9393-15374222b109.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">La Rose</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Меню', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Забронировать</Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                Вкус, который покоряет сердца
              </h2>
              <p className="text-lg text-muted-foreground">
                Добро пожаловать в ресторан изысканной кухни, где каждое блюдо — это произведение
                искусства, созданное с любовью и вниманием к деталям.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  Посмотреть меню
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Забронировать стол
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/76c44277-b4cb-4dad-9ab7-a73b631fd849/files/e0b9fb1a-6fb9-4a16-903c-5ee1c455208b.jpg"
                alt="Интерьер ресторана"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">О ресторане</h2>
            <p className="text-lg text-foreground leading-relaxed">
              La Rose — это место, где традиции haute cuisine встречаются с современными
              кулинарными трендами. Наш шеф-повар с 15-летним опытом создаёт уникальные блюда,
              которые радуют не только вкус, но и взгляд.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Мы тщательно подбираем продукты от лучших фермеров и поставщиков, чтобы каждый
              ингредиент раскрывал свой истинный вкус. Элегантный интерьер в розовых тонах создаёт
              атмосферу роскоши и уюта.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Icon name="Award" className="mx-auto text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary">15+</h3>
                <p className="text-muted-foreground">лет опыта</p>
              </div>
              <div className="space-y-2">
                <Icon name="Users" className="mx-auto text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary">5000+</h3>
                <p className="text-muted-foreground">довольных гостей</p>
              </div>
              <div className="space-y-2">
                <Icon name="Star" className="mx-auto text-primary" size={48} />
                <h3 className="text-3xl font-bold text-primary">4.9</h3>
                <p className="text-muted-foreground">средний рейтинг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="меню" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 animate-fade-in">
            Наше меню
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6 space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-primary">{item.name}</h3>
                    <span className="text-xl font-semibold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" variant="outline">
              Полное меню
            </Button>
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 animate-fade-in">
            Отзывы гостей
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12 animate-fade-in">
              Контакты и бронирование
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        Москва, ул. Тверская, 15
                        <br />
                        Ежедневно с 12:00 до 23:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@larose-restaurant.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-fade-in bg-secondary/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Забронировать стол</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="time"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-full" size="lg">
                      Забронировать
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/5 py-8 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">La Rose</h2>
          <p className="text-muted-foreground">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
