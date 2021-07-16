import React from 'react'
import classes from './Header.module.css'
import logo from './logo.png'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={classes.header}>
             <Link href='/'><Image  src={logo}  alt='logo'/></Link>
             <p>
             <Link href='/login'>Login</Link> 
             <Link href='/Dashboard'>Dashboard</Link>
             </p>
        </div>
    )
}
