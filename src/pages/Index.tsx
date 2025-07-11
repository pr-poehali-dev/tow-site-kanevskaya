import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="w-8 h-8 text-orange-500" />
              <h1 className="text-2xl font-bold text-navy-800">
                Эвакуатор Каневская
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#prices"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Цены
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Вызвать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Эвакуатор в Каневской</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Круглосуточная эвакуация легковых и грузовых автомобилей до 3 тонн.
            Быстрый выезд, работа с ДТП и техническая помощь на дороге.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" className="w-5 h-5 mr-2" />
              Вызвать эвакуатор
            </Button>
            <div className="flex items-center space-x-2 text-gray-300">
              <Icon name="Clock" className="w-5 h-5" />
              <span>Работаем 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-800">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Truck"
                  className="w-12 h-12 text-orange-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Эвакуация легковых</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Быстрая и безопасная эвакуация легковых автомобилей любой
                  сложности
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Car"
                  className="w-12 h-12 text-orange-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Эвакуация грузовых</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Эвакуация грузовых автомобилей грузоподъемностью до 3 тонн
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Wrench"
                  className="w-12 h-12 text-orange-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Техпомощь</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Техническая помощь на дороге: подзарядка АКБ, замена колес
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Bike"
                  className="w-12 h-12 text-orange-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Эвакуация мототехники</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Специализированная эвакуация мотоциклов и мототехники
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-800">
            Цены на услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">
                  Эвакуация по городу
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-navy-800 mb-4">
                  от 2000 ₽
                </div>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Легковые автомобили
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Быстрая подача
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Безопасная погрузка
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">
                  Междугородние перевозки
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-navy-800 mb-4">
                  от 50 ₽/км
                </div>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Выезд по области
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Грузовые до 3т
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Документооборот
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-orange-600">
                  Техпомощь
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-navy-800 mb-4">
                  от 1500 ₽
                </div>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Подзарядка АКБ
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Замена колес
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-4 h-4 text-green-500 mr-2"
                    />
                    Мелкий ремонт
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-800">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Phone" className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">
                    Телефон
                  </h3>
                  <p className="text-lg text-gray-600">+7 (xxx) xxx-xx-xx</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="MapPin" className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">Адрес</h3>
                  <p className="text-lg text-gray-600">
                    г. Каневская, Краснодарский край
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Icon name="Clock" className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold text-navy-800">
                    Режим работы
                  </h3>
                  <p className="text-lg text-gray-600">
                    Круглосуточно, без выходных
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <Icon
                name="MapPin"
                className="w-16 h-16 text-orange-500 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-navy-800 mb-2">
                Быстрый выезд
              </h3>
              <p className="text-gray-600">
                Среднее время подачи эвакуатора: 15-30 минут
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold">Эвакуатор Каневская</h3>
              </div>
              <p className="text-gray-400">
                Надежная эвакуация автомобилей в Каневской и области
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Эвакуация легковых</li>
                <li>Эвакуация грузовых</li>
                <li>Техпомощь на дороге</li>
                <li>Эвакуация мототехники</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (xxx) xxx-xx-xx</p>
                <p>г. Каневская</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Эвакуатор Каневская. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
