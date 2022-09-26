import React from "react";
import {observer} from "mobx-react";

export const DeleteButton = observer(({id, handleDeleteVampire}) => {
  return (
    <div className={'deleteVampireButton'}>
      <i className='ion-close' style={{textAlign: 'end'}} onClick={() => handleDeleteVampire(id)}/>
    </div>
  )
})