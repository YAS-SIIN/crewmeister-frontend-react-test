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
 
  expect(screen.getByText('Yasin')).toBeInTheDocument();
});
