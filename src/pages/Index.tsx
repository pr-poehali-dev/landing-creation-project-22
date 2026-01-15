import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', project: '' });

  const tools = [
    { name: "Perplexity AI", desc: "Исследования" },
    { name: "HeyGen", desc: "ИИ-аватары" },
    { name: "Google NotebookLM", desc: "Обработка текстов" },
    { name: "Freepik", desc: "Изображения" },
    { name: "Nano Banana Pro", desc: "Фотосессии" },
    { name: "Kling 2.6", desc: "Видео" }
  ];

  const services = [
    { icon: "✨", title: "ИИ-лендинги", desc: "5-12% конверсия за 7 дней" },
    { icon: "📊", title: "Презентации", desc: "PDF, видео, интерактив" },
    { icon: "📈", title: "Инфографика", desc: "Данные в схемы и диаграммы" },
    { icon: "📸", title: "ИИ-фотосессия", desc: "В 5-10 раз дешевле" },
    { icon: "🛍️", title: "Карточки товаров", desc: "Wildberries, Ozon, Яндекс" },
    { icon: "🎵", title: "Песни/гимны", desc: "Звуковой брендинг" },
    { icon: "✍️", title: "Контент-план", desc: "30-90 дней готовых текстов" },
    { icon: "🤖", title: "ИИ-ассистент", desc: "24/7, экономит время 30-50%" },
    { icon: "👤", title: "ИИ-аватар", desc: "Для видео и эфиров" },
    { icon: "🎬", title: "Видео/промо", desc: "Конвертирует в 3-5 раз" }
  ];

  const process = [
    { step: 1, title: "Диагностика", days: "1-2" },
    { step: 2, title: "Концепция", days: "2-3" },
    { step: 3, title: "Производство", days: "3-5" },
    { step: 4, title: "Запуск", days: "1-2" }
  ];

  const pricing = [
    { name: "СТАРТ", price: "30 тыс. ₽", days: 7 },
    { name: "БИЗНЕС", price: "75 тыс. ₽", days: 10 },
    { name: "ПРО", price: "150 тыс. ₽", days: 14 },
    { name: "ПРЕМИУМ", price: "300 тыс. ₽", days: 21 }
  ];

  const benefits = [
    "⚡ Скорость: дни вместо недель",
    "💰 Экономия: в 5-10 раз дешевле",
    "🎯 Результат: ориентирован на конверсию",
    "🔄 Быстрые тесты за часы",
    "📊 По проверенной схеме",
    "🤝 Один исполнитель",
    "🚀 Актуальные ИИ-инструменты",
    "🔒 Полные коммерческие права"
  ];

  const testimonials = [
    { text: "Лендинг кликают в 10 раз чаще", author: "Дмитрий, e-commerce" },
    { text: "Контент-план спас мой Instagram", author: "Елена, SMM" },
    { text: "Видео лучше профессиональной съёмки", author: "Александр, маркетолог" }
  ];

  const faq = [
    { q: "Видно ли, что сгенерировано?", a: "Нет, дорабатываю вручную" },
    { q: "Что если не понравится?", a: "Меняю подход на шаге Концепция" },
    { q: "Нужны навыки маркетинга?", a: "Нет, упаковываю всё под результат" },
    { q: "Видео будет робоцидным?", a: "С Kling 2.6 выглядит как настоящее" },
    { q: "Когда видны результаты?", a: "2-3 недели после запуска" },
    { q: "Какие права на контент?", a: "Полные коммерческие права за вами" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <section className="text-center py-20 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            ИИ-маркетинг под ключ: от лендинга до видео
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Создаю продающие лендинги, визуал, контент и видео с помощью нейросетей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Консультация
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Услуги
            </Button>
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Передовые нейросети
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-sm font-semibold">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground text-center">{tool.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <Icon name="X" size={24} />
                  Традиционный путь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="Users" size={20} className="text-destructive mt-1" />
                  <span>Нанимать специалистов</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Clock" size={20} className="text-destructive mt-1" />
                  <span>Ждать 2-4 недели</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="DollarSign" size={20} className="text-destructive mt-1" />
                  <span>200-500 тыс. ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Icon name="Check" size={24} />
                  С ИИ-маркетингом
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <Icon name="User" size={20} className="text-primary mt-1" />
                  <span>Один исполнитель</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Zap" size={20} className="text-primary mt-1" />
                  <span>За 5-7 дней</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="TrendingDown" size={20} className="text-primary mt-1" />
                  <span>От 50 тыс. ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-4">
            Что я создаю
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный цикл маркетинговых материалов на нейросетях
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent group">
                <CardHeader>
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Как проходит работа
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="border-2 border-primary hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {item.days} дня
                    </CardDescription>
                  </CardHeader>
                </Card>
                {idx < process.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute top-1/2 -right-8 text-primary" size={32} />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Тарифы
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${idx === 2 ? 'border-accent ring-4 ring-accent/20' : 'border-primary/30'}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <CardDescription className="text-base">
                    <Icon name="Calendar" className="inline mr-1" size={16} />
                    {plan.days} дней
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" variant={idx === 2 ? "default" : "outline"}>
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Почему это выгодно
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-card rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-md">
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-2 rounded-lg px-6 hover:border-primary transition-colors">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pt-2">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="py-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-2 border-primary shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="font-heading text-3xl mb-2">
                Готовы запустить проект?
              </CardTitle>
              <CardDescription className="text-lg">
                Бесплатный аудит ниши и план работ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-2"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон или Email" 
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="border-2"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Расскажите о проекте" 
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="border-2 min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg bg-gradient-to-r from-primary to-accent hover:shadow-lg transition-all duration-300">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="py-8 text-center text-muted-foreground border-t mt-16">
          <p className="text-sm">
            5+ лет в маркетинге • 50+ проектов • Средняя конверсия 7-12%
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
