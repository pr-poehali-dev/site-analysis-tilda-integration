import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-turquoise to-sky relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-28 h-28 bg-sunny rounded-blob opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-coral rounded-organic opacity-40 animate-gentle-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-white text-shadow mb-4">
            Давайте знакомиться!
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Буду рада рассказать о своих работах или обсудить возможность
            создания картины специально для вас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white bg-opacity-20 rounded-blob p-6 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-coral rounded-blob p-3">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-caveat text-2xl font-bold text-white">
                    Электронная почта
                  </h3>
                  <p className="text-white">maria.kraski@example.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-20 rounded-blob p-6 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-sunny rounded-blob p-3">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-caveat text-2xl font-bold text-white">
                    Телефон
                  </h3>
                  <p className="text-white">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-20 rounded-blob p-6 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-mint rounded-blob p-3">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-caveat text-2xl font-bold text-white">
                    Instagram
                  </h3>
                  <p className="text-white">@maria_kraski_art</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-coral hover:bg-opacity-80 text-white px-6 py-3 rounded-blob font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Заказать картину
              </button>
              <button className="bg-white hover:bg-opacity-90 text-turquoise px-6 py-3 rounded-blob font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Задать вопрос
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-20 rounded-blob p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="w-32 h-32 bg-sunny rounded-blob mx-auto mb-6 flex items-center justify-center animate-wiggle">
                  <span className="text-6xl">🎭</span>
                </div>
                <h3 className="font-caveat text-3xl font-bold text-white mb-4">
                  Создаем вместе!
                </h3>
                <p className="text-white text-lg">
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
