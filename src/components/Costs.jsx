import React from 'react'

const Costs = ({cost , index , removeFun}) => {
  return (
    <div className='costs'>
        <span>{cost.name}</span>
        <span>{cost.price}</span>
    </div>
  )
}

export default Costs