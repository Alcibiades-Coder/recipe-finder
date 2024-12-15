// Importa componentes de "@chakra-ui/react" para construir y estilizar la tarjeta:
// - Image: para mostrar imágenes.
// - Text: para mostrar texto.
// - Card, CardBody, CardFooter: para estructurar y estilizar una tarjeta.
// - Heading: para encabezados o títulos.
// - Button: para crear un botón.
import {
  Image,
  Text,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";

// Importa el tipo Meal, que define la estructura de datos de una comida.
import { Meal } from "../types";

// Define las propiedades del componente (Props):
// - `meal`: un objeto de tipo Meal que contiene los datos de la comida (nombre, imagen, etc.).
// - `openRecipe`: una función que se ejecuta cuando el usuario hace clic en el botón "Ver Receta".
type Props = {
  meal: Meal;
  openRecipe: () => void;
};

// Componente funcional `MealCard`:
// - Muestra una tarjeta con la información de una comida y un botón para ver la receta.
function MealCard({ meal, openRecipe }: Props) {
  return (
    // Componente Card:
    // - Utiliza `boxShadow="lg"` para añadir una sombra grande a la tarjeta.
    <Card boxShadow="lg">
      {/* Cuerpo de la tarjeta (CardBody):
          - Contiene la imagen de la comida y el título. */}
      <CardBody>
        {/* Imagen de la comida:
            - `src`: URL de la imagen obtenida de `meal.strMealThumb`.
            - `alt`: Texto alternativo con el nombre de la comida.
            - `borderRadius="lg"`: Aplica bordes redondeados. */}
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />

        {/* Encabezado con el nombre de la comida:
            - `size="md"`: Tamaño mediano para el título.
            - `color="green.400"`: Aplica un color verde claro al título. */}
        <Heading size="md" color="green.400">
          {/* Texto con un margen superior (mt) de 4 píxeles. */}
          <Text mt={4}>{meal.strMeal}</Text>
        </Heading>
      </CardBody>

      {/* Pie de la tarjeta (CardFooter):
          - Contiene el botón para ver la receta. */}
      <CardFooter pt={0}>
        {/* Botón "Ver Receta":
            - `onClick={openRecipe}`: Ejecuta la función `openRecipe` al hacer clic.
            - `color="white"`: El texto del botón será blanco.
            - `bgColor="green.400"`: El fondo del botón será verde claro. */}
        <Button onClick={openRecipe} color="white" bgColor="green.400">
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
}

// Exporta el componente `MealCard` como valor predeterminado.
// Esto permite que otros archivos lo importen y lo utilicen.
export default MealCard;
