import { Card, CardBody, SkeletonText } from "@chakra-ui/react";
import React from "react";

type Props = {};

function SkeletonCard({}: Props) {
  return (
    <Card boxShadow="lg">
      <CardBody>
        <SkeletonText
          mt="1"
          noOfLines={1}
          spacing="4"
          skeletonHeight="100"
          startColor="green.700"
          endColor="green.100"
          height="100"
        />
        <SkeletonText
          mt="4"
          noOfLines={1}
          spacing="4"
          skeletonHeight="2"
          startColor="green.700"
          endColor="green.100"
          height="2"
        />
      </CardBody>
    </Card>
  );
}

export default SkeletonCard;
