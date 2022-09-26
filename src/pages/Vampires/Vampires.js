import React from "react";
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import VampiresPageStyle from "./VampiresPageStyle.css"
import {VampiresTable} from "./VampiresTable";
import {VampiresForm} from "./VampiresForm";

@inject("vampiresStore")
@withRouter
@observer
export default class Vampires extends React.Component {

  handleSortBy = (sortBy) => {
    this.props.vampiresStore.setSortBy(sortBy);
    this.props.vampiresStore.sortVampires();
  }

  handleNameChange = (e) => {
    this.props.vampiresStore.setName(e.target.value);
  }

  handlePowerChange = (e) => {
    this.props.vampiresStore.setPower(e.target.value);
  }

  handleAgeChange = (e) => {
    this.props.vampiresStore.setAge(e.target.value);
  }

  handleAddVampire = (e) => {
    e.preventDefault();
    this.props.vampiresStore.addVampire();
  };

  render() {
    const {
      sortBy,
      sortedVampires,
      formValues,
      validationMessages,
    } = this.props.vampiresStore

    return (
      <div className="vampires-page">
        <VampiresTable
          sortedVampires={sortedVampires}
          sortBy={sortBy}
          handleSortBy={this.handleSortBy}
        />
        <VampiresForm
          formValues={formValues}
          validationMessages={validationMessages}
          handleNameChange={this.handleNameChange}
          handlePowerChange={this.handlePowerChange}
          handleAgeChange={this.handleAgeChange}
          handleAddVampire={this.handleAddVampire}
        />
      </div>
    )
  }
}
