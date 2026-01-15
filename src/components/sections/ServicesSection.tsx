import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
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

  return (
    <>
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
            <div className="absolute inset-0 bg-primary/5"></div>
            <CardHeader className="relative">
              <CardTitle className="flex items-center gap-2 text-primary font-heading text-xl">
                <Icon name="Zap" size={24} />
                С НЕЙРОСЕТЯМИ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 relative">
              <div className="flex items-start gap-2">
                <Icon name="Sparkles" size={20} className="text-primary mt-1" />
                <span className="text-foreground/80">Один человек за всё</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Rocket" size={20} className="text-primary mt-1" />
                <span className="text-foreground/80">Готово за 7-14 дней</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="TrendingDown" size={20} className="text-primary mt-1" />
                <span className="text-foreground/80">30-150 тыс. ₽</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 animate-fade-in">
        <h2 className="font-heading text-4xl font-bold text-center mb-2 text-primary tracking-wider">
          ЧТО Я СОЗДАЮ
        </h2>
        <div className="text-center mb-12 text-accent text-sm font-heading">[ SERVICES PORTFOLIO ]</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <Card key={idx} className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="text-center relative">
                <div className="text-5xl mb-3">{service.icon}</div>
                <CardTitle className="text-lg font-heading text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative">
                <p className="text-sm text-foreground/70 leading-relaxed">{service.desc}</p>
              </CardContent>
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
    </>
  );
};

export default ServicesSection;
