import {
  Grid,
  GridItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";
import ErrorBoundary from "./components/ErrorBoundary";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;

const makeMealUrl = (category: Category) =>
  `${baseUrl}filter.php?c=${category.strCategory}`;

const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);

  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  const searchApi = (searchForm: SearchForm) => {
    const url = `${baseUrl}search.php?s=${searchForm.search}`;
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  };

  const {
    fetch,
    loading: loadingMealDetails,
    data: mealDetailData,
  } = useFetch<MealDetails>();

  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
  };

  useEffect(() => {
    setLoadingMeal(true);
    axios
      .get<{ meals: Meal[] }>(makeMealUrl(selectedCategory))
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));
  }, [selectedCategory]);

  return (
    <ErrorBoundary>
      <Grid
        templateAreas={{
          base: `"header header"
                 "main main"`,
          md: `"header header"
               "nav main"`,
        }}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ base: "1fr", md: "250px 1fr" }}
        fontSize={14}
      >
        {/* Header */}
        <GridItem
          boxShadow="lg"
          zIndex="1"
          pos="sticky"
          top="0"
          pt="7px"
          bg="green.600"
          area={"header"}
        >
          <Header onSubmit={searchApi} />
          {/* Botón para abrir el Drawer en pantallas pequeñas */}
          <IconButton
            display={{ base: "block", md: "none" }}
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onDrawerOpen}
            variant="outline"
            color="green.500" // Color llamativo para el ícono
            bg="blackAlpha.700" // Fondo semitransparente para destacar más
            _hover={{ bg: "green.600", color: "white" }} // Efecto hover para más interacción
            pos="absolute" // Asegura que el botón esté posicionado encima
            top="11px" // Ajustar posición en relación al contenedor
            left="57px" // Ajustar posición en relación al contenedor
            zIndex="10" // Mayor prioridad en el eje Z
          />
        </GridItem>

        {/* SideNav para pantallas grandes */}
        <GridItem
          display={{ base: "none", md: "block" }}
          pos="sticky"
          top="60px"
          left="0"
          p="5"
          bg="black"
          area={"nav"}
          height="calc(100vh - 60px)"
          overflowY="auto"
        >
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>

        {/* Drawer para dispositivos móviles */}
        <Drawer isOpen={isDrawerOpen} placement="left" onClose={onDrawerClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Categories</DrawerHeader>
            <DrawerBody>
              <SideNav
                categories={data}
                loading={loading}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Main Content */}
        <GridItem p="4" bg="green.300" area={"main"}>
          <MainContent
            openRecipe={searchMealDetails}
            loading={loadingMeal}
            meals={dataMeal}
          />
        </GridItem>
      </Grid>

      <RecipeModal
        data={mealDetailData}
        loading={loadingMealDetails}
        isOpen={isOpen}
        onClose={onClose}
      />
    </ErrorBoundary>
  );
}

export default App;
