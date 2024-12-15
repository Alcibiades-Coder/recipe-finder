import React from "react";
import { Link } from "react-router-dom";
import SplitWithImage from "./components/SplitWithImage";
import { Text, Box, SimpleGrid } from "@chakra-ui/react";
import GridList from "./components/GridList";

function Home() {
  return (
    <SimpleGrid columns={1} spacing={0} height="100vh">
      <Box
        bg="green.500"
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="../public/bowl.svg"
          alt="Logo del Finder"
          style={{
            width: "5%",
            objectFit: "cover",
          }}
        />
        <Text mt={1} mb={3} fontSize="lg" fontWeight="bold" color="white">
          Buscador de Recetas
        </Text>
      </Box>

      <Box
        bg="black"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <GridList />
      </Box>

      <Box
        bg="green.500"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <nav>
          <Link to="/" style={{ color: "white", marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/app" style={{ color: "white" }}>
            Ir al Buscador
          </Link>
        </nav>
      </Box>
    </SimpleGrid>
  );
}

export default Home;
