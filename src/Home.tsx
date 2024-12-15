import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link para navegar entre rutas
import SplitWithImage from "./components/SplitWithImage"; // Componente personalizado para mostrar contenido dividido con una imagen
import { Text, Box, SimpleGrid } from "@chakra-ui/react"; // Importación de componentes de diseño de Chakra UI

function Home() {
  return (
    // Crea un diseño en una cuadrícula con una columna y sin espacio entre los elementos, ocupando toda la altura de la ventana
    <SimpleGrid columns={1} spacing={0} height="100vh">
      {/* Sección superior con fondo verde que funciona como encabezado */}
      <Box
        bg="green.500"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* Muestra un logotipo de un bol */}
        <img
          src="../public/bowl.svg" // Ruta de la imagen
          alt="Logo del Finder" // Texto alternativo para accesibilidad
          style={{
            width: "5%", // Tamaño de la imagen como porcentaje del ancho del contenedor
            objectFit: "cover", // Ajuste de la imagen para mantener sus proporciones
          }}
        />
        {/* Título del buscador de recetas */}
        <Text mt={1} mb={3} fontSize="lg" fontWeight="bold" color="white">
          Buscador de Recetas
        </Text>
      </Box>

      {/* Sección central con fondo negro que contiene el componente SplitWithImage */}
      <Box
        bg="black"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <SplitWithImage />{" "}
        {/* Componente que muestra contenido dividido con una imagen */}
      </Box>

      {/* Sección inferior con fondo verde que contiene una barra de navegación */}
      <Box
        bg="green.500"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <nav>
          {/* Enlace que redirige a la página del buscador */}
          <Link to="/app" style={{ color: "white", marginRight: "10px" }}>
            Ir al Buscador
          </Link>
          {/* Enlace que redirige a la página de "Acerca de" */}
          <Link to="/about" style={{ color: "white" }}>
            Acerca de
          </Link>
        </nav>
      </Box>
    </SimpleGrid>
  );
}

export default Home; // Exporta el componente para ser utilizado en otras partes de la aplicación
