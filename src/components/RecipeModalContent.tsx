// Importa React para usar JSX y crear componentes.
import React from "react";

// Importa el tipo MealDetails, que define la estructura de datos de una comida.
import { MealDetails } from "../types";

// Importa componentes de la biblioteca "@chakra-ui/react":
// - Text: para mostrar texto.
// - Heading: para títulos o encabezados estilizados.
// - Image: para mostrar imágenes.
// - ModalBody, ModalCloseButton, ModalHeader: para estructurar el contenido de un modal.
// - OrderedList, ListItem: para listas ordenadas y sus elementos.
import {
  Text,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

// Define las propiedades del componente (Props), que incluyen un objeto `data` de tipo MealDetails.
type Props = {
  data: MealDetails;
};

// Función auxiliar `joinIngredients`:
// - Recibe un objeto `data` de tipo MealDetails.
// - Extrae los ingredientes (`strIngredientX`) y sus medidas (`strMeasureX`) hasta un máximo de 20.
// - Combina cada ingrediente con su medida en formato "ingrediente - medida".
// - Retorna un arreglo con las combinaciones.
const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingridient = data[`strIngredient${index}`]; // Obtiene el ingrediente.
    const measure = data[`strMeasure${index}`]; // Obtiene la medida.
    if (ingridient !== "") {
      // Verifica que el ingrediente no esté vacío.
      ingredients.push(`${ingridient} - ${measure}`); // Agrega al arreglo.
    }
  }
  return ingredients; // Retorna el arreglo final.
};

// Componente funcional `RecipeModalContent`:
// - Recibe un objeto `data` como propiedad, que contiene los detalles de una receta.
function RecipeModalContent({ data }: Props) {
  // Llama a la función `joinIngredients` para obtener la lista de ingredientes con sus medidas.
  const ingredients = joinIngredients(data);

  // Retorna el contenido del modal, estructurado en JSX.
  return (
    <>
      {/* Título del modal con el nombre de la comida. */}
      <ModalHeader color="green.700">{data.strMeal}</ModalHeader>

      {/* Botón para cerrar el modal. */}
      <ModalCloseButton color="green.700" />

      {/* Cuerpo del modal que incluye la imagen, ingredientes e instrucciones. */}
      <ModalBody>
        {/* Imagen de la comida, con un borde redondeado. */}
        <Image
          alt={data.strMeal}
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
        />

        {/* Encabezado "Ingredientes". */}
        <Heading color="green.700" mt={4} mb={4} size="md">
          Ingredientes
        </Heading>

        {/* Lista ordenada de ingredientes generada dinámicamente. */}
        <OrderedList>
          {ingredients.map((ingredient) => (
            // Cada ingrediente se muestra como un elemento de la lista.
            <ListItem color="green.600" key={ingredient}>
              {ingredient}
            </ListItem>
          ))}
        </OrderedList>

        {/* Instrucciones para la receta, respetando los saltos de línea. */}
        <Text color="green.600" whiteSpace="pre-line" mt={4}>
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

// Exporta el componente `RecipeModalContent` como valor predeterminado.
// Esto permite que otros archivos lo importen y utilicen.
export default RecipeModalContent;
