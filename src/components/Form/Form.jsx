import React from 'react';
// import './Form.css';

class Form extends React.Component {
  state = {
    task: '',
    licence: false,
  };
  hendlChenge = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleLicenceChenge = event => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  hendleSubmit = event => {
    event.preventDefault();
    if (this.state.task !== '') {
      this.props.onSubmit(this.state.task);
    }
    this.props.closeModal();
    this.reset();
  };

  reset = () => {
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label>
          Введіть задачу{' '}
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.hendlChenge}
          />
        </label>

        <label>
          Згода
          <input
            type="checkbox"
            name="licence"
            onChange={this.hendleLicenceChenge}
          />
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
