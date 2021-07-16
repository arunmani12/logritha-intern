import React from 'react'
import  classes from './Dasboard.module.css'
import UpcomingExams from './UpcomingExams'
// import img from './download(2).jpg'
import d1 from './download (2).jpg'
import Image from 'next/image'
import Head from 'next/head'


export default function Dashboard(props) {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        </Head>
        <div className={classes.dash}>
            <div className={classes.div1}>
                <h5>Yours Tommorrow</h5>
                <Image src={d1}/>
                <p><i className="fas fa-user"></i> Profile</p>
                <p><i className="fas fa-sign-out-alt"></i> Logout</p>
            </div>
            <div className={classes.div2}>
                <h1>HELLO,<span>{props.name}</span></h1>
                <h3>Upcoming Exams</h3>
                <div className={classes.insidediv}>
                  <UpcomingExams paper='Papper-1'
                  time='3H' mark='120' date='20/2/2002'/>
                  <UpcomingExams paper='Papper-2'
                  time='3H' mark='120' date='21/2/2002'/>
                  <UpcomingExams paper='Papper-3'
                  time='3H' mark='120' date='22/2/2002'/>
                  <UpcomingExams paper='Papper-4'
                  time='3H' mark='120' date='23/2/2002'/>
                </div>
                <h2>Watch tutorials</h2>
                <button>Watch</button>
            </div>
        </div>
    </>
    )
}
