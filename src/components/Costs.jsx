import React from 'react'

const Costs = ({cost}) => {
  return (
    <div className='costs'>
        <span>{cost.name}</span>
        <span>{cost.price}</span>
    </div>
  )
}

export default Costs