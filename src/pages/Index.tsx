import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: '', contact: '', project: '' });
  const [privacyOpen, setPrivacyOpen] = useState(false);

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffff11_1px,transparent_1px),linear-gradient(to_bottom,#00ffff11_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
        
        <section className="text-center py-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 border border-primary/50 bg-primary/5 backdrop-blur-sm">
            <span className="text-primary text-sm font-heading tracking-wider">[ AI-POWERED MARKETING ]</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-primary drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] leading-tight tracking-tight">
            ИИ-МАРКЕТИНГ ПОД КЛЮЧ:<br/>ОТ ЛЕНДИНГА ДО ВИДЕО
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-3xl mx-auto font-medium">
            Создаю продающие лендинги, визуал, контент и видео с помощью нейросетей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-background font-heading border-2 border-primary hover:bg-transparent hover:text-primary hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              КОНСУЛЬТАЦИЯ
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-accent text-accent hover:bg-accent hover:text-background hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all duration-300 font-heading">
              <Icon name="Sparkles" className="mr-2" size={20} />
              УСЛУГИ
            </Button>
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ПЕРЕДОВЫЕ НЕЙРОСЕТИ
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ CUTTING-EDGE AI TOOLS ]</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-sm font-heading text-primary">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-foreground/70 text-center uppercase tracking-wide">{tool.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-destructive/50 bg-card/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-destructive/5"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-destructive font-heading text-xl">
                  <Icon name="X" size={24} />
                  ТРАДИЦИОННЫЙ ПУТЬ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative">
                <div className="flex items-start gap-2">
                  <Icon name="Users" size={20} className="text-destructive mt-1" />
                  <span className="text-foreground/80">Нанимать специалистов</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Clock" size={20} className="text-destructive mt-1" />
                  <span className="text-foreground/80">Ждать 2-4 недели</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="DollarSign" size={20} className="text-destructive mt-1" />
                  <span className="text-foreground/80">200-500 тыс. ₽</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary bg-card/30 backdrop-blur-sm relative overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)]">
              <div className="absolute inset-0 bg-primary/5 animate-neon-pulse"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-2 text-primary font-heading text-xl">
                  <Icon name="Check" size={24} />
                  С ИИ-МАРКЕТИНГОМ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 relative">
                <div className="flex items-start gap-2">
                  <Icon name="User" size={20} className="text-primary mt-1" />
                  <span className="text-foreground font-medium">Один исполнитель</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Zap" size={20} className="text-primary mt-1" />
                  <span className="text-foreground font-medium">За 5-7 дней</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="TrendingDown" size={20} className="text-primary mt-1" />
                  <span className="text-foreground font-medium">От 50 тыс. ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ЧТО Я СОЗДАЮ
          </h2>
          <p className="text-center text-accent mb-12 text-sm font-heading">
            [ FULL CYCLE AI MARKETING ]</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm border-2 border-accent/30 hover:border-accent hover:shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/20 to-transparent"></div>
                <CardHeader className="relative">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-heading text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-foreground/70 uppercase tracking-wide">{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            КАК ПРОХОДИТ РАБОТА
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ 4-STEP PROCESS ]</div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                  <CardHeader className="text-center pt-6">
                    <div className="w-16 h-16 border-4 border-primary bg-background text-primary text-2xl font-heading font-bold flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl font-heading text-foreground uppercase tracking-wider">{item.title}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-accent">
                      {item.days} ДНЯ
                    </CardDescription>
                  </CardHeader>
                </Card>
                {idx < process.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute top-1/2 -right-8 text-primary animate-neon-pulse" size={32} />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm"></div>
          <div className="relative">
            <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
              ТАРИФЫ
            </h2>
            <div className="text-center mb-12 text-accent text-sm font-heading">[ PRICING PLANS ]</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
              {pricing.map((plan, idx) => (
                <Card key={idx} className={`bg-card/50 backdrop-blur-sm border-2 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden ${idx === 2 ? 'border-accent shadow-[0_0_30px_rgba(255,0,255,0.4)] scale-105' : 'border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]'}`}>
                  {idx === 2 && <div className="absolute top-0 right-0 bg-accent text-background text-xs px-3 py-1 font-heading">POPULAR</div>}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-heading mb-2 text-primary tracking-wider">{plan.name}</CardTitle>
                    <div className="text-4xl font-heading font-bold text-accent mb-2">{plan.price}</div>
                    <CardDescription className="text-base text-foreground/70 font-heading uppercase">
                      <Icon name="Calendar" className="inline mr-1" size={16} />
                      {plan.days} ДНЕЙ
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button className={`w-full font-heading ${idx === 2 ? 'bg-accent hover:bg-accent/90' : 'border-2 border-primary text-primary hover:bg-primary hover:text-background'}`} variant={idx === 2 ? "default" : "outline"}>
                      ВЫБРАТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ПОЧЕМУ ЭТО ВЫГОДНО
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ KEY BENEFITS ]</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-base relative z-10 text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ПОРТФОЛИО
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ MY WORKS ]</div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] bg-card/30 backdrop-blur-sm aspect-video">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Image" size={48} className="text-primary/50 mx-auto mb-2" />
                    <p className="text-primary/70 font-heading text-sm">ПРОЕКТ #{item}</p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-primary font-heading text-sm mb-1">[ COMING SOON ]</p>
                    <p className="text-foreground/70 text-xs">Фото будет загружено позже</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ОТЗЫВЫ КЛИЕНТОВ
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ CLIENT FEEDBACK ]</div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-accent"></div>
                <CardHeader className="pl-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic font-medium">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent className="pl-6">
                  <p className="text-sm text-primary font-heading">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="text-center mb-12 text-accent text-sm font-heading">[ FAQ ]</div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary px-6 transition-all duration-300 relative overflow-hidden">
                <div className="absolute left-0 top-0 w-1 h-full bg-accent"></div>
                <AccordionTrigger className="text-lg font-heading text-foreground hover:text-primary pl-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 pt-2 pl-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="py-16 animate-fade-in">
          <Card className="max-w-2xl mx-auto border-2 border-primary bg-card/50 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,255,0.3)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
            <CardHeader className="text-center relative">
              <div className="inline-block mb-4 px-4 py-1 border border-accent/50 bg-accent/5">
                <span className="text-accent text-xs font-heading tracking-widest">[ CONTACT FORM ]</span>
              </div>
              <CardTitle className="font-heading text-3xl mb-2 text-primary tracking-wider">
                ГОТОВЫ ЗАПУСТИТЬ ПРОЕКТ?
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 font-medium">
                Бесплатный аудит ниши и план работ
              </CardDescription>
            </CardHeader>
            <CardContent className="relative">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <Input 
                    placeholder="ВАШЕ ИМЯ" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-2 border-primary/30 bg-background/50 focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] font-heading"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="ТЕЛЕФОН ИЛИ EMAIL" 
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="border-2 border-primary/30 bg-background/50 focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] font-heading"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="РАССКАЖИТЕ О ПРОЕКТЕ" 
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                    className="border-2 border-primary/30 bg-background/50 focus:border-primary focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] min-h-32 font-heading"
                  />
                </div>
                <div className="text-xs text-foreground/60 text-center mb-4">
                  Нажимая кнопку, вы соглашаетесь с{' '}
                  <button
                    type="button"
                    onClick={() => setPrivacyOpen(true)}
                    className="text-primary hover:text-accent underline transition-colors"
                  >
                    обработкой персональных данных
                  </button>
                </div>
                <Button type="submit" size="lg" className="w-full text-lg bg-primary text-background font-heading border-2 border-primary hover:bg-transparent hover:text-primary hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
                  <Icon name="Send" className="mr-2" size={20} />
                  ОТПРАВИТЬ ЗАЯВКУ
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <footer className="py-8 text-center border-t border-primary/30 mt-16">
          <p className="text-sm text-primary font-heading tracking-wider">
            5+ ЛЕТ В МАРКЕТИНГЕ • 50+ ПРОЕКТОВ • СРЕДНЯЯ КОНВЕРСИЯ 7-12%
          </p>
          <div className="mt-4 text-xs text-accent font-heading">[ POWERED BY AI ]</div>
        </footer>
      </div>

      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-background border-2 border-primary">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-primary tracking-wider">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p className="text-center text-accent font-heading text-sm">[ ЗДЕСЬ БУДЕТ ВАША ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ]</p>
            <p>
              Этот раздел содержит информацию об обработке персональных данных посетителей сайта.
            </p>
            <p>
              Добавьте сюда текст вашей политики конфиденциальности, включая информацию о:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Какие данные собираются</li>
              <li>Цели обработки персональных данных</li>
              <li>Сроки хранения данных</li>
              <li>Права субъектов персональных данных</li>
              <li>Контактные данные оператора</li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};}

export default Index;