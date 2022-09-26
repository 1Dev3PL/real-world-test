import React from "react";
import {observer} from "mobx-react";
import Popup from 'reactjs-popup';
import VampiresPageStyle from "./VampiresPageStyle.css"

export const VampiresForm = observer((props) => {
    return (
      <div className="vampires-form">
        <h1 className="text-xs-center">Add new vampire</h1>
        <form>
          <fieldset className="form-group">
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                value={props.formValues.name}
                placeholder="Name"
                type="text"
                onChange={props.handleNameChange}
              />
              <div className="errorMessage">{props.validationMessages.name}</div>
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                value={props.formValues.superPower}
                placeholder="Super power"
                type="text"
                onChange={props.handlePowerChange}
              />
              <div className="errorMessage">{props.validationMessages.superPower}</div>
            </fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                value={props.formValues.age}
                placeholder="Age"
                type="number"
                onChange={props.handleAgeChange}
              />
              <div className="errorMessage">{props.validationMessages.age}</div>
            </fieldset>

            <button
              className="btn btn-lg btn-primary pull-xs-right"
              onClick={props.handleAddVampire}
            >
              Add vampire
            </button>
          </fieldset>
        </form>
      </div>
    )
})
