import React, { useContext } from 'react'
import { dataContext } from '../App'

function Single() {
    const {selected}=useContext(dataContext)
  console.log(selected);
  
    return (
    <div>
        {selected.name.common}
        <img src={selected.flags.png} alt="" width={'200px'} height={'100px'}/>

    </div>
  )
}

export default Single