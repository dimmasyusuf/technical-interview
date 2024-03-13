import { SimpleGrid, Text, Card, CardBody } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function CardList() {
  const { products } = useSelector((state) => state.products);

  console.log('products:', products);
  return (
    <SimpleGrid>
      <Card>
        <CardBody>
          <Text>Hello</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
