import React from "react";
import {observer} from "mobx-react";
import {SortButton} from "./SortButton";
import {DeleteButton} from "./DeleteButton";

export const VampiresTable = observer((props) => {
  return (
    <div style={{width: "100%"}}>
      <table className="table">
        <thead className="table-head">
        <tr className="table-row">
          <th className="table-element">
            Name
            <SortButton type={'nameAsc'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
            <SortButton type={'nameDes'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
          </th>
          <th className="table-element">
            Super power
            <SortButton type={'powerAsc'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
            <SortButton type={'powerDes'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
          </th>
          <th className="table-element">
            Age
            <SortButton type={'ageAsc'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
            <SortButton type={'ageDes'} sortBy={props.sortBy} handleSortBy={props.handleSortBy}/>
          </th>
        </tr>
        </thead>
        <tbody>
        {props.sortedVampires.map((el) => {
          return (
            <tr className="table-row" key={el.id}>
              <td className="table-element">{el.name}</td>
              <td className="table-element">{el.superPower}</td>
              <td className="table-element">
                {el.age}
                <DeleteButton id={el.id} handleDeleteVampire={props.handleDeleteVampire}/>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
})