# Recipe Finder

Recipe Finder es una aplicación web desarrollada con React, TypeScript y Vite que permite a los usuarios explorar una amplia variedad de recetas utilizando la API pública [The Meal DB](https://www.themealdb.com/). 

## Características

- **Uso de Vite**: Rápido y moderno generador de proyectos.
- **Componentes funcionales**: Organización modular del código.
- **Consumo de API pública**: Integración con The Meal DB para obtener datos de recetas.
- **Rutas dinámicas**: Navegación con React Router.
- **Gestión de estado con Hooks**: Uso de `useEffect` para manejar procesos asíncronos.
- **Error Boundaries**: Manejo de errores en la interfaz.
- **Estilos modernos**: Implementación de Chakra UI para diseño responsivo.
- **Tecnologías utilizadas**: Desarrollo en TypeScript, React + Vite, Axios y Chakra UI.

## Requisitos

- Node.js (v16 o superior)
- NPM

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Alcibiades-Coder/recipe-finder.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd recipe-finder
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre tu navegador y visita `http://localhost:5173`.

## Uso

1. Explora recetas desde la página principal.
2. Usa la barra de búsqueda para encontrar recetas específicas.
3. Haz clic en una receta para ver más detalles, como ingredientes y pasos.

## Estructura del Proyecto

```
recipe-finder/
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── routes/        # Configuración de rutas
│   ├── styles/        # Estilos globales con Chakra UI
│   └── utils/         # Funciones auxiliares
├── public/            # Archivos estáticos
├── package.json       # Configuración de dependencias
└── README.md          # Documentación
```

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b nombre-rama
   ```
3. Realiza tus cambios y haz commits claros:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía un pull request a este repositorio.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más información.

## Recursos

- [The Meal DB API](https://www.themealdb.com/)
- [Documentación de React](https://reactjs.org/)
- [Guía de Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)

