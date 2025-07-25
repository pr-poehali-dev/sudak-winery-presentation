import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const wines = [
    {
      name: "Сугдейский Каберне Резерв",
      year: "2021",
      description: "Премиальное красное вино из винограда Каберне Совиньон (70%) и Мерло (30%). Выдержка 18 месяцев в дубовых бочках.",
      price: "2,800₽",
      terroir: "Южные склоны Судака",
      alcohol: "14.5%",
      serving: "16-18°C",
      awards: "Золотая медаль 'Vinalies 2022'",
      tasting: "Глубокий рубиновый цвет, ароматы черной смородины, ванили и специй. Полнотелое с бархатистыми танинами."
    },
    {
      name: "Таврида Пино Нуар",
      year: "2020", 
      description: "Элегантное красное вино с нотами вишни, земляники и пряностей. Выдержка 12 месяцев в французском дубе.",
      price: "2,200₽",
      terroir: "Высокогорные участки 450м",
      alcohol: "13.8%",
      serving: "14-16°C",
      awards: "Серебро 'Крымский винный фестиваль'",
      tasting: "Светло-рубиновый цвет, деликатные ароматы красных ягод, роз и специй. Шелковистая текстура."
    },
    {
      name: "Мускат Белый Сугдеи",
      year: "2022",
      description: "Ароматное белое вино из старых лоз Муската Белого. Особая технология холодной ферментации.",
      price: "1,400₽",
      terroir: "Приморские террасы",
      alcohol: "12.5%",
      serving: "8-10°C",
      awards: "Лучшее белое вино Крыма 2023",
      tasting: "Золотисто-соломенный цвет, интенсивные цветочные ароматы, медовые тона. Свежее и гармоничное."
    },
    {
      name: "Рислинг Солдайский",
      year: "2021",
      description: "Сухое белое вино из немецкого сорта Рислинг, адаптированного к крымскому терруару.",
      price: "1,600₽",
      terroir: "Северные склоны, 280м",
      alcohol: "12.8%",
      serving: "10-12°C",
      awards: "Диплом 'Wine Vision 2022'",
      tasting: "Бледно-желтый цвет, цитрусовые и минеральные ноты. Освежающая кислотность, долгое послевкусие."
    },
    {
      name: "Саперави Крымский",
      year: "2020",
      description: "Мощное красное вино из грузинского сорта Саперави. Выдержка 24 месяца в дубе и бутылке.",
      price: "3,200₽",
      terroir: "Восточные склоны",
      alcohol: "15.2%",
      serving: "18-20°C",
      awards: "Гран-при 'Терруар 2021'",
      tasting: "Темно-гранатовый, почти черный цвет. Мощные танины, ароматы черных ягод, кожи и табака."
    },
    {
      name: "Шампанское Сугдея Брют",
      year: "2019",
      description: "Игристое вино классическим методом из Шардоне и Пино Нуар. Выдержка на осадке 36 месяцев.",
      price: "2,600₽",
      terroir: "Высокогорные участки",
      alcohol: "12.8%",
      serving: "6-8°C",
      awards: "Платина 'Effervescents du Monde'",
      tasting: "Золотистый цвет, тонкий перляж. Ароматы белых цветов, цитрусов и бриоши. Элегантное и свежее."
    }
  ];

  const historicalPeriods = [
    {
      title: "Таврские корни",
      period: "VII-III вв. до н.э.",
      description: "Древние тавры выращивали дикий виноград на склонах Крымских гор. Археологические находки подтверждают производство вина в районе современного Судака.",
      importance: "Зарождение виноделия",
      artifacts: "Глиняные амфоры, давильни"
    },
    {
      title: "Греческая колонизация",
      period: "VI-III вв. до н.э.",
      description: "Греческие колонисты основали поселение Сугдея (Солдайя), привезли сорта винограда с материковой Греции и островов Эгейского моря.",
      importance: "Первые культурные сорта",
      artifacts: "Монеты с изображением винограда"
    },
    {
      title: "Римская экспансия",
      period: "I-IV вв. н.э.",
      description: "Во времена Римской империи вина Херсонеса Таврического, включая регион Сугдеи, поставлялись в Рим. Развитие торговых путей способствовало расцвету виноделия.",
      importance: "Международная торговля",
      artifacts: "Римские винные амфоры типа Син-IV"
    },
    {
      title: "Византийское господство",
      period: "VI-XIII века",
      description: "Византийская империя превратила Сугдею в крупнейший торговый центр Северного Причерноморья. Местные вина экспортировались в Константинополь и Малую Азию.",
      importance: "Золотой век виноделия",
      artifacts: "Византийские печати виноторговцев"
    },
    {
      title: "Татаро-монгольское нашествие",
      period: "1239-1365 гг.",
      description: "Несмотря на разрушения, виноделие продолжалось под контролем Золотой Орды. Итальянские купцы получили торговые привилегии и начали экспорт крымских вин в Европу.",
      importance: "Выживание традиций",
      artifacts: "Ярлыки ханов на торговлю"
    },
    {
      title: "Генуэзское владычество",
      period: "1365-1475 гг.",
      description: "Генуэзцы построили крепость Солдайя и превратили город в центр международной торговли. Крымские вина поставлялись в Геную, Венецию, Константинополь.",
      importance: "Европейское признание",
      artifacts: "Генуэзские торговые документы"
    },
    {
      title: "Османский период",
      period: "1475-1783 гг.",
      description: "Под властью Османской империи виноделие сократилось из-за исламских запретов, но не исчезло полностью. Греческое и армянское население продолжало традиции.",
      importance: "Сохранение знаний",
      artifacts: "Церковные записи о виноделии"
    },
    {
      title: "Российская империя",
      period: "1783-1917 гг.",
      description: "После присоединения Крыма к России началось возрождение виноделия. Князь Потёмкин и граф Воронцов способствовали развитию отрасли, привозили французские сорта.",
      importance: "Научное виноделие",
      artifacts: "Императорские указы о виноделии"
    },
    {
      title: "Советский период",
      period: "1920-1991 гг.",
      description: "Создание совхоза 'Судак' и института виноградарства 'Магарач'. Массовое производство, но утрата многих традиционных сортов во время антиалкогольной кампании 1985-1987 гг.",
      importance: "Индустриализация",
      artifacts: "Советские награды за качество"
    },
    {
      title: "Современное возрождение",
      period: "1991-наши дни",
      description: "Создание винодельни 'Сугдея' в 1998 году. Возвращение к традиционным методам, восстановление исторических сортов, международное признание крымских вин.",
      importance: "Ренессанс традиций",
      artifacts: "Международные награды"
    }
  ];

  const wineProduction = [
    {
      stage: "Виноградарство",
      description: "Выращивание винограда на террасированных склонах с уклоном 15-25°. Использование биодинамических методов без химических удобрений.",
      techniques: ["Зеленые операции", "Контроль урожайности", "Ручной сбор"],
      season: "Март-Октябрь"
    },
    {
      stage: "Сбор урожая",
      description: "Селективный ручной сбор в утренние часы при температуре 12-15°C. Каждая гроздь проходит двойную сортировку.",
      techniques: ["Рефрактометрия", "Анализ кислотности", "Дегустационная оценка"],
      season: "Август-Октябрь"
    },
    {
      stage: "Винификация",
      description: "Современное оборудование с контролем температуры. Использование диких дрожжей для сохранения терруара.",
      techniques: ["Холодная мацерация", "Малолактическая ферментация", "Батонаж"],
      season: "Сентябрь-Декабрь"
    },
    {
      stage: "Выдержка",
      description: "Выдержка в дубовых бочках из французского и американского дуба различной степени обжига.",
      techniques: ["Микрооксигенация", "Переливки", "Купажирование"],
      season: "Круглый год"
    }
  ];

  const terroir = {
    climate: {
      temperature: "Среднегодовая +12°C",
      sunshine: "2400 часов в год",
      rainfall: "350-400 мм в год",
      season: "280 безморозных дней"
    },
    soil: {
      type: "Коричневые карбонатные почвы",
      base: "Юрские известняки и сланцы",
      drainage: "Отличный дренаж",
      minerals: "Высокое содержание кальция и железа"
    },
    geography: {
      elevation: "200-450 м над уровнем моря",
      aspect: "Южные и юго-западные склоны",
      distance: "5 км от Черного моря",
      protection: "Защита горами от холодных ветров"
    }
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {historicalPeriods.map((period, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 border-hsl(var(--gold))/20 bg-white/80">
              <CardContent className="p-6">
                <Badge className="bg-hsl(var(--gold)) text-white mb-3 text-xs">
                  {period.period}
                </Badge>
                <h3 className="text-xl font-bold mb-3 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                  {period.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {period.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <Badge variant="outline" className="border-hsl(var(--burgundy)) text-hsl(var(--burgundy))">
                      {period.importance}
                    </Badge>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-gray-500">
                    <Icon name="Scroll" size={12} className="mt-0.5" />
                    <span>{period.artifacts}</span>
                  </div>
                </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wines.map((wine, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 bg-white/90 backdrop-blur-sm border-hsl(var(--burgundy))/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                        {wine.name}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-hsl(var(--gold)) text-hsl(var(--gold)) text-xs">
                          {wine.year}
                        </Badge>
                        <Badge className="bg-hsl(var(--burgundy)) text-white text-xs">
                          {wine.alcohol}
                        </Badge>
                      </div>
                    </div>
                    <Icon name="Grape" size={24} className="text-hsl(var(--burgundy))" />
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {wine.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Icon name="MapPin" size={12} />
                      <span>{wine.terroir}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Icon name="Thermometer" size={12} />
                      <span>Подача: {wine.serving}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Icon name="Award" size={12} />
                      <span>{wine.awards}</span>
                    </div>
                  </div>
                  
                  <div className="bg-hsl(var(--cream))/50 p-3 rounded-md mb-4">
                    <h4 className="font-semibold text-xs mb-1 text-hsl(var(--burgundy))">Дегустационные заметки:</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{wine.tasting}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                      {wine.price}
                    </span>
                    <Button variant="outline" size="sm" className="border-hsl(var(--burgundy)) text-hsl(var(--burgundy)) hover:bg-hsl(var(--burgundy)) hover:text-white">
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 px-4 bg-hsl(var(--slate-blue))/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
              Процесс производства
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От лозы до бокала — каждый этап контролируется с особой тщательностью
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {wineProduction.map((stage, index) => (
              <Card key={index} className="hover-scale transition-all duration-300 bg-white/90">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-hsl(var(--burgundy)) rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4" style={{ fontFamily: "'Cormorant', serif" }}>
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    {stage.stage}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {stage.description}
                  </p>
                  <div className="space-y-2">
                    <Badge className="bg-hsl(var(--gold)) text-white text-xs">
                      {stage.season}
                    </Badge>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {stage.techniques.map((technique, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-hsl(var(--burgundy)) text-hsl(var(--burgundy))">
                          {technique}
                        </Badge>
                      ))}
                    </div>
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
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
              Терруар Сугдеи
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Уникальное сочетание климата, почв и географии создает неповторимый характер наших вин
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-hsl(var(--gold))/10 to-hsl(var(--gold))/5 border-hsl(var(--gold))/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Sun" size={32} className="text-hsl(var(--gold))" />
                  <h3 className="text-2xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    Климат
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Температура:</span>
                    <span className="font-semibold">{terroir.climate.temperature}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Солнце:</span>
                    <span className="font-semibold">{terroir.climate.sunshine}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Осадки:</span>
                    <span className="font-semibold">{terroir.climate.rainfall}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Сезон:</span>
                    <span className="font-semibold">{terroir.climate.season}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-hsl(var(--slate-blue))/10 to-hsl(var(--slate-blue))/5 border-hsl(var(--slate-blue))/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Mountain" size={32} className="text-hsl(var(--slate-blue))" />
                  <h3 className="text-2xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    Почвы
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 block">Тип:</span>
                    <span className="font-semibold">{terroir.soil.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Основа:</span>
                    <span className="font-semibold">{terroir.soil.base}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Дренаж:</span>
                    <span className="font-semibold">{terroir.soil.drainage}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Минералы:</span>
                    <span className="font-semibold">{terroir.soil.minerals}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Icon name="Map" size={32} className="text-blue-500" />
                  <h3 className="text-2xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                    География
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 block">Высота:</span>
                    <span className="font-semibold">{terroir.geography.elevation}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Экспозиция:</span>
                    <span className="font-semibold">{terroir.geography.aspect}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">До моря:</span>
                    <span className="font-semibold">{terroir.geography.distance}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 block">Защита:</span>
                    <span className="font-semibold">{terroir.geography.protection}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                2600
              </div>
              <div className="text-gray-600">лет традиций</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-hsl(var(--burgundy))" style={{ fontFamily: "'Cormorant', serif" }}>
                15
              </div>
              <div className="text-gray-600">международных наград</div>
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