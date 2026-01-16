import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрый результат",
      description: "Начните получать результаты уже с первой недели работы"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Работаем по договору с прозрачными условиями и гарантиями"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональное решение под ваши бизнес-задачи"
    },
    {
      icon: "TrendingUp",
      title: "Рост показателей",
      description: "Измеримые KPI и постоянная оптимизация процессов"
    }
  ];

  const services = [
    {
      title: "Консультация",
      description: "Глубокий анализ вашего бизнеса и разработка стратегии развития",
      price: "от 15 000 ₽"
    },
    {
      title: "Внедрение",
      description: "Полный цикл реализации решения под ключ с сопровождением",
      price: "от 50 000 ₽"
    },
    {
      title: "Поддержка",
      description: "Ежемесячное обслуживание и развитие вашего проекта",
      price: "от 20 000 ₽/мес"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Директор маркетинга",
      text: "Отличный результат! Конверсия выросла на 45% за первый месяц сотрудничества.",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      role: "CEO стартапа",
      text: "Профессиональный подход и быстрое решение сложных задач. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      role: "Владелец бизнеса",
      text: "Команда погрузилась в наш проект и предложила решения, которые реально работают.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Увеличим продажи
              <span className="block text-accent mt-2">вашего бизнеса</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для роста и развития вашего бизнеса. 
              Работаем на результат с гарантией возврата инвестиций.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы предлагаем проверенные решения, которые приносят измеримый результат
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name={benefit.icon} className="text-accent" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Выберите подходящий формат сотрудничества
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <div className="text-accent text-xl font-semibold">{service.price}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed min-h-[60px]">
                    {service.description}
                  </p>
                  <Button className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Оставьте заявку</h2>
              <p className="text-muted-foreground text-lg">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
            </div>
            <Card className="shadow-xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Телефон *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg py-6">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold mb-2">Ваша компания</div>
              <p className="text-sm opacity-80">Решения для роста вашего бизнеса</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="MapPin" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-60">
            © 2026 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
