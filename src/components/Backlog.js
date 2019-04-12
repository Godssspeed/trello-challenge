import React, { Component } from "react";
import { connect } from "react-redux";
import { addToBacklog, moveToToDo } from "../ducks/reducer";

export class Backlog extends Component {
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
    this.props.addToBacklog(this.state.item);
    this.setState({ add: !this.state.add });
  };

  handleChange = e => {
    this.setState({ item: e });
  };

  handleTaskMove = e => {
    this.props.moveToToDo(e);
  };

  render() {
    console.log(this.props);
    console.log(this.state);
    const { backlog } = this.props;
    const backlogList = backlog.map((e, i) => {
      const rightArrow = ">";
      return (
        <div className="item" key={i} value={e}>
          <p>{e}</p>
          <button value={e} onClick={e => this.handleTaskMove(e.target.value)}>
            {rightArrow}
          </button>
        </div>
      );
    });
    return (
      <div className="column backlog">
        <p>BACKLOG</p>
        <button onClick={this.handleEdit}>+ add item</button>
        {this.state.add ? (
          <form onSubmit={this.handleSubmit}>
            <input onChange={e => this.handleChange(e.target.value)} />
            <button type="submit">add</button>
          </form>
        ) : null}
        {backlogList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { backlog } = state;
  return {
    backlog
  };
};

export default connect(
  mapStateToProps,
  { addToBacklog, moveToToDo }
)(Backlog);
