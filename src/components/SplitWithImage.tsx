"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import { MdOutlineContentPasteSearch, MdImageSearch } from "react-icons/md";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color="green.500" fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"white"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("green.300", "green.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Buscador de Recetas
          </Text>
          <Heading color="green.500">
            Un Buscador de Recetas de Cocina en Base a la API The Meal DB
          </Heading>
          <Text color={"green.300"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("green.100", "gr.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={MdImageSearch} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text="Navega por las Recetas"
            />
            <Feature
              icon={
                <Icon
                  as={MdOutlineContentPasteSearch}
                  color={"green.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text="Busca por Categorias"
            />
            <Feature
              icon={<Icon as={FaSearch} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text="Ocupa el Buscador"
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"../../public/MainMeal.jpg"}
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
