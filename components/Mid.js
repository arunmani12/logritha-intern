import React from 'react'
import  classes from './mid.module.css'
import Image from 'next/image'

import top from './top.png'

export default function Mid() {
    return (
        <div className={classes.mid}>
            <Image src={top} alt='top'/>
            <h2>Top Achievers</h2>
        </div>
    )
}
