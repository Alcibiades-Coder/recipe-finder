// Importa los componentes necesarios de Chakra UI y React.
import { Card, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

// Define los tipos de las propiedades que aceptará el componente. En este caso, no se reciben propiedades.
type Props = {};

// Declara un componente funcional llamado SkeletonCard.
// Este componente muestra una tarjeta (Card) con contenido esquelético (SkeletonText) para simular la carga de datos.
function SkeletonCard({}: Props) {
  return (
    // Renderiza un contenedor de tipo "Card" con una sombra aplicada.
    <Card boxShadow="lg">
      {/* El cuerpo principal de la tarjeta (CardBody) que contiene los elementos visuales. */}
      <CardBody>
        {/* Componente SkeletonText que simula una línea de texto en proceso de carga. */}
        <SkeletonText
          mt="1" // Margen superior del componente.
          noOfLines={1} // Número de líneas de texto simuladas (1 en este caso).
          spacing="4" // Espaciado entre líneas (aunque no se aplica aquí porque es una línea).
          skeletonHeight="100" // Altura del esqueleto simulado.
          startColor="green.700" // Color de inicio del gradiente para la animación de carga.
          endColor="green.100" // Color de finalización del gradiente para la animación de carga.
          height="100" // Altura total del componente SkeletonText.
        />
        {/* Otro SkeletonText, usado para simular otra línea de texto más delgada. */}
        <SkeletonText
          mt="4" // Margen superior del componente.
          noOfLines={1} // Número de líneas de texto simuladas (1 en este caso).
          spacing="4" // Espaciado entre líneas.
          skeletonHeight="2" // Altura del esqueleto simulado (más pequeño que el anterior).
          startColor="green.700" // Color de inicio del gradiente para la animación de carga.
          endColor="green.100" // Color de finalización del gradiente para la animación de carga.
          height="2" // Altura total del componente SkeletonText.
        />
      </CardBody>
    </Card>
  );
}

// Exporta el componente SkeletonCard para que pueda ser utilizado en otros archivos.
export default SkeletonCard;
