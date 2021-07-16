import React from 'react'
import Dashboard from '../components/dasboard/Dashboard'

 function Dashboardp(props) {
     console.log(props)
    return (
        <>
            <Dashboard name='arun'/>
        </>
    )
}

Dashboardp.getInitialProps = ({query}) =>{
    console.log(query)
    return{myParms:query}
}

export default Dashboardp