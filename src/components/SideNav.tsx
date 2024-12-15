// Importa los componentes necesarios de Chakra UI, un tipo personalizado "Category" y una utilidad de color de Framer Motion.
import { Link, Heading, VStack, SkeletonText } from "@chakra-ui/react";
import { Category } from "../types";
import { color } from "framer-motion";

// Define el tipo de las propiedades que el componente SideNav espera recibir.
type Props = {
  categories: Category[]; // Lista de categorías disponibles.
  loading: boolean; // Indica si los datos están en proceso de carga.
  selectedCategory: Category; // Categoría seleccionada actualmente.
  setSelectedCategory: (category: Category) => void; // Función para actualizar la categoría seleccionada.
};

// Estilos aplicados a la categoría seleccionada.
const selectedProps = {
  bgColor: "green.500", // Color de fondo para la categoría seleccionada.
  color: "white", // Color del texto para la categoría seleccionada.
  fontWeight: "bold", // Peso de la fuente para la categoría seleccionada.
};

// Define el componente funcional SideNav que renderiza una barra lateral de navegación.
function SideNav({
  loading, // Propiedad que indica si los datos están cargando.
  categories, // Lista de categorías disponibles.
  selectedCategory, // Categoría seleccionada actualmente.
  setSelectedCategory, // Función para cambiar la categoría seleccionada.
}: Props) {
  // Si los datos están cargando, muestra un esqueleto de texto como indicador visual.
  return loading ? (
    <SkeletonText
      mt="1" // Margen superior.
      noOfLines={10} // Número de líneas simuladas.
      spacing="6" // Espaciado entre las líneas.
      skeletonHeight="2" // Altura de cada línea del esqueleto.
      startColor="green.700" // Color inicial del gradiente del esqueleto.
      endColor="green.100" // Color final del gradiente del esqueleto.
      height="20px" // Altura total del componente SkeletonText.
    />
  ) : (
    // Si los datos no están cargando, renderiza el contenido de la barra lateral.
    <>
      {/* Encabezado para la sección de categorías. */}
      <Heading color="green.200" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      {/* Contenedor vertical para la lista de categorías. */}
      <VStack align="stretch">
        {/* Recorre la lista de categorías y renderiza cada una como un enlace. */}
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)} // Asigna la categoría seleccionada al hacer clic.
            px={3} // Padding horizontal.
            py={1} // Padding vertical.
            borderRadius={5} // Bordes redondeados.
            color="green.400" // Color del texto por defecto.
            key={c.strCategory} // Clave única basada en el identificador de la categoría.
            _hover={{ textDecoration: "none" }} // Quita el subrayado al pasar el cursor.
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)} // Aplica estilos específicos si la categoría actual está seleccionada.
          >
            {/* Renderiza el nombre de la categoría. */}
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

// Exporta el componente SideNav para que pueda ser utilizado en otros archivos.
export default SideNav;
