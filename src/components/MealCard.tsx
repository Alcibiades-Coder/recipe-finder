import {
  Image,
  Text,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { m } from "framer-motion";
import React from "react";
import { Meal } from "../types";

type Props = {
  meal: Meal;
  openRecipe: () => void;
};

function MealCard({ meal, openRecipe }: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <Image src={meal.strMealThumb} alt={meal.strMeal} borderRadius="lg" />

        <Heading size="md" color="green.400">
          <Text mt={4}>{meal.strMeal}</Text>
        </Heading>
      </CardBody>
      <CardFooter pt={0}>
        <Button onClick={openRecipe} color="white" bgColor="green.400">
          Ver Receta
        </Button>
      </CardFooter>
    </Card>
  );
}

export default MealCard;
