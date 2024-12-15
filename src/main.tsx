import React from "react";
import { createRoot } from "react-dom/client"; // Importa la función para renderizar el componente raíz en el DOM
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importa herramientas para manejar rutas y navegación
import { ChakraProvider } from "@chakra-ui/react"; // Proveedor para usar componentes y estilos de Chakra UI
import App from "./App"; // Importa el componente principal de la aplicación
import Home from "./Home"; // Importa el componente de la página de inicio
import About from "./About"; // Importa el componente de la página "Acerca de"
import ErrorBoundary from "./components/ErrorBoundary"; // Importa el componente para manejar errores en la aplicación

// Componente principal que envuelve la aplicación
const Main = () => {
  return (
    <ChakraProvider>
      {/* Proveedor de Chakra UI para habilitar el uso de sus componentes y estilos */}
      <ErrorBoundary>
        {/* Componente para capturar y manejar errores en la aplicación */}
        <BrowserRouter>
          {/* Proporciona soporte para el manejo de rutas en la aplicación */}
          <Routes>
            {/* Define las rutas de la aplicación */}
            <Route path="/" element={<Home />} />
            {/* Ruta para la página de inicio */}
            <Route path="/app" element={<App />} />
            {/* Ruta para el buscador de recetas */}
            <Route path="/about" element={<About />} />
            {/* Ruta para la página "Acerca de" */}
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

// Renderiza el componente principal en el elemento con id "root" en el DOM
createRoot(document.getElementById("root")!).render(<Main />);
