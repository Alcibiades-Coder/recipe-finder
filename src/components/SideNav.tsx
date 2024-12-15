import { Link, Heading, VStack, SkeletonText } from "@chakra-ui/react";
import { Category } from "../types";
import { color } from "framer-motion";

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const selectedProps = {
  bgColor: "green.500",
  color: "white",
  fontWeight: "bold",
};

function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText
      mt="1"
      noOfLines={10}
      spacing="6"
      skeletonHeight="2"
      startColor="green.700"
      endColor="green.100"
      height="20px"
    />
  ) : (
    <>
      <Heading color="green.200" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={3}
            py={1}
            borderRadius={5}
            color="green.400"
            key={c.strCategory}
            _hover={{ textDecoration: "none" }}
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
