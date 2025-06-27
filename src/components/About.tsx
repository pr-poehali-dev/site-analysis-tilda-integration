const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Обо мне
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
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
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600 text-sm">лет творчества</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl mb-2">🖼️</div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-sm">картин создано</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=600&fit=crop"
                alt="Художник за работой"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
