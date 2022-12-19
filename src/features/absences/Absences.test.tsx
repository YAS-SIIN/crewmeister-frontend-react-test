
import React from "react";
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from "react-redux";
import { Absences } from "./Absences";
import { store } from "../../app/store";
  
afterEach(() => {
  cleanup();
})

  
test('should include start date Input', () => {
  render(
     <Provider store={store}>
       <Absences /> 
     </Provider>
   );
 
   expect(screen.getByPlaceholderText('Start Date')).toBeInTheDocument(); 

 });
 
  
test('should include end date Input', () => {
  render(
     <Provider store={store}>
       <Absences /> 
     </Provider>
   );

   expect(screen.getByPlaceholderText('End Date')).toBeInTheDocument();  

 });
 
 
 test('should include absences type combobox', () => {
  render(
     <Provider store={store}>
       <Absences /> 
     </Provider>
   ); 
  expect(screen.getByRole('combobox')).toBeInTheDocument(); 

  expect(screen.getByRole('option', {name: 'vacation'})).toBeInTheDocument();
  expect(screen.getByRole('option', {name: 'sickness'})).toBeInTheDocument();

 });
 