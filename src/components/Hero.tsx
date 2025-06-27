const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-sunny via-peach to-lavender flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-coral rounded-blob animate-float opacity-60"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-turquoise rounded-organic animate-gentle-bounce opacity-50"></div>
      <div className="absolute bottom-32 left-32 w-24 h-24 bg-mint rounded-blob animate-float opacity-40"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-sky rounded-organic animate-wiggle opacity-60"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="font-caveat text-6xl md:text-8xl font-bold text-white text-shadow mb-4 animate-fade-in">
            Мария Краски
          </h1>
          <p className="font-caveat text-2xl md:text-4xl text-white mb-6 animate-fade-in">
            Художник наивного искусства
          </p>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Создаю яркие, искренние картины, полные жизни и радости. Каждая
            работа — это история, рассказанная простыми формами и чистыми
            красками.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-coral hover:bg-opacity-80 text-white px-8 py-4 rounded-blob font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Посмотреть работы
          </button>
          <button className="bg-white hover:bg-opacity-90 text-coral px-8 py-4 rounded-blob font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Связаться со мной
          </button>
        </div>

        {/* Artist illustration placeholder */}
        <div className="mt-12">
          <div className="w-64 h-64 mx-auto bg-white bg-opacity-20 rounded-blob flex items-center justify-center backdrop-blur-sm">
            <span className="text-8xl animate-gentle-bounce">🎭</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
