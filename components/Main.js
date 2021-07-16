import React from 'react'
import classes from  './main.module.css';
import hero from './hero.svg'
import Image from 'next/image';
import Head from 'next/head';

export default function Main() {
    return (
        <>
        <div className={classes.mainco}>
            <div className={classes.mainini}>
                <h2><span className={classes.spanc}>Online</span> test</h2>
                <p>simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been
                     the industry standard dummy text ever since the 1500s, 
                     when an unknown printer</p>
                <button>REGISTER NOW</button>
            </div>
            <div  className={classes.mainini}>
                <Image src={hero} alt='hero' ></Image>
            </div>
        </div>
        </>
    )
}
