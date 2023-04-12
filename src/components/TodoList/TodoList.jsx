import React from 'react';
import './TodoList.css';
import Todo from 'components/Todo/Todo';

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => {
  return (
    <ul>
      {todos.map(({ id, text, complited }) => (
        <li key={id} className="item">
          <Todo
            text={text}
            complited={complited}
            onToggleComplited={() => onToggleComplited(id)}
            onDeleteTodo={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
