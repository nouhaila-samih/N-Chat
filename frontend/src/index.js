import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ChatProvider from './Context/ChatProvider';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <ChakraProvider>
    <Router>
      <ChatProvider>
        <App />
      </ChatProvider>
    </Router>
  </ChakraProvider>
);



