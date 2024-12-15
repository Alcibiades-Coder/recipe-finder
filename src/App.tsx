import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState, useEffect } from "react";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";
import ErrorBoundary from "./components/ErrorBoundary"; // Importar ErrorBoundary

// URL base para las solicitudes a la API
const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;

// Función para construir la URL de las comidas por categoría
const makeMealUrl = (category: Category) =>
  `${baseUrl}filter.php?c=${category.strCategory}`;

// Categoría por defecto para el estado inicial
const defaultCategory = {
  strCategory: "Beef",
};

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejar el estado del modal

  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  // Obtener categorías utilizando un hook personalizado
  const { loading, data } = useHttpData<Category>(url);

  // Obtener comidas de la categoría por defecto utilizando un hook personalizado
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
    setLoading: setLoadingMeal,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  // Función para buscar comidas por nombre utilizando la API
  const searchApi = (searchForm: SearchForm) => {
    const url = `${baseUrl}search.php?s=${searchForm.search}`;
    setLoadingMeal(true); // Activar el estado de carga antes de la llamada a la API
    axios
      .get<{ meals: Meal[] }>(url) // Realizar la solicitud GET
      .then(({ data }) => setMeals(data.meals)) // Actualizar el estado de las comidas con la respuesta de la API
      .finally(() => setLoadingMeal(false)); // Desactivar el estado de carga después de completar
  };

  // Hook personalizado para obtener detalles de una comida
  const {
    fetch,
    loading: loadingMealDetails,
    data: mealDetailData,
  } = useFetch<MealDetails>();

  // Función para obtener y mostrar detalles de una comida específica
  const searchMealDetails = (meal: Meal) => {
    onOpen(); // Abrir el modal
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`); // Obtener detalles de la comida
  };

  // Obtener comidas cuando la categoría seleccionada cambie
  useEffect(() => {
    setLoadingMeal(true); // Activar el estado de carga antes de la llamada a la API
    axios
      .get<{ meals: Meal[] }>(makeMealUrl(selectedCategory)) // Obtener comidas para la categoría seleccionada
      .then(({ data }) => setMeals(data.meals)) // Actualizar el estado de las comidas con la respuesta de la API
      .finally(() => setLoadingMeal(false)); // Desactivar el estado de carga después de completar
  }, [selectedCategory]); // El array de dependencias asegura que se ejecute al cambiar la categoría

  return (
    <ErrorBoundary>
      {/* Envolver la aplicación con ErrorBoundary para manejar errores */}
      <Grid
        templateAreas={`"header header"
                    "nav main"`}
        gridTemplateRows={"60px 1fr "}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        {/* Sección del encabezado */}
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
        </GridItem>

        {/* Barra lateral de navegación */}
        <GridItem
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
            categories={data} // Pasar las categorías obtenidas
            loading={loading} // Pasar el estado de carga
            selectedCategory={selectedCategory} // Categoría seleccionada actualmente
            setSelectedCategory={setSelectedCategory} // Función para actualizar la categoría
          />
        </GridItem>

        {/* Sección principal de contenido */}
        <GridItem p="4" bg="green.300" area={"main"}>
          <MainContent
            openRecipe={searchMealDetails} // Función para abrir los detalles de la receta
            loading={loadingMeal} // Pasar el estado de carga para las comidas
            meals={dataMeal} // Pasar las comidas obtenidas
          />
        </GridItem>
      </Grid>

      {/* Modal para mostrar detalles de la receta */}
      <RecipeModal
        data={mealDetailData} // Pasar los detalles de la comida obtenidos
        loading={loadingMealDetails} // Pasar el estado de carga para los detalles
        isOpen={isOpen} // Estado de apertura del modal
        onClose={onClose} // Función para cerrar el modal
      />
    </ErrorBoundary>
  );
}

export default App;
