import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-coral via-sunny to-turquoise p-4 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-blob flex items-center justify-center animate-wiggle">
            <span className="text-2xl">🎨</span>
          </div>
          <h1 className="font-caveat text-3xl font-bold text-white text-shadow">
            Мария Краски
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-white font-medium hover:text-sunny transition-colors duration-300 relative group"
          >
            Главная
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunny transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="text-white font-medium hover:text-sunny transition-colors duration-300 relative group"
          >
            Портфолио
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunny transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="text-white font-medium hover:text-sunny transition-colors duration-300 relative group"
          >
            Обо мне
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunny transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-white font-medium hover:text-sunny transition-colors duration-300 relative group"
          >
            Контакты
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunny transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl z-50">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              className="text-coral font-medium hover:text-turquoise transition-colors"
            >
              Главная
            </a>
            <a
              href="#portfolio"
              className="text-coral font-medium hover:text-turquoise transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#about"
              className="text-coral font-medium hover:text-turquoise transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#contact"
              className="text-coral font-medium hover:text-turquoise transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
