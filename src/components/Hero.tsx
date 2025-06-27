const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-peach flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Мария Краски
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Художник наивного искусства
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Создаю яркие, искренние картины, полные жизни и радости. Каждая
            работа — это история, рассказанная простыми формами и чистыми
            красками.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-coral hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Посмотреть работы
            </button>
            <button className="border border-coral text-coral hover:bg-coral hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Связаться со мной
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
