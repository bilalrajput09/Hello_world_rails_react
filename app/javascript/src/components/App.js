import React from 'react';
import Message from './Message';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{ path: '/', element: <Message /> }]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Message />
    </RouterProvider>
  );
};

export default App;
