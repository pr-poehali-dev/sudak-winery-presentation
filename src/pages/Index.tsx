import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const wines = [
    {
      name: "Сугдейский Каберне",
      year: "2021",
      description: "Благородное красное вино из отборного винограда сортов Каберне Совиньон и Мерло",
      price: "1,200₽",
      terroir: "Южные склоны Судака"
    },
    {
      name: "Таврида Пино Нуар",
      year: "2020", 
      description: "Элегантное вино с нотами вишни и пряностей, выдержанное в дубовых бочках",
      price: "1,800₽",
      terroir: "Высокогорные участки"
    },
    {
      name: "Мускат Сугдеи",
      year: "2022",
      description: "Ароматное белое вино с цветочными нотами и медовым послевкусием",
      price: "950₽",
      terroir: "Приморские террасы"
    }
  ];

  const historicalFacts = [
    {
      title: "Византийское наследие",
      period: "VI-XV века",
      description: "Виноделие в Сугдее началось в эпоху Византии. Город был важным торговым центром на Шёлковом пути."
    },
    {
      title: "Генуэзская крепость",
      period: "1365-1475",
      description: "Генуэзские купцы развили виноделие, экспортируя крымские вина в Европу через порт Солдайя."
    },
    {
      title: "Возрождение традиций",
      period: "1990-е годы",
      description: "Современная винодельня 'Сугдея' восстановила древние традиции с применением новых технологий."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-hsl(var(--cream)) to-white">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/img/ee6d3b96-efcf-49c7-8bb9-350696a0b05f.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-light mb-6" style={{ fontFamily: "'Cormorant', serif" }}>
              Винодельня
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-hsl(var(--gold))" style={{ fontFamily: "'Cormorant', serif" }}>
              СУГДЕЯ
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">
              Тысячелетние традиции крымского виноделия в сердце древней Солдайи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-hsl(var(--burgundy)) hover:bg-hsl(var(--burgundy))/90 text-white px-8 py-3 text-lg">
                Каталог вин
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hsl(var(--burgundy)) px-8 py-3 text-lg">
                Наша история
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <Icon name="ChevronDown" size={32} />
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
            Наследие веков
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            В самом сердце Крыма, среди древних холмов Судака, где когда-то процветала византийская Солдайя, 
            мы продолжаем тысячелетние традиции виноделия, сочетая историческое наследие с современными технологиями.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {historicalFacts.map((fact, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 border-hsl(var(--gold))/20">
              <CardContent className="p-8 text-center">
                <Badge className="bg-hsl(var(--gold)) text-white mb-4 text-sm">
                  {fact.period}
                </Badge>
                <h3 className="text-2xl font-semibold mb-4 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                  {fact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Wine Catalog */}
      <section className="py-20 px-4 bg-hsl(var(--cream))/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
              Коллекция вин
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Каждая бутылка — это история терруара, рассказанная через вкус и аромат крымского винограда
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wines.map((wine, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                        {wine.name}
                      </h3>
                      <Badge variant="outline" className="mt-2 border-hsl(var(--gold)) text-hsl(var(--gold))">
                        {wine.year}
                      </Badge>
                    </div>
                    <Icon name="Grape" size={32} className="text-hsl(var(--burgundy))" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {wine.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Icon name="MapPin" size={16} />
                    <span>{wine.terroir}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                      {wine.price}
                    </span>
                    <Button variant="outline" className="border-hsl(var(--burgundy)) text-hsl(var(--burgundy)) hover:bg-hsl(var(--burgundy)) hover:text-white">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Territory & Climate */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                Терруар Сугдеи
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Sun" size={24} className="text-hsl(var(--gold)) mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Уникальный климат</h3>
                    <p className="text-gray-600">
                      280 солнечных дней в году, морской бриз и горные ветра создают идеальные условия для созревания винограда.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Mountain" size={24} className="text-hsl(var(--slate-blue)) mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Древние почвы</h3>
                    <p className="text-gray-600">
                      Шиферные и известняковые почвы юрского периода, богатые минералами, придают винам особенную минеральность.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Waves" size={24} className="text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Близость моря</h3>
                    <p className="text-gray-600">
                      Черное море смягчает климат и создает особый микроклимат, защищающий виноградники от экстремальных температур.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-hsl(var(--burgundy))/10 to-hsl(var(--gold))/10 border-none">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    Традиции виноделия
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Наши методы сочетают византийские традиции с современными технологиями. 
                    Каждый этап — от обработки лозы до розлива — выполняется с особым вниманием к деталям.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-hsl(var(--burgundy))">
                    <Icon name="Award" size={16} />
                    <span>Сертифицированное экологически чистое производство</span>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    120 га
                  </div>
                  <div className="text-gray-600">виноградников</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    12
                  </div>
                  <div className="text-gray-600">сортов винограда</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-hsl(var(--burgundy)) text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
            Винодельня Сугдея
          </h3>
          <p className="text-hsl(var(--gold)) mb-6">
            Республика Крым, г. Судак, ул. Виноградная, 1
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hsl(var(--burgundy))">
              Экскурсии
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hsl(var(--burgundy))">
              Дегустации
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hsl(var(--burgundy))">
              Контакты
            </Button>
          </div>
          <p className="text-sm opacity-75">
            © 2024 Винодельня Сугдея. Традиции с VI века.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;