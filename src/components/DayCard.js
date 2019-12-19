import React, {useState} from 'react'
import "../App.css"

export default function DayCard(props){
  const december = new Date();
  const today = december.getDate();
  const [active, setActive] = useState(false);

  function handleClick(){
    console.log(today, props.day)
    if(today >= props.day){
      setActive(!active)
    }
  }

  console.log("active state", active)
  return(
    <div className = {active ? "dayCard active" :"dayCard"}  onClick={handleClick}>
      <h3>{props.day}</h3>
      <div className = {active ? "visibleCard" : "notVisibleCard"}>
        <h5>{props.name}</h5>
        {console.log(props.image)}
        <img src={`../../assets/${props.image}`} className="images"/>
      </div>
    </div>
  )
}