import React from 'react';
import TodoList from './TodoList';
import Form from './Form';
import shortid from 'shortid';
import Filter from './Filter';
import Modal from './Modal';
import Clock from './Clock/Clock';

class App extends React.Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Вивчити React', complited: false },
      { id: 'id-2', text: 'Пережити Redux', complited: false },
      { id: 'id-3', text: 'Знайти роботу', complited: false },
    ],
    filter: '',
    shouModal: false,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  toggleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            complited: !todo.complited,
          };
        }
        return todo;
      }),
    }));
  };
  formSubmitHendler = data => {
    console.log(data);
    const todo = { id: shortid.generate(), text: data, complited: false };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };
  changeFilter = evn => {
    this.setState({ filter: evn.currentTarget.value });
  };

  toggleModal = () => {
    this.setState(({ shouModal }) => ({ shouModal: !shouModal }));
  };
  componentDidMount() {
    // console.log('didmount');
    // const todos = localStorage.getItem('todos');
    // const todosParsed = JSON.parse(todos);
    // this.setState({ todos: todosParsed });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('didupdate');
    if (this.state.todos !== prevState.todos) {
      // console.log('оновилось поле тудус');
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }
  render() {
    const { todos, filter, shouModal } = this.state;
    const complitedTodoCountry = todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0
    );

    const normalizeFilter = this.state.filter.toLowerCase();

    const filterTodo = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <ColorPicer color={color} /> */}
        {shouModal && (
          <Modal onClose={this.toggleModal}>
            <Form
              onSubmit={this.formSubmitHendler}
              closeModal={this.toggleModal}
            />

            <button type="button" onClick={this.toggleModal}>
              closed
            </button>
          </Modal>
        )}
        <button type="button" onClick={this.toggleModal}>
          open
        </button>
        <Clock />

        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filterTodo}
          onDeleteTodo={this.deleteTodo}
          onToggleComplited={this.toggleComplited}
        />
        {todos.length === 0 ? (
          <p>Заміток немає</p>
        ) : (
          <p>Загальна кількість заміток: {todos.length}</p>
        )}
        <p>Кількість виконаних: {complitedTodoCountry}</p>
      </div>
    );
  }
}

export default App;
