import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h="100dvh"
      w="100%"
    >
      <Text fontSize="2xl">Menu</Text>
    </Flex>
  );
}
