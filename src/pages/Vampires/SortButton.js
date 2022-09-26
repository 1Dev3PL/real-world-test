import React from "react";
import {observer} from "mobx-react";

export const SortButton = observer(({type, sortBy, handleSortBy}) => {
  const ico = type.includes('Asc') ? 'ion-chevron-up' : 'ion-chevron-down';
  return (
    <i className={ico} style={{margin: "3px", color: sortBy === type && 'black'}} onClick={() => handleSortBy(type)}/>
  )
})