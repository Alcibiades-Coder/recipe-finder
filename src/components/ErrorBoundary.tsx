import React, { Component, ReactNode } from "react"; // Importación de React y tipos de React

// Definición de tipos para las props del componente ErrorBoundary
type ErrorBoundaryProps = {
  children: ReactNode; // Las props incluyen 'children', que puede ser cualquier nodo de React (componentes, elementos, texto, etc.)
};

// Definición de tipos para el estado del componente ErrorBoundary
type ErrorBoundaryState = {
  hasError: boolean; // El estado tiene una propiedad 'hasError' que indica si hubo un error
};

// Clase que maneja los errores dentro de su árbol de componentes
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Inicialización del estado con 'hasError' como 'false'
    this.state = { hasError: false };
  }

  // Método estático que se ejecuta cuando ocurre un error
  static getDerivedStateFromError(): ErrorBoundaryState {
    // Actualiza el estado para mostrar una interfaz de usuario de respaldo en caso de error
    return { hasError: true };
  }

  // Método que captura el error y la información relacionada con el error
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Se puede registrar el error o enviarlo a un servicio externo
    console.error("Error atrapado por ErrorBoundary:", error, errorInfo);
  }

  // Renderizado del componente
  render() {
    if (this.state.hasError) {
      // Si ocurrió un error, se renderiza una interfaz de usuario de respaldo
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h1>Algo salió mal.</h1>
          <p>
            Hemos encontrado un error inesperado. Por favor, inténtelo más
            tarde.
          </p>
        </div>
      );
    }

    // Si no hay error, se renderizan los componentes hijos
    return this.props.children;
  }
}

// Exportación del componente ErrorBoundary para usarlo en otras partes de la aplicación
export default ErrorBoundary;
