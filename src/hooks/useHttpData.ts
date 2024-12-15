import axios from "axios"; // Importa Axios para realizar solicitudes HTTP
import { useState, useEffect } from "react"; // Importa hooks de React para manejar estados y efectos secundarios

// Hook personalizado para manejar solicitudes HTTP y gestionar el estado de los datos y la carga
export default function useHttpData<T>(url: string) {
  // Define un estado para almacenar los datos obtenidos de la solicitud
  const [data, setData] = useState<T[]>([]);

  // Define un estado para indicar si la solicitud está en curso
  const [loading, setLoading] = useState(false);

  // Hook useEffect para realizar la solicitud cuando el componente se monta
  useEffect(() => {
    let ignore = false; // Bandera para ignorar actualizaciones si el componente se desmonta
    const controller = new AbortController(); // Controlador para cancelar la solicitud si es necesario
    const { signal } = controller; // Señal para asociar la solicitud con el controlador

    setLoading(true); // Activa el estado de carga antes de realizar la solicitud

    // Realiza una solicitud HTTP GET utilizando Axios
    axios
      .get<{ meals: T[] }>(url, { signal }) // Pasa la señal para permitir la cancelación
      .then(({ data }) => {
        if (!ignore) {
          setData(data.meals); // Actualiza el estado "data" con los datos obtenidos
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false); // Desactiva el estado de carga al finalizar la solicitud
        }
      });

    // Función de limpieza para ejecutar cuando el componente se desmonta
    return () => {
      ignore = true; // Cambia la bandera para ignorar actualizaciones posteriores
      controller.abort(); // Cancela cualquier solicitud en progreso
    };
  }, []); // El array vacío como dependencia asegura que el efecto solo se ejecute al montar el componente

  // Devuelve los estados y funciones para manipular los datos y el estado de carga
  return { loading, data, setData, setLoading };
}
