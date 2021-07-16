import React from 'react'
import classes from './person.module.css'
import d1 from './download (1).jpg'
import Image from 'next/image'
export default function Person() {
    return (
        <div className={classes.colum}>
         <div>
                <Image src={d1} alt='person'/>
            </div>
            <div>
                <h2>Santhosh</h2>
                <p className='p'>1023/1200</p>
                <p>Physics</p>
            </div>
        </div>
    )
}
