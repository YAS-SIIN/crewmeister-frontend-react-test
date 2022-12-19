import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App'; 

afterEach(() => {
  cleanup();
})

test('should have programmer name', () => {
 render(
    <Provider store={store}>
      <App /> 
    </Provider>
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  
  expect(screen.getByText('Yasin')).toBeInTheDocument();
 // expect(getByText('Yasin')).toBeInTheDocument();
  //expect(getByText(/Redux Toolkit with TypeScript and React Testing Library example/i)).not.toBeInTheDocument();
  //expect(true).toBe(true);
});
