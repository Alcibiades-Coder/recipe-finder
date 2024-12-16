// Importa componentes de "@chakra-ui/react" para diseñar y estilizar la interfaz:
// - Text: para mostrar texto.
// - InputGroup, InputLeftElement, Input, InputRightElement: para construir y personalizar el campo de búsqueda.
// - Container: para centralizar y limitar el ancho del contenido.
// - Button: para añadir un botón.
// - Box: para contenedores flexibles con estilos personalizados.
// - Flex: para crear un diseño flexible y responsivo.
import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Container,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";

// Importa el ícono de búsqueda de "react-icons".
import { IoMdSearch } from "react-icons/io";

// Importa `useForm` de "react-hook-form", una biblioteca para manejar formularios en React.
import { useForm } from "react-hook-form";

// Importa el tipo `SearchForm`, que define la estructura de los datos del formulario.
import { SearchForm } from "../types";

// Importa `Link` de "react-router-dom" para crear enlaces de navegación.
import { Link } from "react-router-dom";

// Define las propiedades del componente (Props):
// - `onSubmit`: una función que se ejecuta al enviar el formulario. Recibe los datos del formulario de tipo `SearchForm`.
type Props = {
  onSubmit: (data: SearchForm) => void;
};

// Componente funcional `Header`:
// - Crea un encabezado con un logo, texto de introducción y un campo de búsqueda.
function Header({ onSubmit }: Props) {
  // Utiliza `useForm` para manejar el formulario:
  // - `register`: se usa para registrar campos del formulario.
  // - `formState`: contiene el estado del formulario, como errores de validación.
  // - `handleSubmit`: una función que maneja el envío del formulario.
  const { register, formState, handleSubmit } = useForm<SearchForm>();

  return (
    // Contenedor principal:
    // - `maxW="3xl"`: establece un ancho máximo de "3xl".
    // - `mt={1}`: añade un margen superior de 1.
    <Container maxW="3xl" mt={1}>
      {/* Formulario principal:
          - `onSubmit`: maneja el envío del formulario utilizando `handleSubmit` de react-hook-form. */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Contenedor flexible para alinear los elementos horizontalmente. */}
        <Flex alignItems="center">
          {/* Sección izquierda con el logo y texto de introducción. */}
          <Flex alignItems="center" mr={4}>
            {/* Enlace al inicio de la aplicación:
                - Contiene un logo (imagen) con un efecto hover (escala y puntero). */}
            <Link to="/">
              <Box
                as="img"
                src="/bowl.svg" // Ruta al logo de la aplicación.
                alt="Logo" // Texto alternativo para accesibilidad.
                boxSize="40px" // Tamaño de la imagen.
                mr={3} // Margen derecho.
                _hover={{
                  cursor: "pointer", // Cambia el cursor al pasar el mouse.
                  transform: "scale(1.1)", // Escala la imagen un 10% al pasar el mouse.
                }}
              />
            </Link>

            {/* Texto de introducción:
                - Mensaje que invita al usuario a buscar recetas. */}
            <Text color="white" fontWeight="bold" fontSize="lg">
              Encuentra tus recetas favoritas
            </Text>
          </Flex>

          {/* Grupo de entrada (campo de búsqueda y botón). */}
          <InputGroup flex="1">
            {/* Ícono de búsqueda a la izquierda del campo de texto. */}
            <InputLeftElement pointerEvents="none">
              <IoMdSearch color="white" />
            </InputLeftElement>

            {/* Campo de entrada de texto:
                - `focusBorderColor`: cambia el color del borde al enfocarse.
                - `isInvalid`: aplica estilos de error si la validación falla.
                - `register`: registra este campo en el formulario, con validación requerida.
                - `placeholder`: texto de ejemplo en el campo.
                - `_placeholder`: estilo personalizado para el texto del placeholder. */}
            <Input
              mr="3" // Margen derecho.
              focusBorderColor={
                !!formState.errors.search ? "crimson" : "green.700"
              }
              isInvalid={!!formState.errors.search}
              {...register("search", { required: true })}
              color="white"
              type="text"
              placeholder="Intenta con 'chicken' o 'beans'..."
              _placeholder={{ color: "white" }}
            />

            {/* Botón de búsqueda:
                - Ejecuta la función `onSubmit` al enviar el formulario. */}
            <Button color="white" type="submit" bgColor="green.800">
              Buscar
            </Button>
          </InputGroup>
        </Flex>
      </form>
    </Container>
  );
}

// Exporta el componente `Header` como valor predeterminado.
// Esto permite que otros archivos lo importen y utilicen.
export default Header;
