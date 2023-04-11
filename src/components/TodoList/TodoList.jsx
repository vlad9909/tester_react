import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, onToggleComplited }) => {
  return (
    <ul>
      {todos.map(({ id, text, complited }) => (
        <li key={id} className="item">
          <p>{text}</p>
          <input
            type="checkbox"
            name="complited"
            onChange={() => onToggleComplited(id)}
            checked={complited}
          />
          <button
            className="btn_del"
            onClick={() => {
              onDeleteTodo(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
