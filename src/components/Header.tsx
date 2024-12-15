import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Container,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { IoMdSearch } from "react-icons/io";
import { useForm } from "react-hook-form";
import { SearchForm } from "../types";
import { Link } from "react-router-dom";

type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW="3xl" mt={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex alignItems="center">
          <Flex alignItems="center" mr={4}>
            <Link to="/">
              <Box
                as="img"
                src="../public/bowl.svg"
                alt="Logo"
                boxSize="40px"
                mr={3}
                _hover={{ cursor: "pointer", transform: "scale(1.1)" }} // Efecto hover
              />
            </Link>
            <Text color="white" fontWeight="bold" fontSize="lg">
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

export default Header;
