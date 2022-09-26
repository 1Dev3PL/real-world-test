import React from "react";
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import VampiresPageStyle from "./VampiresPageStyle.css"
import {VampiresTable} from "./VampiresTable";
import {VampiresForm} from "./VampiresForm";
import Popup from "reactjs-popup";

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

  handleDeleteVampire = (id) => {
    this.props.vampiresStore.deleteVampire(id);
    this.props.vampiresStore.sortVampires();
  }

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
          handleDeleteVampire={this.handleDeleteVampire}
        />
        <Popup
          className="vampires-form-popup"
          trigger={<button className="btn btn-lg btn-primary pull-xs-right">Add vampire</button>}
          overlayStyle={{backgroundColor: 'rgba(0,0,0,.5)'}}
          modal
          nested
        >
          <VampiresForm
            formValues={formValues}
            validationMessages={validationMessages}
            handleNameChange={this.handleNameChange}
            handlePowerChange={this.handlePowerChange}
            handleAgeChange={this.handleAgeChange}
            handleAddVampire={this.handleAddVampire}
          />
        </Popup>
      </div>
    )
  }
}
