import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-coral rounded-lg flex items-center justify-center">
            <span className="text-xl text-white">М</span>
          </div>
          <h1 className="text-2xl font-medium text-gray-900">Мария Краски</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-coral transition-colors duration-200"
          >
            Главная
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-coral transition-colors duration-200"
          >
            Портфолио
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-coral transition-colors duration-200"
          >
            Обо мне
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-coral transition-colors duration-200"
          >
            Контакты
          </a>
        </div>

        <button
          className="md:hidden text-gray-600 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-coral transition-colors"
            >
              Главная
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-coral transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-coral transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-coral transition-colors"
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
