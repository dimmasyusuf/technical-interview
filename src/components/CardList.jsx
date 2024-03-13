import { SimpleGrid, Text, Card, CardBody } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../app/features/productSlice';

export default function CardList() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
