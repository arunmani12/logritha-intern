import React from 'react'
import Header from './Header'
import Footter from './Footer'

export default function Layou(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footter/>
        </>
    )
}
