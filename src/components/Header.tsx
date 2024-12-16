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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center">
          <Flex alignItems="center" mr={4}>
            <Link to="/">
              <Box
                as="img"
                src="/bowl.svg"
                alt="Logo"
                boxSize="40px"
                mr={{ base: "6", md: "3" }} // Más margen en dispositivos móviles
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.1)",
                }}
              />
            </Link>

            <Text
              color="white"
              fontWeight="bold"
              fontSize="lg"
              display={{ base: "none", md: "block" }} // Ocultar texto en móviles
            >
              Encuentra tus recetas favoritas
            </Text>
          </Flex>

          <InputGroup flex="1">
            <InputLeftElement pointerEvents="none">
              <IoMdSearch color="white" />
            </InputLeftElement>

            <Input
              mr="3"
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
