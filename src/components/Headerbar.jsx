import { Button, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export default function Headerbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Flex
      px={6}
      py={4}
      justifyContent="space-between"
    >
      <Heading
        as="h1"
        size="lg"
      >
        Indofood
      </Heading>
      <Flex
        gap="8"
        alignItems="center"
      >
        <Link
          as={RouterLink}
          to="/"
          fontWeight={pathname === '/' ? 'bold' : 'normal'}
        >
          Home
        </Link>
        <Link
          as={RouterLink}
          to="/menu"
          fontWeight={pathname === '/menu' ? 'bold' : 'normal'}
        >
          Menu
        </Link>
      </Flex>
      <Button colorScheme="red">Login</Button>
    </Flex>
  );
}
