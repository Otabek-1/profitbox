import React, { useEffect, useContext } from 'react'
import StatisticsForShop from './StatisticsForShop'
import StatisticsForLanding from './StatisticsForLanding'
import StatisticsForEducation from './StatisticsForEducation'

export default function Statistics() {
  return (
    <div className='statistics'>
      <div className="column" style={{width:"max-content", columnGap:"10px"}}>
        <h2 className='text-white' style={{fontSize:"30px"}}>Select one:</h2>

        <select name="works" id="works">
          <option value="" className='bg-gray-800'>Bull Trade</option>
          <option value="" className='bg-gray-800'>MedCom</option>
          <option value="" className='bg-gray-800'>ShopStore</option>
        </select>
      </div>

      <div className="column" >
        {/* <StatisticsForShop/> */}
        {/* <StatisticsForLanding /> */}
        <StatisticsForEducation />
      </div>
    </div>
  )
}
