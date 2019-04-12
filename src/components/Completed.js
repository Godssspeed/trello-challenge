import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCompleted, moveBackToInProgress } from "../ducks/reducer";

export class Completed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      item: ""
    };
  }

  handleEdit = () => {
    this.setState({ add: !this.state.add });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToCompleted(this.state.item);
    this.setState({ add: !this.state.add });
  };

  handleChange = e => {
    this.setState({ item: e });
  };

  handleTaskMove = e => {
    this.props.moveBackToInProgress(e);
  };

  render() {
    const { completed } = this.props;
    const completedList = completed.map((e, i) => {
      const leftArrow = "<";

      return (
        <div className="item" key={i} value={e}>
          <button value={e} onClick={e => this.handleTaskMove(e.target.value)}>
            {leftArrow}
          </button>
          <p>{e}</p>
        </div>
      );
    });
    return (
      <div className="column completed">
        <p>Completed</p>
        <button onClick={this.handleEdit}>+ add item</button>
        {this.state.add ? (
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button type="submit">add</button>
          </form>
        ) : null}
        {completedList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { completed } = state;
  return {
    completed
  };
};

export default connect(
  mapStateToProps,
  { addToCompleted, moveBackToInProgress }
)(Completed);
