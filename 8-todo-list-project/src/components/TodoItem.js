import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span
            className="mx-2 text-success"
            onClick={handleEdit}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-pen icon" />
          </span>
          <span
            className="mx-2 text-danger"
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-trash icon" />
          </span>
        </div>
      </li>
    );
  }
}