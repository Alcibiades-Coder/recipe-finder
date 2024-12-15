// Importa componentes de "@chakra-ui/react" para la creación y personalización del modal:
// - Modal: componente principal para construir modales.
// - ModalOverlay: fondo semitransparente detrás del modal.
// - ModalContent: contenedor principal del contenido del modal.
// - ModalFooter: área para botones o acciones en la parte inferior del modal.
// - Button: componente para crear botones.
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

// Importa RecipeModalSkeleton, un componente que representa un estado de carga esquelética.
import RecipeModalSkeleton from "./RecipeModalSkeleton";

// Importa el tipo MealDetails que define los datos estructurados de una receta.
import { MealDetails } from "../types";

// Importa RecipeModalContent, un componente que muestra el contenido completo de una receta.
import RecipeModalContent from "./RecipeModalContent";

// Define las propiedades del componente (Props):
// - `data`: un objeto opcional de tipo MealDetails que contiene los datos de la receta.
// - `isOpen`: un booleano que determina si el modal está abierto.
// - `onClose`: una función que se ejecuta al cerrar el modal.
// - `loading`: un booleano que indica si los datos están cargándose.
type Props = {
  data: MealDetails | undefined;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

// Componente funcional `RecipeModal`:
// - Crea un modal para mostrar el contenido de una receta o un estado de carga esquelética.
function RecipeModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <>
      {/* Componente Modal:
          - `isOpen`: determina si el modal está abierto.
          - `onClose`: función que se ejecuta al intentar cerrar el modal. */}
      <Modal isOpen={isOpen} onClose={onClose}>
        {/* Fondo semitransparente detrás del modal. */}
        <ModalOverlay />

        {/* Contenedor principal del modal. */}
        <ModalContent>
          {/* Si `loading` es true, muestra el componente RecipeModalSkeleton (estado de carga).
              Si no, verifica si `data` existe y muestra el contenido de la receta con RecipeModalContent. */}
          {loading ? (
            <RecipeModalSkeleton />
          ) : (
            data && <RecipeModalContent data={data} />
          )}

          {/* Pie del modal con un botón para cerrar. */}
          <ModalFooter>
            {/* Botón con un esquema de color verde. Ejecuta `onClose` al hacer clic. */}
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// Exporta el componente RecipeModal como valor predeterminado.
// Esto permite que otros archivos lo importen y lo utilicen.
export default RecipeModal;
