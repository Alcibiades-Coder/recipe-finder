import { Link } from "react-router-dom"; // Importa el componente Link para navegación entre rutas
import { Text, Box, SimpleGrid } from "@chakra-ui/react"; // Importación de componentes de diseño de Chakra UI
import GridList from "./components/GridList"; // Componente personalizado para mostrar una lista en formato de cuadrícula

function Home() {
  return (
    // Diseña una cuadrícula con una columna, sin espacio entre filas, y altura igual a la ventana
    <SimpleGrid columns={1} spacing={0} height="100vh">
      {/* Primera sección: Encabezado con fondo verde */}
      <Box
        bg="green.500" // Color de fondo verde
        flex="1" // Ocupa una porción igual del espacio disponible
        display="flex" // Utiliza un layout de tipo flexbox
        flexDirection="column" // Alinea elementos en columna
        alignItems="center" // Centra elementos horizontalmente
        justifyContent="center" // Centra elementos verticalmente
      >
        {/* Logotipo del buscador de recetas */}
        <img
          src="/bowl.svg" // Ruta corregida de la imagen del logotipo
          alt="Logo del Finder" // Texto alternativo para accesibilidad
          style={{
            width: "5%", // Ajusta el tamaño de la imagen al 5% del ancho del contenedor
            objectFit: "cover", // Asegura que la imagen mantenga sus proporciones
          }}
        />
        {/* Título del encabezado */}
        <Text mt={1} mb={3} fontSize="lg" fontWeight="bold" color="white">
          Buscador de Recetas
        </Text>
      </Box>

      {/* Segunda sección: Contenido principal con fondo negro */}
      <Box
        bg="black" // Fondo negro
        flex="1" // Ocupa una porción igual del espacio disponible
        display="flex" // Utiliza un layout de tipo flexbox
        alignItems="center" // Centra el contenido horizontalmente
        justifyContent="center" // Centra el contenido verticalmente
      >
        {/* Componente que muestra una lista en formato de cuadrícula */}
        <GridList />
      </Box>

      {/* Tercera sección: Barra de navegación con fondo verde */}
      <Box
        bg="green.500" // Fondo verde
        flex="1" // Ocupa una porción igual del espacio disponible
        display="flex" // Utiliza un layout de tipo flexbox
        alignItems="center" // Centra el contenido horizontalmente
        justifyContent="center" // Centra el contenido verticalmente
      >
        <nav aria-label="Navegación principal">
          {/* Enlace para navegar a la página principal */}
          <Link to="/" style={{ color: "white", marginRight: "10px" }}>
            Home
          </Link>
          {/* Enlace para navegar a la página del buscador */}
          <Link to="/app" style={{ color: "white" }}>
            Ir al Buscador
          </Link>
        </nav>
      </Box>
    </SimpleGrid>
  );
}

export default Home; // Exporta el componente para que sea utilizado en otras partes de la aplicación
