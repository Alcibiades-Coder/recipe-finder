import axios from "axios"; // Importa Axios, una biblioteca para realizar solicitudes HTTP
import { useState } from "react"; // Importa useState, un hook de React para manejar estados

// Hook personalizado genérico para realizar solicitudes HTTP y manejar datos
export default <T>() => {
  // Define un estado para indicar si la solicitud está en curso
  const [loading, setLoading] = useState(false);

  // Define un estado para almacenar los datos obtenidos de la solicitud
  const [data, setData] = useState<T>();

  // Función para realizar una solicitud GET a una URL específica
  const fetch = (url: string) => {
    setLoading(true); // Activa el estado de carga antes de realizar la solicitud
    axios
      .get(url) // Realiza la solicitud GET a la URL proporcionada
      .then(({ data }) => setData(data.meals[0])) // Almacena el primer elemento de la propiedad "meals" en el estado "data"
      .finally(() => setLoading(false)); // Desactiva el estado de carga al finalizar la solicitud
  };

  // Retorna los estados y la función para realizar solicitudes
  return { loading, data, fetch };
};
