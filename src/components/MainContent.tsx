// Importa React para usar JSX y crear componentes.
import React from "react";

// Importa el tipo `Meal`, que define la estructura de datos de una comida.
import { Meal } from "../types";

// Importa componentes de "@chakra-ui/react" para estructurar y estilizar:
// - Image: para mostrar imágenes.
// - Card, CardBody, CardFooter: para construir y organizar tarjetas.
// - Text: para mostrar texto simple.
// - Heading: para mostrar encabezados.
// - Button: para añadir botones.
// - SimpleGrid: para crear una cuadrícula flexible y responsive.
// - Skeleton: para mostrar estados de carga.
import {
  Image,
  Card,
  CardBody,
  Text,
  Heading,
  Button,
  CardFooter,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";

// Importa el componente `MealCard`, que muestra una tarjeta con la información de una comida.
import MealCard from "./MealCard";

// Importa el componente `SkeletonCard`, que representa un estado de carga en forma de tarjeta.
import SkeletonCard from "./SkeletonCard";

// Define las propiedades del componente (Props):
// - `meals`: un arreglo de objetos `Meal` con la información de las comidas.
// - `loading`: un booleano que indica si los datos están cargándose.
// - `openRecipe`: una función que se ejecuta al hacer clic en una tarjeta para abrir la receta.
type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void;
};

// Componente funcional `MainContent`:
// - Crea un contenedor en forma de cuadrícula que muestra las tarjetas de las comidas
//   o los estados de carga (esqueletos) según el estado de `loading`.
function MainContent({ meals, loading, openRecipe }: Props) {
  // Define un arreglo de números para generar esqueletos de tarjetas de forma dinámica.
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // Retorna una cuadrícula (`SimpleGrid`) con las tarjetas o los esqueletos.
  return (
    // `SimpleGrid` organiza los elementos en una cuadrícula:
    // - `columns`: define el número de columnas (2 en pantallas pequeñas, 3 en pantallas más grandes).
    // - `spacing="20px"`: establece un espacio de 20px entre las tarjetas.
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {/* Si `loading` es true, muestra tarjetas esqueléticas (SkeletonCard) para indicar el estado de carga.
          - Genera 8 SkeletonCards usando el arreglo `skeletons`. */}
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}

      {/* Si `loading` es false, muestra las tarjetas de las comidas (`MealCard`).
          - Mapea el arreglo `meals` y renderiza un `MealCard` para cada comida.
          - El botón de cada tarjeta llama a `openRecipe` con los datos de la comida seleccionada. */}
      {!loading &&
        meals.map((m) => (
          <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meal={m} />
        ))}
    </SimpleGrid>
  );
}

// Exporta el componente `MainContent` como valor predeterminado.
// Esto permite que otros archivos lo importen y utilicen.
export default MainContent;
