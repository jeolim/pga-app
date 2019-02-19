import React, { Component } from "react";
import { StyledTable } from "./style.index";
import get from "lodash/get";

export class ScoreTable extends Component {
  isEditingRow = index => {
    return get(this.props, "currentEditIndex") === index;
  };

  onEditClick = index => {
    if (this.isEditingRow(index)) {
      this.props.editFinishedFn(false);
      this.reset();
    } else {
      this.props.editFinishedFn(true);
      this.props.setEditIndexFn(index);
    }
  };

  onRemove = index => {
    this.props.editFinishedFn(false);
    this.props.removeRow(index);
    this.reset();
  };

  reset = () => {
    this.props.setEditIndexFn(undefined);
    this.props.clearInputFn();
  };

  addHighlightClass = index => {
    return { ...(this.isEditingRow(index) && { className: "highlight" }) };
  };

  render() {
    const tableData = this.props.editFinished
      ? this.props.tableData.sort((a, b) => b.score - a.score)
      : this.props.tableData;

    return (
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ score, index: rowId, firstName, lastName }, i) => {
            return (
              <tr key={i} {...this.addHighlightClass(i)}>
                {[`${lastName}, ${firstName}`, score].map((item, j) => (
                  <td key={j}>{item}</td>
                ))}
                <td>
                  <button
                    {...this.addHighlightClass(i)}
                    onClick={() => this.onEditClick(i)}
                  >
                    {this.isEditingRow(i) ? "Done" : "Edit"}
                  </button>
                  <button onClick={() => this.onRemove(rowId)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }
}
