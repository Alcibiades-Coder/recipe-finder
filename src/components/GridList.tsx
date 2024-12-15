"use client";

// Importación de componentes desde Chakra UI para la interfaz de usuario
import {
  Box, // Componente para crear un contenedor flexible
  Container, // Contenedor de ancho fijo que puede adaptarse a diferentes tamaños de pantalla
  Heading, // Componente de encabezado
  SimpleGrid, // Componente para crear un grid sencillo
  Icon, // Componente para iconos
  Text, // Componente de texto
  Stack, // Componente de pila para disponer elementos verticalmente
  HStack, // Componente de pila horizontal para alinear elementos en línea
  VStack, // Componente de pila vertical para alinear elementos en columna
} from "@chakra-ui/react"; // Chakra UI es una librería para componentes de interfaz en React

// Importación del icono de "check" desde react-icons
import { FaCheck } from "react-icons/fa";

// Datos de ejemplo que se pueden reemplazar por los propios datos
const features = Array.apply(null, Array(8)).map(function (_x, i) {
  return {
    id: i, // Identificador único para cada característica
    title: "Lorem ipsum dolor sit amet", // Título de la característica
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.", // Descripción de la característica
  };
});

// Componente principal que define el contenido de la página
export default function GridList() {
  return (
    <Box p={4}>
      {" "}
      // Contenedor principal con padding de 4 unidades
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        {" "}
        // Contenedor de pila con espaciado de 4 y alineación de texto centrado
        <Heading fontSize={"3xl"}>This is the headline</Heading> // Título
        principal con tamaño de fuente "3xl"
        <Text color={"gray.600"} fontSize={"xl"}>
          {" "}
          // Texto descriptivo con color gris y tamaño de fuente "xl" Lorem
          ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua.
        </Text>
      </Stack>
      <Container maxW={"6xl"} mt={10}>
        {" "}
        // Contenedor para la cuadrícula de características con un margen
        superior de 10 unidades
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {" "}
          // Grid sencillo con columnas dinámicas según el tamaño de la pantalla
          (1 columna en pantallas pequeñas, 2 en medianas, 4 en grandes)
          {features.map(
            (
              feature // Mapeo de cada elemento en el array de características
            ) => (
              <HStack key={feature.id} align={"top"}>
                {" "}
                // Pila horizontal para cada característica, alineada en la
                parte superior
                <Box color={"green.400"} px={2}>
                  {" "}
                  // Caja con color verde para el icono y padding horizontal de
                  2 unidades
                  <Icon as={FaCheck} /> // Icono de marca de verificación
                </Box>
                <VStack align={"start"}>
                  {" "}
                  // Pila vertical para alinear título y texto de la
                  característica
                  <Text fontWeight={600}>{feature.title}</Text> // Título de la
                  característica en negrita (peso 600)
                  <Text color={"gray.600"}>{feature.text}</Text> // Descripción
                  de la característica con color gris
                </VStack>
              </HStack>
            )
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
