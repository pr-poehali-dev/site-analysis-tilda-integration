const Portfolio = () => {
  const artworks = [
    {
      id: 1,
      title: "Деревенское утро",
      description: "Радостное утро в деревне с петухами и коровами",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      color: "bg-coral",
    },
    {
      id: 2,
      title: "Цветочный сад",
      description: "Яркие цветы в волшебном саду",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      color: "bg-turquoise",
    },
    {
      id: 3,
      title: "Городская жизнь",
      description: "Простые люди в большом городе",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      color: "bg-mint",
    },
    {
      id: 4,
      title: "Семейный обед",
      description: "Теплая семейная сцена за столом",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
      color: "bg-sunny",
    },
    {
      id: 5,
      title: "Лесные звери",
      description: "Дружные животные в сказочном лесу",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
      color: "bg-lavender",
    },
    {
      id: 6,
      title: "Праздник в деревне",
      description: "Веселый праздник с танцами и музыкой",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=400&fit=crop",
      color: "bg-peach",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-mint to-sage"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-white text-shadow mb-4">
            Мои работы
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Каждая картина создана с любовью и отражает красоту простых моментов
            жизни
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-blob shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 ${artwork.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="font-caveat text-2xl font-bold text-coral mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600">{artwork.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-turquoise font-medium">
                      Наивное искусство
                    </span>
                    <button className="text-coral hover:text-turquoise transition-colors">
                      Подробнее →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-coral hover:bg-opacity-80 text-white px-8 py-4 rounded-blob font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Посмотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
