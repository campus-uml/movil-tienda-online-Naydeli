import React, { useState, useEffect } from "react";
import recipeImage1 from "../assets/recipe1.jpeg";
import recipeImage2 from "../assets/recipe2.jpeg";
import recipeImage3 from "../assets/recipe3.jpeg";

// Lista de imágenes con su título, descripción y duración
const slides = [
  { image: recipeImage1, title: "Ship at Your Home", text: "The products you order will be delivered to your address", duration: 5000 },
  { image: recipeImage2, title: "Healthy Meals", text: "Discover easy and healthy recipes for every day.", duration: 5000 },
  { image: recipeImage3, title: "Online Shopping", text: "You can shopping anytime, anywhere that you want.", duration: 5000 },
];

const RecipeCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Función para cambiar a la diapositiva anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slides[currentIndex].duration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-between  bg-gray-50 px-2 lg:px-0 min-h-[80vh] max-w-4xl mx-auto w-full">
      {/* Barra de progreso tipo "Estados de WhatsApp" */}
      <div className="flex gap-1 w-full max-w-3xl px-2">
        {slides.map((_, index) => (
          <div key={index} className="h-1 flex-1 bg-gray-300 rounded overflow-hidden">
            <div
              className={`h-full ${currentIndex === index ? "bg-green-500 animate-progress" : "bg-gray-300"}`}
              style={{ animationDuration: `${slides[currentIndex].duration}ms` }}
            ></div>
          </div>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="text-center w-full lg:w-3/5 mt-6 px-2 relative flex flex-col items-center justify-center">
        {/* Imagen actual */}
        <img
          src={slides[currentIndex].image}
          alt="Cooking Illustration"
          className="w-72 h-72 object-cover mx-auto rounded-lg transition-all duration-500" // Imagen más pequeña y centrada
        />

        {/* Texto dinámico */}
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mt-4">{slides[currentIndex].title}</h2>
        <p className="text-gray-600 text-sm lg:text-lg mt-2">{slides[currentIndex].text}</p>

        {/* Agregar área clickeable a los bordes */}
        <div
          className="absolute inset-y-0 left-0 w-1/6 cursor-pointer"
          onClick={prevSlide}
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-1/6 cursor-pointer"
          onClick={nextSlide}
        ></div>
      </div>

      {/* Botón visible en la parte inferior */}
      <div className="w-full lg:w-3/5 px-4 mb-4">
        <button className="w-full lg:w-1/3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-2 rounded-xl transition-all duration-300">
          Shopping Now
        </button>
      </div>

      {/* Estilos para la animación de progreso */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress linear;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
