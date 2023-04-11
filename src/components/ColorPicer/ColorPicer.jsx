import React from 'react';
// import css from './ColorPicer.module.css';
import './ColorPicer.css';
class ColorPicer extends React.Component {
  state = {
    activeBtnIdx: 3,
  };

  makeOptionsClassName = index => {
    const btnClases = ['buttons'];
    if (index === this.state.activeBtnIdx) {
      btnClases.push('btn_active');
    }
    return btnClases.join(' ');
  };

  setActiveIdx = index => {
    this.setState({ activeBtnIdx: index });
  };

  render() {
    const { label } = this.props.color[this.state.activeBtnIdx];
    const { color } = this.props;
    return (
      <div className="container">
        <h3>ColorPicer</h3>
        <p>Вибраний колір: {label}</p>
        <div className="box">
          {color.map(({ label, color }, index) => {
            return (
              <button
                className={this.makeOptionsClassName(index)}
                key={label}
                style={{
                  background: color,
                }}
                onClick={() => {
                  this.setActiveIdx(index);
                }}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicer;
