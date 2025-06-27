const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-sunny to-peach relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-coral rounded-blob opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-turquoise rounded-organic opacity-30 animate-gentle-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-caveat text-5xl md:text-6xl font-bold text-white text-shadow mb-6">
              Обо мне
            </h2>
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                Привет! Меня зовут Мария, и я художник-самоучка, влюбленная в
                наивное искусство. Мой путь начался с простого желания
                запечатлеть красоту повседневной жизни.
              </p>
              <p>
                В моих работах нет академической правильности, зато есть
                искренность и радость. Я рисую то, что чувствую: яркие
                праздники, тихие деревенские утра, дружные семьи и добрых
                животных.
              </p>
              <p>
                Каждая картина — это маленькая история о том, как прекрасен наш
                мир, если смотреть на него с открытым сердцем и детским
                восторгом.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-white bg-opacity-20 rounded-blob p-4 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-caveat text-2xl font-bold text-white">
                  5+
                </div>
                <div className="text-white text-sm">лет творчества</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-blob p-4 text-center backdrop-blur-sm">
                <div className="text-3xl mb-2">🖼️</div>
                <div className="font-caveat text-2xl font-bold text-white">
                  50+
                </div>
                <div className="text-white text-sm">картин создано</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-20 rounded-blob p-8 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop"
                alt="Художник за работой"
                className="w-full h-96 object-cover rounded-organic shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-coral rounded-blob p-4 animate-wiggle">
                <span className="text-4xl">🌻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
