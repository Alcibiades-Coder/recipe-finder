// Importa componentes de "@chakra-ui/react" y React.
// - Container: un contenedor genérico para organizar elementos.
// - SkeletonText: un componente que muestra un estado de carga en forma de líneas esqueléticas.
import { Container, SkeletonText } from "@chakra-ui/react";
import React from "react";

// Define el tipo de las propiedades del componente como vacío (Props no recibe datos).
type Props = {};

// Define un componente funcional llamado RecipeModalSkeleton.
// Este componente representa una estructura de carga esquelética para una interfaz de usuario.
function RecipeModalSkeleton({}: Props) {
  return (
    // Utiliza el componente Container para agrupar elementos.
    <Container>
      {/* Primera línea esquelética: 
          - Margen superior (mt) de 4 y margen inferior (mb) de 5.
          - Una sola línea de esqueleto (noOfLines=1) con una altura de 8 píxeles. */}
      <SkeletonText mt={4} mb={5} noOfLines={1} skeletonHeight={8} />

      {/* Segunda línea esquelética:
          - Bordes redondeados con un radio de 200 píxeles (borderRadius=200).
          - Una sola línea de esqueleto (noOfLines=1) con una altura de 280 píxeles. */}
      <SkeletonText borderRadius={200} noOfLines={1} skeletonHeight={280} />

      {/* Tercera sección esquelética:
          - Margen superior (mt) de 4.
          - Cinco líneas esqueléticas (noOfLines=5) con un espacio de 4 píxeles entre líneas (spacing=4). */}
      <SkeletonText mt={4} noOfLines={5} spacing={4} />
    </Container>
  );
}

// Exporta el componente RecipeModalSkeleton como el valor predeterminado.
// Esto permite que otros archivos lo importen y utilicen.
export default RecipeModalSkeleton;
