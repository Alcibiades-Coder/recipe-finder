"use client"; // Indica que este archivo es para el lado del cliente (Client-Side Rendering)

// Importación de componentes desde Chakra UI para la interfaz de usuario
import {
  Container, // Componente de contenedor con un ancho máximo
  SimpleGrid, // Componente para crear una cuadrícula sencilla con columnas
  Image, // Componente para mostrar imágenes
  Flex, // Componente de contenedor flexible
  Heading, // Componente para encabezados
  Text, // Componente para texto
  Stack, // Componente de pila para disponer elementos verticalmente
  StackDivider, // Componente para dividir una pila con una línea
  Icon, // Componente para mostrar iconos
  useColorModeValue, // Hook para manejar el modo de color (claro/oscuro)
} from "@chakra-ui/react"; // Chakra UI es una librería para componentes de interfaz en React

// Importación de iconos desde react-icons
import { FaSearch } from "react-icons/fa";
import { MdOutlineContentPasteSearch, MdImageSearch } from "react-icons/md";
import { ReactElement } from "react"; // Importación de ReactElement para usar en propiedades de iconos

// Definición de las propiedades para el componente 'Feature'
interface FeatureProps {
  text: string; // Texto de la característica
  iconBg: string; // Color de fondo del icono
  icon?: ReactElement; // Icono opcional para la característica
}

// Componente funcional 'Feature' que recibe propiedades para mostrar una característica con un icono y texto
const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      {/* Disposición en fila para alinear el icono y el texto */}
      <Flex
        w={8} // Ancho del icono
        h={8} // Altura del icono
        align={"center"} // Alineación del contenido del icono
        justify={"center"} // Alineación del contenido del icono
        rounded={"full"} // Hace que el icono tenga bordes redondeados (circular)
        bg={iconBg} // Color de fondo del icono
      >
        {icon} {/* Renderiza el icono pasado como prop */}
      </Flex>
      <Text color="green.500" fontWeight={600}>
        {/* Texto en color verde con peso de fuente 600 */}
        {text} {/* Muestra el texto de la característica */}
      </Text>
    </Stack>
  );
};

// Componente principal 'SplitWithImage', que presenta una interfaz con una imagen y texto descriptivo
export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      {/* Contenedor principal con un ancho máximo de '5xl' y padding vertical de 12 */}

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Creación de una cuadrícula sencilla con 1 columna en pantallas pequeñas y 2 columnas en pantallas medianas */}

        <Stack spacing={4}>
          {/* Pila de elementos con espaciado de 4 */}

          <Text
            textTransform={"uppercase"} // Convierte el texto a mayúsculas
            color={"white"} // Color blanco para el texto
            fontWeight={600} // Peso de fuente 600
            fontSize={"sm"} // Tamaño de fuente pequeño
            bg={useColorModeValue("green.300", "green.900")} // Fondo verde que cambia según el modo de color (claro/oscuro)
            p={2} // Padding de 2 unidades
            alignSelf={"flex-start"} // Alinea el texto al inicio de la pila
            rounded={"md"} // Bordes redondeados
          >
            Buscador de Recetas {/* Título en mayúsculas y fondo verde */}
          </Text>

          <Heading color="green.500">
            Buscador de Recetas
            {/* Título principal en color verde */}
          </Heading>

          <Text color={"green.300"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            quibusdam error incidunt sit itaque illum distinctio praesentium
            nostrum consequatur eaque placeat quam minus voluptatum, aliquam,
            saepe facilis, cupiditate delectus impedit.
            {/* Texto descriptivo */}
          </Text>

          <Stack
            spacing={4} // Espaciado entre los elementos dentro de la pila
            divider={
              // Divide cada elemento con una línea
              <StackDivider
                borderColor={useColorModeValue("green.100", "green.700")} // Color de la línea divisoria, cambia con el modo de color
              />
            }
          >
            {/* Se definen las características a mostrar */}
            <Feature
              icon={
                <Icon as={MdImageSearch} color={"yellow.500"} w={5} h={5} /> // Icono de búsqueda de imagen con color amarillo
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")} // Fondo amarillo que cambia según el modo de color
              text="Navega por las Recetas" // Texto de la característica
            />

            <Feature
              icon={
                <Icon
                  as={MdOutlineContentPasteSearch}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Busca por Categorias" // Texto de la característica
            />

            <Feature
              icon={<Icon as={FaSearch} color={"purple.500"} w={5} h={5} />} // Icono de búsqueda con color morado
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="Ocupa el Buscador" // Texto de la característica
            />
          </Stack>
        </Stack>

        <Flex>
          {/* Contenedor flexible para la imagen */}
          <Image
            rounded={"md"} // Bordes redondeados para la imagen
            alt={"Imagen destacada de características"} // Texto alternativo de la imagen más descriptivo
            src={"/MainMeal.jpg"} // Ruta de la imagen a mostrar
            objectFit={"cover"} // Hace que la imagen cubra el contenedor sin deformarse
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
