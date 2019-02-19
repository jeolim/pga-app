import React, { Component } from "react";
import styled from "styled-components";
import extend from "lodash/extend";
import { PositionWrapper } from "./components/Table/style.index";
import { ScoreTable } from "./components/Table";
import { InputForm } from "./components/InputForm";
import get from "lodash/get";
import size from "lodash/size";

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.rowId = -1;
    this.clearInputFn;
  }

  state = {
    tableData: [],
    editIndex: undefined,
    isCurrentlyEditing: false
  };

  addRow = ({ rowData }) => {
    this.setState(state => ({
      tableData: state.tableData.concat({
        // Each table row has a unique id.
        index: ++this.rowId,
        ...rowData
      })
    }));
  };

  removeRow = index => {
    const filtered = this.state.tableData.filter(item => item.index !== index);
    this.setState({
      tableData: filtered
    });
  };

  modifyField = (prop, data) => {
    this.setState(state => {
      const _tableData = state.tableData;
      _tableData[this.state.editIndex] = extend(
        state.tableData[this.state.editIndex],
        {
          [prop]: data
        }
      );
      return {
        ...state,
        tableData: _tableData
      };
    });
  };

  setEditIndexFn = index => {
    this.setState({
      editIndex: index
    });
  };

  toggleIsCurrentlyEditing = state => {
    this.setState({
      isCurrentlyEditing: state
    });
  };

  render() {
    return (
      <StyleWrapper>
        <InputForm
          addRow={this.addRow}
          currentEditRow={this.state.tableData[this.state.editIndex]}
          modifyField={this.modifyField}
          showButton={
            get(this.state, "editIndex") === undefined ||
            size(this.state.tableData) === 0
          }
          clearInput={fn => (this.clearInputFn = fn)}
        />
        <ScoreTable
          tableData={this.state.tableData}
          currentEditIndex={this.state.editIndex}
          setEditIndexFn={this.setEditIndexFn}
          clearInputFn={this.clearInputFn}
          removeRow={this.removeRow}
          // The table rerenders when changing values, based on the score.
          // This controls that the sorting should be applied after editing is finished.
          editFinished={!this.state.isCurrentlyEditing}
          editFinishedFn={this.toggleIsCurrentlyEditing}
        />
      </StyleWrapper>
    );
  }
}

const StyleWrapper = styled(PositionWrapper)``;
