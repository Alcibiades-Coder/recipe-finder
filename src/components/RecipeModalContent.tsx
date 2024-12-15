import React from "react";
import { MealDetails } from "../types";
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

type Props = {
  data: MealDetails;
};

const joinIngredients = (data: MealDetails) => {
  let ingredients = [];
  for (let index = 1; index <= 20; index++) {
    const ingridient = data[`strIngredient${index}`];
    const measure = data[`strMeasure${index}`];
    if (ingridient !== "") {
      ingredients.push(`${ingridient} - ${measure}`);
    }
  }
  return ingredients;
};

function RecipeModalContent({ data }: Props) {
  const ingredients = joinIngredients(data);

  return (
    <>
      <ModalHeader color="green.700">{data.strMeal}</ModalHeader>
      <ModalCloseButton color="green.700" />
      <ModalBody>
        <Image
          alt={data.strMeal}
          width="100%"
          borderRadius="lg"
          src={data.strMealThumb}
        />
        <Heading color="green.700" mt={4} mb={4} size="md">
          Ingredientes
        </Heading>

        <OrderedList>
          {ingredients.map((ingredient) => (
            <ListItem color="green.600" key={ingredient}>
              {ingredient}
            </ListItem>
          ))}
        </OrderedList>
        <Text color="green.600" whiteSpace="pre-line" mt={4}>
          {data.strInstructions}
        </Text>
      </ModalBody>
    </>
  );
}

export default RecipeModalContent;
