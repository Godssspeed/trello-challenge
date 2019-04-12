import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToInProgress,
  moveBackToToDo,
  moveToCompleted
} from "../ducks/reducer";

export class InProgress extends Component {
  constructor() {
    super();
    this.state = {
      add: false
    };
  }

  handleEdit = () => {
    this.setState({ add: !this.state.add });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToInProgress(this.state.item);
    this.setState({ add: !this.state.add });
  };

  handleChange = e => {
    this.setState({ item: e });
  };

  handleTaskMoveLeft = e => {
    this.props.moveBackToToDo(e);
  };

  handleTaskMoveRight = e => {
    this.props.moveToCompleted(e);
  };

  render() {
    const { inProgress } = this.props;
    const inProgressList = inProgress.map((e, i) => {
      const leftArrow = "<";
      const rightArrow = ">";
      return (
        <div className="item" key={i} value={e}>
          <button
            value={e}
            onClick={e => this.handleTaskMoveLeft(e.target.value)}
          >
            {leftArrow}
          </button>
          <p>{e}</p>
          <button
            value={e}
            onClick={e => this.handleTaskMoveRight(e.target.value)}
          >
            {rightArrow}
          </button>
        </div>
      );
    });
    return (
      <div className="column inProgress">
        <p>In Progress</p>
        <button onClick={this.handleEdit}>+ add item</button>
        {this.state.add ? (
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button type="submit">add</button>
          </form>
        ) : null}
        {inProgressList}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { inProgress } = state;
  return {
    inProgress
  };
};

export default connect(
  mapStateToProps,
  { addToInProgress, moveBackToToDo, moveToCompleted }
)(InProgress);
