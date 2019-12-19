import React from 'react';
import DayCard from './DayCard'
import '../App.css'
import {dataArray} from '../data.js'

export default function Calendar(){
 
  return(
    <div className='calendar'>
      {
        dataArray.map(day => {
          
          return <DayCard day={day.day}
                  name={day.name} image={day.image}/>
        })
      }
    </div>
  )
}