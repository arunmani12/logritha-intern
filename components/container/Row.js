import React from 'react'
import classes from  './row.module.css'
import Person from './Person'

export default function Row() {
    return (
        <div className={classes.row}>
            <Person/>
            <Person/>
            <Person/>
            <Person/>
            <Person/>
            <Person/>
        </div>
    )
}
