import React from 'react';

const Todo = ({ text, complited, onToggleComplited, onDeleteTodo }) => (
  <>
    <p>{text}</p>
    <input
      type="checkbox"
      name="complited"
      onChange={onToggleComplited}
      checked={complited}
    />
    <button className="btn_del" onClick={onDeleteTodo}>
      Delete
    </button>
  </>
);

export default Todo;
