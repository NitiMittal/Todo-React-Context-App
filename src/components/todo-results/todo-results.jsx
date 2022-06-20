/* eslint-disable no-plusplus */
import * as React from 'react';
import './todo-results.scss';
import { TodosContext } from '../../todo-context';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    let counter = 0;
   for (let index = 0; index < todos.length; index++) {
      if (todos[index].checked) {
         counter++;
      }
   }
   return counter;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
