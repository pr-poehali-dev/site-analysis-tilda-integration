import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Давайте знакомиться!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Буду рада рассказать о своих работах или обсудить возможность
            создания картины специально для вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="bg-coral rounded-lg p-3">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Электронная почта
                  </h3>
                  <p className="text-gray-600">maria.kraski@example.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="bg-coral rounded-lg p-3">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Телефон
                  </h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="bg-coral rounded-lg p-3">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Instagram
                  </h3>
                  <p className="text-gray-600">@maria_kraski_art</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-coral hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Заказать картину
              </button>
              <button className="border border-coral text-coral hover:bg-coral hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Задать вопрос
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-coral rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl text-white">🎭</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Создаем вместе!
                </h3>
                <p className="text-gray-600 text-lg">
                  Расскажите мне свою историю, и я воплощу её в яркой, искренней
                  картине
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
