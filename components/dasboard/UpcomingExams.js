import React from 'react'
import  './Dasboard.module.css'


export default function UpcomingExams(props) {
    return (
        <div>
            <p>{props.paper}</p>
            <p><i className="fas fa-clock">  {props.time}</i></p> 
            <p>Marks:{props.mark}</p>
            <p><i className="fas fa-calendar-week"> Date: </i>{props.date}</p>
        </div>
    )
}
