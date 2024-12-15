import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import Home from "./Home";
import About from "./About";
import ErrorBoundary from "./components/ErrorBoundary";

const Main = () => {
  return (
    <ChakraProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<App />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

createRoot(document.getElementById("root")!).render(<Main />);
