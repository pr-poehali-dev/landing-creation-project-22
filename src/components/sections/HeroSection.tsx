import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
