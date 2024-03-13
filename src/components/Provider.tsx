import React from 'react';
import { Provider as ReactProvider } from 'react-redux';
import { store } from '../app/store';
import { ChakraProvider } from '@chakra-ui/react';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReactProvider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </ReactProvider>
  );
}
