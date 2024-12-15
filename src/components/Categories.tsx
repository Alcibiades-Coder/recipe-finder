// Definición de un tipo de propiedades vacío, ya que este componente no recibe props
type Props = {};

// Componente funcional 'Categories', que no recibe propiedades
function Categories({}: Props) {
  // Renderiza un div con el texto "Categories"
  return <div>Categories</div>;
}

// Exporta el componente Categories para que pueda ser usado en otras partes de la aplicación
export default Categories;
