import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function MenuPage() {
  return (
    <Flex
      direction="column"
      p={8}
      h="100dvh"
      w="100%"
      gap="8"
    >
      <Heading
        as="h2"
        size="2xl"
      >
        Product List
      </Heading>
      <SimpleGrid
        columns={4}
        spacing={10}
      >
        <Card>
          <CardBody>
            <Text
              fontSize="xl"
              fontWeight="bold"
            >
              Technical Interview
            </Text>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}
