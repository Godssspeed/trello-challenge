import React, { Component } from "react";
import { connect } from "react-redux";
import { addToToDo, moveToBacklog, moveToInProgress } from "../ducks/reducer";

export class ToDo extends Component {
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
    this.props.addToToDo(this.state.item);
    this.setState({ add: !this.state.add });
  };

  handleChange = e => {
    this.setState({ item: e });
  };

  handleTaskMoveLeft = e => {
    this.props.moveToBacklog(e);
  };

  handleTaskMoveRight = e => {
    this.props.moveToInProgress(e);
  };
  render() {
    const { todo } = this.props;
    const todoList = todo.map((e, i) => {
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
      <div className="column toDo">
        <p>To Do</p>
        <button onClick={this.handleEdit}>+ add item</button>
        {this.state.add ? (
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button type="submit">add</button>
          </form>
        ) : null}
        {todoList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { todo } = state;
  return {
    todo
  };
};

export default connect(
  mapStateToProps,
  { addToToDo, moveToBacklog, moveToInProgress }
)(ToDo);
