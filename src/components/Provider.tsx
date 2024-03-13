import React from 'react';
import { Provider as ReactProvider } from 'react-redux';
import { store } from '../app/store';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <ReactProvider store={store}>
        <ChakraProvider>{children}</ChakraProvider>
      </ReactProvider>
    </BrowserRouter>
  );
}
